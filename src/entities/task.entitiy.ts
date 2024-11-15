import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('task')
export class Task {
  @PrimaryGeneratedColumn()
  task_id: number;

  @Column()
  title: string;

  @Column()
  description: string;
}
