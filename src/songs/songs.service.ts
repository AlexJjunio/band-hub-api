import { Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { Song } from './entities/song.entity';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private repo: Repository<Song>,
  ) {}

  create(dto: CreateSongDto) {
    const song = this.repo.create(dto);
    return this.repo.save(song);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  update(@Param('id', ParseIntPipe) id: number, dto: Partial<CreateSongDto>) {
    return this.repo.update(id, dto);
  }

  remove(@Param('id', ParseIntPipe) id: number) {
    return this.repo.delete(id);
  }
}
