import Products from '../Products/Products';
import productsData from '../../assets/database/products.json';
import './Categories.scss';

class Categories {
    constructor() {
        this.categories = document.createElement('div');
        const categoryNames = productsData.reduce((result, productData)  => {
            const {category} = productData;
            if (!result.includes(category)) {
                result.push(category);
            }
            
            return result;
        }, []);
        
        this.categories.className = 'Categories';

        const buttons = categoryNames.map((name, i) => {
            const button = document.createElement('div');
            button.className = !i ? 'CategoryButton Active' : 'CategoryButton';
            button.textContent = name;
            button.setAttribute('data-category', name.toLowerCase());

            return button;
        });

        this.categories.append(...buttons);

        this.categories.addEventListener('click', this.switchCategoryHandler.bind(this));

        return this.categories;
    }

    static get() {
        const categoryButton = document.querySelector('.CategoryButton.Active');

        return categoryButton ? categoryButton.dataset.category : 'tv';
    }
    
    switchCategoryHandler(e) {
        const button = e.target;

        for (const categoryBtn of this.categories.children) {
            categoryBtn.classList.remove('Active');
        }

        button.classList.add('Active');

        Products.render();
    }
}

export default Categories;
