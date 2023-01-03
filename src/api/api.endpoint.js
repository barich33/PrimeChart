import { environment } from '../environments/environment';
export const authEndPoint = {
  login: `${environment.urls.api}/Auth/login`,
  refreshToken: `${environment.urls.api}/Auth/refreshToken`,
  accessToken: `${environment.urls.api}/Auth/accessToken`
};

export const userEndPoint = {
  authenticate: `${environment.urls.api}/User/Authenticate`,
  getUsers: `${environment.urls.api}/User/GetAllUsers`,
  updateUser: `${environment.urls.api}/User/UpdateUser`,
  getUserById: `${environment.urls.api}/User/GetUserById`,
  addUser: `${environment.urls.api}/User/AddUser`,
  updateUserRole: `${environment.urls.api}/User/UpdateUserRole`,
  changePassword: `${environment.urls.api}/User/ChangePassword`,
};
