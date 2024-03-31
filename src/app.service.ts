import { Injectable } from '@nestjs/common';
import { EmailTemplateService } from './service/email-template.service';
import { Text } from './components/Text';
import { Button } from './components/Button';
import { writeFile } from 'fs';

@Injectable()
export class AppService {
  constructor(private readonly emailTemplateService: EmailTemplateService) {}
  getEmail(): string {
    const text = Text({ text: 'Hello, World!' });
    const sendButton = Button({ text: 'Send' });

    this.emailTemplateService.addComponents([text, sendButton]);
    return this.emailTemplateService.render();
  }

  saveToFile() {
    writeFile('email.html', this.getEmail(), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Email has been saved to email.html');
      }
    });
  }
}
