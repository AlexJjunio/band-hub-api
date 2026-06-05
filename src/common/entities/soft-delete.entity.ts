import { DeleteDateColumn } from 'typeorm';

export abstract class SoftDeleteEntity {
  @DeleteDateColumn()
  deletedAt: Date | null;
}
