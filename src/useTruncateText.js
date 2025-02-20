import { useMemo } from "react";

const useTruncateText = (text, maxLength) => {
  const truncatedText = useMemo(() => {
    return text.length > maxLength ? text.slice(0, maxLength) + "....." : text;
  }, [text, maxLength]);

  return truncatedText;
};

export default useTruncateText;
