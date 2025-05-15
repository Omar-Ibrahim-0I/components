document.addEventListener('DOMContentLoaded', () => {
    const snowButton = document.querySelector('.snow-button');
    const snowContainer = document.querySelector('.snow-container');

    createSnowflakes(10);

    snowButton.addEventListener('mouseenter', () => {
        createSnowflakes(20);
    });

    function createSnowflakes(count) {
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const snowflake = document.createElement('div');
                snowflake.classList.add('snowflake');

                const size = Math.random() * 3 + 3;
                snowflake.style.width = `${size}px`;
                snowflake.style.height = `${size}px`;

                const posX = Math.random() * 100;
                snowflake.style.left = `${posX}%`;

                const duration = Math.random() * 1.5 + 1.5;
                snowflake.style.animationDuration = `${duration}s`;

                snowContainer.appendChild(snowflake);

                setTimeout(() => {
                    snowflake.remove();
                }, duration * 1000);
            }, Math.random() * 500);
        }
    }

    setInterval(() => {
        if (document.querySelector('.snow-button:hover')) {
            createSnowflakes(3);
        } else {
            createSnowflakes(1);
        }
    }, 500);
});