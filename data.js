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
    'text': ['der stolz auf die Leistungen deutscher Soldaten im zweiten Weltkrieg ist', 'der Menschen entsorgen lassen will'],
    'src': ['https://www.buzzfeed.com/marcusengert/afd-spitzenkandidat-gauland-findet-deutsche-sollten-stolz?utm_term=.mdPMqlyw2v#.muP3gEdlzW', 'http://www.faz.net/aktuell/politik/bundestagswahl/afd-alexander-gauland-traeumt-von-entsorgung-aydan-oezoguz-15171141.html']
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
    'text': ['der \"volksfeindliche Parteien\" aus Deutschland \"heraustreiben will\"', 'der mit rechtsextremen Organisationen zusammenarbeitet'],
    'src': ['http://meedia.de/2017/05/10/zitate-streit-afd-politiker-markus-frohnmaier-verliert-vor-gericht-gegen-ulmer-lokal-portal/', 'http://www.badische-zeitung.de/suedwest-1/neue-vorwuerfe-gegen-afd-jungpolitiker-frohnmaier--125381174.html']
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
    'text': ['der laut einem Münchner Gericht verfassungsfeindliche Bestrebungen zeigt'],
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
    'text': ['der Fan von Viktor Orbán ist'],
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
  },
  {
    'forename': 'Jürgen',
    'name': 'Pohl',
    'text': ['der mit zahlreichen Nazis auf Facebook befreundet ist', 'der enger Weggefährte von Bernd Höcke ist'],
    'src': ['https://www.buzzfeed.com/marcusengert/fast-50-bundestagskandidaten-der-afd-grenzen-sich-nicht-von?utm_term=.puYAXweYRB#.xgj8G3xb7r', 'https://de.wikipedia.org/wiki/J%C3%BCrgen_Pohl_(Politiker)']
  },
  {
    'forename': 'Thomas',
    'name': 'Seitz',
    'text': ['der Rassist ist'],
    'src': ['http://www.spiegel.de/wissenschaft/mensch/bundestagswahl-2017-sieben-gruende-afd-zu-waehlen-aber-treffen-sie-auf-sie-zu-a-1169258.html']
  },
  {
    'forename': 'Peter',
    'name': 'Boehringer',
    'text': ['der an eine jüdische Weltverschwörung glaubt', 'der die Kanzlerin als \"Merkelnutte\" bezeichnet haben soll'],
    'src': ['http://www.tagesspiegel.de/politik/gaulands-mitstreiter-diese-rechten-will-die-afd-in-den-bundestag-schicken/20344126.html', 'http://www.spiegel.de/politik/deutschland/bundestag-wann-die-afd-beim-gedenken-an-auschwitz-befreiung-nicht-klatschte-a-1190774.html']
  },
  {
    'forename': 'Enrico',
    'name': 'Komning',
    'text': ['der mit seiner Tochter stolz die erste Strophe der Nationalhymne singt', 'der mit der rechtsextremen Identitären Bewegung und mit Pegida sympathisiert'],
    'src': ['http://www.tagesspiegel.de/themen/reportage/rechte-vor-einzug-in-den-bundestag-so-extrem-sind-die-kandidaten-der-afd/20350578.html', 'http://www.belltower.news/artikel/afd-vor-den-wahlen-das-schreiben-die-kandidatinnen-bei-facebook-und-twitter-11193']
  },
  {
    'forename': 'Sebastian',
    'name': 'Münzenmaier',
    'text': ['der an Hooligan-Schlägereien teilgenommen haben soll', 'der Mitglied bei der islamfeindlichen Partei \"Die Freiheit\" war'],
    'src': ['http://www.tagesspiegel.de/themen/reportage/rechte-vor-einzug-in-den-bundestag-so-extrem-sind-die-kandidaten-der-afd/20350578.html']
  },
  {
    'forename': 'Nicolaus',
    'name': 'Fest',
    'text': ['der Gastarbeiter als \"Gesindel\" bezeichnet', 'der alle Moscheen in Deutschland schließen lassen will'],
    'src': ['http://www.tagesspiegel.de/berlin/afd-bundestagskandidat-anzeige-gegen-nicolaus-fest-wegen-volksverhetzung/19600292.html', 'http://www.spiegel.de/video/afd-neuzugang-nicolaus-fest-will-schliessung-von-moscheen-video-1710365.html']
  },
  {
    'forename': 'Karsten',
    'name': 'Hilse',
    'text': ['der hinter der Ehe für alle \"Strippenzieher im Hintergrund\" vermutet'],
    'src': ['http://www.tagesspiegel.de/themen/reportage/rechte-vor-einzug-in-den-bundestag-so-extrem-sind-die-kandidaten-der-afd/20350578.html']
  },
  {
    'forename': 'Tino',
    'name': 'Chrupalla',
    'text': ['der die Zensur von Medien fordert'],
    'src': ['http://www.bento.de/politik/afd-dutzende-rechtsradikale-auf-den-vorderen-listenplaetze-zur-bundestagswahl-2017-1681100/']
  },
  {
    'forename': 'Martin',
    'name': 'Renner',
    'text': ['der von einer \"Schuldkult-Hypermoralisierung\" in Deutschland spricht'],
    'src': ['http://www.rundschau-online.de/politik/rechtsruck-bei-der-afd-martin-renner-wird-spitzenkandidat-fuer-die-bundestagswahl-25918682']
  },
  {
    'forename': 'Siegbert',
    'name': 'Droese',
    'text': ['dessen Autokennzeichen die Neonazicodes AH1818 enthält', 'der mit der Rechtsextremen Tatjana Festerling bei Legida zusammenarbeiten wollte'],
    'src': ['https://www.vice.com/de/article/mv4mbn/die-afd-faehrt-mit-hitler-kennzeichen-durch-leipzig', 'https://kreuzer-leipzig.de/2016/05/24/wie-viel-pegida-partei-will-die-afd-sein/']
  },
  {
    'forename': 'Stefan',
    'name': 'Kotré',
    'text': ['laut dem Herkunft und \"Vergewaltigerpotenzial\" direkt zusammenhängen'],
    'src': ['http://www.berliner-zeitung.de/berlin/die-abgeordneten-der-afd-sammelbecken-der-unzufriedenen-221000']
  },
  {
    'forename': 'Detlef',
    'name': 'Spangenberg',
    'text': ['der Mitglied der rechtsextremen Wählervereinigung \"Arbeit, Familie, Vaterland\" war'],
    'src': ['http://www.spiegel.de/politik/deutschland/afd-in-sachsen-kein-amt-fuer-abgeordneten-mit-rechter-vergangenheit-a-989731.html']
  },
  {
    'forename': 'Ulrich',
    'name': 'Oehme',
    'text': ['der mit einem SA-Spruch zur Bundestagswahl geworben hatte'],
    'src': ['http://www.zeit.de/politik/deutschland/2017-09/afd-kandidaten-bundestagswahl-abgeordnete']
  },
  {
    'forename': 'Hans-Jörg',
    'name': 'Müller',
    'text': ['der Migration nach Deutschland als \"organisierte Invasion\" bezeichnet'],
    'src': ['https://www.youtube.com/watch?time_continue=2&v=pI03Ar7SmkA']
  },
  {
    'forename': 'Heiko',
    'name': 'Hessenkemper',
    'text': ['der ultrarechts ist'],
    'src': ['http://www.zeit.de/politik/deutschland/2017-09/afd-kandidaten-bundestagswahl-abgeordnete']
  },
  {
    'forename': 'Stephan',
    'name': 'Brandner',
    'text': ['der politische Gegner als \"Ergebnis von Sodomie und Inzucht\" bezeichnet'],
    'src': ['https://www.noz.de/deutschland-welt/politik/artikel/955751/wie-rechts-ist-die-afd']
  },
  {
    'forename': 'Markus',
    'name': 'Söder',
    'text': ['der findet, dass in Klassenzimmer \"Kruzifixe und keine Kopftücher\" gehören'],
    'src': ['http://www.spiegel.de/fotostrecke/markus-soeder-seine-besten-zitate-fotostrecke-155827-3.html']
  },
  {
    'forename': 'Ursula',
    'name': 'von der Leyen',
    'text': ['die schon guttenbergte, bevor es in war'],
    'src': ['http://www.spiegel.de/lebenundlernen/job/ursula-von-der-leyen-darum-darf-sie-ihren-doktortitel-behalten-a-1081520.html']
  },
  {
    'forename': 'Thomas',
    'name': 'de Maizière',
    'text': ['bei dem \"ein Teil der Antwort die Bevölkerung verunsichern würde\"'],
    'src': ['https://www.welt.de/politik/deutschland/article148969193/Ein-Teil-dieser-Antworten-wuerde-die-Bevoelkerung-verunsichern.html']
  },
  {
    'forename': 'Christian',
    'name': 'Lindner',
    'text': ['der lieber \"nicht regiert, als falsch zu regieren\"'],
    'src': ['http://www.zeit.de/politik/deutschland/2017-11/christian-lindner-sondierung-jamaika-abbruch-fdp']
  }
];
