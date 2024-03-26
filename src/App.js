import Body from './components/Body';
import './App.css';
import { balanceAndExpenseContext } from './context/BalanceAndExpenseContext';

const initials={balance:5000,expense:0}

function App() {
  return (
  <div className="App">
    <balanceAndExpenseContext.Provider value={initials}>
      <Body/>
    </balanceAndExpenseContext.Provider>
  </div>
  );
}

export default App;
