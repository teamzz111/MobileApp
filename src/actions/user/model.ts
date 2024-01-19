export interface GetUsersResponse {
  img: string;
  description: string;
  _id: string;
  name: string;
}

export interface CreateUserRequest {
  description: string;
  name: string;
}
