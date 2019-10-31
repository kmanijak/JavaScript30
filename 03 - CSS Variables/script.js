const controls = document.querySelectorAll('input');

const setVariable = (variable, value) => {
    document.documentElement.style.setProperty(variable, value);
}

function handleInput () {
    const variable = `--${this.name}`;
    const value = this.value + (this.dataset.sizing || '');
    setVariable(variable, value);
}

controls.forEach(control => control.addEventListener('input', handleInput));