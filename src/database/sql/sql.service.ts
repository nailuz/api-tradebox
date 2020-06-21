import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/app/components/users/models/User';

@Injectable()
export class SqlService {
  public static getConnection(): TypeOrmModuleOptions {
    console.log(__dirname);

    const defaultConfig: TypeOrmModuleOptions = {
      synchronize: false,
      entities: [User],
      migrations: ['src/database/migrations/*.ts'],
    };
    console.log(process.env.NODE_ENV);
    switch (String(process.env.NODE_ENV)) {
      case 'test':
        return {
          ...defaultConfig,
          type: 'sqlite',
          database: 'data/test.db',
          logging: true,
        };
        break;
      case 'prod':
        return {
          ...defaultConfig,
          type: 'postgres',
          host: process.env.SQL_HOST,
          port: Number(process.env.SQL_PORT),
          username: process.env.SQL_USER,
          password: String(process.env.SQL_PASS),
          database: process.env.SQL_NAME,
          logging: true,
          synchronize: false,
        };
        break;
      default:
        return {
          ...defaultConfig,
          type: 'postgres',
          host: process.env.SQL_HOST,
          port: Number(process.env.SQL_PORT),
          username: process.env.SQL_USER,
          password: String(process.env.SQL_PASS),
          database: process.env.SQL_NAME,
          logging: true,
          synchronize: true,
        };
        break;
    }
  }
}
