import { Injectable } from '@nestjs/common';
import { EmailTemplateService } from './service/email-template.service';

@Injectable()
export class AppService {
  constructor(private readonly emailTemplateService: EmailTemplateService) {}
  getEmail(): string {
    const emailHTML = this.emailTemplateService.render();
    return emailHTML;
  }
}
