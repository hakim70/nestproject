import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BudgetDocument = Budget & Document;

@Schema()
export class Budget {
  @Prop()
  category: string;

  @Prop()
  amount: number;

  @Prop()
  month: number;

  @Prop()
  year: number;
}

export const BudgetSchema = SchemaFactory.createForClass(Budget);