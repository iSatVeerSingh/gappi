import { useEffect, useState } from 'react';

export const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (navigator !== undefined) {
      const isMobile = navigator.userAgent.includes('Mobile');
      if (!isMobile) {
        setIsDesktop(true);
      }
    }
  }, []);

  return isDesktop;
};
