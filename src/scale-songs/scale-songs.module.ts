import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScaleSong } from './entities/scale-song.entity';
import { ScaleSongsController } from './scale-songs.controller';
import { ScaleSongsService } from './scale-songs.service';

@Module({
  imports: [TypeOrmModule.forFeature([ScaleSong])],
  controllers: [ScaleSongsController],
  providers: [ScaleSongsService],
})
export class ScaleSongsModule {}
