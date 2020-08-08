import React, { useState } from 'react';
import { Drawer, Collapse, Switch, Row, Col, Slider, InputNumber } from 'antd';
import { useStateValue } from '../../context/StateProvider';
import {
  OPEN_DRAWER,
  TRANSITION_MODE,
  TRANSITION_LANGUAGE,
  ARABIC_FONT_SIZE,
  ENGLISH_FONT_SIZE,
  BANGLA_FONT_SIZE,
  TAFSEER_FONT_SIZE,
  SELECT_BANGLA_TRANSITION,
  SELECT_TAFSEER,
} from '../../context/types';
import { ReadOutlined, FontSizeOutlined } from '@ant-design/icons';
import './Settings.scss';
import { Select, Divider } from '@zeit-ui/react';
import { setLocalStorageData } from '../../utils/setLocalStorageData';
const { Panel } = Collapse;

const Settings = () => {
  const [
    {
      isDrawerOpen,
      isTransition,
      transitionLanguage,
      selectedTransition,
      selectedTafseer,
      arabicFontSize,
      banglaFontSize,
      englishFontSize,
      tafseerFontSize,
    },
    dispatch,
  ] = useStateValue();

  const [changeArabicFontSize, setChangeArabicFontSize] = useState(
    arabicFontSize
  );
  const [changeEnglishFontSize, setChangeEnglishFontSize] = useState(
    englishFontSize
  );
  const [changeBanglaFontSize, setChangeBanglaFontSize] = useState(
    banglaFontSize
  );
  const [changeTafseerFontSize, setChangeTafseerFontSize] = useState(
    tafseerFontSize
  );

  const onClose = () => {
    dispatch({
      type: OPEN_DRAWER,
      drawer: false,
    });
  };

  const transitionMode = value => {
    dispatch({
      type: TRANSITION_MODE,
      toggleTransition: value,
    });
    setLocalStorageData('transitionMode', value);
    // localStorage.setItem('transitionMode', value);
  };

  const handleLanguage = value => {
    dispatch({
      type: TRANSITION_LANGUAGE,
      selectTransitionLanguage: value,
    });
    setLocalStorageData('transitionLanguage', value);
  };

  const handleTransition = value => {
    dispatch({
      type: SELECT_BANGLA_TRANSITION,
      transition: value,
    });
    setLocalStorageData('selectedTransition', value);
  };
  
  const handleTafseer = value => {
    dispatch({
      type: SELECT_TAFSEER,
      tafseer: value,
    });
    setLocalStorageData('selectedTafseer', value);
  };

  const arabicFontHandler = value => {
    setChangeArabicFontSize(value);
    dispatch({
      type: ARABIC_FONT_SIZE,
      fontSize: changeArabicFontSize,
    });
    setLocalStorageData('arabicFontSize', changeArabicFontSize);
  };

  const englishFontHandler = value => {
    setChangeEnglishFontSize(value);
    dispatch({
      type: ENGLISH_FONT_SIZE,
      fontSize: changeEnglishFontSize,
    });
    setLocalStorageData('englishFontSize', changeEnglishFontSize);
  };

  const banglaFontHandler = value => {
    setChangeBanglaFontSize(value);
    dispatch({
      type: BANGLA_FONT_SIZE,
      fontSize: changeBanglaFontSize,
    });
    setLocalStorageData('banglaFontSize', changeBanglaFontSize);
  };

  const tafseerFontHandler = value => {
    setChangeTafseerFontSize(value);
    dispatch({
      type: TAFSEER_FONT_SIZE,
      fontSize: changeTafseerFontSize,
    });
    setLocalStorageData('tafseerFontSize', changeTafseerFontSize);
  };

  return (
    <Drawer
      placement='left'
      closable={false}
      onClose={onClose}
      visible={isDrawerOpen}
      width='380px'
      // getContainer={false}
      // style={{ paddingTop:'50px' }}
    >
      <div className='pt-5 mt-3'>
        <Collapse
          ghost
          accordion
          bordered={false}
          defaultActiveKey={['1']}
          className='site-collapse-custom-collapse'
        >
          <Panel
            extra={
              <ReadOutlined style={{ color: '#4EB862', fontSize: '25px' }} />
            }
            header='Reading Settings'
            key='1'
            className='site-collapse-custom-panel'
          >
            <Divider volume={15} y={3}>
              <span className='text-muted'>Transition</span>
            </Divider>
            <div className='d-flex align-items-center ml-4 mb-3'>
              <h6 className='mr-4 mb-0'>Translation Mode</h6>
              <Switch defaultChecked={isTransition} onChange={transitionMode} />
            </div>
            <div className='d-flex align-items-center ml-4 mb-3'>
              <Select
                placeholder='Select Language'
                initialValue={transitionLanguage}
                disabled={!isTransition}
                onChange={handleLanguage}
                style={{ fontSize: '15px' }}
              >
                <Select.Option style={{ fontSize: '15px' }} value='english'>
                  English
                </Select.Option>
                <Select.Option style={{ fontSize: '15px' }} value='bangla'>
                  Bangla
                </Select.Option>
              </Select>
            </div>
            <div className='ml-4 mb-3'>
              <h6 className='my-3'>Select Bangla Transition</h6>
              <Select
                placeholder='Select Transition'
                initialValue={selectedTransition}
                disabled={
                  !isTransition || (transitionLanguage === 'english' && true)
                }
                onChange={handleTransition}
                style={{ fontSize: '15px' }}
              >
                <Select.Option
                  style={{ fontSize: '15px' }}
                  value='taisirul_quran'
                >
                  Taisirul Quran
                </Select.Option>
                <Select.Option
                  style={{ fontSize: '15px' }}
                  value='mujibur_rahman'
                >
                  Mujibur Rahman
                </Select.Option>
              </Select>
            </div>
            <Divider volume={15} y={3}>
              <span className='text-muted'>Tafseer</span>
            </Divider>
            <div className='ml-4 mb-3'>
              <h6 className='my-3'>Select Tafseer</h6>
              <Select
                placeholder='Select Tafseer'
                initialValue={selectedTafseer}
                disabled={
                  !isTransition || (transitionLanguage === 'english' && true)
                }
                onChange={handleTafseer}
                style={{ fontSize: '15px' }}
              >
                <Select.Option
                  style={{ fontSize: '15px' }}
                  value='fathul_majid'
                >
                  Fathul Majid
                </Select.Option>
                <Select.Option
                  style={{ fontSize: '15px' }}
                  value='ahsanul_bayan'
                >
                  Ahsanul Bayan
                </Select.Option>
              </Select>
            </div>
          </Panel>
          <Panel
            extra={
              <FontSizeOutlined style={{ color: '#f56', fontSize: '25px' }} />
            }
            header='Font Settings'
            key='2'
            className='site-collapse-custom-panel'
          >
            <div className='ml-4 mb-3'>
              <h6 className='my-3'>Arabic Font Size</h6>
              <Row>
                <Col span={12}>
                  <Slider
                    min={1}
                    // max={20}
                    onChange={arabicFontHandler}
                    value={changeArabicFontSize}
                  />
                </Col>
                <Col span={4}>
                  <InputNumber
                    min={1}
                    // max={20}
                    style={{ margin: '0 16px' }}
                    value={changeArabicFontSize}
                    onChange={arabicFontHandler}
                  />
                </Col>
              </Row>

              <h6 className='my-3'>English Font Size</h6>
              <Row>
                <Col span={12}>
                  <Slider
                    min={1}
                    // max={20}
                    onChange={englishFontHandler}
                    value={changeEnglishFontSize}
                  />
                </Col>
                <Col span={4}>
                  <InputNumber
                    min={1}
                    // max={20}
                    style={{ margin: '0 16px' }}
                    value={changeEnglishFontSize}
                    onChange={englishFontHandler}
                  />
                </Col>
              </Row>
              <h6 className='my-3'>Bangla Font Size</h6>
              <Row>
                <Col span={12}>
                  <Slider
                    min={1}
                    // max={20}
                    onChange={banglaFontHandler}
                    value={changeBanglaFontSize}
                  />
                </Col>
                <Col span={4}>
                  <InputNumber
                    min={1}
                    // max={20}
                    style={{ margin: '0 16px' }}
                    value={changeBanglaFontSize}
                    onChange={banglaFontHandler}
                  />
                </Col>
              </Row>
              <h6 className='my-3'>Tafseer Font Size</h6>
              <Row>
                <Col span={12}>
                  <Slider
                    min={1}
                    // max={20}
                    onChange={tafseerFontHandler}
                    value={changeTafseerFontSize}
                  />
                </Col>
                <Col span={4}>
                  <InputNumber
                    min={1}
                    // max={20}
                    style={{ margin: '0 16px' }}
                    value={changeTafseerFontSize}
                    onChange={tafseerFontHandler}
                  />
                </Col>
              </Row>
            </div>
          </Panel>
        </Collapse>
      </div>
    </Drawer>
  );
};

export default Settings;
