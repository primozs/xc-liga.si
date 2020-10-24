import React from 'react';
import XcDpLogo from 'app/logos/XcDpLogo';
import RulesLogo from 'app/logos/RulesLogo';

const RulesPage = () => (
  <>
    <div className="flex justify-center items-center bg-gray-50">
      <div className="flex-1 flex max-w-5xl justify-between items-center pb-5 sm:pb-8">
        <RulesLogo />
        <div className="flex flex-col self-end px-5 flex-1">
          <XcDpLogo width="100%" />
        </div>
      </div>
    </div>
    <article className="px-5 py-5 mx-auto prose prose-sm sm:prose lg:prose-lg xl:prose-lg gridcol-text-2 sm:gap-4">
      <h1>TEKMOVALNI PRAVILNIK ZA DRŽAVNO PRVENSTVO V PROSTIH PRELETIH</h1>
      <h2>Uvod</h2>
      <p>
        Državno prvenstvo v jadralnem padalstvu v prostih preletih je
        tekmovanje, ki se odvija na področju Evropske unije. Štejejo najboljši
        trije leti. Državno prvenstvo je pod okriljem Komisije za jadralno
        padalstvo in zmajarstvo pri LZS.
      </p>
      <p>
        Tekmovalci lahko v sezoni tekmujejo samo za eno društvo. V kolikor
        tekmovalec med sezono zamenja društvo, se rezultati pred menjavo
        brišejo.
      </p>
      <h2>Pogoji za udeležbo</h2>
      <ul>
        <li>Pilot mora biti član društva, ki je član LZS,</li>
        <li>
          Pilot mora objaviti let na spletni strežnik, ki je za to tekmovanje
          določen s strani komisije za jadralno padalstvo in zmajarstvo pri LZS
          in se mora strinjati in upoštevati vse varnostne ukrepe, ki jih zadaja
          uredba za prosto letenje z jadralnimi padali,
        </li>
        <li>
          Društvo oziroma pilot mora posredovati vse podatke, ki so potrebni za
          obdelavo osebnih podatkov za namene tega tekmovanja.
        </li>
      </ul>
      <h2>Obveznosti tekmovalcev</h2>
      <ul>
        <li>
          obvezna uporaba standardizirane čelade po EN 966, sedeža po EN 1651,
          jadralnega padala po EN 926/2 ter reševalnega padala,
        </li>
        <li>
          tekmovalci mlajši od 18 in starejši od 16 let potrebujejo pisno
          privolitev vsaj enega starša ali zakonitega zastopnika,
        </li>
        <li>dovoljenje pilota jadralnega padala.</li>
      </ul>
      <h2>Izvedba tekmovanja</h2>
      <p>
        Tekmovanje se začne 1. 10. in traja do 30. 9. naslednjega leta. Državno
        prvenstvo v prostih preletih poteka na spletu, kjer se beležijo leti
        tekmovalcev in trenutni rezultati. Udeleženec tekmovanja je vsak član
        LZSja, ki naloži vsaj en let znotraj Evropske unije na spletni strežnik,
        ki je določen s strani LZSja. Štejejo trije najbolje točkovani leti na
        območju Evropske unije.
      </p>
      <p>
        Let tekmovalec naloži na spletno stran{' '}
        <a
          href="http://xcglobe.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          xcglobe.com
        </a>
      </p>
      <h2>Točkovanje</h2>
      <p>
        Leti preko treh točk se vrednotijo s faktorjem 1.0, leti v trikotniku s
        1.2 in leti v FAI trikotniku s 1.4. Štejejo samo leti s veljavno
        G-record oznako. Leti, pri nalaganju na strežnik, ne smejo biti starejši
        od desetih dni.
      </p>
    </article>
  </>
);

export default RulesPage;
