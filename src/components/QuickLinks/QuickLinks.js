import React from 'react';
import './QuickLinks.scss';
import { Link } from 'react-router-dom';
const QuickLinks = () => {
  return (
    <div className='row justify-content-center mb-5'>
      <div className='col-md-10 justify-content-center'>
        <h5 className='quick-links mb-0'>
          <span>Quick Links</span>
          <span>
            <Link to='f'>Surah Al-Kahf</Link>
          </span>
          <span>
            <Link to='f'>Surah Yasin</Link>
          </span>
          <span>
            <Link to='f'>Surah Ar-Rahman</Link>
          </span>
          <span>
            <Link to='f'>Al Mulk</Link>
          </span>
        </h5>
      </div>
    </div>
  );
};

export default QuickLinks;
