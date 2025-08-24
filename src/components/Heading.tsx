import styles from './Heading.module.css';

type Heading = {
  children: string;
};
export function Heading(props: Heading) {
  return <h1 className={styles.heading}>{props.children}</h1>;
}
