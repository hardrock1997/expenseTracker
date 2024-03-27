import { createContext, useState } from 'react';

export const BalanceAndExpenseContext = createContext();

export function BalanceAndExpenseProvider({ children }) {
    const [balance, setBalance] = useState(5000);
    const [expenses, setExpenses] = useState([]);

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };
    const manageBalance = (price)=>{
        if(balance-price>=0) {
            setBalance(balance-price);
        }
    }

    return (
        <BalanceAndExpenseContext.Provider value={{ balance, expenses, addExpense,manageBalance }}>
            {children}
        </BalanceAndExpenseContext.Provider>
    );
};
