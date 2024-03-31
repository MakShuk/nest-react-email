import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getEmailHtml(): string {
    return this.appService.getEmail();
  }

  @Post()
  async saveToFile(): Promise<string> {
    return await this.appService.saveToFile();
  }
}
