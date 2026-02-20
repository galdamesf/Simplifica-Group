interface Props {
  text: string;
  styles?: string;
}
export const Button = ({ text, styles = "" }: Props) => {
  return (
    <button
      className={`bg-linear-to-b from-Orange-800 to-Orange-400 h-12 ${styles} rounded-3xl hover:to-Orange-800 cursor-pointer`}
    >
      {text}
    </button>
  );
};
