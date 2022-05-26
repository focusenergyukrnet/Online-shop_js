import logoSrc from '../../assets/images/logo.png';
import './Logo.scss';

class Logo {
    constructor(title) {
        this.logo = document.createElement('div');

        this.logo.className = 'Logo';
        this.logo.innerHTML = `
            <div class="LogoWrapper">
                <img src="${logoSrc}" alt="${title}">
            </div>

            <h1>${title}</h1>
        `;
        // console.log('[logoSrc]', logoSrc);
        // console.log('[this.logo]', this.logo);
        return this.logo;
    }
}

export default Logo;
