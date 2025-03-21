import { Module } from '@nestjs/common';
import { RuriService } from './ruri.service';

@Module({
  providers: [RuriService]
})
export class RuriModule {}
