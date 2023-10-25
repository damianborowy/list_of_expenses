import { makeAutoObservable } from 'mobx';

import { Expense, NewExpense } from './models';

export default class ExpensesStore {
  public exchangeRate: number = 4.382;
  public expenses: Expense[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  public get sumPln(): number {
    return this.expenses.reduce((sum, expense) => sum + expense.amountPln, 0);
  }

  public get sumEur(): number {
    return this.expenses.reduce((sum, expense) => sum + expense.amountEur, 0);
  }

  public addExpense({ title, amountPln }: NewExpense) {
    this.expenses.push(new Expense(this, title, amountPln));
  }

  public removeExpense(expenseId: string) {
    const expenseIndex = this.expenses.findIndex((expense) => expense.id == expenseId);

    this.expenses.splice(expenseIndex, 1);
  }
}
