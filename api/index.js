"use strict";
// npm i fastify
// npm i fastify-swagger
// npm i nodemon
// npm i @types/node
exports.__esModule = true;
// POI, SEMPRE SU UN NUOVO TERMINALE (`CTRL` + `SHIFT` + `ò`) SCRIVERE : ` nodemon . `
// POI, SEMPRE SU UN NUOVO TERMINALE (`CTRL` + `SHIFT` + `ò`) SCRIVERE : ` tsc -w index.ts `
var fastify_1 = require("fastify");
var swagger = require("fastify-swagger");
var app = fastify_1["default"]({
    logger: true,
    ignoreTrailingSlash: true
});
app.register(swagger["default"], {
    routePrefix: '/swagger',
    swagger: {
        info: {
            title: 'Pietro Ceolotto API',
            description: 'api FEX ESAME',
            version: '1.0.0'
        },
        host: '127.0.0.1:3000',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json']
    },
    exposeRoute: true
});
//get /place tutti i luoghi
app.get("/place", function (req, reply) {
    reply.code(200).header('Content-Type', 'application/json; charset=utf-8').send([{
            id: 1,
            name: "Roma",
            description: "Le prime tracce di insediamenti nell'area risalgono alla cultura dell'uomo di Neanderthal, con il famoso ritrovamento dell'uomo di Saccopastore. Nella zona di Roma sono stati effettuati diversi ritrovamenti, il più antico dei quali si riferisce al sito della Valchetta, con resti risalenti a 65.000 anni fa.Nella zona di Casal de' Pazzi, uno scavo ha restituito ossa di animali risalenti a circa 20.000 anni fa; mentre a Quadrato di Torre Spaccata, presso la via Tuscolana, sono stati portati alla luce resti di un insediamento del Neolitico finale risalente a circa 6200-6100 anni fa e di un altro della fine dell'età del Rame risalente a 4700-4600 anni fa.Numerosi altri insediamenti e necropoli con tombe ipogeiche a grotticella(facies di Rinaldone, gruppo Roma- Colli Albani e del Gaudo) sono stati identificati nel territorio del suburbio e coprono un arco di tempo compreso tra il Neolitico antico(facies della Ceramica impressa medio - tirrenica, circa 7600 anni fa) e la fine dell'età del Rame (facies della ceramica a pettine trascinato, circa 4700 - 4000 anni fa), documentando una intensafrequentazione e sfruttamento del territorio da parte di comunità complesse e ben strutturate.",
            theme: "Storico,Paesaggistico,Artistico",
            nAttrazioni: 47,
            m_permanenza: 200,
            attrazioni: [{
                    id: 1,
                    name: "Colosseo",
                    theme: "storico,paesaggistico",
                    orari: "10.00-14.00",
                    p_entrate1h: 50,
                    p_uscite1h: 10,
                    p_media_presenze: 35,
                    p_media_permanenza: 180,
                    img: "assets/colosseo-roma-anfiteatro-flavio.jpg"
                }, {
                    id: 2,
                    name: "Pantheon",
                    theme: "storico",
                    orari: "10.00-17.00",
                    p_entrate1h: 50,
                    p_uscite1h: 10,
                    p_media_presenze: 35,
                    p_media_permanenza: 220,
                    img: "assets/Pantheon-Roma-Fotolia.jpg"
                }, {
                    id: 3,
                    name: "Villa Borghese",
                    theme: "storico,paesaggistico",
                    orari: "10.00-19.00",
                    p_entrate1h: 50,
                    p_uscite1h: 10,
                    p_media_presenze: 35,
                    p_media_permanenza: 200,
                    img: "assets/villa-borghese-roma.jpg"
                }],
            image: "assets/colosseo_roma.jpg"
        },
        {
            id: 2,
            name: "Firenze",
            description: "Nel Medioevo è stata un importante centro artistico, culturale, commerciale, politico, economico e finanziario; nell\'età moderna ha ricoperto il ruolo di capitale del Granducato di Toscana dal 1569 al 1859 che, con il governo delle famiglie dei Medici e dei Lorena, divenne uno degli stati più ricchi e moderni. Le varie vicissitudini politiche, la potenza finanziaria e mercantile e le influenze in ogni campo della cultura hanno fatto della città un crocevia fondamentale della storia italiana ed europea. Nel 1865 Firenze fu proclamata capitale del Regno d\'Italia (seconda, dopo Torino), mantenendo questo status fino al 1871, anno che segna la fine del Risorgimento.\
      Importante centro universitario e patrimonio dell\'umanità UNESCO dal 1982, è considerata luogo d\'origine del Rinascimento – la consapevolezza di una nuova era moderna dopo il Medioevo, periodo di cambiamento e \"rinascita\" culturale e scientifica – e della lingua italiana grazie al volgare fiorentino usato nella letteratura.",
            theme: "Avventura",
            nAttrazioni: 20,
            m_permanenza: 53,
            attrazioni: [{
                    id: 1,
                    name: "Santa Maria Novella",
                    theme: "storico,paesaggistico",
                    orari: "10.00-11.00",
                    p_entrate1h: 50,
                    p_uscite1h: 10,
                    p_media_presenze: 35,
                    p_media_permanenza: 40,
                    img: "assets/Santa_Maria_Novella.jpg"
                }, {
                    id: 2,
                    name: "Museo degli Uffizi",
                    theme: "storico",
                    orari: "10.00-16.00",
                    p_entrate1h: 50,
                    p_uscite1h: 10,
                    p_media_presenze: 35,
                    p_media_permanenza: 150,
                    img: "assets/Uffizi_Museum.jpg"
                }, {
                    id: 3,
                    name: "Villa del poggio imperiale",
                    theme: "storico,paesaggistico",
                    orari: "10.00-13.00",
                    p_entrate1h: 50,
                    p_uscite1h: 10,
                    p_media_presenze: 35,
                    p_media_permanenza: 10,
                    img: "assets/Villa_del_poggio_imperiale.jpg"
                }],
            image: "assets/firenze.jfif"
        },
        {
            id: 3,
            name: "Milano",
            description: "Fondata intorno al 590 a.C. da una tribù celtica facente parte del gruppo degli Insubri e appartenente alla cultura di Golasecca, fu conquistata dagli antichi Romani nel 222 a.C.. Con il passare dei secoli accrebbe la sua importanza sino a divenire capitale dell\'Impero romano d\'Occidente, nel cui periodo fu promulgato l\'editto di Milano, che concesse a tutti i cittadini, quindi anche ai cristiani, la libertà di culto.\
      In prima linea nella lotta contro il Sacro Romano Impero in età comunale, divenne prima signoria per poi essere innalzata a dignità ducale alla fine del XIV secolo, rimanendo al centro della vita politica e culturale dell\'Italia rinascimentale. All\'inizio del XVI secolo perse l\'indipendenza a favore dell\'Impero spagnolo per poi passare, quasi due secoli dopo, sotto la corona austriaca: grazie alle politiche asburgiche, Milano divenne uno dei principali centri dell\'illuminismo italiano. Capitale del Regno d\'Italia napoleonico, dopo la Restaurazione fu tra i più attivi centri del Risorgimento fino al suo ingresso nel Regno d\'Italia sabaudo.",
            theme: "Avventura",
            nAttrazioni: 21,
            m_permanenza: 60,
            attrazioni: [{
                    id: 1,
                    name: "Duomo",
                    theme: "storico,paesaggistico",
                    orari: "10.00-13.00",
                    p_entrate1h: 50,
                    p_uscite1h: 10,
                    p_media_presenze: 35,
                    p_media_permanenza: 40,
                    img: "assets/duomoMilano.jpg"
                }, {
                    id: 2,
                    name: "Museo del Novecento",
                    theme: "storico",
                    orari: "10.00-18.00",
                    p_entrate1h: 50,
                    p_uscite1h: 10,
                    p_media_presenze: 35,
                    p_media_permanenza: 30,
                    img: "assets/Museo_del_NovecentoMilano.jpg"
                }, {
                    id: 3,
                    name: "Giardini Verticali",
                    theme: "storico,paesaggistico",
                    orari: "10.00-19.00",
                    p_entrate1h: 50,
                    p_uscite1h: 10,
                    p_media_presenze: 35,
                    p_media_permanenza: 150,
                    img: "assets/giardini verticali.jpg"
                }],
            image: "assets/milano_centro.jpg"
        }]);
});
//get /place/:id  un luogo singolo
app.get("/place/1", function (req, reply) {
    reply.code(200).header('Content-Type', 'application/json; charset=utf-8').send({
        id: 1,
        name: "Roma",
        description: "Le prime tracce di insediamenti nell'area risalgono alla cultura dell'uomo di Neanderthal, con il famoso ritrovamento dell'uomo di Saccopastore. Nella zona di Roma sono stati effettuati diversi ritrovamenti, il più antico dei quali si riferisce al sito della Valchetta, con resti risalenti a 65.000 anni fa.Nella zona di Casal de' Pazzi, uno scavo ha restituito ossa di animali risalenti a circa 20.000 anni fa; mentre a Quadrato di Torre Spaccata, presso la via Tuscolana, sono stati portati alla luce resti di un insediamento del Neolitico finale risalente a circa 6200-6100 anni fa e di un altro della fine dell'età del Rame risalente a 4700-4600 anni fa.Numerosi altri insediamenti e necropoli con tombe ipogeiche a grotticella(facies di Rinaldone, gruppo Roma- Colli Albani e del Gaudo) sono stati identificati nel territorio del suburbio e coprono un arco di tempo compreso tra il Neolitico antico(facies della Ceramica impressa medio - tirrenica, circa 7600 anni fa) e la fine dell'età del Rame (facies della ceramica a pettine trascinato, circa 4700 - 4000 anni fa), documentando una intensafrequentazione e sfruttamento del territorio da parte di comunità complesse e ben strutturate.",
        theme: "Storico,Paesaggistico,Artistico",
        nAttrazioni: 47,
        m_permanenza: 200,
        attrazioni: [{
                id: 1,
                name: "Colosseo",
                theme: "storico,paesaggistico",
                orari: "10.00-14.00",
                p_entrate1h: 50,
                p_uscite1h: 10,
                p_media_presenze: 35,
                p_media_permanenza: 180,
                img: "assets/colosseo-roma-anfiteatro-flavio.jpg"
            }, {
                id: 2,
                name: "Pantheon",
                theme: "storico",
                orari: "10.00-17.00",
                p_entrate1h: 50,
                p_uscite1h: 10,
                p_media_presenze: 35,
                p_media_permanenza: 220,
                img: "assets/Pantheon-Roma-Fotolia.jpg"
            }, {
                id: 3,
                name: "Villa Borghese",
                theme: "storico,paesaggistico",
                orari: "10.00-19.00",
                p_entrate1h: 50,
                p_uscite1h: 10,
                p_media_presenze: 35,
                p_media_permanenza: 200,
                img: "assets/villa-borghese-roma.jpg"
            }],
        image: "assets/colosseo_roma.jpg"
    });
});
//get /place/:id/attraction  le attrazioni di un posto 
app.get("/place/1/attraction", function (req, reply) {
    reply.code(200).header('Content-Type', 'application/json; charset=utf-8').send([{
            id: 1,
            name: "Colosseo",
            theme: "storico,paesaggistico",
            orari: "10.00-14.00",
            p_entrate1h: 50,
            p_uscite1h: 10,
            p_media_presenze: 35,
            p_media_permanenza: 180,
            img: "assets/colosseo-roma-anfiteatro-flavio.jpg"
        }, {
            id: 2,
            name: "Pantheon",
            theme: "storico",
            orari: "10.00-17.00",
            p_entrate1h: 50,
            p_uscite1h: 10,
            p_media_presenze: 35,
            p_media_permanenza: 220,
            img: "assets/Pantheon-Roma-Fotolia.jpg"
        }, {
            id: 3,
            name: "Villa Borghese",
            theme: "storico,paesaggistico",
            orari: "10.00-19.00",
            p_entrate1h: 50,
            p_uscite1h: 10,
            p_media_presenze: 35,
            p_media_permanenza: 200,
            img: "assets/villa-borghese-roma.jpg"
        }]);
});
//get /place/:id/attraction/:idAttr  una attrazione di un posto 
app.get("/place/1/attraction/1", function (req, reply) {
    reply.code(200).header('Content-Type', 'application/json; charset=utf-8').send([{
            id: 1,
            name: "Colosseo",
            theme: "storico,paesaggistico",
            orari: "10.00-14.00",
            p_entrate1h: 50,
            p_uscite1h: 10,
            p_media_presenze: 35,
            p_media_permanenza: 180,
            img: "assets/colosseo-roma-anfiteatro-flavio.jpg"
        }, {
            id: 2,
            name: "Pantheon",
            theme: "storico",
            orari: "10.00-17.00",
            p_entrate1h: 50,
            p_uscite1h: 10,
            p_media_presenze: 35,
            p_media_permanenza: 220,
            img: "assets/Pantheon-Roma-Fotolia.jpg"
        }, {
            id: 3,
            name: "Villa Borghese",
            theme: "storico,paesaggistico",
            orari: "10.00-19.00",
            p_entrate1h: 50,
            p_uscite1h: 10,
            p_media_presenze: 35,
            p_media_permanenza: 200,
            img: "assets/villa-borghese-roma.jpg"
        }]);
});
app.listen(3000, function (err) {
    if (err)
        throw err;
});
