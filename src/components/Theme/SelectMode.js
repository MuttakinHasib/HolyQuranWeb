import React, { useState } from 'react';
import MoonIcon from '@zeit-ui/react-icons/moon';
import SunIcon from '@zeit-ui/react-icons/sun';
import { Button } from 'antd';
const SelectMode = () => {
  const [isDark, setIsDark] = useState(false);
  const changeTheme = () => setIsDark(!isDark);
  const light = (
    <Button onClick={changeTheme} type='dashed' icon={<SunIcon size={18} />}>
      &nbsp;&nbsp;Light
    </Button>
  );
  const dark = (
    <Button
      // style={{ background: '#333', color: '#fff' }}
      type='dashed'
      onClick={changeTheme}
      icon={<MoonIcon size={18} />}
    >
      &nbsp;&nbsp;Dark
    </Button>
  );
  return isDark ? light : dark;
};

export default SelectMode;
