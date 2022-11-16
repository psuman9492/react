import "./ExpenseItem.css";

function ExpressItem() {
  const expenseDate = new Date(2021, 5, 30);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 198.99;

  return (
    <div className="expense-item">
      <div>{expenseDate}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpressItem;
