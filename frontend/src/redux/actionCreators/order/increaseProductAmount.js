import axios from "axios";
import { 
    updateQuantityOrderAction
} from '../../actions/order';
import { 
    toggleErrorNotificationAction, 
    setCustomNotificationAction,
    toggleCustomNotificationModalAction 
} from '../../actions/ui';

let notEnoughProducts = "Not enough products in stock";

export function increaseProductAmount(productId) {
    return function(dispatch, getState){
        const state = getState();
        let authToken = state.User.user.token;

        let token = {
            headers: {'Authorization': "bearer " + authToken}
        };

        axios.get(`http://127.0.0.1:2000/api/products/read?id=${productId}`, token)
        .then( response =>{
            if(response) {
                let productsInCart = state.Order.orderList;
                let total = state.Order.totalAmount;
                let productsInStock = response.data.quantity;
                const product = productsInCart.find((item) => item.product.productId === productId)
                let productAmountInCart = product.product.amount;

                if(productsInStock > productAmountInCart) {
                    let newAmount = productAmountInCart + 1;
                    let newSubtotal = response.data.price * newAmount;
                    let newTotalAmount = total + response.data.price;
                    dispatch(updateQuantityOrderAction(productId, newAmount, newSubtotal, newTotalAmount))
                } else{
                    dispatch(setCustomNotificationAction(notEnoughProducts));
                    dispatch(toggleCustomNotificationModalAction());
                }
            }
        })
        .catch(function (error) {
            console.log(error);
            dispatch(toggleErrorNotificationAction());
        });
    }
}