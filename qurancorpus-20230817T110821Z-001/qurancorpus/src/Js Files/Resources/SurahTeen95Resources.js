import React from "react";
import Record from '../../json/95SurahTeen/95TeenResources.json';


const SurahTeen95Resources = () => {
  return (
    <div className="surah-container">

      <h1 className="surah-title">سورة التين</h1>
      <p1 className="surah-paragraph">By accessing the provided links, you can explore a
       wealth of supplementary content and expand the understanding of the Quranic text. </p1>
      <table className="resource-table">
        <thead>
          <tr>
            <th>Resources</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          {Record.map((link, index) => (
            <tr key={index}>
              <td>{link.Resources}</td>
              <td>
                <a href={link.link} target="_blank" rel="noopener noreferrer" className="link">
                  {link.link}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SurahTeen95Resources;
