const btn = document.getElementById('action-btn');
const status = document.getElementById('status-box');

// 1. Button Interaction
btn.addEventListener('click', () => {
    status.innerText = "System Online: Initializing...";
    status.style.color = "#00ff88";
    btn.innerText = "Active";
});

// 2. Interactive Background Trail
document.addEventListener('mousemove', (e) => {
    const dot = document.createElement('div');
    dot.className = 'trail';
    dot.style.left = e.pageX + 'px';
    dot.style.top = e.pageY + 'px';
    document.body.appendChild(dot);
    
    // Remove the dot after animation
    setTimeout(() => {
        dot.remove();
    }, 1000);
});
