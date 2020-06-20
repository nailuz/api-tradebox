import { Module } from '@nestjs/common';
import { SqlService } from './sql/sql.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(SqlService.getConnection())],
  providers: [SqlService],
})
export class DatabaseModule {}
