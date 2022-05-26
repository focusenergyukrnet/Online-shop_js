import Products from '../Products/Products';
import './Pagination.scss';

const PER_PAGE = 9;

class Pagination {
    constructor(productsAmount, currentPage) {
        this.pagination = document.createElement('div');

        this.pagination.className = 'Pagination';

        const btnsAmount = productsAmount / PER_PAGE;

        for (let i = 0; i < btnsAmount; i++) {
            const paginationButton = document.createElement('div');

            paginationButton.className = +currentPage === i + 1 ? 'PaginationButton Active' : 'PaginationButton';
            paginationButton.textContent = i + 1;
            paginationButton.setAttribute('data-page', i + 1);

            this.pagination.append(paginationButton);
        }

        this.pagination.addEventListener('click', this.onChangePageHandler.bind(this));

        return this.pagination;
    }
    
    onChangePageHandler(e) {
        const paginationButton = e.target;

        if (!paginationButton.classList.contains('PaginationButton')) return;

        for (const button of this.pagination.children) {
            button.classList.remove('Active');
        }

        paginationButton.classList.add('Active');

        Products.render(null, paginationButton.dataset.page);
    }
}

export default Pagination;
