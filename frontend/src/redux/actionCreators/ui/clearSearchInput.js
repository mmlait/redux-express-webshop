import { clearSearchInputAction } from '../../actions/product';
import { hideClearSearchInputBtnAction } from '../../actions/ui';

export function clearSearchInput() {
  return function(dispatch){
    dispatch(clearSearchInputAction())
    dispatch(hideClearSearchInputBtnAction())
  }
}