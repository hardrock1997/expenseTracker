import styles from './BalanceCard.module.css';
import { useContext } from 'react';
import { balanceAndExpenseContext } from '../context/BalanceAndExpenseContext';
import { useState } from 'react';
import ReactModal from 'react-modal';
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
        height:164,
        top:'30%',
        left:'30%'
        
    }
}
export default function BalanceCard() {
    const [isModalOpen,setIsModalOpen]=useState(false);
    const {balance} = useContext(balanceAndExpenseContext);
    function openModal() {
        setIsModalOpen(true)
    }
    function closeModal() {
        setIsModalOpen(false)
    }
    return (
        <div className={styles.balanceCard}>
            <div className={styles.balance}>
                <h2>Wallet Balance:<span>Rs {balance}</span></h2>
            </div>
            <div className={styles.btn} onClick={openModal}>
                <span>+ Add Income</span>
            </div>
            <ReactModal isOpen={isModalOpen} style={modalStyle}>
                <form>
                    <h2>Add Balance</h2>
                    <div className={styles.firstInput}>
                        <input placeholder='Income amount' type='text'/>
                        <span className={styles.addExpense}>Add Balance</span>
                        <span className={styles.cancel} onClick={closeModal}>Cancel</span>
                    </div>
                </form>
            </ReactModal>
        </div>
    )
}