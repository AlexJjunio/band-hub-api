import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scale } from './entities/scale.entity';
import { ScalesService } from './scales.service';
import { ScalesController } from './scales.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Scale])],
  controllers: [ScalesController],
  providers: [ScalesService],
})
export class ScalesModule {}
