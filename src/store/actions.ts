import { dispatch } from '../store';
import { Actions, Screens } from '../types/store';
import { addProducts, deleteProduct, getProducts } from '../utils/firebase';

export const navigate = (screen: Screens) => {
    return {
        action: Actions.NAVIGATE,
        payload: screen,
    };
};

export const addProductAction = async (product: any) => {
    const success = await addProducts(product);
    if (success) {
        return {
            action: Actions.ADDEVENTS,
            payload: product,
        };
    }
    return null;
};

export const getProductsAction = async () => {
    const products = await getProducts();
    return {
        action: Actions.GETEVENTS,
        payload: products,
    };
};

export const deleteProductAction = async (uid: string) => {
    await deleteProduct(uid);

    return {
        action: Actions.DELETEEVENT,
        payload: uid,
    };
}

