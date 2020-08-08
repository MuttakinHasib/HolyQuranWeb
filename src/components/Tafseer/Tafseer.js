import React from 'react';
import { Collapse } from 'react-bootstrap';
import { useStateValue } from '../../context/StateProvider';
import convertStartCase from 'lodash.startcase';
const Tafseer = ({ tafseer, tafseerId, showTafseer }) => {
  const [{ tafseerFontSize, selectedTafseer }] = useStateValue();

  if (!tafseer) return;
  return (
    tafseer?.tafseer_bn &&
    tafseer?.tafseer_bn[selectedTafseer] && (
      <Collapse in={tafseerId && showTafseer}>
        <div className='mt-3'>
          <h3 className='mb-0 pb-3' style={{ color: '#481392' }}>
            Tafseer : {convertStartCase(selectedTafseer)}
          </h3>
          <p
            className='text-tafseer my-3'
            style={{ fontSize: `${tafseerFontSize}px` }}
            dangerouslySetInnerHTML={{
              __html: tafseer?.tafseer_bn[selectedTafseer],
            }}
          />
        </div>
      </Collapse>
    )
  );
};

export default Tafseer;
