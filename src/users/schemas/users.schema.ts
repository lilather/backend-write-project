import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: number;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop()
    description: string;

    @Prop()
    pen: string;

    @Prop()
    createdOn: Date;
    
    @Prop()
    updatedOn: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);