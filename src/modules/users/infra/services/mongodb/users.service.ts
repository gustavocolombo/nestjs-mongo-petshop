import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { hash } from 'bcryptjs';
import { Model } from 'mongoose';
import { CreateUserDTO } from '../../../dtos/create-user.dto';
import { UpdateUserDTO } from '../../../dtos/update-user.dto';
import {
  Address,
  AddressDocument,
} from '../../entities/mongodb/address.entity';
import { User, UserDocument } from '../../entities/mongodb/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Address.name) private addressModel: Model<AddressDocument>,
  ) {}

  async create(createUserDTO: CreateUserDTO): Promise<any> {
    let user = await this.userModel.findOne({
      email: createUserDTO.email,
    });

    if (user) throw new BadRequestException('User with e-mail already exists');

    user = await this.userModel.create({
      password: await hash(createUserDTO.password, 8),
      ...createUserDTO,
    });

    const address = await this.addressModel.create({
      state: createUserDTO.state,
      city: createUserDTO.city,
      number: createUserDTO.number,
      neighbourhood: createUserDTO.neighbourhood,
      zipCode: createUserDTO.zipCode,
      street: createUserDTO.street,
      user: user.id,
    });

    delete user.password;

    return Object.assign(user, { address: address });
  }

  async index(id: string): Promise<User | null> {
    let user = await this.userModel.findById(id);

    return user ? user : null;
  }

  async update(id: string, updateUserDTO: UpdateUserDTO): Promise<User> {
    const user = await this.userModel.findById(id);

    if (!user) throw new BadRequestException('User not found');

    await this.userModel.updateOne({ ...updateUserDTO });

    const updatedUser = await this.userModel.findById(user.id);

    return updatedUser;
  }

  async delete(id: string): Promise<any> {
    const user = await this.userModel.findById(id);

    if (!user) throw new BadRequestException('User not found');

    const deletedUser = await this.userModel.deleteOne({ _id: id });

    return deletedUser.deletedCount === 1;
  }
}
