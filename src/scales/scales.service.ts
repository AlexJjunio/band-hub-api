import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Scale } from './entities/scale.entity';
import { CreateScaleDto } from './dto/create-scale.dto';
import { UpdateScaleDto } from './dto/update-scale.dto';

@Injectable()
export class ScalesService {
  constructor(
    @InjectRepository(Scale)
    private repo: Repository<Scale>,
  ) {}

  create(dto: CreateScaleDto) {
    const scale = this.repo.create(dto);
    return this.repo.save(scale);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, dto: UpdateScaleDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}