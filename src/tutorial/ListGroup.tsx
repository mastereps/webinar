import { useState } from "react";

interface Props {
  barangays: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ barangays, heading, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 className="text-6xl font-bold">{heading}</h1>
      {barangays.length === 0 && <p className="text-4xl">No Barangay Found</p>}
      <ul>
        {barangays.map((barangay, index) => (
          <li
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(barangay);
            }}
            key={index}
            className={`text-4xl ` + (selectedIndex === index && "active")}
          >
            {barangay}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
