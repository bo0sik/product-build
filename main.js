const generatorBtn = document.getElementById('generator-btn');
const numbersContainer = document.getElementById('numbers-container');

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFA1'];

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

generatorBtn.addEventListener('click', () => {
    numbersContainer.innerHTML = '';
    const lottoNumbers = new Set();

    while (lottoNumbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        lottoNumbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(lottoNumbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const numberBall = document.createElement('div');
        numberBall.classList.add('number-ball');
        numberBall.style.backgroundColor = getRandomColor();
        numberBall.textContent = number;
        numbersContainer.appendChild(numberBall);
    });
});
