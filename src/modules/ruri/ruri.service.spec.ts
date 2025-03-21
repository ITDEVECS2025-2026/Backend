import { Test, TestingModule } from '@nestjs/testing';
import { RuriService } from './ruri.service';

describe('RuriService', () => {
  let service: RuriService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RuriService],
    }).compile();

    service = module.get<RuriService>(RuriService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
