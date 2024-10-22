import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AddressModule } from './address/address.module';
import { Address } from './entities/address.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'avaz1514',
    database: 'document',
    entities: [User, Address],
    autoLoadEntities: true,
    synchronize: true,
  }), UserModule, AddressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
