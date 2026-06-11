import './style.css';

const modalMap = { Contact: 'contact', Projects: 'projects' };
const closeOverlay = (overlay) => {
  overlay.classList.remove('show');
  overlay.setAttribute('aria-hidden', 'true');
};

document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = modalMap[btn.dataset.modal];
    if (!target) return;
    const overlay = document.getElementById(`overlay-${target}`);
    if (!overlay) return;
    overlay.classList.add('show');
    overlay.setAttribute('aria-hidden', 'false');
  });

  btn.addEventListener('mouseenter', () => {
    btn.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-4px)' }], { duration: 220, fill: 'forwards' });
  });

  btn.addEventListener('mouseleave', () => {
    btn.animate([{ transform: 'translateY(-4px)' }, { transform: 'translateY(0)' }], { duration: 220, fill: 'forwards' });
  });
});

document.querySelectorAll('.overlay').forEach((overlay) => {
  overlay.querySelector('.close')?.addEventListener('click', () => closeOverlay(overlay));
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closeOverlay(overlay);
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  document.querySelectorAll('.overlay.show').forEach(closeOverlay);
});
