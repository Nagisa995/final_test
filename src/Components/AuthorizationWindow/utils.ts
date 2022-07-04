import { IUserData } from './interface';

export const USER_DATA: IUserData = {
  userName: 'Nagisa',
  userPassword: '12345',
};

export function userVerification(name: string, password: string): boolean {
  const verificationPass: boolean =
    name === USER_DATA.userName && password === USER_DATA.userPassword;
  return verificationPass;
}
