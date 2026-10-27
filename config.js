window.ARCGIGUESS_CONFIG = {
    /* -------------------------------------------------------------------------
     * 1. BRANDING
     * ---------------------------------------------------------------------- */

    
    appName: "Vietas, ko atcerēties!",
    tagline: "Pārbaudi savas zināšanas",
    shareCardFooter: null,

    /* -------------------------------------------------------------------------
     * 2. THE MAP & LANDMARK DATA
     * ---------------------------------------------------------------------- */

    // ArcGIS Online
    portalUrl: null,

    // Tava ArcGIS Web Map
    webMapItemId: "3c98953dd6b5425bbf3ab1db5b1db82b",

    // Slāņa nosaukums Web Map
    landmarkLayerTitle: "Vietas",

    // Tavā slānī ID lauks ir FID
    landmarkIdField: "FID",

    // Foto URL atrodas laukā Photo
    landmarkPhotoField: "Photo",

    // null = izmantot visas vietas
    roundsPerGame: null,

    // Nejauša vietu secība
    shuffleLandmarks: true,

    // Atļaut pabeigt spēli ātrāk
allowFinishEarly: false,

customLandmarkPrompts: {

},

customImagePositions: {
    "Jaunākā UNESCO Pasaules mantojuma vieta Latvijā": "center 80%",
},
    customImageScales: {
    "Siksala (Teiču dabas rezervāts)": 1.15,
},
    /* -------------------------------------------------------------------------
     * 3. SCORING
     * ---------------------------------------------------------------------- */

    scoring: {
        // Maksimālais punktu skaits par vietu
        pointsForHit: 10,

        // Attāluma josla metros
        bucketMeters: 500,

        // Par katriem 500 m nost -1 punkts
        penaltyPerBucket: 1,

        // Minimālais punktu skaits par kārtu
        minScore: 0,
    },
    customScoringRules: {
    "Rīgas Brāļu kapi": {
        fullScoreBufferMeters: 0,
        penaltyStepMeters: 500,
    },

    "Vendene": {
        fullScoreBufferMeters: 0,
        penaltyStepMeters: 500,
    },

    "Lībava": {
        fullScoreBufferMeters: 0,
        penaltyStepMeters: 500,
    },

    "Jaunākā UNESCO Pasaules mantojuma vieta Latvijā": {
        fullScoreBufferMeters: 0,
        penaltyStepMeters: 500,
    },

    "Vecākais dabas rezervāts Latvijā (Moricsala)": {
        fullScoreBufferMeters: 0,
        penaltyStepMeters: 500,
    },

    "Rundāles pils": {
        fullScoreBufferMeters: 0,
        penaltyStepMeters: 500,
    },

    "Aglonas bazilika": {
        fullScoreBufferMeters: 0,
        penaltyStepMeters: 500,
    },

    "Āraišu ezerpils": {
        fullScoreBufferMeters: 0,
        penaltyStepMeters: 500,
    },

    "Staburags": {
        fullScoreBufferMeters: 0,
        penaltyStepMeters: 500,
    },

    "Strūves ģeodēziskā loka UNESCO punkts “Sestu kalns”": {
        fullScoreBufferMeters: 0,
        penaltyStepMeters: 500,
    },

    "Latvijas tālākais austrumu punkts “Austras koks”": {
        fullScoreBufferMeters: 0,
        penaltyStepMeters: 500,
    },

    "Ziemassvētku kauju muzejs": {
        fullScoreBufferMeters: 0,
        penaltyStepMeters: 500,
    },

    "Daugavas loki": {
        fullScoreBufferMeters: 5000,
        penaltyStepMeters: 500,
    },
},
    noFullScoreBufferLandmarks: [
    "Strūves ģeodēziskais loks"
],

    /* -------------------------------------------------------------------------
     * 4. LANGUAGES
     * ---------------------------------------------------------------------- */

    languages: [
        {
            code: "lv",

            dir: "ltr",

            // Lauks ArcGIS slānī ar vietas nosaukumu
            landmarkNameField: "Name",

            surveyLang: null,

            strings: {
                /* START SCREEN */

                welcomeTitle:
                    "Laipni lūdzam spēlē <br>“Vietas, ko atcerēties!”",

                welcomeDesc:
                    "Pārbaudi sevi un atrodi nosauktās vietas Latvijas kartē!<br><br>{scoringSummary}<br><br><strong>Ja esi skolēns – pēc spēles pabeigšanas iesniedz rezultātus, aizpildot anketu. Aktīvākās klases saņems sveicienu no Envirotech.<br><br>Sveiciens valsts svētku un ĢIS dienas mēnesī!</strong>",


               scoringSummaryTemplate:
    "<strong>Atzīmē savu minējumu un nopelni punktus!</strong><br>Ja atradīsi vietu precīzi vai Tavs minējums atradīsies līdz 5 km attālumā no objekta – saņemsi <strong>{points} punktus!</strong><br>Par katriem {bucket} m tālāk - tiks atņemts {penalty} punkts.",

startButton:
    "Sākt spēli",

                /* LOADING */

                loadingText:
                    "Vietu ielādēšana...",

                /* GAME */

                findLandmarkText:
                    "Atrodi šo vietu:",

                scoreDisplay:
                    "Punkti: {score}",

                roundDisplay:
                    "Jautājums: {current} / {total}",

                confirmButton:
                    "Apstiprināt minējumu",

                /* ROUND RESULT */

                correctTitle:
                    "Pareizi!",

                correctMessage:
                    "Lieliski! Tu nopelnīji <strong>+{roundScore} punktus</strong>.",
                
   distanceTitles: {
  veryClose: "Gandrīz izdevās!",
  close: "Labs minējums, esi tuvu!",
  medium: "Labs minējums, esi tuvu!",
  far: "😔",
  veryFar: "😔"
},

                incorrectMessage:
                    "Tavs minējums ir <strong>{distance} m</strong> attālumā no precīzās vietas. Tu nopelnīji <strong>{roundScore} punktus</strong>. Šī ir precīzā atrašanās vieta.",

                nextButton:
                    "Nākamā vieta",

                finishEarlyButton:
                    "Pabeigt ātrāk",

                finishEarlyConfirm:
                    "Nospied vēlreiz, lai noslēgtu spēli",

                gameOverButton:
                    "Aplūkot kā man veicās!",

                /* GAME OVER */

                gameOverTitle:
                    "Paldies par piedalīšanos!",

                finalScoreText:
                    "Lūk, Tavi rezultāti:",

                totalScoreLabel:
                    "Kopējais punktu skaits",

                accuracyLabel:
                    "Precizitāte",

                foundLabel:
                    "Precīzi atrastās vietas",

                playAgainButton:
                    "Spēlēt vēlreiz",

                shareButton:
                    "Dalīties ar rezultātiem",

                /* SHARING */

                shareText:
                    "Es nopelnīju {score} punktus spēlē {appName}! Cik vietas tu vari atrast? Spēlē: {url}",

                shareCardTitle:
                    "Mans {appName} rezultāts!",

                shareCardScoreLabel:
                    "Kopējie punkti",

                shareCardAccuracyLabel:
                    "Precizitāte",

                shareModalTitle:
                    "Dalīties ar rezultātiem!",

                shareModalDesc:
                    "Ar labo peles pogu noklikšķini uz attēla vai turi to nospiestu, lai to saglabātu un kopīgotu.",

                /* ERRORS */

                webMapError:
                    "Neizdevās ielādēt karti. Lūdzu, pārbaudi ArcGIS Web Map ID.",

                layerError:
                    "Tīmekļa kartē neizdevās atrast slāni “Vietas”. Pārbaudi slāņa nosaukumu config.js failā.",

                /* LEADERBOARD */

                submitScoreButton:
                    "Iesniegt rezultātu",

                viewLeaderboardButton:
                    "Rezultātu tabula",

                submitModalTitle:
                    "Iesniegt rezultātu",

                leaderboardModalTitle:
                    "Labākie spēlētāji",

                leaderboardLoadingText:
                    "Notiek rezultātu tabulas ielāde...",

                leaderboardError:
                    "Neizdevās ielādēt labāko rezultātu datus. Lūdzu, mēģini vēlreiz vēlāk.",

                noScores:
                    "Pagaidām nav iesniegts neviens rezultāts.",

                points:
                    "punkti",
            },
        },
    ],

    /* -------------------------------------------------------------------------
     * 5. SOCIAL SHARING
     * ---------------------------------------------------------------------- */

    social: {
        title:
            "Vietas, ko atcerēties!: Atrodi vietu kartē",

        description:
            "Atrodi vietu. Atceries vēsturi. Pārbaudi sevi! Mēs parādīsim vēsturiskas vietas nosaukumu un attēlu.",

        image:
            "https://kkristers.github.io/ArcGIGuess/assets/gisday2026.png",

        url:
            "https://kkristers.github.io/ArcGIGuess/",

        twitterHandle:
            "",
    },

    /* -------------------------------------------------------------------------
     * 6. LEADERBOARD
     * ---------------------------------------------------------------------- */

 leaderboard: {
    enabled: true,

    survey123Url:
        "https://survey123.arcgis.com/share/ca86560c30ff4566a52adfd45b829fd0?portalUrl=https://envirotech.maps.arcgis.com",

    submitScoreFieldId:
        "rezult_ts",

    dataApiUrl:
        "https://services1.arcgis.com/zu8dBGfmKCvrZHh2/arcgis/rest/services/survey123_c4317eb262934df4b2fe38cb42a3d1d1_results/FeatureServer/0/query",

    firstNameField:
        "v_rds",

    lastNameField:
        "uzv_rds",

    scoreField:
        "rezult_ts",

    topN:
        10,
},
    };
