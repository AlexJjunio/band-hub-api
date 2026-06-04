import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ScaleEvent } from '../enums/scale-event.enum';

@Entity('scales')
export class Scale {
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

  @Column()
  created_by!: number;
}