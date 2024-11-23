import { Actions } from '../types/store';

export const reducer = (currentAction: any, currentState: any) => {
	const { action, payload } = currentAction;

	switch (action) {
		case Actions.NAVIGATE:
			return {
				...currentState,
				screen: payload,
			};

		case Actions.ADDEVENTS:
			return {
				...currentState,
				products: [...currentState.products, payload],
			};

		case Actions.GETEVENTS:
			return {
				...currentState,
				products: payload || [], // Make sure there is always an array
			};

		case Actions.DELETEEVENT:
			return {
				...currentState,
				products: [...currentState.products.filter((product: any) => product.uid !== payload)],
			}
		
		

		default:
			return currentState;
	}
};