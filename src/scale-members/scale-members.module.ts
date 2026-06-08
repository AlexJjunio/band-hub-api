import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScaleMember } from './entities/scale-member.entity';
import { User } from '../users/entities/user.entity';
import { ScaleMembersController } from './scale-members.controller';
import { ScaleMembersService } from './scale-members.service';

@Module({
  imports: [TypeOrmModule.forFeature([ScaleMember, User])],
  controllers: [ScaleMembersController],
  providers: [ScaleMembersService],
})
export class ScaleMembersModule {}
