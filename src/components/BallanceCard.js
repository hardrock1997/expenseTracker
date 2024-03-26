import styles from './BalanceCard.module.css';
export default function BalanceCard() {
    return (
        <div className={styles.balanceCard}>
            <div className={styles.balance}>
                <h2>Wallet Balance:<span>Rs 4500</span></h2>
            </div>
            <div className={styles.btn}>
                <span>+ Add Income</span>
            </div>

        </div>
    )
}