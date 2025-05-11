import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateThreeDPrintDto } from './create-threedprint.dto';

@Injectable()
export class ThreedprintService {
    constructor(private readonly prisma: PrismaService) {}

    async getAllOrders() {
        const orders = await this.prisma.pemesanan3dPrint.findMany({
            include: {
                user: true,
                pembayaran: true,
            },
        });

        return {
            success: true,
            message: 'Success retrieving all 3D print orders',
            data: orders.map((order) => ({
                id: order.id,
                nama: order.user?.fullname || 'Unknown',
                status_pembayaran: order.pembayaran?.statusPembayaran || 'Unknown',
            })),
        };
    }
    async createOrder(data: CreateThreeDPrintDto) {
        const order = await this.prisma.pemesanan3dPrint.create({
          data: {
            idPemesan: data.idPemesan,
            idPembayaran: data.idPembayaran,
            file: data.file,
            keterangan: data.keterangan,
          },
        });
    
        return {
          success: true,
          message: 'Berhasil membuat pesanan 3D print.',
          data: order,
        };
    }
}
