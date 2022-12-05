import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDTO } from '../../../dtos/create-user.dto';
import { UpdateUserDTO } from '../../../dtos/update-user.dto';
import { User } from '../../entities/mongodb/users.entity';
import { UsersService } from '../../services/mongodb/users.service';

@Controller('users')
export class UserController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDTO: CreateUserDTO): Promise<User> {
    return await this.usersService.create(createUserDTO);
  }

  @Get('/:id')
  async getUser(@Param('id') id: string): Promise<User> {
    return await this.usersService.index(id);
  }

  @Patch('/:id')
  async patchUser(
    @Body() updateUserDTO: UpdateUserDTO,
    @Param('id') id: string,
  ): Promise<any> {
    return await this.usersService.update(id, updateUserDTO);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string): Promise<any> {
    return await this.usersService.delete(id);
  }
}
