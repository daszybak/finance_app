import React, {useContext} from 'react';
import {ThemeContext} from '../../context/theme-context';

import {IoMoonOutline, IoSunnyOutline} from 'react-icons/io5';

const ThemeToggle = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === 'dark' ? (
        <IoSunnyOutline
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        />
      ) : (
        <IoMoonOutline
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default ThemeToggle;
