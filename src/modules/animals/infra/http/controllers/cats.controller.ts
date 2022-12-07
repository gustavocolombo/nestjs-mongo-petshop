import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateCatDTO } from '../../../dtos/cats/create-cats.dto';
import { UpdateCatDTO } from '../../../dtos/cats/update-cat.dto';
import { CatsService } from '../../services/mongodb/cats.service';

@Controller('animals/cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async createCat(@Body() createCatDTO: CreateCatDTO) {
    return await this.catsService.create(createCatDTO);
  }

  @Get()
  async getAllCats() {
    return await this.catsService.show();
  }

  @Get(':id')
  async getOneCat(@Param('id') id: string) {
    return await this.catsService.index(id);
  }

  @Patch(':id')
  async updateCat(
    @Param('id') id: string,
    @Body() updatedCatDTO: UpdateCatDTO,
  ) {
    Object.assign(updatedCatDTO, { id: id });
    return await this.catsService.update(updatedCatDTO);
  }

  @Delete(':id')
  async deleteCat(@Param('id') id: string) {
    return await this.catsService.delete(id);
  }
}
