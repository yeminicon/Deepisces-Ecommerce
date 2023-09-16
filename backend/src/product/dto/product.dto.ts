import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty() // Corrected decorator
  @IsString()
  sellerId: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsString()
  detail: string;

  @IsNotEmpty() // Corrected decorator
  @IsString()
  imageUrl: string;
}
