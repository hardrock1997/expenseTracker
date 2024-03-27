import styles from './ExpenseCard.module.css';
import { useContext } from 'react';
import { BalanceAndExpenseContext } from '../context/BalanceAndExpenseContext';
import ReactModal from 'react-modal';
import { useState,useRef } from 'react';
import { useSnackbar } from 'notistack';
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
    const priceRef=useRef(0);
    const [isModalOpen,setIsModalOpen]=useState(false);
    const [exp,setExp]=useState({title:'',price:0,dateOfExpense:'',category:''});
    const [title,setTitle]=useState('');
    const [price,setPrice]=useState(0);
    const [date,setDate]=useState('');
    const [category,setCategory]=useState('');
    const {balance,addExpense,manageBalance} = useContext(BalanceAndExpenseContext);
    const {enqueueSnackbar}=useSnackbar();
    function openModal() {
        setIsModalOpen(true)
    }
    function closeModal() {
        setIsModalOpen(false)
    }
    function handleExpense() {
        if(priceRef.current+price<=balance) {
            priceRef.current+=price;
        }
        else {
            enqueueSnackbar('Not Enough Balance!!!',{autoHideDuration:3000})
        }
        setExp({...exp,title:title,price:priceRef.current,dateOfExpense:date,category:category});
        setIsModalOpen(false)
    }
    function pushExpenses() {
        addExpense(exp);
        manageBalance(exp.price);
    }
  
    return (
        <div>
        <div className={styles.ExpenseCard}>
            <div className={styles.expense}>
                <h2>Expenses:<span>Rs {priceRef.current}</span></h2>
            </div>
            <div className={styles.btn} onClick={openModal}>
                <span>+ Add Expenses</span>
            </div>
            <ReactModal isOpen={isModalOpen} style={modalStyle} onAfterClose={pushExpenses} >
                <form>
                    <h2>Add Expense</h2>
                    <div className={styles.firstInput}>
                        <input placeholder='Title' type='text' onChange={(e)=>setTitle(e.target.value)}/>
                        <input placeholder='Price'type='text' onChange={(e)=>setPrice(Number(e.target.value))}/>
                    </div>
                    <div className={styles.secondInput}>
                        <input placeholder='select Category' type='text' onChange={(e)=>setCategory(e.target.value)}/>
                        <input placeholder='dd/mm/yyyy' type='date' onChange={(e)=>setDate(e.target.value)}/>
                    </div>
                    <div className={styles.thirdInput}>
                        <span className={styles.addExpense} onClick={handleExpense}>Add Expense</span>
                        <span className={styles.cancel} onClick={closeModal}>Cancel</span>
                    </div>
                </form>
            </ReactModal>
        </div>
        </div>
    )
}