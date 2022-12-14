import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('send-message')
  async handleMessagePrinted(data: Record<string, unknown>) {
    console.log(data);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
