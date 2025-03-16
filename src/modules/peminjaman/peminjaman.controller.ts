import { Controller, Get } from '@nestjs/common';
import { PeminjamanService } from './peminjaman.service';

@Controller('peminjaman')
export class PeminjamanController {
    constructor (private peminjamanServce: PeminjamanService) {}

    @Get()
    getPeminjaman(): string {
        this.peminjamanServce.createPeminjaman({
            email: "m@m.com",
        }).catch((e) => {
            console.log(e)
        })
        return "ok"
    }
}
