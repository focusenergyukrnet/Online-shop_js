import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import './Auth.scss';

class Auth {
    constructor() {
        this.auth = document.createElement('div');

        this.auth.className = 'Auth';

        this.auth.append(new Button({
            text: 'Sign In',
            styling: 'Alternative'
        }));

        this.auth.addEventListener('click', this.openModalHandler.bind(this));

        return this.auth;
    }

    openModalHandler() {
        document.getElementById('root').prepend(new Modal)
    }
}

export default Auth;
