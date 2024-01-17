import { AuthUser } from '@project/shared/app/shared-types';
import { Entity } from '@project/shared/core';
import { compare, genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from './blog-user.constant';

export class BlogUserEntity implements AuthUser, Entity<string> {
  public id: string;
  public email: string;
  public firstName: string;
  public lastName: string;
  public avatar?: string;
  public registartionDate: Date;
  public postsNumber: number;
  public subscribers: number;
  public passwordHash: string;

  constructor(user: AuthUser) {
    this.populate(user);
  }

  public toPOJO() {
    return {
      id: this.id,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      avatar: this.avatar,
      registartionDate: this.registartionDate,
      postsNumber: this.postsNumber,
      subscribers: this.subscribers,
      passwordHash: this.passwordHash,
    };
  }

  public populate(data: AuthUser): void {
    this.email = data.email;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.avatar = data.avatar;
    this.registartionDate = data.registartionDate;
    this.postsNumber = data.postsNumber;
    this.subscribers = data.subscribers;
  }

  public async setPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
