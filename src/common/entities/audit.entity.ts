import {
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

export abstract class AuditEntity {
  @CreateDateColumn({ name: 'created_at' })
  created_at!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at!: Date;

  @Column({ name: 'created_by', nullable: true })
  created_by!: number;

  @Column({ name: 'updated_by', nullable: true })
  updated_by!: number;
}
