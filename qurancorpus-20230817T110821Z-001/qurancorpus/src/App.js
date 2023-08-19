import React from "react";
import Records from './json/114SurahNaas/SurahNaas.json';
import Record from './json/113SurahFalak/SurahFalakTranslation.json';
import Record112 from './json/112SurahIkhlas/SurahIkhlasTranslation.json';
import Record111 from './json/111SurahLahab/SurahLahabTranslation.json';
import Record110 from './json/110SurahNasr/SurahNasarTranslation.json';
import Record109 from './json/109SurahKafiroon/SurahKafiroonTranslation.json';
import Record108 from './json/108SurahKausar/SurahKausarTranslation.json';
import Record107 from './json/107SurahMaun/SurahMaunTranslation.json';
import Record106 from './json/106SurahQuraish/SurahQuraishTranslation.json';
import Record105 from './json/105SurahFil/SurahFilTranslation.json';
import Record104 from './json/104SurahHumaza/SurahHumazaTranslation.json';
import Record103 from './json/103SurahAsr/SurahAsrTranslation.json';
import Record102 from './json/102SurahTakasur/SurahTakasurTranslation.json';
import Record101 from './json/101SurahQariah/SurahQariahTranslation.json';
import Record100 from './json/100SurahAadiat/SurahAadiatTranslation.json';
import Record99 from './json/99SurahZalzalah/SurahZalzalahTranslation.json';
import Record98 from './json/98SurahBayyinah/SurahBayyinahTranslation.json';
import Record97  from './json/97SurahQadr/SurahQadrTranslation.json';
import Record96 from './json/96SurahAlaq/SurahAlaqTranslation.json';
import Record95 from './json/95SurahTeen/SurahTeenTranslation.json';
import Record94 from './json/94SurahInshirah/SurahInshirahTranslation.json';
import Record93 from './json/93SurahZuha/SurahZuhaTranslation.json';
import Record92 from './json/92SurahAlLail/SurahAlLailTranslation.json';
import Record91 from './json/91SurahShams/SurahShamsTranslation.json';
import Record90 from './json/90SurahBalad/SurahBaladTranslation.json';
import Record89 from './json/89SurahFajr/SurahFajrTranslation.json';
import Record88 from './json/88SurahGhashia/SurahGhashiaTranslation.json';
import Record87 from './json/87SurahAala/SurahAalaTranslation.json';
import Record86 from './json/86SurahTariq/SurahTariqTranslation.json';
import Record85 from './json/85SurahBurooj/SurahBuroojTranslation.json';
import Record84 from './json/84SurahInshiqaaq/SurahInshiqaaqTranslation.json';
import Record83 from './json/83SurahMutaffifeen/SurahMutaffifeenTranslation.json';
import Record82 from './json/82SurahInfitar/SurahInfitarTranslation.json'; 
import Record81 from './json/81SurahTakweer/SurahTakweerTranslation.json';
import Record80 from './json/80SurahAbasa/SurahAbasaTranslation.json';
import Record79 from './json/79SurahAnNaaziat/SurahAnNaaziatTranslation.json';
import Record78 from './json/78SurahNaba/SurahNabaTranslation.json';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";                  
import Home from './Home';
import About from './About';
import Translation from './Translation';
import Grammar from './Grammar';

import Navbar from "./Navbar";
import FeedbackForm from "./FeedbackForm";
import Error from './Error';
import Footer from "./Footer";

/*Translation*/
import Surah114 from "./Js Files/Translation/Surah Naas";
import SurahFalakTranslation from './Js Files/Translation/Surah Falaq';
import SurahIkhlasTranslation from './Js Files/Translation/Surah Ikhlas';
import SurahLahabTranslation from './Js Files/Translation/Surah Lahab';
import SurahNasarTranslation from './Js Files/Translation/Surah Nasr';
import SurahKafiroonTranslation from './Js Files/Translation/Surah Kafiroon';
import SurahKausarTranslation from './Js Files/Translation/Surah Kausar';
import SurahMaunTranslation from './Js Files/Translation/Surah Maun';
import SurahQuraishTranslation from './Js Files/Translation/Surah Quraish';
import SurahFilTranslation from './Js Files/Translation/Surah Fil';
import SurahHumazaTranslation from './Js Files/Translation/Surah Humaza';
import SurahAsrTranslation from './Js Files/Translation/Surah Asr';
import SurahTakasurTranslation from './Js Files/Translation/Surah Takasur';
import SurahQariahTranslation from './Js Files/Translation/Surah Qariah';
import SurahAadiatTranslation from './Js Files/Translation/Surah Aadiat';
import SurahZalzalahTranslation from './Js Files/Translation/Surah Zalzalah';
import SurahBayyinahTranslation from './Js Files/Translation/Surah Bayyinah';
import SurahQadrTranslation from './Js Files/Translation/Surah Qadr';
import SurahAlaqTranslation from './Js Files/Translation/Surah Alaq';
import SurahTeenTranslation from './Js Files/Translation/Surah Teen';
import SurahInshirahTranslation from './Js Files/Translation/Surah Inshirah';
import SurahZuhaTranslation from './Js Files/Translation/Surah Zuha';
import SurahAlLailTranslation from './Js Files/Translation/Surah AlLail'
;import SurahShamsTranslation from './Js Files/Translation/Surah Shams';
import SurahBaladTranslation from './Js Files/Translation/Surah Balad';
import SurahFajrTranslation from './Js Files/Translation/Surah Fajr';
import SurahGhashiaTranslation from './Js Files/Translation/Surah Ghashia';
import SurahAalaTranslation from './Js Files/Translation/Surah Aala';
import SurahTariqTranslation from './Js Files/Translation/Surah Tariq';
import SurahBuroojTranslation from './Js Files/Translation/Surah Burooj';
import SurahInshiqaaqTranslation from './Js Files/Translation/Surah Inshiqaaq';
import SurahInfitarTranslation from './Js Files/Translation/Surah Infitar';
import SurahTakweerTranslation from './Js Files/Translation/Surah Takweer';
import SurahAbasaTranslation from './Js Files/Translation/Surah Abasa';

import SurahAnNaaziatTranslation from './Js Files/Translation/Surah AnNaaziat';
import SurahNabaTranslation from './Js Files/Translation/Surah Naba';
import SurahMutaffifeenTranslation from './Js Files/Translation/Surah Mutaffifeen';




/* Resources*/
import SurahNaas114Resources from "./Js Files/Resources/SurahNaas114Resources";
import SurahFalak113Resources from "./Js Files/Resources/SurahFalak113Resources";
import SurahIkhlas112Resources from "./Js Files/Resources/SurahIkhlas112Resources";
import SurahLahab111Resources from "./Js Files/Resources/SurahLahab111Resources";
import SurahNasr110Resources from "./Js Files/Resources/SurahNasr110Resources";
import SurahKafiroon109Resources from "./Js Files/Resources/SurahKafiroon109Resources";
import SurahKausar108Resources from "./Js Files/Resources/SurahKausar108Resources";
import SurahMaun107Resources from "./Js Files/Resources/SurahMaun107Resources";
import SurahQuraish106Resources from "./Js Files/Resources/SurahQuraish106Resources";
import SurahFil105Resources from "./Js Files/Resources/SurahFil105Resources";
import SurahHumaza104Resources from "./Js Files/Resources/SurahHumaza104Resources";
import SurahAsr103Resources from "./Js Files/Resources/SurahAsr103Resources";
import SurahTakasur102Resources from "./Js Files/Resources/SurahTakasur102Resources";
import SurahQariah101Resources from "./Js Files/Resources/SurahQariah101Resources";
import SurahAadiat100Resources from "./Js Files/Resources/SurahAadiat100Resources";
import SurahZalzalah99Resources from "./Js Files/Resources/SurahZalzalah99Resources";
import SurahBayyinah98Resources from "./Js Files/Resources/SurahBayyinah98Resources";
import SurahQadr97Resources from "./Js Files/Resources/SurahQadr97Resources";
import SurahAlaq96Resources from "./Js Files/Resources/SurahAlaq96Resources";
import SurahTeen95Resources from "./Js Files/Resources/SurahTeen95Resources";
import SurahInshirah94Resources from "./Js Files/Resources/SurahInshirah94Resources";
import SurahZuha93Resources from "./Js Files/Resources/SurahZuha93Resources";
import SurahAlLail92Resources from "./Js Files/Resources/SurahAlLail92Resources";
import SurahShams91Resources from "./Js Files/Resources/SurahShams91Resources";
import SurahBalad90Resources from "./Js Files/Resources/SurahBalad90Resources";
import SurahFajr89Resources from "./Js Files/Resources/SurahFajr89Resources";
import SurahGhashia88Resources from "./Js Files/Resources/SurahGhashia88Resources";
import SurahAala87Resources from "./Js Files/Resources/SurahAala87Resources";
import SurahTariq86Resources from "./Js Files/Resources/SurahTariq86Resources";
import SurahBurooj85Resources from "./Js Files/Resources/SurahBurooj85Resources";
import SurahInshiqaaq84Resources from "./Js Files/Resources/SurahInshiqaaq84Resources";
import SurahMutaffifeen83Resources from "./Js Files/Resources/SurahMutaffifeen83Resources";
import SurahInfitar82Resources from "./Js Files/Resources/SurahInfitar82Resources";
import SurahTakweer81Resources from "./Js Files/Resources/SurahTakweer81Resources";
import SurahAbasa80Resources from "./Js Files/Resources/SurahAbasa80Resources";
import SurahAnNaaziat79Resources from "./Js Files/Resources/SurahAnNaaziat79Resources";
import SurahNaba78Resources from "./Js Files/Resources/SurahNaba78Resources";
        



/*word by word Translation and gramamr*/
import Surah114WBW from "./Js Files/WBW & Grammar/Surah Naas";
import SurahFalakWBW from "./Js Files/WBW & Grammar/Surah Falaq"; 
import SurahIkhlasWBW from "./Js Files/WBW & Grammar/Surah Ikhlas.js"; 
import SurahLahab111WBW from "./Js Files/WBW & Grammar/Surah Lahab";
 import SurahNasar110WBW from "./Js Files/WBW & Grammar/Surah Nasr";
 import SurahKafiroon109WBW from "./Js Files/WBW & Grammar/Surah Kafiroon";
 import SurahKausar108WBW from "./Js Files/WBW & Grammar/Surah Kausar";
 import SurahMaun107WBW from "./Js Files/WBW & Grammar/Surah Maun";
 import SurahQuraish106WBW from "./Js Files/WBW & Grammar/Surah Quraish";
 import SurahFil105WBW from "./Js Files/WBW & Grammar/Surah Fil";
 import SurahHumazaWBW from "./Js Files/WBW & Grammar/Surah Humaza";
 import SurahAsrWBW from "./Js Files/WBW & Grammar/Surah Asr";
 import SurahTakasurWBW from "./Js Files/WBW & Grammar/Surah Takasur";
 import SurahQariahWBW from "./Js Files/WBW & Grammar/Surah Qariah";
 import SurahAadiatWBW from "./Js Files/WBW & Grammar/Surah Aadiat";
 import SurahZalzalahWBW from "./Js Files/WBW & Grammar/Surah Zalzalah";
 import SurahBayyinahWBW from "./Js Files/WBW & Grammar/Surah Bayyinah";
 import SurahQadrWBW from "./Js Files/WBW & Grammar/Surah Qadr";
 import SurahAlaqWBW from "./Js Files/WBW & Grammar/Surah Alaq";
 import SurahTeenWBW from "./Js Files/WBW & Grammar/Surah Teen";
 import SurahInshirahWBW from "./Js Files/WBW & Grammar/Surah Inshirah";
 import SurahZuhaWBW from "./Js Files/WBW & Grammar/Surah Zuha";
 import SurahAlLailWBW from "./Js Files/WBW & Grammar/Surah AlLail";
 import SurahShamsWBW from "./Js Files/WBW & Grammar/Surah Shams";
 import SurahBaladWBW from "./Js Files/WBW & Grammar/Surah Balad";
 import SurahFajrWBW from "./Js Files/WBW & Grammar/Surah Fajr";
 import SurahGhashiaWBW from "./Js Files/WBW & Grammar/Surah Ghashia";
 import SurahAalaWBW from "./Js Files/WBW & Grammar/Surah Aala";
 import SurahTariqWBW from "./Js Files/WBW & Grammar/Surah Tariq";
 import SurahBuroojWBW from "./Js Files/WBW & Grammar/Surah Burooj";
 import SurahInshiqaaqWBW from "./Js Files/WBW & Grammar/Surah Inshiqaaq";
 import SurahMutaffifeenWBW from "./Js Files/WBW & Grammar/Surah Mutaffifeen";
 import SurahInfitarWBW from "./Js Files/WBW & Grammar/Surah Infitar";
 import SurahTakweerWBW from "./Js Files/WBW & Grammar/Surah Takweer";
 import SurahAbasaWBW from "./Js Files/WBW & Grammar/Surah Abasa";
 import SurahAnNaaziatWBW from "./Js Files/WBW & Grammar/Surah AnNaaziat";

 import SurahNabaWBW from "./Js Files/WBW & Grammar/Surah Naba";




import { Switch, Route, Redirect } from "react-router-dom";
import"./Font/_PDMS_Saleem_QuranFont.ttf";
import"./Font/Lateef-Regular.ttf";
  import"./Font/NotoSansArabic-VariableFont_wdth,wght.ttf"; 
import"./Font/noorehuda Regular.ttf";
import"./Font/NotoNastaliqUrdu-VariableFont_wght.ttf";
import"./Font/110_Besmellah Normal.ttf";
import"./Font/Amiri-Bold.ttf";
import"./Font/Coors_Script_Regular.ttf";
const App = () => {
    console.log(Records);
    console.log(Record);
    console.log(Record112);
    console.log(Record111);
    console.log(Record110);
    console.log(Record109);
    console.log(Record108);
    console.log(Record107);
    console.log(Record106);
    console.log(Record105);
    console.log(Record104);
    console.log(Record103);
    console.log(Record102);
    console.log(Record101);
    console.log(Record100);
    console.log(Record99);
    console.log(Record98);
    console.log(Record97);
    console.log(Record96);
    console.log(Record95);
    console.log(Record94);
    console.log(Record93);
    console.log(Record92);
    console.log(Record91);
    console.log(Record90);
    console.log(Record89);
    console.log(Record88);
    console.log(Record87);
    console.log(Record86);
    console.log(Record85);
    console.log(Record84);
    console.log(Record83);
    console.log(Record82);
    console.log(Record81);
    console.log(Record80);
    console.log(Record79);
    console.log(Record78);
    return (
        <>
        <div className="App">
      {}
      <Footer />
    </div>
        <Navbar/>
        <Switch>
            <Route exact path="/" component ={Home} />
            <Route exact path="/About" component ={About} />
            <Route exact path="/Translation" component ={Translation} />
            <Route exact path="/Grammar" component ={Grammar} />
    
            <Route exact path="/FeedbackForm" component ={FeedbackForm} />
                  { /* Translation path*/}

                 
          <Route exact path="/Translation/Surah Naba"component={SurahNabaTranslation}/>
          <Route exact path="/Translation/Surah AnNaaziat"component={SurahAnNaaziatTranslation}/>
                  <Route exact path="/Translation/Surah Abasa"component={SurahAbasaTranslation}/>
          <Route exact path="/Translation/Surah Takweer"component={SurahTakweerTranslation}/>
          <Route exact path="/Translation/Surah Infitar"component={SurahInfitarTranslation}/>
          <Route exact path="/Translation/Surah Mutaffifeen"component={SurahMutaffifeenTranslation}/>
          <Route exact path="/Translation/Surah Inshiqaaq"component={SurahInshiqaaqTranslation}/>
          <Route exact path="/Translation/Surah Burooj"component={SurahBuroojTranslation}/>
          <Route exact path="/Translation/Surah Tariq"component={SurahTariqTranslation}/>
          <Route exact path="/Translation/Surah Aala"component={SurahAalaTranslation}/>
          <Route exact path="/Translation/Surah Ghashia"component={SurahGhashiaTranslation}/>
                  <Route exact path="/Translation/Surah Fajr"component={SurahFajrTranslation}/>
          <Route exact path="/Translation/Surah Balad"component={SurahBaladTranslation}/>
          <Route exact path="/Translation/Surah Shams"component={SurahShamsTranslation}/>
          <Route exact path="/Translation/Surah AlLail"component={SurahAlLailTranslation}/>
          <Route exact path="/Translation/Surah Zuha"component={SurahZuhaTranslation}/>
          <Route exact path="/Translation/Surah Inshirah"component={SurahInshirahTranslation}/>
          <Route exact path="/Translation/Surah Teen"component={SurahTeenTranslation}/>
          <Route exact path="/Translation/Surah Alaq"component={SurahAlaqTranslation}/>
          <Route exact path="/Translation/Surah Qadr"component={SurahQadrTranslation}/>
          <Route exact path="/Translation/Surah Bayyinah"component={SurahBayyinahTranslation}/>
         <Route exact path="/Translation/Surah Zalzalah"component={SurahZalzalahTranslation}/> 
           <Route exact path="/Translation/Surah Aadiat"component={SurahAadiatTranslation}/>
            <Route exact path="/Translation/Surah Qariah"component={SurahQariahTranslation}/>
           <Route exact path="/Translation/Surah Takasur"component={SurahTakasurTranslation}/>
            <Route exact path="/Translation/Surah Asr"component={SurahAsrTranslation}/>
            <Route exact path="/Translation/Surah Humaza"component={SurahHumazaTranslation}/>
            <Route exact path="/Translation/Surah Fil"component={SurahFilTranslation}/>
            <Route exact path="/Translation/Surah Quraish"component={SurahQuraishTranslation}/>
            <Route exact path="/Translation/Surah Maun"component={SurahMaunTranslation}/>
            <Route exact path="/Translation/Surah Kausar"component={SurahKausarTranslation}/>
            <Route exact path="/Translation/Surah Kafiroon"component={SurahKafiroonTranslation}/>
            <Route exact path="/Translation/Surah Nasr"component={SurahNasarTranslation}/>
            <Route exact path="/Translation/Surah Lahab"component={SurahLahabTranslation}/>
            <Route exact path="/Translation/Surah Ikhlas"component={SurahIkhlasTranslation}/>
            <Route exact path="/Translation/Surah Falaq"component={SurahFalakTranslation}/>
            <Route exact path="/Translation/Surah Naas"component={Surah114}/>



            { /* Resources path*/}
            <Route exact path="/SurahNaas114Resources"component={SurahNaas114Resources}/>
            <Route exact path="/SurahFalak113Resources"component={SurahFalak113Resources}/>
            <Route exact path="/SurahIkhlas112Resources"component={SurahIkhlas112Resources}/>
            <Route exact path="/SurahLahab111Resources"component={SurahLahab111Resources}/>
            <Route exact path="/SurahNasr110Resources"component={SurahNasr110Resources}/>
            <Route exact path="/SurahKafiroon109Resources"component={SurahKafiroon109Resources}/>
            <Route exact path="/SurahKausar108Resources"component={SurahKausar108Resources}/>
            <Route exact path="/SurahMaun107Resources"component={SurahMaun107Resources}/>
            <Route exact path="/SurahQuraish106Resources"component={SurahQuraish106Resources}/>
            <Route exact path="/SurahFil105Resources"component={SurahFil105Resources}/>
            <Route exact path="/SurahHumaza104Resources"component={SurahHumaza104Resources}/>
            <Route exact path="/SurahAsr103Resources"component={SurahAsr103Resources}/>
            <Route exact path="/SurahTakasur102Resources"component={SurahTakasur102Resources}/>
            <Route exact path="/SurahQariah101Resources"component={SurahQariah101Resources}/>
            <Route exact path="/SurahAadiat100Resources"component={SurahAadiat100Resources}/>
            <Route exact path="/SurahZalzalah99Resources"component={SurahZalzalah99Resources}/>
            <Route exact path="/SurahBayyinah98Resources"component={SurahBayyinah98Resources}/>
            <Route exact path="/SurahQadr97Resources"component={SurahQadr97Resources}/>
            <Route exact path="/SurahAlaq96Resources"component={SurahAlaq96Resources}/>
            <Route exact path="/SurahTeen95Resources"component={SurahTeen95Resources}/>
            <Route exact path="/SurahInshirah94Resources"component={SurahInshirah94Resources}/>
            <Route exact path="/SurahZuha93Resources"component={SurahZuha93Resources}/>
            <Route exact path="/SurahAlLail92Resources"component={SurahAlLail92Resources}/>
            <Route exact path="/SurahShams91Resources"component={SurahShams91Resources}/>
            <Route exact path="/SurahBalad90Resources"component={SurahBalad90Resources}/>
            <Route exact path="/SurahFajr89Resources"component={SurahFajr89Resources}/>
            <Route exact path="/SurahGhashia88Resources"component={SurahGhashia88Resources}/>
            <Route exact path="/SurahAala87Resources"component={SurahAala87Resources}/>
            <Route exact path="/SurahTariq86Resources"component={SurahTariq86Resources}/>
            <Route exact path="/SurahBurooj85Resources"component={SurahBurooj85Resources}/>
            <Route exact path="/SurahInshiqaaq84Resources"component={SurahInshiqaaq84Resources}/>
            <Route exact path="/SurahMutaffifeen83Resources"component={SurahMutaffifeen83Resources}/>
            <Route exact path="/SurahInfitar82Resources"component={SurahInfitar82Resources}/>
            <Route exact path="/SurahTakweer81Resources"component={SurahTakweer81Resources}/>
            <Route exact path="/SurahAbasa80Resources"component={SurahAbasa80Resources}/>
            <Route exact path="/AnNaaziat79Resources"component={SurahAnNaaziat79Resources}/>
            <Route exact path="/SurahNaba78Resources"component={SurahNaba78Resources}/>
           
           
           


            { /*from grammar  */}    
<Route exact path="/Grammar/Surah Naas" component={Surah114WBW} />
<Route exact path="/Grammar/Surah Falaq" component={SurahFalakWBW} />
<Route exact path="/Grammar/Surah Ikhlas" component={SurahIkhlasWBW} />
<Route exact path="/Grammar/Surah Lahab" component={SurahLahab111WBW} />
<Route exact path="/Grammar/Surah Nasr" component={SurahNasar110WBW} />
<Route exact path="/Grammar/Surah Kafiroon" component={SurahKafiroon109WBW} />
<Route exact path="/Grammar/Surah Kausar" component={SurahKausar108WBW} />
<Route exact path="/Grammar/Surah Maun" component={SurahMaun107WBW} />
<Route exact path="/Grammar/Surah Quraish" component={SurahQuraish106WBW} />
<Route exact path="/Grammar/Surah Fil" component={SurahFil105WBW} />
<Route exact path="/Grammar/Surah Humaza" component={SurahHumazaWBW} />
<Route exact path="/Grammar/Surah Asr" component={SurahAsrWBW} />
<Route exact path="/Grammar/Surah Takasur" component={SurahTakasurWBW} />
<Route exact path="/Grammar/Surah Qariah" component={SurahQariahWBW} />
<Route exact path="/Grammar/Surah Aadiat" component={SurahAadiatWBW} />
<Route exact path="/Grammar/Surah Zalzalah" component={SurahZalzalahWBW} />
<Route exact path="/Grammar/Surah Bayyinah" component={SurahBayyinahWBW} />
<Route exact path="/Grammar/Surah Qadr" component={SurahQadrWBW} />
<Route exact path="/Grammar/Surah Alaq" component={SurahAlaqWBW} />
<Route exact path="/Grammar/Surah Teen" component={SurahTeenWBW} />
<Route exact path="/Grammar/Surah Inshirah" component={SurahInshirahWBW} />
<Route exact path="/Grammar/Surah Zuha" component={SurahZuhaWBW} />
<Route exact path="/Grammar/Surah AlLail" component={SurahAlLailWBW} />
<Route exact path="/Grammar/Surah Shams" component={SurahShamsWBW} />
<Route exact path="/Grammar/Surah Balad" component={SurahBaladWBW} />
<Route exact path="/Grammar/Surah Fajr" component={SurahFajrWBW} />
<Route exact path="/Grammar/Surah Ghashia" component={SurahGhashiaWBW} />
<Route exact path="/Grammar/Surah Aala" component={SurahAalaWBW} />
<Route exact path="/Grammar/Surah Tariq" component={SurahTariqWBW} />
<Route exact path="/Grammar/Surah Burooj" component={SurahBuroojWBW} />
<Route exact path="/Grammar/Surah Inshiqaaq" component={SurahInshiqaaqWBW} />
<Route exact path="/Grammar/Surah Mutaffifeen" component={SurahMutaffifeenWBW} />
<Route exact path="/Grammar/Surah Infitar" component={SurahInfitarWBW} />
<Route exact path="/Grammar/Surah Takweer" component={SurahTakweerWBW} />
<Route exact path="/Grammar/Surah Abasa" component={SurahAbasaWBW} />
<Route exact path="/Grammar/Surah AnNaaziat" component={SurahAnNaaziatWBW} />
<Route exact path="/Grammar/Surah Naba" component={SurahNabaWBW} />



{ /* Direct path */}
            <Route exact path="/Surah Naas" component={Surah114WBW} />
            <Route exact path="/Surah Falaq"component={SurahFalakWBW}/>
            <Route exact path="/Surah Ikhlas"component={SurahIkhlasWBW}/>
            <Route exact path="/Surah Lahab"component={SurahLahab111WBW}/>
            <Route exact path="/Surah Nasr"component={SurahNasar110WBW}/>
            <Route exact path="/Surah Kafiroon"component={SurahKafiroon109WBW}/>
            <Route exact path="/Surah Kausar"component={SurahKausar108WBW}/>
            <Route exact path="/Surah Maun"component={SurahMaun107WBW}/>
            <Route exact path="/Surah Quraish"component={SurahQuraish106WBW}/>
            <Route exact path="/Surah Fil"component={SurahFil105WBW}/>
            <Route exact path="/Surah Humaza"component={SurahHumazaWBW}/>
            <Route exact path="/Surah Asr"component={SurahAsrWBW}/>
            <Route exact path="/Surah Takasur"component={SurahTakasurWBW}/>
            <Route exact path="/Surah Qariah"component={SurahQariahWBW}/>
            <Route exact path="/Surah Aadiat"component={SurahAadiatWBW}/>
            <Route exact path="/Surah Zalzalah"component={SurahZalzalahWBW}/>
            <Route exact path="/Surah Bayyinah"component={SurahBayyinahWBW}/>
            <Route exact path="/Surah Qadr"component={SurahQadrWBW}/>
            <Route exact path="/Surah Alaq"component={SurahAlaqWBW}/>
            <Route exact path="/Surah Teen"component={SurahTeenWBW}/>
            <Route exact path="/Surah Inshirah"component={SurahInshirahWBW}/>
            <Route exact path="/Surah Zuha"component={SurahZuhaWBW}/>
            <Route exact path="/Surah AlLail"component={SurahAlLailWBW}/>
            <Route exact path="/Surah Shams"component={SurahShamsWBW}/>
            <Route exact path="/Surah Balad"component={SurahBaladWBW}/>
            <Route exact path="/Surah Fajr"component={SurahFajrWBW}/>
            <Route exact path="/Surah Ghashia"component={SurahGhashiaWBW}/>
            <Route exact path="/Surah Aala"component={SurahAalaWBW}/>
            <Route exact path="/Surah  AlLail"component={SurahAlLailWBW}/>
            <Route exact path="/Surah Tariq"component={SurahTariqWBW}/>
            <Route exact path="/Surah Burooj"component={SurahBuroojWBW}/>
            <Route exact path="/Surah Inshiqaaq"component={SurahInshiqaaqWBW}/>
            <Route exact path="/Surah Mutaffifeen"component={SurahMutaffifeenWBW}/>
            <Route exact path="/Surah Infitar"component={SurahInfitarWBW}/>
            <Route exact path="/Surah Takweer"component={SurahTakweerWBW}/>
            <Route exact path="/Surah Abasa"component={SurahAbasaWBW}/>
            <Route exact path="/Surah AnNaaziat"component={SurahAnNaaziatWBW}/>
            <Route exact path="/Surah Naba"component={SurahNabaWBW}/>
            
                    
            
            <Route component ={Error} />
            <Redirect to=" " />
        </Switch>
        </>
    );

}; 

export default App;
