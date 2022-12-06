import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Animals } from './animals.entity';

export type DogsDocument = HydratedDocument<Dogs>;

@Schema()
export class Dogs extends Animals {
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({ required: false, default: 4 })
  paws?: number;

  @Prop({ required: true })
  race: string;

  @Prop({ required: true })
  coatColor: string;
}

export const DogsSchema = SchemaFactory.createForClass(Dogs);
