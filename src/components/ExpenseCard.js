import styles from './ExpenseCard.module.css';
export default function ExpenseCard() {
    return (
        <div>
        <div className={styles.ExpenseCard}>
            <div className={styles.expense}>
                <h2>Expenses:<span>Rs 500</span></h2>
            </div>
            <div className={styles.btn}>
                <span>+ Add Income</span>
            </div>

        </div>
        </div>
    )
}