import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ScaleEvent } from '../enums/scale-event.enum';
import { BaseEntity } from '../../common/entities/base.entity';

@Entity('scales')
export class Scale extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'enum', enum: ScaleEvent })
  event!: ScaleEvent;

  @Column({ type: 'date' })
  date!: string;

  @Column({ type: 'time' })
  time!: string;

  @Column()
  location!: string;
}