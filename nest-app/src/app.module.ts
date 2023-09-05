import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PYTHON_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'py-service-client',
            brokers: ['localhost:9094'],
          },
          consumer: {
            groupId: 'py-service-group'
          }
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
