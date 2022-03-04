import { useFooterContext } from "../../contexts/FooterContext";

const Component = ({ className }: { className: string }) => {
  const { socialLinks } = useFooterContext();

  if (!socialLinks) return null;

  return (
    <ul className={className}>
      {socialLinks.map((social) => {
        const { _id, url, name, icon } = social;
        if (!icon || !url) return null;
        return (
          <li key={_id || url}>
            <a
              href={url}
              title={name}
              dangerouslySetInnerHTML={{ __html: icon }}
            ></a>
          </li>
        );
      })}
    </ul>
  );
};

export default Component;
