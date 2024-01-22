import { Module } from '@nestjs/common';
import { BlogUserModule } from './blog-user/blog-user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ConfigAccountModule } from './../../../../shared/config/account/src/lib/config-account.module';

@Module({
  imports: [BlogUserModule, AuthenticationModule, ConfigAccountModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
