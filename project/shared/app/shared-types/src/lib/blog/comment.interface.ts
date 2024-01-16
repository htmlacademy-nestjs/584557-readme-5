import { User } from '../user/user.interface';

export interface Comment {
  text: string;
  id: string;
  author: User;
  createDate: string;
}
