import { DeleteDateColumn } from 'typeorm';
import { AuditEntity } from './audit.entity';

export abstract class BaseEntity extends AuditEntity {
  @DeleteDateColumn()
  deletedAt: Date | null;
}
