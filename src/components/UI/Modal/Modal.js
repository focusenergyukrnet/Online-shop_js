import axios from 'axios';

import Input from '../Input/Input';
import Button from '../Button/Button';
import './Modal.scss';

class Modal {
    constructor() {
        this.modal = document.createElement('form');

        this.modal.className = 'Modal';
        this.modal.innerHTML = '<h2>Sign In</h2>'

        this.modal.append(
            new Input({ placeholder: 'E-mail', name: 'email' }),
            new Input({ placeholder: 'Password', name: 'password' }),
            new Button({ text: 'Submit', type: 'submit' })
        );

        this.modal.addEventListener('submit', this.onSubmitHandler.bind(this));
       
        return this.modal;
    }
     
    onSubmitHandler(e) {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        if (/^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}$/i.test(email)) {
            console.log('Email is valid');

        }

        if (password.length > 6) {
            console.log('Password is valid');
        }

        axios.post('https://jsonplaceholder.typicode.com/users', {email, password})
            .then(res => console.log('[res]', res))
            .catch(err => console.log('[err]', err));
    }
}

export default Modal;
