import {
  OPEN_DRAWER,
  TRANSITION_MODE,
  TRANSITION_LANGUAGE,
  ARABIC_FONT_SIZE,
  ENGLISH_FONT_SIZE,
  BANGLA_FONT_SIZE,
  SELECT_BANGLA_TRANSITION,
  TAFSEER_FONT_SIZE,
  SELECT_TAFSEER,
  FETCH_SURAHS_NAME,
  FETCH_VERSES_DATA,
  FETCH_CHAPTERS,
  SET_LOADING,
} from './types';
import { getLocalStorageData } from '../utils/getLocalStorageData';

const transitionMode = getLocalStorageData('transitionMode');
const transitionLanguage = getLocalStorageData('transitionLanguage');
const selectedTransition = getLocalStorageData('selectedTransition');

const selectedTafseer = getLocalStorageData('selectedTafseer');

const arabicFontSize = getLocalStorageData('arabicFontSize');
const englishFontSize = getLocalStorageData('englishFontSize');
const banglaFontSize = getLocalStorageData('banglaFontSize');
const tafseerFontSize = getLocalStorageData('tafseerFontSize');

export const initialState = {
  verses: [],
  surahs: [],
  chapters: [],
  isDrawerOpen: false,
  isTransition: transitionMode === null ? true : transitionMode,
  transitionLanguage:
    transitionLanguage === null ? 'bangla' : transitionLanguage,

  arabicFontSize: !arabicFontSize ? 55 : arabicFontSize,
  englishFontSize: !englishFontSize ? 25 : englishFontSize,
  banglaFontSize: !banglaFontSize ? 30 : banglaFontSize,
  tafseerFontSize: !tafseerFontSize ? 23 : tafseerFontSize,
  selectedTransition:
    selectedTransition === null ? 'taisirul_quran' : selectedTransition,
  selectedTafseer: selectedTafseer === null ? 'fathul_majid' : selectedTafseer,
};

export default (state, action) => {
  console.log(action);
  switch (action.type) {
    case OPEN_DRAWER:
      return { ...state, isDrawerOpen: action.drawer };

    case TRANSITION_MODE:
      return {
        ...state,
        isTransition: action.toggleTransition,
      };

    case TRANSITION_LANGUAGE:
      return { ...state, transitionLanguage: action.selectTransitionLanguage };

    case SELECT_BANGLA_TRANSITION:
      return { ...state, selectedTransition: action.transition };

    case SELECT_TAFSEER:
      return { ...state, selectedTafseer: action.tafseer };

    case ARABIC_FONT_SIZE:
      return { ...state, arabicFontSize: action.fontSize };

    case ENGLISH_FONT_SIZE:
      return { ...state, englishFontSize: action.fontSize };

    case BANGLA_FONT_SIZE:
      return { ...state, banglaFontSize: action.fontSize };

    case TAFSEER_FONT_SIZE:
      return { ...state, tafseerFontSize: action.fontSize };

    case FETCH_VERSES_DATA:
      return { ...state, verses: action.verses };

    case FETCH_SURAHS_NAME:
      return { ...state, surahs: action.surahs };

    case FETCH_CHAPTERS:
      return { ...state, chapters: action.chapters };

    default:
      return state;
  }
};
