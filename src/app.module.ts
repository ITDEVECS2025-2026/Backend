import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeminjamanModule } from './modules/peminjaman/peminjaman.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { SwaggerModule } from '@nestjs/swagger';
import { DemoZodController } from './demo-zod/demo-zod.controller';

@Module({
  imports: [PeminjamanModule, PrismaModule],
  controllers: [AppController, DemoZodController],
  providers: [AppService],
  
})
export class AppModule {}
