angular.module('pellanApp')
  .controller('CvCtrl', function($scope, $http) {
    $scope.cv = {
      "exp": [
        {
          title: "Skribent, HYMN, maj 2013-nuvarande",
          text: "Skriver musikrelaterade recensioner, artiklar och intervjuer som publiceras för musikmagasinet HYMN. Magasinet hette tidigare Rockfoto Magasin. Här finner ni några av mina texter: <a href='http://hymn.se/author/sofia-pellgard/' target='_blank'>HYMN.se</a>"
        },
        {
          title: "Webbredaktör, Citat AB (Sitrus Agency), Göteborg, juni-september 2015",
          text: "Webbredaktör på reklambyrån Citat som numera går under namnet Sitrus Agency. Jag arbetade främst för en internationell kund inom banksektorn med flera varumärken. Jag underhöll och förvaltade ett tjugotal webbplatser på olika språk och även ett av varumärkenas Facebook. Uppdraget bestod bland annat av att koordinera, strukturera och publicera innehåll och bearbeta bildmaterial. Arbetet krävde mycket självständigt driv, problemlösning och löpande dialog med byråns produktionsledare och kunden. Anställningen var under sommaren och via Academic Work."
        },
        {
          title: "Praktikant: Web Content, DirektOnline, Göteborg, februari-juni 2015",
          text: "Jag arbetade med webbcopy, redigering av content via CMS-verktyget Bliss Webbstudio och SEO/SEM. Jag gjorde även en användarmanual till byråns CMS. Andra och sista praktikperioden på YH-utbildningen 'Webbkommunikatör'."
        },
        {
          title: "Receptionist, Högskolan Väst, Trollhättan, juli 2014-februari 2015",
          text: "Receptionist och växeltelefonist på Högskolan Väst. Publicerade och skapade även innehåll på högskolans olika webbplatser, främst intranätet och de sidor som var länkade till Campus Support. Publicering via CMS-verktyget Dynamaster. Fick även i uppdrag att skapa grafiskt kommunikationsmaterial så som broschyrer och kort. Anställning via Academic Work. "
        },

        {
          title: "Praktikant: AdWords & SEM, Be Better Online, Göteborg april-juni 2014",
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
          title: "Event agent, Why Us Nordic AB, Göteborg oktober-december 2012",
          text: "Eventsäljare för projektet E.ON. Utfördes på resande fot runt om i Västsverige."
        },

        {
          title: "Praktikant, Daredo GmbH, Mannheim januari-mars 2012",
          text: "Praktiserade på det tyska skivbolaget Daredo som har en stor katalog med artister från hela världen. Arbetade med product management, digital distribution och promotion."
        },

        {
          title: "Bolagsman och marknadsföringsansvarig, 5th Square Management HB, maj 2010-november 2011",
          text: "Artist management-bolag vilket jag drev med fyra andra studenter. Vi arbetade under tiden med diverse klienter, bland annat popbandet The Majority Says. Bolaget likviderades på alla bolagsmäns begäran och formades sedan på nytt som Queenside AB."
        },

        {
          title: "Entré-och Informationsbiträde, Leksand Sommarland, Leksand juni-augusti 2009",
        },

        {
          title: "Kioskbiträde, Leksand Sommarland, Leksand juni-augusti 2008",
        },
      ],
      "edu": [
        {
          title: "Nordic Business Institute, Webbkommunikatör YH, 2013-2015",
          text: “Kvalificerad yrkeshögskoleexamen inriktning Webbkommunikatör”,
          courses: [
            "Digitala affärer",
            "Examensarbete",
            "Företagsekonomi",
            "Kommunikation",
            "LIA 1",
            "LIA 2",
            "Marknadsföring",
            "Praktiskt skrivande",
            "Producera för digitala kanaler",
            "Projektledning och entreprenörskap"
          ]
        },

        {
          title: "Popakademie Baden-Württemberg, Utbytesstudent, 2012",
          text: "En av Tysklands främsta skolor inom musikindustri. Jag hade två olika projektarbeten, ett inom digital musikindustri och ett annat inom videoproduktion. Jag läste även tyska och hade 7 veckors praktik."
        },

        {
          title: "Linnéuniversitetet, Music & Event Management, 2009-2012",
          text: "Filosofie Kandidatexamen i företagsekonomi med inriktning mot music and event management. C-uppsats inom marknadsföring.",
          courses: [
            "Affärsutveckling och personligt entreprenörskap 7,5 hp",
            "Företagsekononomi I - organisation och marknadsföring 15 hp",
            "Företagsekonomi I - redovisning och kalkylering 15 hp",
            "Företagsekonomi II - organisation 7,5 hp",
            "Business Administration II - Business Relations, IMC & Brand Management 15hp",
            "Företagsekonomi III - marknadsföring, inkl. examensarbete 30 hp",
            "Music & Event Management - branschintroduktion 15hp",
            "Music & Event Management II 15 hp",
            "Music & Event Management III - branschrelaterad juridik 20 hp",
            "Music & Event Management IV - självständigt arbete 10 hp",
          ]
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
    };



  });


