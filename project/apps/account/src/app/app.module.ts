import { Module } from '@nestjs/common';
import { BlogUserModule } from './app/blog-user/blog-user.module';
import { AuthenticationModule } from './app/authentication/authentication.module';

@Module({
  imports: [BlogUserModule, AuthenticationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
