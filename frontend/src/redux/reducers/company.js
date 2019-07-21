import * as CompanyActionTypes from '../actionTypes/company';

const initialState = {
  company: {}
}

export default function Company(state=initialState, action) {

  switch(action.type) {

    case CompanyActionTypes.READ_COMPANY: {
      return {
        ...state,
        company: action.company
      };
    }

    case CompanyActionTypes.UPDATE_COMPANY: {
      return {
        ...state,
        company: action.company
      };
    }

    default:
      return state;

  }
}