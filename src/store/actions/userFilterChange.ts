interface IUserSort {
    type: string;
    payload: string;
  }
  
  export enum UserSort {
    USER_FILTER_CHANGE = 'USER_FILTER_CHANGE',
    
    RESET_USER_FILTER_CHANGE = 'RESET_USER_FILTER_CHANGE',
  }
  
  const createAction = (type: string) => {
    return (payload:string): IUserSort => {
      return {
        type,
        payload
      };
    };
  };
  
  export const USER_FILTER_CHANGE = createAction(UserSort.USER_FILTER_CHANGE);
  
  export const RESET_USER_FILTER_CHANGE = createAction(UserSort.RESET_USER_FILTER_CHANGE);