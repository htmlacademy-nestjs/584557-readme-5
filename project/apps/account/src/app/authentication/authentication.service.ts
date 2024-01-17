import { BlogUserRepository } from './../blog-user/blog-user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticationService {
  constructor(private readonly blogUserRepository: BlogUserRepository) {}
}
