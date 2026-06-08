import { Column, DeleteDateColumn } from 'typeorm';
import { AuditEntity } from './audit.entity';

export abstract class BaseEntity extends AuditEntity {
  @DeleteDateColumn({ name: 'deleted_at' })
  deleted_at: Date | null;

  @Column({ name: 'deleted_by', type: 'int', nullable: true })
  deleted_by: number | null;
}
