import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScalesModule } from './scales/scales.module';
import { SongsModule } from './songs/songs.module';
import { UsersModule } from './users/users.module';
import { ScaleSongsModule } from './scale-songs/scale-songs.module';
import { ScaleMembersModule } from './scale-members/scale-members.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const dbUrl = config.get<string>('DATABASE_URL');
        const isInternalNetwork = dbUrl?.includes('.internal');
        return {
          type: 'postgres',
          url: dbUrl,
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,
          ssl: isInternalNetwork ? false : { rejectUnauthorized: false },
        };
      },
    }),
    ScalesModule,
    SongsModule,
    UsersModule,
    ScaleSongsModule,
    ScaleMembersModule,
    AuthModule,
  ],
})
export class AppModule {}
