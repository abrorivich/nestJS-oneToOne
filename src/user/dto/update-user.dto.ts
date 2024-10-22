import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto, UserRole } from './create-user.dto';
import { IsEmpty, IsEnum, IsNumber, IsOptional, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsOptional()
    @IsString()
    @MaxLength(64)
    @MinLength(7)
    fullname: string
    
    @IsOptional()
    @IsNumber()
    @Min(18)
    @Max(40)
    age: number
    
    @IsOptional()
    @IsString()
    @MaxLength(64)
    @MinLength(7)
    username: string
    
    @IsOptional()
    @IsString()
    @MaxLength(32)
    @MinLength(8)
    password: string

    @IsOptional()
    @IsEnum(UserRole)
    role: UserRole
}
