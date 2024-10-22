import { PartialType } from '@nestjs/mapped-types';
import { CreateAddressDto } from './create-address.dto';
import { IsNumber, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateAddressDto extends PartialType(CreateAddressDto) {
    @IsOptional()
    @IsString()
    @MaxLength(64)
    @MinLength(4)
    city: string
    
    @IsOptional()
    postal_code: number;

    @IsOptional()
    @IsString()
    @MaxLength(128)
    @MinLength(4)
    addres: string

    @IsOptional()
    @IsNumber()
    userId: number
}
