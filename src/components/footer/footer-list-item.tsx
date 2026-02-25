interface Props {
  text: string;
}

export const FooterListItem = ({ text }: Props) => {
  return (
    <li>
      <a className="hover:text-Gray-600" href="#">
        {text}
      </a>
    </li>
  );
};
