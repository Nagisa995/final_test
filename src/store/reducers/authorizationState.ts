import Cookies from 'js-cookie';
import { cookieAuthorization } from '../../helpers/const';
import { userAuthorizationState } from '../../helpers/utils';
import { ActionAutorization } from '../actions/authorizationChange';

interface ISwitchAuthorizationState {
  type: ActionAutorization;
}

export function authorizationState(
  state = userAuthorizationState(),
  action: ISwitchAuthorizationState
) {
  switch (action.type) {
    case ActionAutorization.AUTHORIZATION_IN_PROGRESS:
      return ActionAutorization.AUTHORIZATION_IN_PROGRESS;
    case ActionAutorization.AUTHORIZATION_PASS:
      Cookies.set(cookieAuthorization.cookieName, cookieAuthorization.cookieValue);
      return ActionAutorization.AUTHORIZATION_PASS;
    case ActionAutorization.NOT_AUTHORIZED:
      Cookies.remove(cookieAuthorization.cookieName);
      return ActionAutorization.NOT_AUTHORIZED;
    default:
      return state;
  }
}
