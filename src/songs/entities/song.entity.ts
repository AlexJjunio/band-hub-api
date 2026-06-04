import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('songs')
export class Song {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    title: string;

    @Column()
    youtube_url: string;
}
