import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDTO } from '../../../dtos/cats/create-cats.dto';
import { UpdateCatDTO } from '../../../dtos/cats/update-cat.dto';
import { Cats, CatsDocument } from '../../entities/mongodb/cats.entity';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cats.name) private catsModel: Model<CatsDocument>) {}

  async create(createCatDTO: CreateCatDTO): Promise<Cats> {
    const cat = await this.catsModel.create({ ...createCatDTO });

    return cat;
  }

  async show(): Promise<Cats[] | []> {
    const Cats = await this.catsModel.find().exec();

    return Cats || [];
  }

  async index(id: string): Promise<Cats | []> {
    const cat = await this.catsModel.findById(id).exec();

    return cat || [];
  }

  async update(updatedCatDTO: UpdateCatDTO): Promise<Cats> {
    const cat = await this.catsModel.findOne({ _id: updatedCatDTO.id }).exec();

    if (!cat) throw new BadRequestException('cat was not found');

    await this.catsModel.updateOne(
      { _id: cat.id },
      {
        ...updatedCatDTO,
      },
    );

    return await this.catsModel.findById(cat.id).exec();
  }

  async delete(id: string): Promise<boolean> {
    const cat = await this.catsModel.findById(id).exec();

    if (!cat) throw new BadRequestException('cat was not found');

    const deletedCat = await this.catsModel.deleteOne({ id });

    return deletedCat ? deletedCat.deletedCount === 1 : false;
  }
}
