import Input from '../UI/Input/Input';
import Products from '../Products/Products';
import productsData from '../../assets/database/products.json';
import './Search.scss';

class Search {
    constructor() {
        this.search = document.createElement('div');

        this.search.className = 'Search';
        this.search.innerHTML = '<i class="fas fa-search"></i>';

        this.search.prepend(new Input({ placeholder: 'Search...' }));

        this.search.firstElementChild.addEventListener('focus', this.changeIconColorHandler.bind(this));
        this.search.firstElementChild.addEventListener('blur', this.changeIconColorHandler.bind(this));
        this.search.firstElementChild.addEventListener('keydown', this.onSearchHandler.bind(this));

        return this.search;
    }

    onSearchHandler(e) {
        if (e.key !== 'Enter') return;
        const regExr = new RegExp(e.target.value, 'i');
        const filteredProducts = productsData.filter(product => {

            for (const key in product) {
                if (/id|imageSrc|price|rating/.test(key)) continue;
                
                if (regExr.test(product[key])) return true;
            }

            return false;
        });

        Products.render(null, null, filteredProducts);
    }

    changeIconColorHandler(e) {
        const icon = this.search.lastElementChild;
        icon.classList.toggle('focused');
    }
}

export default Search;
