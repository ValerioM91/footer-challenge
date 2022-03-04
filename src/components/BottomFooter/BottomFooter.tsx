import { useFooterContext } from "../../contexts/FooterContext";
import Socials from "../Socials";

const Component = ({ className }: { className: string }) => {
  const { baselineLinks, legalText } = useFooterContext();

  return (
    <div className={className}>
      <Socials className="socials" />
      <div className="col-right">
        {baselineLinks &&
          baselineLinks.map((link) => {
            const { displayText, url, name, _id } = link;
            return (
              <a className="baseline-link" href={url} key={_id} title={name}>
                {displayText}
              </a>
            );
          })}
        {legalText && <p className="legal-text">{legalText}</p>}
      </div>
    </div>
  );
};

export default Component;
