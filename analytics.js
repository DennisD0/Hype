// Lightweight analytics facade for hero image rotation
// - Tries to use a backend at /api/hero-rotation
// - Falls back to localStorage when unreachable

(function () {
  async function getHeroIndex(count) {
    try {
      const res = await fetch(`/api/hero-rotation?count=${encodeURIComponent(count)}`, { credentials: 'omit' });
      if (res && res.ok) {
        const data = await res.json();
        if (typeof data.nextIndex === 'number') return data.nextIndex % count;
      }
    } catch (_) {}
    const visits = Number(localStorage.getItem('visits') || 0) + 1;
    localStorage.setItem('visits', String(visits));
    return visits % count;
  }

  async function recordHeroView(index) {
    try {
      await fetch('/api/hero-rotation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ shown: index }),
        credentials: 'omit',
      });
    } catch (_) {}
  }

  window.analytics = { getHeroIndex, recordHeroView };
})();
