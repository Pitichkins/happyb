// Текст поздравления для печатной машинки
const wishText = "Стасечка! 💖 Поздравляю тебя с этим чудесным днем! Оставайся всегда такой же невероятной, улыбчивой и светлой. Пусть этот день подарит тебе море радости, а каждый миг будет наполнен счастьем! 🐱✨";

// Запуск летающих шариков на фоне
document.addEventListener('DOMContentLoaded', () => {
    createBalloons(15);
});

function createBalloons(num) {
    const container = document.getElementById('balloons');
    const colors = ['rgba(255,182,193,0.7)', 'rgba(255,105,180,0.6)', 'rgba(255,192,203,0.8)', 'rgba(255,228,225,0.9)'];
    
    for (let i = 0; i < num; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.animationDuration = `${6 + Math.random() * 6}s`;
        balloon.style.animationDelay = `${Math.random() * 5}s`;
        balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(balloon);
    }
}

// Проверка имени
function checkName(event) {
    event.preventDefault();
    const input = document.getElementById('nameInput').value.trim();
    
    // Показываем главный экран в любом случае
    showGreeting();
}

function showGreeting() {
    document.getElementById('name-screen').style.display = 'none';
    const greetingScreen = document.getElementById('greeting-screen');
    greetingScreen.style.display = 'block';

    // Запуск салюта из конфетти
    launchConfetti();

    // Запуск печатной машинки
    typeWriter(wishText, 0);
}

// Печатная машинка
function typeWriter(text, i) {
    if (i < text.length) {
        document.getElementById("typewriter-text").innerHTML += text.charAt(i);
        setTimeout(function() {
            typeWriter(text, i + 1);
        }, 40);
    }
}

// Взрыв конфетти
function launchConfetti() {
    var count = 200;
    var defaults = { origin: { y: 0.7 } };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio),
            colors: ['#ff758c', '#ff7eb3', '#ffffff', '#ffd166', '#ff4757']
        }));
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
}
