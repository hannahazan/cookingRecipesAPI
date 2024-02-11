import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getBonjour(): number {
    return 2;
  }
}
