import styles from '../styles/page.module.css';
import Header from '../components/HeaderMainPage';
import AccountsList from '@/components/AccountsList';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Header />
        <AccountsList />
      </div>
    </main>
  )
}
