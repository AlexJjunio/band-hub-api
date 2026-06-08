import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ScaleMemberStatus } from '../enums/scale-member-status.enum';
import { Instrument } from '../../common/enums/instrument.enum';
import { AuditEntity } from '../../common/entities/audit.entity';

@Entity('scale_members')
export class ScaleMember extends AuditEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  scale_id!: number;

  @Column()
  user_id!: number;

  // Instrumento que este músico vai tocar NESTA escala (definido pelo líder ao
  // escalar). Era role_in_scale: string. Ver docs/convencao-enums.md.
  @Column({ type: 'enum', enum: Instrument })
  instrument!: Instrument;

  @Column({ type: 'enum', enum: ScaleMemberStatus })
  status!: ScaleMemberStatus;
}
