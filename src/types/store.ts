export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	screen: string;
	products: [];
	
};

export enum Screens {
	'USER' = 'USER',
	'ADMIN' = 'ADMIN',
	
}

export enum Actions {
	'NAVIGATE' = 'NAVIGATE',
	'ADDEVENTS' = 'ADDEVENTS',
	'GETEVENTS' = 'GETEVENTS',
	'DELETEEVENT' = 'DELETEEVENT',
	
}