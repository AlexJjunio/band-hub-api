import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScaleMember } from './entities/scale-member.entity';
import { User } from '../users/entities/user.entity';
import { UserRole } from '../users/enums/user-role.enum';
import { ScaleMemberStatus } from './enums/scale-member-status.enum';
import { CreateScaleMemberDto } from './dto/create-scale-member.dto';
import { UpdateScaleMemberDto } from './dto/update-scale-member.dto';

@Injectable()
export class ScaleMembersService {
  constructor(
    @InjectRepository(ScaleMember)
    private repo: Repository<ScaleMember>,
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  async create(dto: CreateScaleMemberDto) {
    const user = await this.usersRepo.findOne({
      where: { id: dto.user_id },
      select: { id: true, role: true, instruments: true },
    });
    if (!user) throw new NotFoundException('Usuário não encontrado');

    // R1 — só músicos podem ser escalados.
    if (user.role !== UserRole.MUSICIAN) {
      throw new BadRequestException('Apenas músicos podem ser escalados');
    }

    // R2 (estrita) — o instrumento da escala precisa ser um que o músico toca.
    if (!user.instruments?.includes(dto.instrument)) {
      throw new BadRequestException(
        'O músico não toca o instrumento selecionado para esta escala',
      );
    }

    const scaleMember = this.repo.create({
      ...dto,
      status: dto.status ?? ScaleMemberStatus.PENDING,
    });
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
