import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';
import { Model } from 'mongoose';
import { createUserDto, userUpdateDto } from './dtos';
import { User, UserDocument } from './schemas/users.schema';
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) { }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    if (users) {
      return users;
    } else {
      throw new UnauthorizedException('users does not exist');
    }
  }

  async findOne(email: string): Promise<User> {
    const user = await this.userModel.findOne({ email: email }).exec();
    if (user) {
      return user;
    } else {
      throw new UnauthorizedException('user does not exist');
    }
  }
  async delete(id: string): Promise<{ deleted: boolean }> {
    try {
      this.userModel.findByIdAndRemove(id).exec();
      return { deleted: true };
    }
    catch {
      throw new UnauthorizedException('user does not exist');

    }
  }
  hashPassword(password: string): string {
    const pass = bcrypt.hashSync(password, 10);
    return pass;
  }


  async update(id, user: userUpdateDto) {
    try {
      return await this.userModel.findByIdAndUpdate({ id, ...user }).exec();
    }
    catch (error) {
      console.log(error)
    }
  }

  async create(userData: createUserDto): Promise<User> {
    const newUser = new this.userModel(userData);
    newUser.password = this.hashPassword(newUser.password);
    if (newUser) {
      return await newUser.save();
    } else {
      throw new UnauthorizedException('cannot update user');

    }
  }
}