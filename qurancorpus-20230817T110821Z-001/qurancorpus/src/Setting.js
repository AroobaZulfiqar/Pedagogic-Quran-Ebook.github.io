import './index.css';
import React, { useState, useEffect } from 'react';

const Setting = ({ isOpen, onClose, content, fontSize, setFontSize, fontFamily, setFontFamily }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);


  useEffect(() => {
    setIsSheetOpen(isOpen);
  }, [isOpen]);

  const handleCloseSheet = () => {
    setIsSheetOpen(false);
    onClose();
  };

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  const handleFontFamilyChange = (event) => {
    setFontFamily(event.target.value);
  };



  return (
    <div className={`slide-sheet ${isSheetOpen ? 'open' : ''} `}>
      <div className="sheet-header">
        <button className="close-button" onClick={handleCloseSheet}>X</button>
        <div className='Settings'>
          Settings
        </div>
      </div>
      <div className="sheet-content">
        <label>
          Font Size:
          <input
            type="number"
            min="10"
            max="50"
            value={fontSize}
            onChange={handleFontSizeChange}
          />
        </label>
        <br />
        <label>
          Font Family:
          <select value={fontFamily} onChange={handleFontFamilyChange}>
            <option value="Noto_Sans_Arabic">Noto_Sans_Arabic</option>
            <option value="_PDMS_Saleem_QuranFont">_PDMS_Saleem_QuranFont</option>
            <option value="NotoNastaliqUrdu-VariableFont_wght">NotoNastaliqUrdu-VariableFont_wght</option>
          </select>
        </label>
        <br />
       
        <br />
        {content}
      </div>
    </div>
  );
};

export default Setting;
