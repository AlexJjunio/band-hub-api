import { Injectable } from '@nestjs/common';
import { CreateScaleDto } from './dto/create-scale.dto';
import { Scale } from './entities/scale.entity';

@Injectable()
export class ScalesService {
  private scales: Scale[] = [];

  create(dto: CreateScaleDto) {
    const scale = {
      id: Date.now(),
      ...dto,
    };

    this.scales.push(scale);
    return scale;
  }

  findAll() {
    return this.scales;
  }

  findOne(id: number) {
    return this.scales.find(s => s.id === id);
  }

  update(id: number, dto: Partial<CreateScaleDto>) {
    const index = this.scales.findIndex(s => s.id === id);
    this.scales[index] = { ...this.scales[index], ...dto };
    return this.scales[index];
  }

  remove(id: number) {
    this.scales = this.scales.filter(s => s.id !== id);
    return { deleted: true };
  }
}