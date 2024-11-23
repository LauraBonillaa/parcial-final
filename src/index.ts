// import * as components from './components/index';
import { addObserver, appState } from './store/index';
import { Screens } from './types/store';
import './screens/usuario/usuario';
import Admin from './screens/administrador/administrador';


class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        addObserver(this);
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = '';

            switch (appState.screen) {

                case Screens.USER:
                    console.log('llego el user')
                    const user = this.ownerDocument.createElement('user-page');
                    this.shadowRoot.appendChild(user);
                    break;

                case Screens.ADMIN:
                    const admin = this.ownerDocument.createElement('admin-page');
                    this.shadowRoot.appendChild(admin);
                    break;

                default:
                    break;
            }
            console.log('Current screen:', appState.screen);
        }
    }
}

customElements.define('app-container', AppContainer);