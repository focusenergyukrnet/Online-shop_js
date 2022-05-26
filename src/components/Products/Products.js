import Categories from '../Categories/Categories';
import Pagination from '../Pagination/Pagination';
import Product from './Product/Product';
import productsData from '../../assets/database/products.json';
import './Products.scss';

class Products {
    constructor() {
        this.products = document.createElement('div');

        this.products.className = 'Products';
        
        Products.render(this.products);
        
        return this.products;
    }
    
    static filter(activeCategory, activePage) {
        
        const filteredProducts = productsData.filter(({ category }) => category.toLowerCase() === activeCategory);

        if (!activePage) return filteredProducts;
        const min = activePage * 9 - 9;
        const max = activePage * 9;

        const filteredProductsByPage = filteredProducts.filter((_, i) => {
            return i >= min && i < max;
        });

        return {
            filteredProducts: filteredProductsByPage,
            totalAmount: filteredProducts.length
        };
    }
    
    static render(location, currentPage, searchedProducts) {
        const productsComponent = document.querySelector('.Products');
        let where;

        const activeCategory = Categories.get();
    
        const {
            filteredProducts, 
            totalAmount
        } = Products.filter(activeCategory, currentPage ? currentPage : 1);

        let productsList;

        if (searchedProducts) {
            productsList = searchedProducts.map(productData => new Product(productData));
        } else {
            productsList = filteredProducts.map(productData => new Product(productData));
        }

        if (productsComponent) {
            where = productsComponent;

            where.innerHTML = '';

        } else {
            where = location;
        }

        const content = [...productsList];

        if (searchedProducts) {
            if (searchedProducts.length > 9) {
                content.push(new Pagination(searchedProducts.length, currentPage ? currentPage : 1));
            }
        } else {
            if (totalAmount > 9) {
                content.push(new Pagination(totalAmount, currentPage ? currentPage : 1));
            }
        }
        where.append(...content);
    }   
}

export default Products;
