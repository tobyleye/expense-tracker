import { Link } from "react-router-dom";
import "./welcome.css";

type transactionType =  'expense' | 'income';
interface ITransaction {
  title: string;
  date: string;
  amount: number;
  type: transactionType
}

const transactions: Array<ITransaction> = [
  { title: 'Food', date: '5:17 AM', amount: 89, type: 'expense' },
  { title: 'Groceries', date: '5:17 AM', amount: 123, type: 'expense' },
  { title: 'Flight Ticket', date: '5:17 AM', amount: 567, type: 'expense' },
  { title: 'Payday', date: '5:17 AM', amount: 345, type: 'income' },
]

function formatAmount(amount: number, type: transactionType ) {
  if (type === "expense") {
    return `-$${amount}`
  }
  return `$${amount}`
}

export default function Welcome() {

  return (
    <div className="welcome">

      <nav className="navigation">
        <Link to="login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <div className="welcome-grid">
        <div className="welcome__left">
          <h1 className="welcome__title">Welcome to Expense Tracker</h1>
          <Link to="/register" className="welcome__cta">Get Stared</Link>
        </div>

        <div className="welcome__right">
          <div className="sneak-peak">
            <div className="txn-container">
              <p>All transactions</p>

              <ul>
                {transactions.map((transaction, index) => (
                  <li className={`txn txn--${transaction.type}`}>
                    <div className="txn__icon"></div>
                    <div className="txn__title">
                      <h3>{transaction.title}</h3>
                      <time>{transaction.date}</time>
                    </div>
                    <div className="txn__amount">
                      
                      {formatAmount(transaction.amount, transaction.type)}
                    </div>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>
      {/* <footer className="footer">Tobi oyeleye</footer> */}
    </div>
  );
}
