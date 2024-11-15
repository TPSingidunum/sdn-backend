import { Controller, Get, Post, Body } from '@nestjs/common';
import { Task } from 'src/entities/task.entitiy';
import { TaskService } from 'src/services/task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Post()
  create(@Body() task: Partial<Task>) {
    return this.taskService.create(task);
  }
}
