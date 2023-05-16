import React, { useState } from 'react';
import '../stories/assets/scss/_tabs.scss'


type TabProps = {
  labels: string[];
  children?: React.ReactNode[];
};

export const Tab = ({ labels, children }: TabProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <>
    <ul uk-tab className="uk-tab">
      {labels.map((label: string, index: number) => (
        <li
          key={index}
          className={`uk-light ${activeIndex === index ? 'uk-active' : ''}`} 
          onClick={() => setActiveIndex(index)}
        >
          <a aria-expanded="false">
            {label}
          </a>
        </li>

      ))}
    </ul>
    <div className='Child'>
    {children && children[activeIndex]}
    </div>
    </>
   
  );
};
