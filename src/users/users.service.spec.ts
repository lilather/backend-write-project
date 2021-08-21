import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User, UserDocument } from './schemas/users.schema';
import { getModelToken, InjectModel } from '@nestjs/mongoose';

describe('UsersService', () => {
  let service: UsersService;
  const mockingUserModel = () => {
    find: jest.fn()
   }
   
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService,{
      provide:getModelToken('User'),
      useValue:mockingUserModel
    }
      ],
  
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
