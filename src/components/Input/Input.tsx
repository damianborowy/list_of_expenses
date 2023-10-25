import { ComponentPropsWithoutRef, forwardRef } from 'react';

import styles from './Input.module.scss';

type BaseInputProps = ComponentPropsWithoutRef<'input'>;

type InputProps = BaseInputProps & {
  errorText?: string;
  showEmptyErrorSpacer?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(({ errorText, showEmptyErrorSpacer = false, ...props }, ref) => {
  const shouldShowError = Boolean(errorText) || showEmptyErrorSpacer;

  return (
    <div className={styles.wrapper}>
      <input className={styles.input} ref={ref} {...props} />
      {shouldShowError && <span className={styles.errorText}>{errorText}</span>}
    </div>
  );
});

export default Input;
