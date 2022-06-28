export interface IActionAuthorization {
  type: string;
}

export enum ActionAutorization {
  NOT_AUTHORIZED = 'NOT_AUTHORIZED',
  AUTHORIZATION_IN_PROGRESS = 'AUTHORIZATION_IN_PROGRESS',
  AUTHORIZATION_PASS = 'AUTHORIZATION_PASS',
}

const createAction = (type: string) => {
  return (): IActionAuthorization => {
    return {
      type,
    };
  };
};

export const NOT_AUTHORIZED = createAction(ActionAutorization.NOT_AUTHORIZED);

export const AUTORIZATION_IN_PROGRESS = createAction(ActionAutorization.AUTHORIZATION_IN_PROGRESS);

export const AUTHORIZATION_PASS = createAction(ActionAutorization.AUTHORIZATION_PASS);
