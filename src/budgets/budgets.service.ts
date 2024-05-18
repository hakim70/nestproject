import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Budget, BudgetDocument } from './budget.schema';

@Injectable()
export class BudgetsService {
  constructor(@InjectModel(Budget.name) private budgetModel: Model<BudgetDocument>) {}

  async findAll(): Promise<Budget[]> {
    return this.budgetModel.find().exec();
  }
}
