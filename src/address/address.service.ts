import { ConflictException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from 'src/entities/address.entity';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepo: Repository<Address>,
  ) { }

  async create(createAddressDto: CreateAddressDto) {
    const address = this.addressRepo.create(createAddressDto)
    await this.addressRepo.save(address)
    return address
  }

  async findAll() {
    const address = await this.addressRepo.find({ relations: ['user'] })
    return address
  }

  async findOne(id: number): Promise<Address> {
    const address = await this.addressRepo.findOneBy({ id })
    if (!address) {
      throw new HttpException('Address not found', HttpStatus.NOT_FOUND);
    }
    return address
  }

  async update(id: number, updateAddressDto: UpdateAddressDto) {
    let address = await this.addressRepo.findOneBy({ id })
    if (!address) {
      return new HttpException('Address not found', HttpStatus.NOT_FOUND);
    }
    const newAddress = await this.addressRepo.update({ id }, { ...updateAddressDto });
    return `Updated address 👌🏻 ${address.address}`
  }

  async remove(id: number) {
    let address = await this.addressRepo.findOneBy({ id })
    if (!address) {
      return new HttpException('Address not found', HttpStatus.NOT_FOUND);
    }
    await this.addressRepo.delete(id);
    return `Deleted 🛒 👌🏻 ${address.address}`
  }
}
