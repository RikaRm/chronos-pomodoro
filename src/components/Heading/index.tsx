import type React from 'react';
import styles from './styles.module.css';

type Heading = {
  children: React.ReactNode;
};
export function Heading({ children }: Heading) {
  return <h1 className={styles.heading}>{children}</h1>;
}
