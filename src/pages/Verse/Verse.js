import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';

import { useToasts, useClipboard } from '@zeit-ui/react';
import Bookmark from '@zeit-ui/react-icons/bookmark';

import './Verse.scss';
import { Button } from 'antd';
import {
  CopyTwoTone,
  PlayCircleTwoTone,
  ReadOutlined,
} from '@ant-design/icons';
import VerseInfoCard from '../../components/Cards/VerseInfoCard';
import Spinner from '../../components/Spinner/Spinner';
import Tafseer from '../../components/Tafseer/Tafseer';
import Transition from '../../components/Transition/Transition';
import api from '../../api';
import { FETCH_VERSE_DATA, FETCH_VERSES_DATA } from '../../context/types';

const Verse = () => {
  const [, setToast] = useToasts();
  const [surah, setSurah] = useState(null);
  const { copy } = useClipboard();
  const [showTafseer, setShowTafseer] = useState(false);
  const [tafseerId, setTafseerId] = useState(null);
  const { pathname } = useLocation();
  const getId = pathname.slice(1);
  const [
    { verses, arabicFontSize, selectedTransition },
    dispatch,
  ] = useStateValue();
  // const getVerses = chapters.filter(chapter => chapter.id === getId);

  useEffect(() => {
    const fetchChaptersData = async num => {
      const { data } = await api.get(`/surah/surah_${num}.json`);
      setSurah(data);
      dispatch({
        type: FETCH_VERSES_DATA,
        verses: data,
      });
    };
    fetchChaptersData(getId);
  }, [getId]);

  return (
    <div className='container'>
      <div className='mt-5'>
        {verses && <VerseInfoCard item={verses} />}
        {verses &&
          Object.keys(verses['verse']).map((key, i) => (
            <div className='border-bottom card-body my-3' key={i}>
              <div className='d-flex align-items-center'>
                <span className='verse_key mr-5 my-2'>{i + 1}</span>
                <Button
                  title='Copy'
                  icon={<CopyTwoTone style={{ fontSize: '27px' }} />}
                  className='mr-4 my-2'
                  type='text'
                  onClick={() => {
                    // copy(
                    //   `${verses.name} ${ayah.verse_key}\n
                    //       ${ayah.text}\n${
                    //     ayah?.translated_en && ayah.translated_en
                    //   }\n${
                    //     ayah?.transition_bn[selectedTransition] &&
                    //     ayah.transition_bn[selectedTransition]
                    //   }\nTafseer : Ahsanul Bayan\n${
                    //     ayah?.tafseer_bn.ahsanul_bayan
                    //   }
                    //       `
                    // );
                    setToast({
                      text: 'Copied the verse! Alhamdulillah',
                      type: 'success',
                    });
                  }}
                />
                <Button
                  title='Play Audio'
                  icon={
                    <PlayCircleTwoTone
                      twoToneColor='#f36'
                      style={{ fontSize: '27px' }}
                    />
                  }
                  className='mr-4 my-2'
                  type='text'
                />
                <Button
                  title='Show Tafseer'
                  icon={
                    <ReadOutlined
                      style={{ color: '#4EB862', fontSize: '27px' }}
                    />
                  }
                  className='mr-4 my-2'
                  type='text'
                  onClick={() => {
                    setShowTafseer(prevOpen => !prevOpen);
                    setTafseerId(i + 1);
                  }}
                />
                <Button
                  disabled
                  title='Bookmark'
                  type='text'
                  icon={<Bookmark style={{ fontSize: '27px' }} />}
                />
              </div>
              <div className='d-flex justify-content-end align-items-center py-3'>
                <div>
                  <h4
                    className='arabic-font'
                    style={{ fontSize: `${arabicFontSize}px` }}
                    key={key}
                  >
                    {verses.verse[key]}
                  </h4>
                  {/* <Transition item={surah.verse[key]} /> */}
                </div>
              </div>
              {/* <Tafseer
              showTafseer={showTafseer}
              tafseerId={tafseerId === i + 1}
              tafseer={ayah}
            /> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Verse;
