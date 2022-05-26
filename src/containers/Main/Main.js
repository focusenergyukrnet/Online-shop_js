import Categories from '../../components/Categories/Categories';
import Products from '../../components/Products/Products';
import './Main.scss';

class Main {
    constructor() {
        this.main = document.createElement('main');

        this.main.className = 'Main';

        this.main.append(new Categories, new Products);

        return this.main;
    }
}

export default Main;
