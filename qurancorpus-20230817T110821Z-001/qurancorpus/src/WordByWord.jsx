import React from "react";
import { NavLink } from 'react-router-dom';

const surahs = [
    { name: "Surah Naba", number: 78, ayat: 6, type: "Makki" },
    { name: "Surah An Naaziat", number: 79, ayat: 46, type: "Makki" },
    { name: "Surah Abasa", number: 80, ayat: 42, type: "Makki" },
    { name: "Surah Takweer", number: 81, ayat: 29, type: "Makki" },
    { name: "Surah Infitar", number: 82, ayat: 19, type: "Makki" },
    { name: "Surah Mutaffifeen", number: 83, ayat: 36, type: "Makki" },
    { name: "Surah Inshiqaaq", number: 84, ayat: 25, type: "Makki" },
    { name: "Surah Burooj", number: 85, ayat: 22, type: "Makki" },
    { name: "Surah Tariq", number: 86, ayat: 17, type: "Makki" },
    { name: "Surah A’ala", number: 87, ayat: 19, type: "Makki" },
    { name: "Surah Ghashia", number: 88, ayat: 26, type: "Makki" },
    { name: "Surah Fajr", number: 89, ayat: 30, type: "Makki" },
    { name: "Surah Balad", number: 90, ayat: 20, type: "Makki" },
    { name: "Surah Shams", number: 91, ayat: 15, type: "Makki" },
    { name: "Surah Al Lail", number: 92, ayat: 21, type: "Makki" },
    { name: "Surah Zuha", number: 93, ayat: 11, type: "Makki" },
    { name: "Surah Sharh (Inshirah)", number: 94, ayat: 8, type: "Makki" },
    { name: "Surah Teen", number: 95, ayat: 8, type: "Makki" },
    { name: "Surah Alaq", number: 96, ayat: 19, type: "Makki" },
    { name: "Surah Qadr", number: 97, ayat: 5, type: "Makki" },
    { name: "Surah Bayyinah", number: 98, ayat: 8, type: "Madani" },
    { name: "Surah Zalzalah", number: 99, ayat: 8, type: "Madani" },
    { name: "Surah Aadiat", number: 100, ayat: 11, type: "Makki" },
    { name: "Surah Qariah", number: 101, ayat: 11, type: "Makki" },
    { name: "Surah Takasur", number: 102, ayat: 8, type: "Makki" },
    { name: "Surah Asr", number: 103, ayat: 3, type: "Makki" },
    { name: "Surah Humaza", number: 104, ayat: 9, type: "Makki" },
    { name: "Surah Fil", number: 105, ayat: 5, type: "Makki" },
    { name: "Surah Quraish", number: 106, ayat: 4, type: "Makki" },
    { name: "Surah Maun", number: 107, ayat: 7, type: "Makki" },
    { name: "Surah Kausar", number: 108, ayat: 3, type: "Makki" },
    { name: "Surah Kafiroon", number: 109, ayat: 6, type: "Makki" },
    { name: "Surah Nasr", number: 110, ayat: 3, type: "Madani" },
    { name: "Surah Lahab", number: 111, ayat: 5, type: "Makki" },
    { name: "Surah Ikhlas", number: 112, ayat: 4, type: "Makki" },
    { name: "Surah Falaq", number: 113, ayat: 5, type: "Makki" },
    { name: "Surah Nas", number: 114, ayat: 6, type: "Makki" }
  ];


const WordByWord = () => {
  return (
    <div>
      <h2>Surah List</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Chapter</th>
            <th>Name</th>
            <th>No of Ayat</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {surahs.map((surah) => (
            <tr key={surah.number}>
              <td>{surah.number}</td>
              <td>
                <NavLink className="text-decoration-none" to={`/Translation/${surah.name}`}>
                  {surah.name}
                </NavLink>
              </td>
              <td>{surah.ayat}</td>
              <td>{surah.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WordByWord;
