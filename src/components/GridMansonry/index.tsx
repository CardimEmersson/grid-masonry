import "./styles.css";
import { Card, Isize } from "../Card";

function GridMansonry() {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "x",
    "z",
  ];

  const size: Isize[] = ["small", "medium", "large"];

  let number = -1;

  return (
    <div className="container">
      {alphabet.map((char, index) => {
        const random = Math.floor(Math.random() * size.length);
        return <Card key={index} size={size[random]} char={char} />;
      })}

      {/* {alphabet.map((char, index) => {
        number = number >= 2 ? 0 : number + 1;

        return <Card key={index} size={size[number]} char={char} />;
      })} */}
    </div>
  );
}

export { GridMansonry };
