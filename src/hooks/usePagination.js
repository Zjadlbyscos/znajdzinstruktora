import { useEffect, useState } from "react";

export const usePagination = ({ defaultLimit = 4 } = {}) => {
  const [limit, setLimit] = useState(defaultLimit);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setLimit(4);
      } else {
        setLimit(6);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { limit };
};
