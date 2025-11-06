// import styles from "./Button.module.css";

interface Props {
  color: "blue" | "purple";
  children: string;
  onClick: () => void;
}
// text-blue-700  border-blue-700 hover:bg-blue-800
// text-purple-700 border-purple-700 hover:bg-purple-800
const Button = ({ color, children, onClick }: Props) => {
  console.log(color);
  return (
    <>
      <button
        type="button"
        className={`text-${color}-700 border-${color}-700 hover:bg-${color}-800 hover:text-white border  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;

/*
  <>
      <button
        type="button"
        className={`text-${color}-700 border-${color}-700 hover:bg-${color}-800 hover:text-white border  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
*/
