import { observer } from 'mobx-react-lite';

import { useStore } from '@/contexts/storeContext';
import { Expense } from '@/stores/expenses/models';

import styles from './TableRow.module.scss';

type TableRowProps = {
  expense: Expense;
};

const TableRow = ({ expense }: TableRowProps) => {
  const { expensesStore } = useStore();
  const { title, amountPln, amountEur, id } = expense;

  return (
    <tr className={styles.row}>
      <td>{title}</td>
      <td>{amountPln.toFixed(2)}</td>
      <td>{amountEur === Infinity ? '-' : amountEur.toFixed(2)}</td>
      <td>
        <button className={styles.deleteButton} onClick={() => expensesStore.removeExpense(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default observer(TableRow);
