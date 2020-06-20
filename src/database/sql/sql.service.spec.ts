import { Test, TestingModule } from '@nestjs/testing';
import { SqlService } from './sql.service';

describe('SqlService', () => {
  let service: SqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SqlService],
    }).compile();

    service = module.get<SqlService>(SqlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return sqlt connection to test', () => {
    process.env.NODE_ENV = 'test';
    const connection = SqlService.getConnection();
    expect(connection.type).toBe('sqlite');
  });

  it('should return postgres connection', () => {
    process.env.NODE_ENV = 'develop';
    const connection = SqlService.getConnection();
    expect(connection.type).toBe('postgres');
  });
});
