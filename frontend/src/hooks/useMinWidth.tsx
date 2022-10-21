import { useEffect, useState } from 'react';

export const useMatchMinWidth = (width: string) => {
  const [matchMinWidth, setMatchMinWidth] = useState(false);

  useEffect(() => {
    const media = `(min-width: ${width})`;

    if (window !== undefined) {
      const mql = window.matchMedia(media);
      if (mql.matches) {
        setMatchMinWidth(true);
      }
    }
  }, []);

  return matchMinWidth;
};
