import { useState } from "react";
import { useFooterContext } from "../../../../contexts/FooterContext";
import NavSection from "../NavSection";

const Component = ({ className }: { className: string }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { navSections } = useFooterContext();

  const handleOpen = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  if (!navSections) return null;

  return (
    <div className={className}>
      {navSections.map((navSection, i) => (
        <NavSection
          key={navSection._id || `nav-section${i}`}
          {...navSection}
          open={activeIndex === i}
          handleOpen={() => handleOpen(i)}
        />
      ))}
    </div>
  );
};

export default Component;
