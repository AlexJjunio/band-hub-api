import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateSongDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsUrl()
  youtube_url: string;
}
