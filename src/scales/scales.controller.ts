import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ScalesService } from './scales.service';
import { CreateScaleDto } from './dto/create-scale.dto';
import { UpdateScaleDto } from './dto/update-scale.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('scales')
export class ScalesController {
  constructor(private readonly scalesService: ScalesService) {}

  @Post()
  create(@Body() createScaleDto: CreateScaleDto) {
    return this.scalesService.create(createScaleDto);
  }

  @Get()
  findAll() {
    return this.scalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.scalesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateScaleDto: UpdateScaleDto,
  ) {
    return this.scalesService.update(id, updateScaleDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.scalesService.remove(id);
  }
}
