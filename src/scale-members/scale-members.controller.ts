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
import { ScaleMembersService } from './scale-members.service';
import { CreateScaleMemberDto } from './dto/create-scale-member.dto';
import { UpdateScaleMemberDto } from './dto/update-scale-member.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('scale-members')
export class ScaleMembersController {
  constructor(private readonly scaleMembersService: ScaleMembersService) {}

  @Post()
  create(@Body() createScaleMemberDto: CreateScaleMemberDto) {
    return this.scaleMembersService.create(createScaleMemberDto);
  }

  @Get()
  findAll() {
    return this.scaleMembersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.scaleMembersService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateScaleMemberDto: UpdateScaleMemberDto,
  ) {
    return this.scaleMembersService.update(id, updateScaleMemberDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.scaleMembersService.remove(id);
  }
}
