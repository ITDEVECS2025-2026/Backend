import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeminjamanModule } from './modules/peminjaman/peminjaman.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { DemoZodModule } from './modules/demo-zod/demo-zod.module';

@Module({
  imports: [PeminjamanModule, PrismaModule, DemoZodModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }
