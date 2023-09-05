import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('PYTHON_SERVICE') private readonly client: ClientKafka) {}

  getHello(): string {
    const message = 'Hello World';
    this.client.emit('hello-py-service', message);
    return message;
  }
}
