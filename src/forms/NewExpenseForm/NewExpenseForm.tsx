import { zodResolver } from '@hookform/resolvers/zod';
import { observer } from 'mobx-react-lite';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import Input from '@/components/Input';
import { useStore } from '@/contexts/storeContext';
import { NewExpense } from '@/stores/expenses/models';

import styles from './NewExpenseForm.module.scss';

const schema = z.object({
  title: z.string().min(5, 'Title must contain at least 5 characters'),
  amountPln: z
    .number({ invalid_type_error: 'Amount must be a number' })
    .positive()
    .refine(
      (amount) => amount * 100 - Math.trunc(amount * 100) < Number.EPSILON,
      'Value should have at most two decimal points',
    ),
});

const NewExpenseForm = () => {
  const { expensesStore } = useStore();

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<NewExpense>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<NewExpense> = (formData) => {
    expensesStore.addExpense(formData);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputs}>
        <div className={styles.input}>
          <label htmlFor="title">Title of transaction</label>
          <Input {...register('title')} id="title" errorText={errors.title?.message} showEmptyErrorSpacer />
        </div>
        <div className={styles.input}>
          <label htmlFor="amountPln">Amount (in PLN)</label>
          <Input
            {...register('amountPln', { valueAsNumber: true })}
            id="amountPln"
            errorText={errors.amountPln?.message}
            showEmptyErrorSpacer
          />
        </div>
      </div>
      <div className={styles.actions}>
        <button type="submit" className={styles.submitButton}>
          Add
        </button>
      </div>
    </form>
  );
};

export default observer(NewExpenseForm);
