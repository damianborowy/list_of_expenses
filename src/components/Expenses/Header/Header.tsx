import { observer } from 'mobx-react-lite';
import { ChangeEvent, useState } from 'react';
import { TbPencil, TbPencilCancel } from 'react-icons/tb';

import Input from '@/components/Input/Input';
import { useStore } from '@/contexts/storeContext';

import styles from './Header.module.scss';

const Header = () => {
  const { expensesStore } = useStore();
  const [isEditing, setIsEditing] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(expensesStore.exchangeRate.toString());

  const toggleExchangeRateEdition = () => setIsEditing((previousState) => !previousState);

  const handleExchangeRateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.replace(',', '.');
    const parsedValue = Number.parseFloat(newValue);

    setExchangeRate(newValue);
    expensesStore.exchangeRate = isNaN(parsedValue) ? 0 : parsedValue;
  };

  return (
    <div className={styles.wrapper}>
      <h1>List of expenses</h1>
      <div className={styles.exchangeRateWrapper}>
        {isEditing ? (
          <div className={styles.exchangeRate}>
            1 EUR = <Input value={exchangeRate} onChange={handleExchangeRateChange} /> PLN
          </div>
        ) : (
          <div className={styles.exchangeRate}>1 EUR = {expensesStore.exchangeRate} PLN</div>
        )}
        <button className={styles.editToggleButton} onClick={toggleExchangeRateEdition}>
          {isEditing ? <TbPencilCancel /> : <TbPencil />}
        </button>
      </div>
    </div>
  );
};

export default observer(Header);
