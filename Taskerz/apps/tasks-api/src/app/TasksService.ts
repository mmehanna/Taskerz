import { Injectable } from '@nestjs/common';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private idCounter = 1;

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: number): Task {
    return this.tasks.find(task => task.id === id);
  }

  create(task: Partial<Task>): Task {
    const newTask: Task = {
      id: this.idCounter++,
      title: task.title,
      description: task.description,
      completed: false,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  update(id: number, updateTask: Partial<Task>): Task {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex > -1) {
      const existingTask = this.tasks[taskIndex];
      const updatedTask = { ...existingTask, ...updateTask };
      this.tasks[taskIndex] = updatedTask;
      return updatedTask;
    }
    return null;
  }

  remove(id: number): boolean {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex > -1) {
      this.tasks.splice(taskIndex, 1);
      return true;
    }
    return false;
  }
}
