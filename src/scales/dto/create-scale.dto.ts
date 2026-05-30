import { ScaleEvent } from '../enums/scale-event.enum';

export class CreateScaleDto {
    event_name: ScaleEvent;
    date: string;
    time: string;
    location: string;
    created_by: number;
  }