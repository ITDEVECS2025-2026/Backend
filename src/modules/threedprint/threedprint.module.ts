import { Module } from '@nestjs/common';
import { ThreedprintController } from './threedprint.controller';
import { ThreedprintService } from './threedprint.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [ThreedprintController],
  providers: [ThreedprintService],
  imports: [PrismaModule],
})
export class ThreedprintModule {}
