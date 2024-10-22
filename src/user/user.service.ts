import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) { }

  async create(createUserDto: CreateUserDto) {
    const checkUsername = await this.userRepo.findOne({ where: { username: createUserDto.username } });
  if (checkUsername) {
    throw new NotFoundException(`We have such a username or password `);
  }
    const checkPassword = await this.userRepo.findOne({ where: { password: createUserDto.password } });
  if (checkPassword) {
    throw new NotFoundException(`We have such a username or password `);
  }
    const user = this.userRepo.create(createUserDto)
    await this.userRepo.save(user)
    return user
  }

  async findAll() {
    const user = await this.userRepo.find({ relations: ['address'] })
    return user
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepo.findOneBy({ id })
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    let user = await this.userRepo.findOneBy({ id })
    if (!user) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    await this.userRepo.update({ id }, { ...updateUserDto });
    return `Updated product 👌🏻 ${user.fullname}`
  }

  async remove(id: number) {
    let user = await this.userRepo.findOneBy({ id })
    if (!user) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    await this.userRepo.delete(id);
    return `Deleted 🛒 👌🏻 ${user.fullname}`
  }
}
