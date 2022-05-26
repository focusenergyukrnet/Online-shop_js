import Header from './containers/Header/Header';
import Sidebar from './containers/Sidebar/Sidebar';
import Main from './containers/Main/Main';
import Footer from './containers/Footer/Footer';
import './App.scss';

class App {
    constructor() {
        this.app = document.createElement('div');

        this.app.className = 'App';

        this.app.append(new Header, new Sidebar, new Main, new Footer);

        return this.app;
    }
}

export default App;
