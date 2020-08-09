import React from 'react';
import { Select } from 'antd';
import logo from '../../assets/images/quran.png';
import SelectMode from '../Theme/SelectMode';
import convertStartCase from 'lodash.startcase';

import './Header.scss';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import { SettingTwoTone } from '@ant-design/icons';
import { OPEN_DRAWER } from '../../context/types';

const { Option } = Select;

const Header = () => {
  const [{ chapters, isDrawerOpen }, dispatch] = useStateValue();
  const history = useHistory();
  const { pathname } = useLocation();
  const id = pathname.slice(-1);
  console.log(id);
  const showDrawer = () => {
    dispatch({
      type: OPEN_DRAWER,
      drawer: !isDrawerOpen,
    });
  };
  return (
    <header className='sticky-top'>
      <nav className='navbar navbar-expand-sm navbar-light bg-light'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            <img
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
              alt=''
              loading='lazy'
            />
            <span className='font-weight-bold'>&nbsp;Al Quran</span>
          </Link>
          <div>
            <ul className='navbar-nav flex-row ml-auto'>
              <li className='nav-item'>
                <Select
                  defaultValue='/'
                  autoFocus={true}
                  // defaultActiveFirstOption
                  showSearch
                  style={{ width: 200 }}
                  placeholder='Search surah...'
                  optionFilterProp='children'
                  onChange={val => {
                    history.push(val);
                  }}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value='/'>Home</Option>
                  {chapters.map(({ name_simple }, i) => (
                    <Option
                      onClick={e => console.log('hi')}
                      key={name_simple}
                      value={`/${i + 1}`}
                    >
                      {convertStartCase(name_simple)}
                    </Option>
                  ))}
                </Select>
              </li>
              <li className='nav-item d-none d-sm-block ml-3'>
                <SelectMode />
              </li>
              <li className='nav-item ml-3'>
                <SettingTwoTone
                  onClick={showDrawer}
                  // twoToneColor='#7837d3c2'
                  twoToneColor='#338'
                  // twoToneColor='#f36'
                  style={{ fontSize: '28px', marginTop: '1px' }}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
