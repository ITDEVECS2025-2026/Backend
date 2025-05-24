import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService],
  imports: [PrismaModule]
})
export class ProjectModule {}
