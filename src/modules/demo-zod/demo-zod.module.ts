import { Module } from '@nestjs/common';
import { DemoZodController } from './demo-zod.controller';

@Module({
  controllers: [DemoZodController]
})
export class DemoZodModule {}
