import { Controller, Get } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  @Get()
  finally(): string {
    return '小生活平平淡淡';
  }
}
