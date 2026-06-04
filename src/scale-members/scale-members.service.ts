import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScaleMember } from './entities/scale-member.entity';
import { CreateScaleMemberDto } from './dto/create-scale-member.dto';
import { UpdateScaleMemberDto } from './dto/update-scale-member.dto';

@Injectable()
export class ScaleMembersService {
  constructor(
    @InjectRepository(ScaleMember)
    private repo: Repository<ScaleMember>,
  ) {}

  create(dto: CreateScaleMemberDto) {
    const scaleMember = this.repo.create(dto);
    return this.repo.save(scaleMember);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, dto: UpdateScaleMemberDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
