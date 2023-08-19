import React from 'react';
import Records from '../../json/89SurahFajr/SurahFajrWordByWord.json';
import Setting from '../../Setting.js';
import { useState } from "react";
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import {  useHistory } from 'react-router-dom';

function SurahFajrWBW() {
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
  const [fontFamily, setFontFamily] = useState('Arial');
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleOpenSheet = () => {
    setIsSheetOpen(true);
  };

  const handleCloseSheet = () => {
    setIsSheetOpen(false);
  };

  const shareUrl = window.location.href;

  const handleShare = (e, shareLink) => {
    e.preventDefault();
    window.open(shareLink, '_blank');
  };

  return (
    <div className="para">
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
            <FontAwesomeIcon icon={faCog} style={{ fontSize: '32px' }} data-tippy-content="Setting" />
          </div>
        </Tippy>
        <Setting
          isOpen={isSheetOpen}
          onClose={handleCloseSheet}
          fontSize={fontSize}
          setFontSize={setFontSize}
          fontFamily={fontFamily}
          setFontFamily={setFontFamily}
        />
      </div>
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

      <div className="Mains">
        <br />
        <div>
          <strong>
            <center>سورة الفجر</center>
          </strong>
        </div>
        <div className="paraa">
          <div className="table-containers">
            {Records.map((record, index) => (
              <React.Fragment key={index}>
                <table className="table1">
                  <tbody>
                    <tr className="tr1">
                      <th className="th2" id="th1">
                        آیت
                      </th>
                      <td colSpan={record.Word.length}>{record.Verse}</td>
                    </tr>
                    <tr className="WMG">
                      <th className="th2">ز خیر و الفاظ</th>
                      {record.Word.map((word, wordIndex) => (
                        <td
                          className="table-cell"
                          style={{ fontSize: `${fontSize}px`, fontFamily }}
                          key={wordIndex}
                        >
                          {word}
                        </td>
                      ))}
                    </tr>
                    <tr className="WMG">
                      <th className="th2">لفظی ترجمہ</th>
                      {record.Meaning.map((meaning, meaningIndex) => (
                        <td
                          className="table-cell"
                          style={{ fontSize: `${fontSize}px`, fontFamily }}
                          key={meaningIndex}
                        >
                          {meaning}
                        </td>
                      ))}
                    </tr>
                    <tr className="WMG">
                      <th className="th2">  گرامر</th>
                      {record.Grammar.map((grammar, grammarIndex) => (
                        <td
                          className="table-cell"
                          style={{ fontSize: `${fontSize}px`, fontFamily }}
                          key={grammarIndex}
                        >
                          {grammar}
                        </td>
                      ))}
                    </tr>
                    <tr className="tr1">
                      <th className="th2" id="th1">
                        بامحاورہ ترجمہ
                      </th>
                      <td colSpan={record.Word.length}>{record.Translation}</td>
                    </tr>
                  </tbody>
                </table>
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurahFajrWBW;
