import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Transaction extends Document {
  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  category: string;

  @Prop()
  description: string;

  @Prop()
  tags: string[];

  @Prop({ required: true })
  userId: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
