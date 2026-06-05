import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { AuditEntity } from '../../common/entities/audit.entity';

@Entity('scale_songs')
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
