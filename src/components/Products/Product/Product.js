import Button from '../../UI/Button/Button';
import Stars from '../../Stars/Stars';
import Spinner from '../../UI/Spinner/Spinner';
import './Product.scss';

class Product {
    constructor({
        id,
        category,
        imageSrc,
        manufacturer,
        model,
        country,
        price,
        warranty,
        description,
        rating
    }) {
        this.product = document.createElement('div');
        this.product.className = 'Product';
        this.product.innerHTML = `
            <div class="TopLine">
                <h4 class="ProductCategory">${category}<h4>
            </div>

            <div class="ImageWrapper">
                <img hidden src="${imageSrc}" alt="${model}">
            </div>

            <h2 class="ProductManufacturer">${manufacturer}</h2>
            <h1 class="ProductModel">${model}</h1>
            <h5 class="ProductCountry">${country}</h5>
            <h3 class="ProductPrice">$${price}</h3>
            <strong class="ProductWarranty">warranty: ${warranty}</strong>
            <p class="ProductDescription">${ description.slice(0, 101) + '...' }</p>
        `;
        const topLine = this.product.querySelector('.TopLine');
        topLine.append(new Stars(rating));
        const imageWrapper = this.product.querySelector('.ImageWrapper');
        imageWrapper.append(new Spinner);
        
        this.product.append(new Button({ text: 'Add to Cart' }));

        imageWrapper.firstElementChild.addEventListener('load', this.onLoadHandler);

        return this.product;
    }

    onLoadHandler(e) {
        const image = e.target;

        setTimeout( () => {
            image.hidden = false;
            image.nextElementSibling.remove();
        }, 1000);
    }
}

export default Product;
