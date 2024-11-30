import { useEffect, useState, useRef } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
  const [isOpened, setIsOpened] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setIsOpened(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const getIcon = () => {
    return isOpened ? <IoIosArrowDown /> : <IoIosArrowForward />;
  };

  const handleSelectClick = () => {
    setIsOpened(!isOpened);
  };

  const handleOptionClick = (item) => {
    onChange(item);
    setIsOpened(false);
  };

  const renderedItems = options.map((item) => (
    <div
      key={item.value}
      onClick={() => handleOptionClick(item)}
      className="hover:bg-sky-100  rounded cursor-pointer p-1"
    >
      {item.label}
    </div>
  ));
  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleSelectClick}
      >
        {value?.label || 'Select a value'}
        {getIcon()}
      </Panel>
      {isOpened && <Panel className="absolute top-full">{renderedItems}</Panel>}
    </div>
  );
}

export default Dropdown;
