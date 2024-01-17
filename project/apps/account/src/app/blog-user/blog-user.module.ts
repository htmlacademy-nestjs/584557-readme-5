import { Module } from '@nestjs/common';
import { BlogUserRepository } from './blog-user.repository';

@Module({
  exports: [BlogUserRepository],
  providers: [BlogUserRepository],
})
export class BlogUserModule {}
