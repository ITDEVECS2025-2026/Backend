import { Body, Controller, Get, Post } from '@nestjs/common';
import { ThreedprintService } from './threedprint.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { get } from 'http';
import { ZodPipe } from 'src/zod/zod.pipe';
import { createThreeDPrintSchema } from './create-threedprint.dto';

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

    @Post('orders')
    async createOrder(
      @Body(new ZodPipe(createThreeDPrintSchema)) body
    ) {
      return this.threedprintService.createOrder(body);
    }
}
