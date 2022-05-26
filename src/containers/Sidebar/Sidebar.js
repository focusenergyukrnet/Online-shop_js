import Filters from '../../components/Filters/Filters';
import './Sidebar.scss';

class Sidebar {
    constructor() {
        this.sidebar = document.createElement('aside');

        this.sidebar.className = 'Sidebar';

        this.sidebar.append(new Filters);

        return this.sidebar;
    }
}

export default Sidebar;
