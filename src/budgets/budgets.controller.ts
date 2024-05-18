import { Controller, Get } from '@nestjs/common';
import { Budget } from './budget.schema';
import { BudgetsService } from './budgets.service';

@Controller('budgets')
export class BudgetsController {
  constructor(private readonly budgetsService: BudgetsService) {}

  @Get()
  findAll(): Promise<Budget[]> {
    return this.budgetsService.findAll();
  }
}
