import './Spinner.scss';

class Spinner {
    constructor() {
        this.spinner = document.createElement('div');

        this.spinner.className = 'Spinner';

        return this.spinner;
    }
}

export default Spinner;
