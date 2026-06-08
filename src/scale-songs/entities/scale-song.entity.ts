import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';
import { AuditEntity } from '../../common/entities/audit.entity';

@Entity('scale_songs')
// Não pode haver duas músicas com a mesma ordem na mesma escala
// (não faz sentido duas músicas serem "a primeira").
@Unique(['scale_id', 'order'])
export class ScaleSong extends AuditEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  scale_id!: number;

  @Column()
  song_id!: number;

  @Column({ nullable: true })
  tone!: string;

  @Column()
  order!: number;
}
