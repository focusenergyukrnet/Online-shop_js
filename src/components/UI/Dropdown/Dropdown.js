import DropdownOption from '../Dropdown/DropdownOption/DropdownOption';
import './Dropdown.scss';

class Dropdown {
    constructor({ heading, options }) {
        this.dropdown = document.createElement('div');

        this.dropdown.className = 'Dropdown';
        this.dropdown.innerHTML = `
        <div class="DropdownHeader">
            <strong>${heading}</strong>
            <i class="fas fa-chevron-down"></i>
        </div>

        <ul class="DropdownBody"></ul>
        `;

        const dropdownHeader = this.dropdown.querySelector('.DropdownHeader');
        const dropdownBody = this.dropdown.querySelector('.DropdownBody');

        for (const optionTitle of options) {
            dropdownBody.append(new DropdownOption(optionTitle));
        }

        dropdownHeader.addEventListener('click', this.toggleDropdownHandler.bind(this));
        this.dropdown.addEventListener('click', this.toggleOptionIconHandler);

        return this.dropdown;
    }

    toggleDropdownHandler(e) {
        this.dropdown.classList.toggle('Closed');

        const dropdownHeader = this.dropdown.firstElementChild;
        const dropdownBody = this.dropdown.querySelector('.DropdownBody');

        const headerTopCoord = dropdownHeader.getBoundingClientRect().top + window.pageYOffset;

        if (this.dropdown.classList.contains('Closed')) {
            for (const option of dropdownBody.children) {
                const topCoord = option.getBoundingClientRect().top + window.pageYOffset;
    
                const diff = topCoord - headerTopCoord;
    
                option.style.top = `${-diff}px`;
            }
        } else {
            for (const option of dropdownBody.children) {
                const topCoord = option.getBoundingClientRect().top + window.pageYOffset;
                option.style.top = '0';
            }
        }
    }

    toggleOptionIconHandler(e) {
        const dropdownOption = e.target.closest('.DropdownOption');
        
        if (!dropdownOption) return;
        
        const icon = dropdownOption.firstElementChild;

        if (icon.classList.contains('fa-check-square')) {
            icon.classList.remove('fa-check-square');
            icon.classList.add('fa-square');
        } else {
            icon.classList.remove('fa-square');
            icon.classList.add('fa-check-square');
        }
    }
}

export default Dropdown;