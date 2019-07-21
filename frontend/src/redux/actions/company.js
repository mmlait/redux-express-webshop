import * as CompanyActionTypes from '../actionTypes/company';

export const readCompanyAction = company => {
  return {
    type: CompanyActionTypes.READ_COMPANY,
    company: company
  };
}

export const updateCompanyAction = (company) => {
  return {
    type: CompanyActionTypes.UPDATE_COMPANY,
    company: company
  };
}