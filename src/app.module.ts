import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeminjamanModule } from './modules/peminjaman/peminjaman.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { SwaggerModule } from '@nestjs/swagger';
import { CommonModule } from './common/common.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PeminjamanModule, PrismaModule, CommonModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
