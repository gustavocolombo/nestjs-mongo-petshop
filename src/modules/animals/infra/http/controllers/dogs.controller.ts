import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateDogDTO } from '../../../dtos/dogs/create-dogs.dto';
import { UpdateDogDTO } from '../../../dtos/dogs/update-dog.dto';
import { DogsService } from '../../services/mongodb/dogs.service';

@Controller('animals/dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Post()
  async createDog(@Body() createDogDTO: CreateDogDTO) {
    return await this.dogsService.create(createDogDTO);
  }

  @Get()
  async getAllDogs() {
    return await this.dogsService.show();
  }

  @Get(':id')
  async getOneDog(@Param('id') id: string) {
    return await this.dogsService.index(id);
  }

  @Patch(':id')
  async updateDog(
    @Param('id') id: string,
    @Body() updatedDogDTO: UpdateDogDTO,
  ) {
    Object.assign(updatedDogDTO, { id: id });
    return await this.dogsService.update(updatedDogDTO);
  }

  @Delete(':id')
  async deleteDog(@Param('id') id: string) {
    return await this.dogsService.delete(id);
  }
}
