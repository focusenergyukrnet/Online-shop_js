import './Input.scss';

class Input {
    constructor({ type = 'text', placeholder, name }) {
        this.input = document.createElement('input');

        this.input.className = 'Input';
        this.input.type = type;

        if (name) {
            this.input.name = name;
        }

        if (placeholder) {
            this.input.placeholder = placeholder;
        }

        return this.input;
    }
}

export default Input;
