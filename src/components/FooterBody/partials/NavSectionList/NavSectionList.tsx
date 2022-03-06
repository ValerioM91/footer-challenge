import { useState, useEffect } from "react";
import { useFooterContext } from "../../../../contexts/FooterContext";
import NavSection from "../NavSection";

const Component = ({ className }: { className: string }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [biggestNavSectionLength, setBiggestNavSectionLength] = useState(0);
  const [minHeight, setMinHeight] = useState(0);
  const [notHighlighted, setNotHighlighted] = useState(0);
  const { navSections } = useFooterContext();

  const handleOpen = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const getBiggestNavSection = () => {
    if (!navSections) return;
    const navSectionsLength = navSections.map((section) => {
      if (!section.navLinks) return 0;
      return section.navLinks.length;
    });
    setBiggestNavSectionLength(Math.max(...navSectionsLength));
  };

  const getNotHighlightedNumber = () => {
    let notHighlightedTotal = 0;
    navSections?.forEach(
      (navSection) => !navSection.highlightOnMobile && notHighlightedTotal++
    );
    setNotHighlighted(notHighlightedTotal);
  };

  useEffect(() => {
    getBiggestNavSection();
    getNotHighlightedNumber();
  }, [navSections]);

  useEffect(() => {
    setMinHeight(biggestNavSectionLength * 4.5 + notHighlighted * 5.6 + 15.7);
  }, [biggestNavSectionLength]);

  if (!navSections) return null;

  return (
    <div
      className={className}
      style={
        minHeight
          ? {
              minHeight: `${minHeight}rem`,
            }
          : {}
      }
    >
      {navSections.map((navSection, i) => (
        <NavSection
          minHeight={minHeight}
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
