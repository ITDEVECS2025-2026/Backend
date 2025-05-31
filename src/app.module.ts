import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeminjamanModule } from './modules/peminjaman/peminjaman.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { DemoZodModule } from './modules/demo-zod/demo-zod.module';
import { AuthModule } from './modules/auth/auth.module';
import { ThreedprintModule } from './modules/threedprint/threedprint.module';
import { ProjectModule } from './modules/project/project.module';

@Module({
  imports: [PeminjamanModule, PrismaModule, ThreedprintModule, DemoZodModule, AuthModule, ProjectModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }
