import React from 'react';
import { useStateValue } from '../../context/StateProvider';

const Transition = ({ item }) => {
  const [
    {
      isTransition,
      transitionLanguage,
      englishFontSize,
      banglaFontSize,
      selectedTransition,
    },
  ] = useStateValue();
  if (!item) return;
  return (
    isTransition &&
    item?.translated_en &&
    item?.transition_bn &&
    item?.transition_bn[selectedTransition] && (
      <div>
        {isTransition &&
          item?.translated_en &&
          transitionLanguage === 'english' && (
            <p
              className='text-right text-en'
              style={{ fontSize: `${englishFontSize}px` }}
            >
              {item?.translated_en}
            </p>
          )}
        {isTransition &&
          item?.transition_bn &&
          item?.transition_bn[selectedTransition] &&
          transitionLanguage === 'bangla' && (
            <p
              className='text-right text-bn'
              style={{ fontSize: `${banglaFontSize}px` }}
            >
              {item?.transition_bn[selectedTransition]}
            </p>
          )}
      </div>
    )
  );
};

export default Transition;
