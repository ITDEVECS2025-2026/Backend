import { Test, TestingModule } from '@nestjs/testing';
import { ThreedprintService } from './threedprint.service';

describe('ThreedprintService', () => {
  let service: ThreedprintService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThreedprintService],
    }).compile();

    service = module.get<ThreedprintService>(ThreedprintService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
