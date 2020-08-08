import React from 'react';
import './Chapters.scss';
import { useStateValue } from '../../context/StateProvider';
import ChapterCard from '../Cards/ChapterCard';

const Chapters = () => {
  const [{ chapters }] = useStateValue();
  console.log(chapters);
  return (
    <div className='row justify-content-between'>
      <div className='col-sm-12 col-md-6 col-lg-6 col-xl-4 my-3'>
        <ul className='chapter-cards'>
          {chapters?.slice(0, 38).map(item => (
            <li key={item.id} className='chapter-card'>
              <ChapterCard {...item} />
            </li>
          ))}
        </ul>
      </div>
      <div className='col-sm-12 col-md-6 col-lg-6 col-xl-4 my-3'>
        <ul className='chapter-cards'>
          {chapters?.slice(38, 76).map((item, i) => (
            <li key={item.id} className='chapter-card'>
              <ChapterCard {...item} />
            </li>
          ))}
        </ul>
      </div>
      <div className='col-sm-12 col-lg-6 col-xl-4 my-3 col-md'>
        <ul className='chapter-cards'>
          {chapters?.slice(76, 114).map((item, i) => (
            <li key={item.id} className='chapter-card'>
              <ChapterCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Chapters;
