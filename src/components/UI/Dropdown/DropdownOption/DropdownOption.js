import './DropdownOption.scss';

class DropdownOption {
    constructor(optionTitle) {
        this.dropdownOption = document.createElement('li');

        this.dropdownOption.className = 'DropdownOption';
        this.dropdownOption.innerHTML = `
            <i class="far fa-square"></i>   
            <strong>${optionTitle}</strong>
        `;

        return this.dropdownOption;
    }
}

export default DropdownOption;
