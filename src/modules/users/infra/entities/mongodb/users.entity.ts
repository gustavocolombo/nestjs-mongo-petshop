import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ minlength: 4, maxlength: 12, required: true })
  password: string;

  @Prop({ required: true })
  age: number;
}

export const UsersSchema = SchemaFactory.createForClass(User);
