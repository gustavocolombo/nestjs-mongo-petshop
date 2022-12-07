import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Animals } from './animals.entity';

export type CatsDocument = HydratedDocument<Cats>;

@Schema()
export class Cats extends Animals {
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({ required: false, default: 4 })
  paws?: number;

  @Prop({ default: 'cat', required: false })
  specie: string;

  @Prop({ required: true })
  race: string;

  @Prop({ required: true })
  coatColor: string;
}

export const CatsSchema = SchemaFactory.createForClass(Cats);
