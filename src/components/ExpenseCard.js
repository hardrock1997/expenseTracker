import styles from './ExpenseCard.module.css';
import { useContext } from 'react';
import { balanceAndExpenseContext } from '../context/BalanceAndExpenseContext';
import ReactModal from 'react-modal';
import { useState } from 'react';
const modalStyle={
    overlay:{
        width:'100%',
        height:'100%',
        background:'rgba(255,255,255,77%)'
    },
    content:{
        background:'#EFEFEF',
        border:'none',
        width:538,
        height:335,
        top:'30%',
        left:'30%'
        
    }
}
export default function ExpenseCard() {
    const [isModalOpen,setIsModalOpen]=useState(false);
    const {expense} = useContext(balanceAndExpenseContext);
    function openModal() {
        setIsModalOpen(true)
    }
    function closeModal() {
        setIsModalOpen(false)
    }
    return (
        <div>
        <div className={styles.ExpenseCard}>
            <div className={styles.expense}>
                <h2>Expenses:<span>Rs {expense}</span></h2>
            </div>
            <div className={styles.btn} onClick={openModal}>
                <span>+ Add Expenses</span>
            </div>
            <ReactModal isOpen={isModalOpen} style={modalStyle}>
                <form>
                    <h2>Add Expense</h2>
                    <div className={styles.firstInput}>
                        <input placeholder='Title' type='text'/>
                        <input placeholder='Price'type='text'/>
                    </div>
                    <div className={styles.secondInput}>
                        <input placeholder='select Category' type='text'/>
                        <input placeholder='dd/mm/yyyy' type='date'/>
                    </div>
                    <div className={styles.thirdInput}>
                        <span className={styles.addExpense}>Add Expense</span>
                        <span className={styles.cancel} onClick={closeModal}>Cancel</span>
                    </div>
                </form>
            </ReactModal>
        </div>
        </div>
    )
}