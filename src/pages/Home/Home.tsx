import { observer } from 'mobx-react-lite';

import Header from '@/components/Expenses/Header/Header';
import Table from '@/components/Expenses/Table/Table';
import { useStore } from '@/contexts/storeContext';
import NewExpenseForm from '@/forms/NewExpenseForm/NewExpenseForm';

import styles from './Home.module.scss';

const Home = () => {
  const { expensesStore } = useStore();
  const sumEur = expensesStore.sumEur === Infinity ? '-' : expensesStore.sumEur.toFixed(2);

  return (
    <main className={styles.wrapper}>
      <section className={styles.container}>
        <Header />
        <NewExpenseForm />
        <Table />
        <span>
          Sum: {expensesStore.sumPln.toFixed(2)} PLN ({sumEur} EUR)
        </span>
      </section>
    </main>
  );
};

export default observer(Home);
