import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDogDTO } from '../../../dtos/create-dogs.dto';
import { UpdateDogDTO } from '../../../dtos/update-dog.dto';
import { Dogs, DogsDocument } from '../../entities/mongodb/dogs.entity';

@Injectable()
export class DogsService {
  constructor(@InjectModel(Dogs.name) private dogsModel: Model<DogsDocument>) {}

  async create(createDogDTO: CreateDogDTO): Promise<Dogs> {
    const dog = await this.dogsModel.create(createDogDTO);

    return dog;
  }

  async show(): Promise<Dogs[] | []> {
    const dogs = await this.dogsModel.find().exec();

    return dogs || [];
  }

  async index(id: string): Promise<Dogs | []> {
    const dog = await this.dogsModel.findById(id).exec();

    return dog || [];
  }

  async update(updatedDogDTO: UpdateDogDTO): Promise<Dogs> {
    const dog = await this.dogsModel.findById(updatedDogDTO.id).exec();

    if (!dog) throw new BadRequestException('Dog was not found');

    await this.dogsModel.updateOne({
      _id: updatedDogDTO.id,
      ...updatedDogDTO,
    });

    return await this.dogsModel.findById(dog.id).exec();
  }

  async delete(id: string): Promise<boolean> {
    const dog = await this.dogsModel.findById(id).exec();

    if (!dog) throw new BadRequestException('Dog was not found');

    const deletedDog = await this.dogsModel.deleteOne({ id });

    return deletedDog ? deletedDog.deletedCount === 1 : false;
  }
}
