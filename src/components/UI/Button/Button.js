import './Button.scss';

class Button {
    constructor({ type = 'button', text, styling }) {
        this.button = document.createElement('button');

        this.button.className = styling ? `Button ${styling}` : 'Button';
        this.button.type = type;
        this.button.textContent = text;

        return this.button;
    }
}

export default Button;
