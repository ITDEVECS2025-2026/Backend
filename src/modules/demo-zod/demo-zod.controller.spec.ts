import { Test, TestingModule } from '@nestjs/testing';
import { DemoZodController } from './demo-zod.controller';

describe('DemoZodController', () => {
  let controller: DemoZodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemoZodController],
    }).compile();

    controller = module.get<DemoZodController>(DemoZodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
