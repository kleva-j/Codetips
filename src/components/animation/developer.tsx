'use client';

import animation from '@/assets/it-developer.json';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useRef, useEffect } from 'react';

export const DeveloperAnimation = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    // When the ref has been set, call interaction methods...
    if (lottieRef.current) lottieRef.current.setSpeed(0.5);
  }, [lottieRef]);

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animation}
      style={{ height: 50 }}
    />
  );
};
