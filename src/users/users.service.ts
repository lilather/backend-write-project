import { User, UserDocument } from './schemas/users.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class UsersService {
constructor(@InjectModel(User.name) private catModel: Model<UserDocument>) {}
}