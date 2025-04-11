import { Body, Controller, Post } from '@nestjs/common';
import { ZodPipe } from 'src/zod/zod.pipe';
import { z } from 'zod';

const schema = z.object({
  name: z.string()
})

@Controller('demo-zod')
export class DemoZodController {

  @Post("/test")
  post(@Body(new ZodPipe(schema)) body) {
    return JSON.stringify({
      "body": body.name
    })
  }

}
