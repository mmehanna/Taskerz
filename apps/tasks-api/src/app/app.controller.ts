import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';

import {TasksService} from "./TasksService";

@Controller()
export class AppController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tasksService.findOne(id);
  }

  @Post()
  create(@Body() task) {
    return this.tasksService.create(task);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() task) {
    return this.tasksService.update(id, task);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tasksService.remove(id);
  }
}
