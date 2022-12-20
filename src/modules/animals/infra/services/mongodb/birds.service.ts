import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBirdDTO } from '../../../dtos/birds/create-birds.dto';
import { UpdateBirdDTO } from '../../../dtos/birds/update-birds.dto';
import { Birds, BirdsDocument } from '../../entities/mongodb/birds.entity';

@Injectable()
export class BirdsService {
  constructor(
    @InjectModel(Birds.name) private birdsModel: Model<BirdsDocument>,
  ) {}

  async create(CreateBirdDTO: CreateBirdDTO): Promise<Birds> {
    const cat = await this.birdsModel.create({ ...CreateBirdDTO });

    return cat;
  }

  async show(): Promise<Birds[] | []> {
    const Birds = await this.birdsModel.find().exec();

    return Birds || [];
  }

  async index(id: string): Promise<Birds | []> {
    const cat = await this.birdsModel.findById(id).exec();

    return cat || [];
  }

  async update(updateBirdDTO: UpdateBirdDTO): Promise<Birds> {
    const cat = await this.birdsModel.findOne({ _id: updateBirdDTO.id }).exec();

    if (!cat) throw new BadRequestException('cat was not found');

    await this.birdsModel.updateOne(
      { _id: cat.id },
      {
        ...updateBirdDTO,
      },
    );

    return await this.birdsModel.findById(cat.id).exec();
  }

  async delete(id: string): Promise<boolean> {
    const cat = await this.birdsModel.findById(id).exec();

    if (!cat) throw new BadRequestException('cat was not found');

    const deletedCat = await this.birdsModel.deleteOne({ id });

    return deletedCat ? deletedCat.deletedCount === 1 : false;
  }
}
