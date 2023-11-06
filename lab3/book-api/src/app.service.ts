import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! This Nest Project is by Athika Fatima - 101502209';
  }
}
