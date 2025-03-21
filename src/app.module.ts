import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeminjamanModule } from './modules/peminjaman/peminjaman.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { SwaggerModule } from '@nestjs/swagger';
import { RuriModule } from './modules/ruri/ruri.module';

@Module({
  imports: [PeminjamanModule, PrismaModule,RuriModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
