import Logo from '../../components/Logo/Logo';
import Search from '../../components/Search/Search';
import Auth from '../../components/Auth/Auth';
import './Header.scss';

class Header {
    constructor() {
        this.header = document.createElement('header');

        this.header.className = 'Header';
        this.header.innerHTML = '<div class="HeaderWrapper"></div>';

        this.header.firstElementChild.append(
            new Logo("Elon's Online Shop"),
            new Search,
            new Auth
        );

        return this.header;
    }
}

export default Header;
