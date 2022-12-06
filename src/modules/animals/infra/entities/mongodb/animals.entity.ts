import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type AnimalsDocument = HydratedDocument<Animals>;

@Schema()
export class Animals {
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  specie: string;
}

export const AnimalsSchema = SchemaFactory.createForClass(Animals);
