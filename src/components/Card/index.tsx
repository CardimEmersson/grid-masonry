import "./styles.css";

export type Isize = "small" | "medium" | "large";

interface ICard {
  size: Isize;
  char: string;
}

function Card({ size, char }: ICard) {
  return (
    <div className={`card `}>
      <span>{char}</span>
    </div>
  );
}

export { Card };
