import {
  BadRequestException,
  Controller,
  Get,
  HttpService,
  InternalServerErrorException,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly http: HttpService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/nicotv')
  async vicotv(@Query('url') url) {
    if (!url) return new BadRequestException('需要url参数');
    try {
      const { data } = await this.http
        .get(url, {
          responseType: 'text',
        })
        .toPromise();
      return data;
    } catch (error) {
      return new InternalServerErrorException(`请求(${url})失败`);
    }
  }
}
