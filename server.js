// Minimal Express server providing hero rotation API and static files
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const dataPath = path.join(__dirname, 'hero-views.json');

app.use(express.json());
app.use(express.static(__dirname));

function loadState(count) {
  let state = { counts: Array(count).fill(0), last: -1 };
  try {
    const raw = fs.readFileSync(dataPath, 'utf8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed.counts)) state.counts = parsed.counts;
    if (typeof parsed.last === 'number') state.last = parsed.last;
  } catch (_) {}
  // normalize length
  if (typeof count === 'number' && count > 0) {
    if (state.counts.length < count) {
      state.counts = state.counts.concat(Array(count - state.counts.length).fill(0));
    } else if (state.counts.length > count) {
      state.counts = state.counts.slice(0, count);
      if (state.last >= count) state.last = -1;
    }
  }
  return state;
}

function saveState(state) {
  try {
    fs.writeFileSync(dataPath, JSON.stringify(state, null, 2));
  } catch (_) {}
}

// GET returns next index cycling through most viewed first
app.get('/api/hero-rotation', (req, res) => {
  const count = Math.max(1, Number(req.query.count || 0) || 0) || 12;
  const state = loadState(count);
  const indices = state.counts.map((v, i) => [i, v]).sort((a, b) => b[1] - a[1]).map(([i]) => i);
  if (indices.length === 0) return res.json({ nextIndex: 0 });
  let next = indices[0];
  if (state.last !== -1) {
    const pos = indices.indexOf(state.last);
    next = indices[(pos + 1) % indices.length];
  }
  return res.json({ nextIndex: next });
});

// POST increments the shown index count
app.post('/api/hero-rotation', (req, res) => {
  const shown = Number(req.body && req.body.shown);
  const count = Number(req.query.count || req.body?.count || 0) || undefined;
  const state = loadState(count || (shown + 1));
  if (!Number.isFinite(shown) || shown < 0 || shown >= state.counts.length) {
    return res.status(400).json({ error: 'invalid index' });
  }
  state.counts[shown] = (state.counts[shown] || 0) + 1;
  state.last = shown;
  saveState(state);
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

