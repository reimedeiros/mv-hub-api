import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthorizationModule } from './authorization/authorization.module';
import { EstablishmentModule } from './establishment/establishment.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthorizationModule,
    EstablishmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
