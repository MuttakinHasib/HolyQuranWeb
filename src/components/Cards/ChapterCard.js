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
          <div className='number-icon mr-3'>
            <img className='icon' src={icon} alt='' />
            <p className='number'>{props?.id}</p>
          </div>
          <div className='surah-info'>
            <h5 className={`surah-name ${!props?.translated_name && 'mb-0'}`}>
              {props?.name_simple}
            </h5>
            {props?.translated_name && (
              <span className='translated-name'>
                {props?.translated_name.name}
              </span>
            )}
          </div>
        </div>
        <ChapterIcon id={props?.id} />
      </div>
    </Link>
  );
};

export default ChapterCard;
