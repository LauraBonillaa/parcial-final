import { addObserver, appState, dispatch } from "../../store/index";
import { deleteProductAction, navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import { deleteProduct } from "../../utils/firebase";

export enum AttributeEvents {
    'uid' = 'uid',
    'event' = 'event',
    'date' = 'date',
    'location' = 'location',
    'image' = 'image',
    'attendees' = 'attendees'
};

class Event extends HTMLElement {
    uid?: string
    event?: string
    date?: number
    location?: string
    image?: string
    attendees?: number

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return Object.keys(AttributeEvents) as Array<AttributeEvents>;
    }

    attributeChangedCallback(propName: AttributeEvents, oldValue: string | number | undefined, newValue: string | number | undefined) {
        switch (propName) {

            case AttributeEvents.date:
                this.date = newValue ? Number(newValue) : 0; // Convert to number
                break;
            case AttributeEvents.attendees:
                this.attendees = newValue ? Number(newValue) : 0; // Convert to number
                break;
            default:
                break;
        }
        this.render();
    }

    

    connectedCallback() {
        this.render();
        addObserver(this);
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = '';
            const container = this.ownerDocument.createElement('div');
            container.className = 'event-card';

            const img = this.ownerDocument.createElement('img');
            img.className = 'event-img';
            img.src = this.image || 'No image available';
            container.appendChild(img);

            const event = this.ownerDocument.createElement('h2');
            event.className = 'event-name';
            event.textContent = this.event || 'No event available';
            container.appendChild(event);

            const location = this.ownerDocument.createElement('p');
            location.className = 'event-location';
            location.textContent = this.location || 'No location available';
            container.appendChild(location);

            const date = this.ownerDocument.createElement('p');
            date.className = 'event-date';
            date.textContent = `Date: ${this.date || 0}`;
            container.appendChild(date);

            const attendees = this.ownerDocument.createElement('p');
            attendees.className = 'products-quantity';
            attendees.textContent = `Attendees ${this.attendees || 0}`;
            container.appendChild(attendees);

            // const editButton = this.ownerDocument.createElement('edit-button') as EditButton;
            // container.appendChild(editButton);

            const DeleteButton = document.createElement('button');
            DeleteButton.textContent = 'Delete';
            DeleteButton.className = 'delete-button';

            DeleteButton?.addEventListener('click', () =>dispatch(deleteProductAction(this.uid!)));
        
        }
    }
}
customElements.define('event-component', Event);
export default Event;