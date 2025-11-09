
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

export default function Top() {
  const [showTop, setShowTop] = useState(false);

  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setShowTop(position > 1000);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
    return () => {
      window.removeEventListener("scroll", handleVisibleButton);
    };
  }, []);

  return (
    <>
      {showTop && (
        <button className="scroll-top-button" onClick={scrollTop}>
         <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </>
  );
}
