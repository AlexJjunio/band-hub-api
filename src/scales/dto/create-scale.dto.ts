import { ScaleEvent } from '../enums/scale-event.enum';

export class CreateScaleDto {
    event: ScaleEvent;
    date: string;
    time: string;
    location: string;
    created_by: number;
  }