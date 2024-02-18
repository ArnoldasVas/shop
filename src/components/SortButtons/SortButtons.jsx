import React from 'react';
import './sortButtons.scss';

function SortButtons({ handleSortData }) {
  return (
    <div className="sort-btn">
      <button
        onClick={() => {
          handleSortData('az');
        }}
      >
        Sort A-Z
      </button>
      <button onClick={handleSortData}> Sort Z-A</button>
    </div>
  );
}

export default SortButtons;
