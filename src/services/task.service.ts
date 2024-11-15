import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/entities/task.entitiy';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async findAll() {
    return this.taskRepository.find();
  }

  async create(task: Partial<Task>) {
    return this.taskRepository.save(task);
  }
}
