'use strict';

angular.module('pellanApp')
  .controller('CvCtrl', function($scope, $http) {
    $scope.cv = {
      "exp": [
        { 
          title: "Receptionist, Högskolan Väst, Trollhättan juli 2014 - nuvarande",
          text: "Receptionist och växeltelefonist på Högskolan Väst. Publicerar och skapar även innehåll på högskolans webbplats, främst intranätet och de sidor som rör Campus Support. Anställning via Academic Work. "
        },

        {
          title: "Skribent, Rockfoto.nu, maj 2013 - nuvarande",
          text: "Skriver musikrelaterade recensioner, artiklar och intervjuer som publiceras för Rockfotos nätmagasin. Här finner ni några av mina texter: http://rockfoto.nu/about/sofia-pellgard "
        },

        {
          title: "Praktikant, AdWords, Be Better Online, Göteborg april-juni 2014",
          text: "Praktikant på den digitala marknadsföringsbyrån Be Better Online i Göteborg. Jobbade med AdWords-annonsering, d.v.s. skrev annonser, skapade annonskampanjer, estimerade annonsbudgetar, analyserade pågående kampanjer och landningssidor. "
        },

        {
          title: "Kundtjänstmedarbetare, SEB, Göteborg juli-augusti 2013",
          text: "Kundtjänstmedarbetare på SEB Telefonbanken Privat. Anställd via Adecco och arbetade under 1,5 månad för att sedan återgå till studier."
        },

        {
          title: "Säljledare, The Infinity Group AB, Göteborg januari-april 2013",
          text: "Anställd för projektet Rädda Barnen door-to-door där vi rekryterade månadsgivare till organisationen. Jag blev även befordrad till ledare och fick utbilda nya säljare och vara ansikte utåt för organisationen."
        },

        {
          title: "Event agent, Why Us Nordic AB, Göteborg oktober - december 2012",
          text: "Eventsäljare för projektet E.ON där jag sålde elabonnemang. Utfördes på resande fot runt om i Västsverige."
        },

        {
          title: "Praktikant, Daredo GmbH, Mannheim januari-mars 2012",
          text: "Praktiserade på det tyska skivbolaget Daredo som har en stor katalog med artister från hela världen. Arbetade med product management, digital distribution och promotion."
        },

        {
          title: "Bolagsman och marknadsföringsansvarig, 5th Square Management HB, Kalmar maj 2010-november 2011",
          text: "Artist management-bolag vilket jag drev med fyra andra studenter. Vi arbetade under tiden med diverse klienter, bland annat popbandet The Majority Says. Bolaget likviderades på alla bolagsmäns begäran och formades sedan på nytt som Queenside AB."
        },

        {
          title: "Entré-och Informationsbiträde, Leksand Sommarland, Leksand juni-augusti 2009",
          text: "Ansvarade för biljettförsäljning och information på plats och via telefon. Stort kassaansvar. "
        },

        {
          title: "Kioskbiträde, Leksand Sommarland, Leksand juni-augusti 2008",
          text: "Arbetade med försäljning av glass, kaffe och godis samt underhåll slush-maskiner. Kassaansvar och mycket kundbemötande. "
        },
      ],
      "edu": [  
        {
          title: "Nordic Business Institute, Göteborg - Webbkommunikatör YH 2013-2015",
          text: "YH-utbildning inom webbkommunikation och sociala medier."
        },

        {
          title: "Popakademie Baden-Württemberg, Mannheim - Utbytesstudent 2012",
          text: "En av Tysklands främsta skolor inom musikindustri. Jag hade två olika projektarbeten, ett inom digital musikindustri och ett annat inom videoproduktion. Jag läste även tyska och hade 7 veckors praktik."
        },

        {
          title: "Linnéuniversitetet, Hultsfred/Kalmar - Music & Event Management 2009-2012",
          text: "Kandidatexamen i företagsekonomi med inriktning på music and event management. C-uppsats inom marknadsföring."
        },

        {
          title: "Leksands Gymnasium, Leksand - Estetiska programmet med inriktning musik 2006-2009"
        }
      ],
      "other": [

        {
        title: "VIP-området Eden, Peace and Love 2011, Borlänge",
        text: "Jobbade med försäljning av merchandise och dylikt samt områdesinformation."
        },

        {
          title: "Merchandiseansvarig, Eksjö Stadsfest 2010",
          text: "Ansvarade för merchandiseområdet på festivalen och sålde också kläder och dylikt åt bland annat Takida."
        },

        {
          title: "Seminariesamordnare, Manifestgalan 2010, Stockholm",
          text: "Var hjälpande hand för speed-dating och seminarier på galan."
        },

      ]
    }

    

  });


