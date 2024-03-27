import { createContext, useState,useRef } from 'react';

export const BalanceAndExpenseContext = createContext();

export function BalanceAndExpenseProvider({ children }) {
    const [balance, setBalance] = useState(5000);
    const [expenses, setExpenses] = useState([]);
    const balanceRef=useRef(5000);
    console.log(balance,balanceRef.current)

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };
    const manageBalance = (price)=>{
            if(balanceRef.current-price===0) {
                setBalance(0);
                balanceRef.current=0;
            }
            else if(balanceRef.current-price>0) {
                setBalance((prevBalance)=>{
                    return prevBalance-price;
                })
                balanceRef.current-=price;
            }
    }
    const addBalance=(amount)=>{
        if(balance===0) {
            setBalance(amount);
            balanceRef.current=amount;
        }
        else if(balance>0) {
            setBalance(balance+amount);
        }
        
    }

    return (
        <BalanceAndExpenseContext.Provider value={{ balance, expenses, addExpense,manageBalance,addBalance }}>
            {children}
        </BalanceAndExpenseContext.Provider>
    );
};
