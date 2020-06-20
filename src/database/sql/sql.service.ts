import { Injectable } from '@nestjs/common';
import { Connection, ConnectionOptions } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv';

@Injectable()
export class SqlService {
  public static getConnection(): TypeOrmModuleOptions {
    switch (String(process.env.NODE_ENV)) {
      case 'test':
        return { type: 'sqlite', database: 'data/test.db', logging: true };
        break;
      default:
        return {
          type: 'postgres',
          host: process.env.SQL_HOST,
          port: Number(process.env.SQL_PORT),
          username: process.env.SQL_USER,
          password: process.env.SQL_PASS,
          database: process.env.SQL_NAME,
          logging: true,
        };
        break;
    }
  }
}
