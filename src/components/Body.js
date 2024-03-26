import styles from './Body.module.css';
import Header from './Header';
export default function Body()  {
    return (
        <div className={styles.container}>
            <h1>Expense Tracker</h1>
            <Header/>
        </div>
    )
}