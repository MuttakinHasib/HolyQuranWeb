import React from 'react';
import './ChapterCard.scss';
import ChapterIcon from '../Chapters/ChapterIcon';
import icon from '../../assets/images/star.svg';
import { Link } from 'react-router-dom';
const ChapterCard = props => {
  return (
    <Link to={`${props?.id}`} className='block card my-3'>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <div className='number-icon'>
            <img className='icon' src={icon} alt='' />
            <p className='number'>{props?.id}</p>
          </div>
          <div className='surah-info ml-3'>
            <h5 className='surah-name'>{props?.name}</h5>
            <span className='translated-name'>{props?.translated_en}</span>
          </div>
        </div>
        <ChapterIcon id={props?.id} />
      </div>
    </Link>
  );
};

export default ChapterCard;
