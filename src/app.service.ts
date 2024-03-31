import { Injectable } from '@nestjs/common';
import { EmailTemplateService } from './service/email-template.service';
import { Text } from './components/Text';
import { Button } from './components/Button';
import { writeFile } from 'fs';
import { Header } from './components/Header';
import { Heading } from './components/Heading';

@Injectable()
export class AppService {
  constructor(private readonly emailTemplateService: EmailTemplateService) {}
  getEmail(): string {
    const headingH2 = Heading({ text: 'Email Test H2' });
    const heder = Header();
    const text = Text({ text: 'Hello, World!' });
    const sendButton = Button({ text: 'Send', link: 'https://google.com' });

    this.emailTemplateService.addComponents([
      headingH2,
      heder,
      text,
      sendButton,
    ]);
    return this.emailTemplateService.render();
  }

  async saveToFile() {
    try {
      const result: string = await new Promise((resolve, reject) => {
        writeFile('email.html', this.getEmail(), async (err) => {
          if (err) {
            reject(err);
          } else {
            resolve('Email has been saved to email.html');
          }
        });
      });
      return result;
    } catch (err) {
      return (err as Error).message;
    }
  }
}
