// Seletores e Configuração de Estilo Inicial
const $ = id => document.getElementById(id);
const backButton = $('backButton');

// Estilo do Ripple (Ideal é mover para o seu arquivo .css)
const style = document.createElement('style');
style.textContent = `@keyframes ripple { to { transform: scale(2); opacity: 0; } }`;
document.head.appendChild(style);


backButton?.addEventListener('click', () => {
    window.history.length > 1 ? window.history.back() : alert('Voltando para a página inicial...');
});


document.addEventListener('click', (e) => {
    const btn = e.target.closest('#cadastrarBtn, #acessarBtn');
    if (!btn) return;

    btn.classList.add('clicked');
    
    if (btn.id === 'cadastrarBtn') {
        alert('Redirecionando para cadastro de feirante...');
      
    } else {
        alert('Redirecionando para boxes salvos...');
       
});


document.querySelectorAll('.card-button').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const ripple = document.createElement('span');

        Object.assign(btn.style, { position: 'relative', overflow: 'hidden' });
        
        ripple.style.cssText = `
            position: absolute; width: ${size}px; height: ${size}px;
            left: ${e.clientX - rect.left - size / 2}px; top: ${e.clientY - rect.top - size / 2}px;
            background: rgba(255, 255, 255, 0.3); border-radius: 50%;
            transform: scale(0); animation: ripple 0.6s ease-out; pointer-events: none;
        `;

        btn.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove());
    });
});


document.addEventListener('keydown', e => e.key === 'Escape' && backButton?.click());