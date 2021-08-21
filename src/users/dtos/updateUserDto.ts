import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class userUpdateDto {
  @IsNotEmpty()
  readonly firstName: string;
  @IsNotEmpty()
  readonly lastName: string;
  @IsEmail()
  readonly email: string;
  @IsOptional()
  title?: string;
  @IsOptional()
  penName?: string;
  @IsOptional()
  description?: string;
}