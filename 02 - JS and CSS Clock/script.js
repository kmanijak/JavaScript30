const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

const setAngle = (element, angle, s) => {

    if (angle === 90) {
        element.style.transitionDuration = '0s';
    } else {
        element.style.transitionDuration = '0.1s';
    }
    element.style.transform = `rotate(${angle}deg)`;
}

const setHours = h => {
    const angle = 360 / 12 * h + 90;
    setAngle(hourHand, angle);
};

const setMinutes = m => {
    const angle = 360 / 60 * m + 90;
    setAngle(minuteHand, angle);
};

const setSeconds = s => {
    const angle = 360 / 60 * s + 90;
    setAngle(secondHand, angle, true);
};

const getTime = () => {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    return { h, m, s };
}

const setTime = (h, m, s) => {
    setHours(h);
    setMinutes(m);
    setSeconds(s);
}

const handleTime = () => {
    const { h, m, s } = getTime();
    setTime(h, m, s);
};

setInterval(handleTime, 1000);
