import Dropdown from '../UI/Dropdown/Dropdown';
import Categories from '../Categories/Categories';
import Products from '../Products/Products';
import {sort} from '../../shared/utility';
import './Filters.scss';

class Filters {
    constructor() {
        this.filters = document.createElement('div');

        this.filters.className = 'Filters';

        const activeCategory = Categories.get();
        const categoryProducts = Products.filter(activeCategory);

        const filterNames = ['manufacturer', 'warranty', 'rating', 'country'];

        const dropdownFilters = categoryProducts.reduce((result, product) => {
            for (const key in product) {
                if (!filterNames.includes(key)) continue;

                const filterValue = product[key];

                if (Array.isArray(result[key]) && result[key].includes(filterValue)) {
                    return result;
                }

                if (Array.isArray(result[key])) {
                    result[key].push(filterValue);
                } else {
                    result[key] = [filterValue];
                }
            }
            
            return result;
        }, {});

        for (const filterKey in dropdownFilters) {
            const filterOptions = dropdownFilters[filterKey];
            const filterData = {
                heading: filterKey,
                options: sort(filterOptions)
            };
            
            this.filters.append(new Dropdown(filterData));
        }

        return this.filters;
    }
}

export default Filters;
