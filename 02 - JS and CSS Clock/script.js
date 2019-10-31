const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

const setHour = h => {
    const angle = 360 / 12 * h + 90;
    hourHand.style.transform = `rotate(${angle}deg)`;
};

const setMinute = m => {
    const angle = 360 / 60 * m + 90;
    minuteHand.style.transform = `rotate(${angle}deg)`;
};

const setSecond = s => {
    const angle = 360 / 60 * s + 90;
    secondHand.style.transform = `rotate(${angle}deg)`;
};

const getTime = () => {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    return { h, m, s };
}

const setTime = (h, m, s) => {
    setHour(h);
    setMinute(m);
    setSecond(s);
}

const handleTime = () => {
    const { h, m, s } = getTime();
    setTime(h, m, s);
};

setInterval(handleTime, 1000);
