import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class createUserDto {
  @IsNotEmpty()
  readonly firstName: string;
  @IsNotEmpty()
  readonly lastName: string;
  @IsEmail()
  readonly email: string;
  @IsNotEmpty()
  readonly password: string;
  @IsOptional()
  title?: string;
  @IsOptional()
  penName: string;
  @IsOptional()
  description?: string;
}
