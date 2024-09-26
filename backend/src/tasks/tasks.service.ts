import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prismaService: PrismaService) {}

  create(createTaskDto: CreateTaskDto) {
    return this.prismaService.task.create({
      data: createTaskDto
    });
  }

  findAll() {
    return this.prismaService.task.findMany();
  }

  async findOne(id: number) {
    const taskFound = await this.prismaService.task.findUnique({
      where:{
        id:id
      }
    });
    if (!taskFound) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return taskFound;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const taskFound = await this.prismaService.task.update({
      where:{
        id,
      },
      data: updateTaskDto,
    });
    if (!taskFound) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return taskFound;
  }

  async remove(id: number) {
    const deletedTask = await this.prismaService.task.delete({
      where:{
        id
      }
    });
    if (!deletedTask) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return deletedTask;
  }
}
