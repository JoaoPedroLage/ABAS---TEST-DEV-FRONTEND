import styles from '../styles/page.module.css';
import Header from '../components/HeaderMainPage';
import UserAccountsList from '@/components/UserAccountsList';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Header />
        <UserAccountsList />
      </div>
    </main>
  )
}
