import axios from "axios";
import { 
    updateQuantityOrderAction
} from '../../actions/order';
import { toggleErrorNotificationAction } from '../../actions/ui';

export function decreaseProductAmount(productId) {
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
                const product = productsInCart.find((item) => item.product.productId === productId)
                let productAmountInCart = product.product.amount;

                if(productAmountInCart > 1) {
                    let newAmount = productAmountInCart - 1;
                    let newSubtotal = response.data.price * newAmount;
                    let newTotalAmount = total - response.data.price;
                    dispatch(updateQuantityOrderAction(productId, newAmount, newSubtotal, newTotalAmount))
                }
            }
        })
        .catch(function (error) {
            console.log(error);
            dispatch(toggleErrorNotificationAction());
        });
    }
}