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
import { ScaleSongsService } from './scale-songs.service';
import { CreateScaleSongDto } from './dto/create-scale-song.dto';
import { UpdateScaleSongDto } from './dto/update-scale-song.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('scale-songs')
export class ScaleSongsController {
  constructor(private readonly scaleSongsService: ScaleSongsService) {}

  @Post()
  create(@Body() createScaleSongDto: CreateScaleSongDto) {
    return this.scaleSongsService.create(createScaleSongDto);
  }

  @Get()
  findAll() {
    return this.scaleSongsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.scaleSongsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateScaleSongDto: UpdateScaleSongDto,
  ) {
    return this.scaleSongsService.update(id, updateScaleSongDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.scaleSongsService.remove(id);
  }
}
