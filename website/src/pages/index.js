import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function Home() {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        if (window.location.pathname != "") {
          if (navigator.language.toLowerCase().startsWith("zh")) {
            window.location.href = "cn/home"
          } else {
            window.location.href = "en/home"
          }
        };
      }}
    </BrowserOnly>
  );
    }
