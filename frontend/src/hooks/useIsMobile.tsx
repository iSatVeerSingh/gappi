import { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (navigator !== undefined) {
      const checkMobile = navigator.userAgent.includes('Mobile');
      setIsMobile(checkMobile);
    }
  }, []);

  return isMobile;
};
