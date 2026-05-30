import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScalesModule } from './scales/scales.module';

@Module({
  imports: [ScalesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
