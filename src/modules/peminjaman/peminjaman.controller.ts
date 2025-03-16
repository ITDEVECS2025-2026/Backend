import { Controller, Get } from '@nestjs/common';
import { PeminjamanService } from './peminjaman.service';

@Controller('peminjaman')
export class PeminjamanController {
    constructor (private peminjamanServce: PeminjamanService) {}

    @Get()
    async getPeminjaman(): Promise<string> {
        let a =  await this.peminjamanServce.createPeminjaman({
            email: "m@m.com",
        })
        return a.email
    }
}
