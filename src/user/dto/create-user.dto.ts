import { IsEmpty, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Max, MaxLength, Min, min, MinLength } from "class-validator"

export enum UserRole {
    MALE = 'male',
    FEMALE = 'female'
}

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(64)
    @MinLength(4)
    fullname: string
    
    @IsNotEmpty()
    @IsNumber()
    @Min(18)
    @Max(40)
    age: number
    
    @IsNotEmpty()
    @IsString()
    @MaxLength(64)
    @MinLength(7)
    username: string
    
    @IsNotEmpty()
    @IsString()
    @MaxLength(32)
    @MinLength(8)
    password: string

    @IsOptional()
    @IsEnum(UserRole)
    role: UserRole
}
