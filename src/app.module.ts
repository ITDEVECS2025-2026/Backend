import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeminjamanModule } from './modules/peminjaman/peminjaman.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { SwaggerModule } from '@nestjs/swagger';

@Module({
  imports: [PeminjamanModule, PrismaModule, SwaggerModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
