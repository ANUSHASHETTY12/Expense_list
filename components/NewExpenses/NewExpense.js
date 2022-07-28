import React, { useState } from "react";
import ExpenseForm from "./ExpenseFrom";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isediting, setIsediting] = useState(false);

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsediting(false);
  };

  const startEditingHandler = () => {
    setIsediting(true);
  };

  const stopEditingHandler = () => {
    setIsediting(false);
  };

  return (
    <div className="new-expense">
      {!isediting && (
        <button onClick={startEditingHandler}> Add new expenses</button>
      )}
      {isediting && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
