import { dispatch } from '../../store/index';
import { navigate } from '../../store/actions';
import { Screens } from '../../types/store';
import { addProductAction } from '../../store/actions';


class Admin extends HTMLElement {
    private credentials = {
        uid: this.generateUniqueId(),
        event: '',
        date: '',
        location: '',
        image: '',
        attendees: ''
    };

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.submitForm = this.submitForm.bind(this);
        this.changeImage = this.changeImage.bind(this);
        this.changeEvent = this.changeEvent.bind(this);
        this.changeLocation = this.changeLocation.bind(this);
        this.changeAttendes = this.changeAttendes.bind(this);
        this.changeDate = this.changeDate.bind(this);
    }

    private generateUniqueId(): string {
        const timestamp = new Date().getTime();
        const random = Math.floor(Math.random() * 10000);
        return `${timestamp}-${random}`;
    }

    private changeImage(e: Event) {
        const input = e.target as HTMLInputElement;
        this.credentials.image = input.value;
    }

    private changeEvent(e: Event) {
        const input = e.target as HTMLInputElement;
        this.credentials.event = input.value;
    }

    private changeLocation(e: Event) {
        const input = e.target as HTMLInputElement;
        this.credentials.location = input.value;
    }

    private changeAttendes(e: Event) {
        const input = e.target as HTMLInputElement;
        this.credentials.attendees = (input.value);
    }

    private changeDate(e: Event) {
        const input = e.target as HTMLInputElement;
        this.credentials.date = (input.value);
    }

    private validateForm(): boolean {
        
        const { image, event, location, attendees, date } = this.credentials;
        if (!image || !event || !location) {
            alert('Please fill all text fields');
            return false;
        }
   return true;
    }

    private async submitForm() {
        if (!this.validateForm()) return;

        if (!this.credentials.uid) {
            this.credentials.uid = this.generateUniqueId();
        }

        const response = await addProductAction(this.credentials);
        if (response) {
            dispatch(response);
            dispatch(navigate(Screens.USER));
        } else {
            alert('Could not create the product');
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (!this.shadowRoot) return;

        this.shadowRoot.innerHTML = ''; // Limpia el Shadow DOM

        const formContainer = document.createElement('section');
        formContainer.className = 'form-container';

        // Agrega nav-bar
        const navBar = document.createElement('nav-bar');
        formContainer.appendChild(navBar);

        // Formulario
        const form = document.createElement('div');
        form.className = 'form-div';

        const title = document.createElement('h1');
        title.innerText = 'Add Product';
        form.appendChild(title);

        // Campos del formulario
        const fields = [
            { label: 'URL', type: 'text', changeHandler: this.changeImage },
            { label: 'Album', type: 'text', changeHandler: this.changeEvent },
            { label: 'Artist', type: 'text', changeHandler: this.changeLocation },
            { label: 'Price', type: 'number', changeHandler: this.changeAttendes },
            { label: 'Quantity', type: 'number', changeHandler: this.changeDate },
        ];

        fields.forEach(({ label, type, changeHandler }) => {
            const labelElement = document.createElement('label');
            labelElement.innerText = label;

            const inputElement = document.createElement('input');
            inputElement.type = type;
            inputElement.addEventListener('input', changeHandler);

            form.appendChild(labelElement);
            form.appendChild(inputElement);
        });

        // Botón de envío
        const submitButton = document.createElement('button');
        submitButton.innerText = 'Add Product';
        submitButton.addEventListener('click', this.submitForm);
        form.appendChild(submitButton);

        formContainer.appendChild(form);
        this.shadowRoot.appendChild(formContainer);
    }
}

customElements.define('admin-page', Admin);
export default Admin;