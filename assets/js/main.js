// Homepage: crossfade the Nature > Analog > Physics layers as you scroll
const L = document.getElementById('ladder');
if (L) {
  const ls = [...L.querySelectorAll('.layer')], ss = [...L.querySelectorAll('.steps li')];
  const f = () => {
    const r = L.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight)));
    const x = p * (ls.length - 1);
    ls.forEach((e, i) => e.style.opacity = Math.max(0, 1 - Math.abs(x - i)));
    ss.forEach((e, i) => e.classList.toggle('on', Math.abs(x - i) < 0.5));
  };
  addEventListener('scroll', f, { passive: true }); addEventListener('resize', f); f();
}
// Projects page: filters
const st = { status: 'all', theme: 'all' };
document.querySelectorAll('[data-k]').forEach((b) => b.addEventListener('click', () => {
  st[b.dataset.k] = b.dataset.v;
  document.querySelectorAll('[data-k="' + b.dataset.k + '"]').forEach((x) => x.classList.toggle('on', x === b));
  document.querySelectorAll('.tile').forEach((t) => {
    t.hidden = !((st.status === 'all' || t.dataset.status === st.status) && (st.theme === 'all' || t.dataset.theme === st.theme));
  });
}));
