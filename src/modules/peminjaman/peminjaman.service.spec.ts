import { Test, TestingModule } from '@nestjs/testing';
import { PeminjamanService } from './peminjaman.service';

describe('PeminjamanService', () => {
  let service: PeminjamanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeminjamanService],
    }).compile();

    service = module.get<PeminjamanService>(PeminjamanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
