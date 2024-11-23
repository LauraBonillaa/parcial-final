import { dispatch, addObserver, appState } from '../../store/index';
import { getProductsAction } from '../../store/actions';
import  '../../components/Event/event'
import Event, {AttributeEvents} from '../../components/Event/event';



class User extends HTMLElement {
    private productsContainer?: HTMLElement;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        addObserver(this);
    }

    async connectedCallback() {
        if (appState.products.length === 0) {
            const action = await getProductsAction();
            if (action) {
                dispatch(action);
            }
        }
        this.render();
    }

    async Events() {
        if (!this.productsContainer) return; // Check if the container exists

        if (!appState.products || !Array.isArray(appState.products)) {
            console.log('No products found');
            return;
        }

        this.productsContainer.innerHTML = ''; // Clean container

        appState.products.forEach((product: any) => {
            const productComponent = this.ownerDocument.createElement('event-component') as Event;
            productComponent.setAttribute(AttributeEvents.image, product.image);
            productComponent.setAttribute(AttributeEvents.event, product.event);
            productComponent.setAttribute(AttributeEvents.location, product.location);
            productComponent.setAttribute(AttributeEvents.date, product.price.toString());
            productComponent.setAttribute(AttributeEvents.attendees, product.quantity.toString());
            
            this.productsContainer?.appendChild(productComponent);
        });
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = '<h1>holi</h1>'; // Clean the shadowRoot

            const homeContainer = this.ownerDocument.createElement('section');
            homeContainer.className = 'home-container';
            this.productsContainer = this.ownerDocument.createElement('div');
            this.productsContainer.className = 'products-container';

            homeContainer.appendChild(this.productsContainer);
            this.shadowRoot.appendChild(homeContainer);

            this.Events();
        }
    }
}

customElements.define('user-page', User);
export default User;