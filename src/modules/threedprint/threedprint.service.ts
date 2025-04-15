import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

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
}
