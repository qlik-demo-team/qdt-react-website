// import React from 'react';
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import {
//   LuiSearch, // LuiDropdown
// } from 'qdt-lui';

// const LuiSearch = ({
//   value, clear, onChange, onKeyPress,
// }) => {
//   const nodeEl = useRef(null);
//   console.log(clear, onChange, onKeyPress);
//   useEffect(() => {
//     (async () => {
//       console.log('LuiSearch-useEffect');
//       nodeEl.current.addEventListener('mouseover', () => {
//         console.log('mouseover');
//       });
//       nodeEl.current.addEventListener('mouseout', () => {
//         console.log('mouseout');
//       });
//     })();
//     return () => {
//       nodeEl.current.removeEventListener('mouseover');
//       nodeEl.current.removeEventListener('mouseout');
//     };
//   }, []);
//   return (
//     <div ref={nodeEl}>
//       {value}
//     </div>
//   );
// };

// LuiSearch.propTypes = {
//   value: PropTypes.string.isRequired,
//   clear: PropTypes.func.isRequired,
//   onChange: PropTypes.func.isRequired,
//   onKeyPress: PropTypes.func.isRequired,
// };

const Test = () => {
  const clear = () => console.log('clear');
  const onChange = () => console.log('onChange');
  const onKeyPress = () => console.log('onKeyPress');

  useEffect(() => {
    console.log('Test-useEffect');
  });

  return (
    <div>
      <div className="row pb50">
        <div className="col-md-12 text-left">
          {/* <LuiSearch
            value="Yianni"
            clear={clear}
            onChange={onChange}
            onKeyPress={onKeyPress}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Test;
