import { Module } from '@nestjs/common';
import { PeminjamanService } from './peminjaman.service';
import { PrismaModule } from '../prisma/prisma.module';
import { PeminjamanController } from './peminjaman.controller';

@Module({
  providers: [PeminjamanService],
  imports: [PrismaModule],
  controllers: [PeminjamanController]
})
export class PeminjamanModule {}
