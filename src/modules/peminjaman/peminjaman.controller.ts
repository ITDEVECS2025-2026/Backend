import { Controller, Get } from '@nestjs/common';
import { PeminjamanService } from './peminjaman.service';

@Controller('peminjaman')
export class PeminjamanController {
    constructor (private peminjamanServce: PeminjamanService) {}

    @Get()
    async getPeminjaman(): Promise<string> {
        let a =  await this.peminjamanServce.createPeminjaman({
            tanggalPeminjaman: new Date(),
            tanggalPengembalian: new Date(),
            status: 'masih_dipinjam',
            barang: {
                create: {                    
                        foto: 'lorem',
                        nama: 'Laptop',
                        keterangan: 'Laptop Gaming',
                        jumlah: 1,
                        posisiBarang: 'Lemari Besi',
                        kodeBarang: 'LPT001',
                        type: 'alat',
                        tersedia: 1                                                                  
                }
            },
            user: {
                create: {
                    fullname: 'ruri',
                    email: 'derwagyu@yyyy.com',
                    nrp: 123456789,
                    password: 'gay',
                    username: 'ruri',
                    type: 'user'
                }
            }
        })
        return a.id
    }
}
