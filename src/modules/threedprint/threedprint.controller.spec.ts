import { Test, TestingModule } from '@nestjs/testing';
import { ThreedprintController } from './threedprint.controller';

describe('ThreedprintController', () => {
  let controller: ThreedprintController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThreedprintController],
    }).compile();

    controller = module.get<ThreedprintController>(ThreedprintController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
