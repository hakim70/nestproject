import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Transaction } from './transaction.schema';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Post()
  async create(@Body() transaction: Transaction) {
    return this.transactionsService.create(transaction);
  }

  @Get(':userId')
  async findAll(@Param('userId') userId: string) {
    return this.transactionsService.findAll(userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.transactionsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() transaction: Transaction) {
    return this.transactionsService.update(id, transaction);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.transactionsService.delete(id);
  }
}
