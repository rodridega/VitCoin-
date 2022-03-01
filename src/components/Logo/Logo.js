import React from "react";
import bitcoinLogo from './opengraph.png';

export const Logo = () => {
  return (
    <div>
      <img
        src={bitcoinLogo}
        className="w-80 hidden md:block hover:animate-spin"
      />
    </div>
  );
};
