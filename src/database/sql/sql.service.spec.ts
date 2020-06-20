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

  it('should return a connection to test', () => {
    const connection = SqlService.getConnection();
    expect(connection.type).toBe('sqlite');
  });

  it('should return a connection to development', () => {
    process.env.NODE_ENV = 'dev';
    const connection = SqlService.getConnection();
    expect(connection.type).toBe('postgres');
  });

  it('should return a connection to production', () => {
    process.env.NODE_ENV = 'prod';

    const connection = SqlService.getConnection();
    expect(connection.type).toBe('postgres');
    expect(connection.synchronize).toBe(false);
  });
});
