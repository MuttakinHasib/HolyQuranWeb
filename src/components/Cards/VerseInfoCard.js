import React from 'react';
import { Dot } from '@zeit-ui/react';
import Bismillah from '../../assets/images/bismillah.jpg';
import kaaba from '../../assets/images/kaaba.jpg';
import convertStartCase from 'lodash.startcase';

const VerseInfoCard = ({
  item: { name, count, bismillah, translated_name, revelation },
}) => (
  <div className='top-card'>
    <div className='row justify-content-center align-items-center'>
      <div className='col-md-8'>
        <div className='row justify-content-between align-items-center'>
          <div className='col-sm-5 col-ms-6'>
            <img src={kaaba} alt='' className='img-fluid' />
          </div>
          <div className='col-sm-6'>
            <div className='text-center my-5'>
              <h2 className='text-dark mb-1 surah-name'>
                {convertStartCase(name)}
              </h2>
              {/* <p className='mb-3 lead'>{translated_name}</p> */}
              <div className='d-flex align-items-center justify-content-center'>
                {/* <h5 className='text-muted'>{revelation}</h5> */}
                <Dot style={{ margin: '0 5px 10px 15px' }} />
                <h5 className='text-muted'>{count} Verses</h5>
              </div>
            </div>
          </div>
        </div>
        {bismillah && (
          <div className='text-center mt-n5 mb-2'>
            {/* <Bismillah width='250px' /> */}
            <img src={Bismillah} alt='' className='img-fluid' />
          </div>
        )}
      </div>
    </div>
  </div>
);

export default VerseInfoCard;
