import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScaleMember } from './entities/scale-member.entity';
import { ScaleMembersController } from './scale-members.controller';
import { ScaleMembersService } from './scale-members.service';

@Module({
  imports: [TypeOrmModule.forFeature([ScaleMember])],
  controllers: [ScaleMembersController],
  providers: [ScaleMembersService],
})
export class ScaleMembersModule {}
