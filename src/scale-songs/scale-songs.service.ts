import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScaleSong } from './entities/scale-song.entity';
import { CreateScaleSongDto } from './dto/create-scale-song.dto';
import { UpdateScaleSongDto } from './dto/update-scale-song.dto';

@Injectable()
export class ScaleSongsService {
  constructor(
    @InjectRepository(ScaleSong)
    private repo: Repository<ScaleSong>,
  ) {}

  create(dto: CreateScaleSongDto) {
    const scaleSong = this.repo.create(dto);
    return this.repo.save(scaleSong);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, dto: UpdateScaleSongDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
