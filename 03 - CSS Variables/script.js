const spacingInput = document.querySelector('#spacing');
const blurInput = document.querySelector('#blur');
const baseInput = document.querySelector('#base');

const setVariable = (variable, value) => {
    document.documentElement.style.setProperty(variable, value);
}

spacingInput.addEventListener('input', e => {
    setVariable('--spacing', e.target.value + 'px');
});

blurInput.addEventListener('input', e => {

    setVariable('--blur', e.target.value + 'px');
});

baseInput.addEventListener('input', e => {
    setVariable('--base', e.target.value);
});