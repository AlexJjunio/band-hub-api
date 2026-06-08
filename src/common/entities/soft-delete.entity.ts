import { Column, DeleteDateColumn } from 'typeorm';

export abstract class SoftDeleteEntity {
  @DeleteDateColumn({ name: 'deleted_at' })
  deleted_at: Date | null;

  @Column({ name: 'deleted_by', nullable: true })
  deleted_by: number | null;
}
