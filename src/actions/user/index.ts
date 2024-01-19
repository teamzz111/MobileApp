import axiosInstance from '../http';
import {CreateUserRequest, GetUsersResponse} from './model';

class UsersService {
  public static async getAllUsers(): Promise<GetUsersResponse[]> {
    const result = await axiosInstance.get<GetUsersResponse[]>('/getUsers');
    return result.data;
  }

  public static async createNewUser(data: CreateUserRequest) {
    await axiosInstance.post('/createUser', data);
  }
}

export default UsersService;
