import { useFooterContext } from "../../../../contexts/FooterContext";
import NavSection from "../NavSection";

const Component = ({ className }: { className: string }) => {
  const { navSections } = useFooterContext();

  if (!navSections) return null;

  return (
    <div className={className}>
      {navSections.map((navSection, i) => (
        <NavSection key={navSection._id || `nav-section${i}`} {...navSection} />
      ))}
    </div>
  );
};

export default Component;
