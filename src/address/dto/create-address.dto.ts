import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator"

export class CreateAddressDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(64)
    @MinLength(4)
    city: string
    
    @IsNotEmpty()
    postal_code: number;

    @IsOptional()
    @IsString()
    @MaxLength(128)
    @MinLength(4)
    address: string

    @IsOptional()
    @IsNumber()
    userId: number
}
