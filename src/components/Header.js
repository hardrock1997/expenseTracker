import BalanceCard from './BallanceCard';
import ExpenseCard from './ExpenseCard';
import styles from  './Header.module.css';
export default function Header() {
    return (
        <div className={styles.container}>
            <BalanceCard/>
            <ExpenseCard/>
        </div>
    )
}