import { observer } from 'mobx-react-lite';

import { useStore } from '@/contexts/storeContext';

import styles from './Table.module.scss';
import TableRow from './TableRow';

const Table = () => {
  const { expensesStore } = useStore();

  return (
    <table className={styles.table}>
      <thead className={styles.tableHead}>
        <tr>
          <th>Title</th>
          <th>Amount (PLN)</th>
          <th>Amount (EUR)</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {expensesStore.expenses.map((expense) => (
          <TableRow key={expense.id} expense={expense} />
        ))}
      </tbody>
    </table>
  );
};

export default observer(Table);
