import { Module } from '@nestjs/common';
import { SqlService } from './sql/sql.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(SqlService.getConnection()),
  ],
  providers: [SqlService],
})
export class DatabaseModule {}
