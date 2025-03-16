import { Test, TestingModule } from '@nestjs/testing';
import { PeminjamanController } from './peminjaman.controller';

describe('PeminjamanController', () => {
  let controller: PeminjamanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeminjamanController],
    }).compile();

    controller = module.get<PeminjamanController>(PeminjamanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
