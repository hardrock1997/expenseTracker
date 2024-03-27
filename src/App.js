import Body from './components/Body';
import './App.css';
import {BalanceAndExpenseProvider } from './context/BalanceAndExpenseContext';

// const initials={balance:5000,expenses:[],AddedBalance:0}

function App() {
  return (
  <div className="App">
    {/* <balanceAndExpenseContext.Provider value={initials}>
      <Body/>
    </balanceAndExpenseContext.Provider> */}
    <BalanceAndExpenseProvider>
      <Body/>
    </BalanceAndExpenseProvider>
  </div>
  );
}

export default App;
