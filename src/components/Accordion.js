import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

//   const handleClick = (nextIndex) => {
//     nextIndex === expandedIndex
//       ? setExpandedIndex(-1)
//       : setExpandedIndex(nextIndex);
    //   };
    
    //functional way to update state
    
      const handleClick = (nextIndex) => {
          setExpandedIndex(currentExpandedIndex => {
                nextIndex === currentExpandedIndex
                  ? setExpandedIndex(-1)
                  : setExpandedIndex(nextIndex);
          })
      };

  const renderedItems = items.map((item, index) => {
      const isExpanded = index === expandedIndex;
      
      const icon = (
        <span> {isExpanded ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
      );

    return (
      <div key={item.id} >
        <div onClick={() => handleClick(index)} className={'flex p-3 items-center bg-gray-50 border-b curson-pointer justify-between'}>
          {item.label} {icon}
        </div>
        {isExpanded && <div className={'border-b p-5'}>{item.content}</div>}
      </div>
    );
  });
  return <div className='border-x border-t rounded '>{renderedItems}</div>;
}

export default Accordion;
