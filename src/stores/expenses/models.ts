import ExpensesStore from './store';

export type NewExpense = {
  title: string;
  amountPln: number;
};

export class Expense {
  public id: string;

  constructor(
    public expensesStore: ExpensesStore,
    public title: string,
    public amountPln: number,
  ) {
    this.id = crypto.randomUUID();
  }

  public get amountEur() {
    return this.amountPln / this.expensesStore.exchangeRate;
  }
}
