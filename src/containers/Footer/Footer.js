import './Footer.scss';

class Footer {
    constructor() {
        this.footer = document.createElement('footer');
        const year = new Date().getFullYear();

        this.footer.className = 'Footer';
        this.footer.innerHTML = `<strong>All Rights Reserved, ${year}</strong>`;

        return this.footer;
    }
}

export default Footer;
