import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const Expandable = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars);

  return (
    <>
      <div>
        {text}...{" "}
        <button
          onClick={() => setExpanded(!isExpanded)}
          className="border px-1 cursor-pointer"
        >
          {isExpanded ? "Less" : "More"}
        </button>
      </div>
    </>
  );
};

export default Expandable;
<Expandable maxChars={40}>Lorem</Expandable>;
