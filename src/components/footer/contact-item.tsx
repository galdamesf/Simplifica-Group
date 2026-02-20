interface Props {
  text: string;
  iconUrl: string;
  alt: string;
  link?: string;
  styles?: string;
}

export const ContactItem = ({ text, iconUrl, alt, link, styles }: Props) => {
  return (
    <div className={`flex items-start gap-6 ${styles}`}>
      <img className="mt-1" src={iconUrl} alt={alt} />

      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors cursor-pointer"
        >
          {text}
        </a>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};
