import axiosInstance from '../http';
import {GetUsersResponse} from './model';

class UsersService {
  public static async getAllUsers(): Promise<GetUsersResponse[]> {
    const result = await axiosInstance.get<GetUsersResponse[]>('/getUsers');
    return result.data;
  }
}

export default UsersService;
