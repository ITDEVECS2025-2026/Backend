import { Controller, Get } from '@nestjs/common';
import { ThreedprintService } from './threedprint.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { get } from 'http';

@ApiTags('3D Print')
@Controller('threedprint')
export class ThreedprintController {
    constructor(private readonly threedprintService: ThreedprintService) {}

    @Get()
    @ApiOperation({ summary: 'Get all 3D print orders' })
    @ApiResponse({
        status: 200,
        description: 'Success retrieving all 3D print orders',
    })
    async getOrders() {
        return this.threedprintService.getAllOrders();
    }
}
