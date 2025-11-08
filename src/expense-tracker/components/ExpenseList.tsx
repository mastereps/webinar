interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;
  return (
    <table className="m-2 w-full text-sm text-left text-gray-500">
      <thead className="">
        <tr>
          <th className="border px-6 py-3">Description</th>
          <th className="border px-6 py-3">Amount</th>
          <th className="border px-6 py-3">Category</th>
          <th className="border px-6 py-3"></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td className="border px-6 py-3">{expense.description}</td>
            <td className="border px-6 py-3">{expense.amount}</td>
            <td className="border px-6 py-3">{expense.category}</td>
            <td className="border px-6 py-3">
              <button
                className="border border-red-500 px-2 py-1"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td className="border px-6 py-3">Total</td>
          <td className="border px-6 py-3">
            $
            {expenses
              .reduce((acc, expense) => expense.amount + acc, 0)
              .toFixed(2)}
          </td>
          <td className="border px-6 py-3"></td>
          <td className="border px-6 py-3"></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
