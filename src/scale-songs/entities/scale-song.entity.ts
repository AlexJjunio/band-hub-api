import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('scale_songs')
export class ScaleSong {
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
