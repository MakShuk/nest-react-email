import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailTemplateService } from './service/email-template.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, EmailTemplateService],
})
export class AppModule {}
