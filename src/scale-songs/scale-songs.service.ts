import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { ScaleSong } from './entities/scale-song.entity';
import { CreateScaleSongDto } from './dto/create-scale-song.dto';
import { UpdateScaleSongDto } from './dto/update-scale-song.dto';

@Injectable()
export class ScaleSongsService {
  constructor(
    @InjectRepository(ScaleSong)
    private repo: Repository<ScaleSong>,
  ) {}

  // Garante que a ordem não se repete dentro da mesma escala.
  // `ignoreId` permite editar a própria linha sem colidir consigo mesma.
  private async assertOrderIsFree(
    scaleId: number,
    order: number,
    ignoreId?: number,
  ) {
    const clash = await this.repo.findOne({
      where: {
        scale_id: scaleId,
        order,
        ...(ignoreId ? { id: Not(ignoreId) } : {}),
      },
    });
    if (clash) {
      throw new ConflictException(
        `Já existe uma música na posição ${order} desta escala`,
      );
    }
  }

  async create(dto: CreateScaleSongDto) {
    await this.assertOrderIsFree(dto.scale_id, dto.order);
    const scaleSong = this.repo.create(dto);
    return this.repo.save(scaleSong);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, dto: UpdateScaleSongDto) {
    const current = await this.repo.findOneBy({ id });
    if (!current) throw new NotFoundException('Música da escala não encontrada');

    const scaleId = dto.scale_id ?? current.scale_id;
    const order = dto.order ?? current.order;
    await this.assertOrderIsFree(scaleId, order, id);

    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
