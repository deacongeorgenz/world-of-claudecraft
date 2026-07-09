export function installDevWatermark(): void {
  if (document.getElementById('dev-watermark')) return;

  const el = document.createElement('div');
  el.id = 'dev-watermark';
  el.textContent = 'DEV BUILD · Deacon Server · ui/dev-branding';

  Object.assign(el.style, {
    position: 'fixed',
    left: '10px',
    bottom: '10px',
    zIndex: '99999',
    padding: '6px 10px',
    borderRadius: '8px',
    background: 'rgba(0, 0, 0, 0.65)',
    color: '#ffd86b',
    font: '12px system-ui, sans-serif',
    pointerEvents: 'none',
  });

  document.body.appendChild(el);
}