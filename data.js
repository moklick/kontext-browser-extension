var data = [
  {
    'forename': 'Björn',
    'name': 'Höcke',
    'text': ['der gute Kontakte zur NPD hat'],
    'src': ['https://de.wikipedia.org/wiki/Bj%C3%B6rn_H%C3%B6cke#Vermutete_Autorschaft_in_Zeitschriften_des_NPD-Umfelds']
  },
  {
    'forename': 'Alexander',
    'name': 'Gauland',
    'text': ['der Menschen entsorgen lassen will'],
    'src': ['http://www.faz.net/aktuell/politik/bundestagswahl/afd-alexander-gauland-traeumt-von-entsorgung-aydan-oezoguz-15171141.html']
  },
  {
    'forename': 'Alice',
    'name': 'Weidel',
    'text': ['die Deutschland als \"nicht souverän\" bezeichnet'],
    'src': ['http://www.zeit.de/politik/deutschland/2017-09/afd-spitzenkandidatin-alice-weidel-email-rechtsradikal']
  },
  {
    'forename': 'Jörg',
    'name': 'Meuthen',
    'text': ['der von einem \"links-rot-grün verseuchten 68er-Deutschland\" spricht'],
    'src': ['https://www.stuttgarter-nachrichten.de/inhalt.bundesparteitag-in-stuttgart-afd-will-den-bundespraesidenten-stellen.a4c235d3-4b5e-44fe-9bea-24f2befa986c.html']
  },
  {
    'forename': 'Jens',
    'name': 'Maier',
    'text': ['der Verständnis für den Massenmörder Anders Breivik gezeigt hat'],
    'src': ['http://www.tagesspiegel.de/politik/jens-maier-aus-sachsen-afd-politiker-aeussert-verstaendnis-fuer-rechtsterrorist-anders-breivik/19698996.html']
  },
  {
    'forename': 'Frauke',
    'name': 'Petry',
    'text': ['die Fan der französischen Rechtsextremistin Marine Le Pen ist', 'die den Schießbefehl an der Grenze fordert'],
    'src': ['https://de.wikipedia.org/wiki/Frauke_Petry#Migrationspolitik,_Asylrecht,_Kriminalit%C3%A4tsbek%C3%A4mpfung_und_EU', 'http://www.faz.net/aktuell/politik/inland/afd-chefin-frauke-petry-fodert-schiessbefehl-an-grenze-14044672.html']
  },
  {
    'forename': 'Horst',
    'name': 'Seehofer',
    'text': ['der im Bundestag dagegen gestimmt hat, Vergewaltigung in der Ehe unter Strafe zu stellen'],
    'src': ['https://twitter.com/renatekuenast/status/685743903442624512?lang=de']
  },
  {
    'forename': 'Manfred',
    'name': 'Weber',
    'text': ['der von der \"finalen Lösung der Flüchtlingsfrage\" gesprochen hat'],
    'src': ['http://www.spiegel.de/politik/deutschland/manfred-weber-fordert-die-finale-loesung-der-fluechtlingsfrage-a-1186493.html']
  },
  {
    'forename': 'Volker',
    'name': 'Kauder',
    'text': ['der im Bundestag gegen die Strafbarkeit von Vergewaltigung in der Ehe gestimmt hat'],
    'src': ['https://twitter.com/renatekuenast/status/685743903442624512?lang=de']
  },
  {
    'forename': 'Albrecht',
    'name': 'Glaser',
    'text': ['der das Grundrecht auf Religionsfreiheit abschaffen will'],
    'src': ['https://de.wikipedia.org/wiki/Albrecht_Glaser']
  },
  {
    'forename': 'Kay',
    'name': 'Nerstheimer',
    'text': ['der Homosexuelle als \"degenierte Spezies\" bezeichnet'],
    'src': ['https://www.neues-deutschland.de/artikel/1070234.afd-im-abgeordnetenhaus-verschwoerung-und-hass.html']
  },
  {
    'forename': 'Georg',
    'name': 'Pazderski',
    'text': ['der vom \"Volkssturm der Argumente\" spricht'],
    'src': ['https://www.neues-deutschland.de/artikel/1070234.afd-im-abgeordnetenhaus-verschwoerung-und-hass.html']
  },
  {
    'forename': 'Markus',
    'name': 'Frohnmaier',
    'text': ['der \"volksfeindliche Parteien\" aus Deutschland \"heraustreiben will\"'],
    'src': ['http://meedia.de/2017/05/10/zitate-streit-afd-politiker-markus-frohnmaier-verliert-vor-gericht-gegen-ulmer-lokal-portal/']
  },
  {
    'forename': 'Martin',
    'name': 'Hohmann',
    'text': ['der Juden als Tätervolk bezeichnet'],
    'src': ['http://www.zeit.de/politik/deutschland/2017-09/afd-kandidaten-bundestagswahl-abgeordnete']
  },
  {
    'forename': 'Wilhelm',
    'name': 'von Gottberg',
    'text': ['der den Holocaust als \"Mittel zur Kriminalisierung der Deutschen\" bezeichnet'],
    'src': ['http://www.zeit.de/politik/deutschland/2017-09/afd-kandidaten-bundestagswahl-abgeordnete']
  },
  {
    'forename': 'Stefan',
    'name': 'Keuter',
    'text': ['der auf Pegida-Demos \"Lügenpresse\" mitskandiert'],
    'src': ['http://www.tagesspiegel.de/politik/neue-abgeordnete-das-sind-die-radikalen-in-der-afd-fraktion/20361302.html']
  },
  {
    'forename': 'Frank',
    'name': 'Pasemann',
    'text': ['der Kunde der Neonazi-Kleidermarke Thor Steinar ist', 'der Verbindungen zur rassistischen Identitäten Bewegungen hat'],
    'src': ['http://www.tagesspiegel.de/politik/neue-abgeordnete-das-sind-die-radikalen-in-der-afd-fraktion/20361302.html', 'http://www.zeit.de/politik/deutschland/2017-09/afd-kandidaten-bundestagswahl-abgeordnete']
  },
  {
    'forename': 'Petr',
    'name': 'Bystron',
    'text': ['der laut Verfassungsschutz verfassungsfeindliche Bestrebungen zeigt'],
    'src': ['http://www.tagesspiegel.de/politik/neue-abgeordnete-das-sind-die-radikalen-in-der-afd-fraktion/20361302.html']
  },
  {
    'forename': 'Beatrix',
    'name': 'von Storch',
    'text': ['die an der Grenze auch auf Kinder schießen lassen würde'],
    'src': ['http://www.spiegel.de/politik/deutschland/afd-beatrix-von-storch-wird-im-netz-verspottet-a-1076209.html']
  },
  {
    'forename': 'Andreas',
    'name': 'Kalbitz',
    'text': ['der Vorsitzender des rechtsextremen Vereins Kultur- und Zeitgeschichte, Archiv der Zeit war'],
    'src': ['http://www.maz-online.de/Brandenburg/Der-Brandenburger-AfD-Landtagsabgeordnete-Andreas-Kalbitz-geraet-wegen-einer-Mitgliedschaft-in-einem-rechten-Verein-unter-Druck']
  },
  {
    'forename': 'Doris',
    'name': 'von Sayn-Wittgenstein',
    'text': ['die im Vorstand eines Reichsbürger-Vereins war'],
    'src': ['http://haz.de/Nachrichten/Politik/Deutschland-Welt/AfD-Fuerstin-hat-Vergangenheit-in-Reichsbuerger-Szene']
  },
  {
    'forename': 'André',
    'name': 'Poggenburg',
    'text': ['der Veranstaltungen mit Neonazis durchführt'],
    'src': ['http://www.zeit.de/2016/05/afd-andre-poggenburg-sachsen-anhalt-asylpolitik-wahlkampf']
  },
  {
    'forename': 'Uwe',
    'name': 'Junge',
    'text': ['der Fan von Victor Orbán ist'],
    'src': ['https://twitter.com/Uwe_Junge_MdL/status/950625041775022080']
  },
  {
    'forename': 'Marc',
    'name': 'Jongen',
    'text': ['der Verschwörungstheorien zu \"Mischbevölkerungen\" zitiert'],
    'src': ['http://www.sueddeutsche.de/politik/philosoph-marc-jongen-der-wutdenker-der-afd-1.2865813-2']
  },
  {
    'forename': 'Guido',
    'name': 'Reil',
    'text': ['der eng mit Bernd Höcke zusammenarbeit'],
    'src': ['https://twitter.com/GuidoReil/status/952712254868377606']
  },
  {
    'forename': 'Ralf',
    'name': 'Özkara',
    'text': ['der die Überwachung aller Moscheen in Deutschland fordert'],
    'src': ['https://www.youtube.com/watch?v=0_XCeFgZHQk']
  },
  {
    'forename': 'Martin',
    'name': 'Sichert',
    'text': ['der den zweiten Weltkrieg verharmlost'],
    'src': ['http://www.abendzeitung-muenchen.de/inhalt.sie-ziehen-in-den-bundestag-ein-die-kuenftigen-bayerischen-afd-abgeordneten.b36878c1-9162-404d-80ab-f89021b4d36c.html']
  },
  {
    'forename': 'Frank',
    'name': 'Magnitz',
    'text': ['der eng mit Bernd Höcke zusammenarbeitet'],
    'src': ['https://www.weser-kurier.de/bremen/bremen-stadt_artikel,-gegen-merkel-und-mohammed-_arid,1645275.html']
  },
  {
    'forename': 'Dirk',
    'name': 'Nockemann',
    'text': ['der für eine Wasserwerfer-Attacke auf die Holocaust-Überlebende Esther Bejarano verantwortlich ist'],
    'src': ['https://publikative.org/2015/01/17/schill-imitator-bei-der-afd-in-hamburg/']
  },
  {
    'forename': 'Leif-Erik',
    'name': 'Holm',
    'text': ['der mit Bernd Höcke zusammenarbeitet'],
    'src': ['http://www.zeit.de/2016/37/mecklenburg-vorpommern-afd-kandidat-leif-erik-holm-berlin']
  },
  {
    'forename': 'Armin-Paul',
    'name': 'Hampel',
    'text': ['der von \"Asylwahn\" und \"Blockparteien\" im Bundestag spricht'],
    'src': ['https://www.taz.de/!5241266/']
  },
  {
    'forename': 'Thomas',
    'name': 'Röckemann',
    'text': ['der von \"Systemmedien\" spricht'],
    'src': ['https://de-de.facebook.com/thomas.roeckemann/posts/1272919946186671']
  }
];
