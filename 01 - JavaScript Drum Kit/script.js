const transformToArray = collection => Array.from(collection);
const getKeyElements = () => document.getElementsByClassName('key');
const getAudioElements = () => document.getElementsByTagName('audio');
const getKeyCode = el => el.dataset.key;
function removeClass (e) {
    if (e.propertyName === 'transform') {
        this.classList.remove('playing');
    }
}

const groupByKeyCodes = (keys, audios) => keys.reduce((acc, key) => {
    const keyCode = getKeyCode(key);
    const audio = audios.find(audio => getKeyCode(audio) == keyCode);

    acc[keyCode] = { key, audio };
    return acc;
}, {})

const keydownCallback = ({ keyCode }) => {
    const { key, audio } = elementsByKeyCode[keyCode] || {};

    if (key && audio) {
        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
    }
}

const keys = transformToArray(getKeyElements());
const audios = transformToArray(getAudioElements());
const elementsByKeyCode = groupByKeyCodes(keys, audios);
keys.forEach(key => key.addEventListener('transitionend', removeClass));

document.addEventListener('keydown', keydownCallback);
