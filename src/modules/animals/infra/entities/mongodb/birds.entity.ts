import { Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Animals } from './animals.entity';

export type BirdsDocument = HydratedDocument<Birds>;

export class Birds extends Animals {
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({ default: 2 })
  paws?: number;

  @Prop({ default: 2 })
  wings?: number;

  @Prop({ required: true })
  race: string;

  @Prop({ default: 'bird', required: false })
  specie: string;
}

export const BirdsSchema = SchemaFactory.createForClass(Birds);
