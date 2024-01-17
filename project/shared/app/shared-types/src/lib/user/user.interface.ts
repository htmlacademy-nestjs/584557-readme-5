export interface User {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  registartionDate: Date;
  postsNumber: number;
  subscribers: number;
}
