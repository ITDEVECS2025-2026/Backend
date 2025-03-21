import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {Prisma, DataPeminjaman} from "@prisma/client";

@Injectable()
export class PeminjamanService {
    constructor(private prisma: PrismaService) {}

    async createPeminjaman( data: Prisma.DataPeminjamanCreateInput): Promise<DataPeminjaman> {      
        return this.prisma.dataPeminjaman.create({
          data,          
        });
      }
}
