import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TasksService} from "./TasksService";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,TasksService],
})
export class AppModule {}
