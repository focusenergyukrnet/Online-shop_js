import './Stars.scss';

class Stars {
    constructor(amount) {
        this.stars = document.createElement('div');

        this.stars.className = 'Stars';

        for(let i = 0; i < 5; i++) {
            let className = 'far';

            if (i < amount) {
                className = 'fas';
            }

            this.stars.innerHTML += `<i class="${className} fa-star"></i>`;
        }

        return this.stars;
    }
}

export default Stars;
