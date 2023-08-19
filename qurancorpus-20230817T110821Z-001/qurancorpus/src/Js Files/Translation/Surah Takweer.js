//import React from "react";

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
//import { Link, } from 'react-router-dom';
import { NavLink, useHistory } from 'react-router-dom';
import Records from '../../json/81SurahTakweer/SurahTakweerTranslation.json';
import Setting from '../../Setting.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'// setting icon
import { faShare } from '@fortawesome/free-solid-svg-icons';// share icon
import { faWhatsapp, faFacebook} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { Dropdown} from 'react-bootstrap';


const SurahTakweerTranslation = () => {
  const history = useHistory();
  const [selectedSurah, setSelectedSurah] = useState('');
  const surahs = [
    { name: "Surah Naba"},
    { name: "Surah AnNaaziat" },
    { name: "Surah Abasa"},
    { name: "Surah Takweer"},
    { name: "Surah Infitar" },
    { name: "Surah Mutaffifeen" },
    { name: "Surah Inshiqaaq"},
    { name: "Surah Burooj" },
    { name: "Surah Tariq" },
    { name: "Surah Aala" },
    { name: "Surah Ghashia" },
    { name: "Surah Fajr" },
    { name: "Surah Balad" },
    { name: "Surah Shams" },
    { name: "Surah AlLail" },
    { name: "Surah Zuha" },
    { name: "Surah Inshirah" },
    { name: "Surah Teen" },
    { name: "Surah Alaq" },
    { name: "Surah Qadr"},
    { name: "Surah Bayyinah" },
    { name: "Surah Zalzalah" },
    { name: "Surah Aadiat" },
    { name: "Surah Qariah" },
    { name: "Surah Takasur" },
    { name: "Surah Asr" },
    { name: "Surah Humaza" },
    { name: "Surah Fil" },
    { name: "Surah Quraish" },
    { name: "Surah Maun" },
    { name: "Surah Kausar" },
    { name: "Surah Kafiroon" },
    { name: "Surah Nasr" },
    { name: "Surah Lahab" },
    { name: "Surah Ikhlas" },
    { name: "Surah Falaq" },
    { name: "Surah Naas" },
    
 
  ];
  const handleSurahSelect = (event) => {
    const selectedSurah = event.target.value;
    setSelectedSurah(selectedSurah);
    history.push(selectedSurah);
  };
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState("Noto_Sans_Arabic ");
  
 
  const [selectedOptions, setSelectedOptions] = useState({
    "ابوالاعلی مودودی ": false,
    " احمد رضا خان ": false,
    "احمد علی ": false,
    " جالندہری ": false,
    " طاہر القادری": false,
    " علامہ جوادی": false,
    " محمد جوناگڑھی": false,
    " محمد حسین نجفی ": false,
    "مفتی تقی عثمانی": false,
  });

  const handleCheckboxChange = (option) => {
    setSelectedOptions({
      ...selectedOptions,
      [option]: !selectedOptions[option],
    });
  };

  const [isSheetOpen, setIsSheetOpen] = useState(false);
 

  const handleOpenSheet = () => {
    setIsSheetOpen(true);
  };

  const handleCloseSheet = () => {
    setIsSheetOpen(false);
  };
  
  const createCheckbox = (option) => (
    <label key={option}>
      <input
        type="checkbox"
        checked={selectedOptions[option]}
        onChange={() => handleCheckboxChange(option)}
        className="styled-checkbox" 
      />
      {option}
    </label>
  );

  const styles = {
    fontFamily: fontFamily,
    fontSize: `${fontSize}px`
  };
  const shareUrl = window.location.href;

  const handleShare = (e, shareLink) => {
    e.preventDefault();
    window.open(shareLink, '_blank');
  };

   return (
   <div className="main">
    <h1>
        <center>سورة التكوير</center>
        </h1>
      <div>
      <div className="tab">
      <NavLink to="/Surah Takweer" className="tab-link" activeClassName="active-tab">
Word By Word Translation & Grammar
  </NavLink>
  <NavLink to="/SurahTakweer81Resources" className="tab-link" activeClassName="active-tab">
More Resources
  </NavLink>
  
  <div className="DropDown">
      <select value={selectedSurah} onChange={handleSurahSelect}>
        <option value="">Select Surah</option>
        {surahs.map((surah) => (
          <option key={surah.name} value={surah.path}>
            {surah.name}
          </option>
        ))}
      </select>
    </div>

 
  
</div>

<div className=    "para" > 
<div className="setting-symbol">

<div className="share-symbol">
<Tippy content="Share">
            <Dropdown>
              <Dropdown.Toggle variant="transparent" id="dropdown-basic" className="dropdown-toggle-custom">
                <FontAwesomeIcon icon={faShare} className="share-icon" data-tippy-content="Share" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={(e) => handleShare(e, `https://web.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`)}
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="share-item-icon" /> Share on Whatsapp
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={(e) => handleShare(e, `https://www.facebook.com/sharer.php?u=${encodeURIComponent(shareUrl)}`)}
                >
                  <FontAwesomeIcon icon={faFacebook} className="share-item-icon" /> Share on Facebook
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={(e) => handleShare(e, `mailto:?body=${encodeURIComponent(shareUrl)}`)}
                >
                  <FontAwesomeIcon icon={faEnvelope} className="share-item-icon" /> Share on Gmail
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Tippy>
</div>


<Tippy content="Setting">
      <div onClick={handleOpenSheet}>
      <FontAwesomeIcon icon={faCog} style={{fontSize: '32px'}} data-tippy-content="Setting" />
      </div>
      </Tippy>
      <Setting isOpen={isSheetOpen} onClose={handleCloseSheet} 
        fontSize={fontSize} setFontSize={setFontSize} fontFamily={fontFamily} setFontFamily={setFontFamily} />
    </div>


    <div className="checkboxes">
          {createCheckbox("ابوالاعلی مودودی ")}
          {createCheckbox("  احمد رضا خان ")}
          {createCheckbox("احمد علی ")}
          {createCheckbox("  جالندہری ")}
          {createCheckbox("  طاہر القادری")}
          {createCheckbox("   علامہ جوادی")}
          {createCheckbox(" محمد جوناگڑھی")}
          {createCheckbox(" محمد حسین نجفی ")}
          {createCheckbox("مفتی تقی عثمانی")}
        </div>
        
        
      
    {Records &&
      Records.map((record) => (
        <>
        <table className='table'>
         <tr className='Row' style={styles}>
 <strong>{record.Aya} </strong> 
</tr>
          {Object.keys(selectedOptions).map((option) => {
            if (selectedOptions[option]) {
              return <tr className='Row' style={styles}>{option} : {record[option]}</tr>;

            }
            return null;
          })}
          </table>
          
   
 
    

        </>
      ))}

</div> 
</div> 
</div>
);
      
} ; 
export default SurahTakweerTranslation;

