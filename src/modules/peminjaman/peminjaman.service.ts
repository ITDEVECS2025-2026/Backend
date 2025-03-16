import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {Prisma, Peminjaman} from "@prisma/client";

@Injectable()
export class PeminjamanService {
    constructor(private prisma: PrismaService) {}

    async createPeminjaman(data: Prisma.PeminjamanCreateInput): Promise<Peminjaman> {
        return this.prisma.peminjaman.create({
          data,          
        });
      }
}
