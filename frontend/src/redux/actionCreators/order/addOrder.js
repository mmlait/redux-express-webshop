import axios from "axios";
import { updateUser } from '../../actionCreators/user/updateUser';
import { updateQuantity } from './updateQuantity';
import { updateCompany } from '../company/updateCompany';
import { clearCartAction } from '../../actions/order';
import { togglePurchasedNotification } from '../../actionCreators/ui/togglePurchasedNotification';
import { 
    toggleErrorNotificationAction, 
    setCustomNotificationAction,
    toggleCustomNotificationModalAction 
} from '../../actions/ui';

let balanceError = "There is not enough money in the account.";

export function addOrder() {
  return function(dispatch, getState){
    const state = getState();
    let authToken = state.User.user.token;
    let productsInCart = state.Order.orderList;
    let total = state.Order.totalAmount;
    let user = {
      firstName: state.User.user.firstName,
      lastName: state.User.user.lastName,
      email: state.User.user.email,
      userId: state.User.user._id
    }

    let token = {
        headers: {'Authorization': "bearer " + authToken}
    };

    if(state.User.user.balance >= total) {
      let order = {
        order: productsInCart,
        customer: user,
        totalAmount: total
      };

      axios.post("http://127.0.0.1:2000/api/orders/add", order, token)
      .then( response =>{
        if(response) {
          let newBalance = state.User.user.balance - total;
          let user = {...state.User.user, balance: newBalance}
          dispatch(updateUser(user));
          let i;
          for (i = 0; i < productsInCart.length; i++) { 
            let productId = productsInCart[i].product.productId;
            let purchasedQuantity = productsInCart[i].product.amount;
            dispatch(updateQuantity(productId, purchasedQuantity, token));
          }
          let currentCompanyBalance = state.Company.company.companyBalance;
          let newCompanyBalance = currentCompanyBalance + total;
          let updatedCompany = {...state.Company.company, 
            companyBalance: newCompanyBalance
          }
          dispatch(updateCompany(updatedCompany));
          dispatch(clearCartAction());
          setTimeout(() => {
            dispatch(togglePurchasedNotification())
          }, 500);
        }
      })
      .catch(function (error) {
        console.log(error);
        dispatch(toggleErrorNotificationAction());
      });
    } else {
      dispatch(setCustomNotificationAction(balanceError));
      dispatch(toggleCustomNotificationModalAction());
    }
  }
}