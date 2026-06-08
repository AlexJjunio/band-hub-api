import { UserRole } from '../enums/user-role.enum';
import { Instrument } from '../../common/enums/instrument.enum';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { AuditEntity } from '../../common/entities/audit.entity';

@Entity('users')
export class User extends AuditEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.MUSICIAN,
  })
  role: UserRole;

  // Instrumentos que o músico sabe tocar. Só relevante para role = musician;
  // demais perfis ficam com array vazio. Ver docs/convencao-enums.md.
  @Column({
    type: 'enum',
    enum: Instrument,
    array: true,
    default: [],
  })
  instruments: Instrument[];
}
