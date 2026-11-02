// All texts of the Private Equity page, in English (default), French and Russian.
// To edit a sentence, change it here in each language. "|" separates tags.
// Experiences: x1, x2, ... — add x8 to add a new one, delete the last keys to remove one.
window.I18N = {

/* ============================== ENGLISH ============================== */
en: {
  'meta.title': 'Ketevan Bachilava · Private Equity',
  'nav.vision': 'Motivation', 'nav.xp': 'Experience', 'nav.values': 'Values', 'nav.certs': 'Certifications', 'nav.contact': 'Contact',

  'hero.eyebrow': 'Finance · Private Equity · Data · Analysis',
  'hero.title': 'Rigorous analysis for <em>better investment decisions.</em>',
  'hero.lead': 'MSc student in Econometrics &amp; Statistics (Financial Modelling track) at Paris 1 Panthéon-Sorbonne, I combine financial analysis, econometrics and machine learning to support investment teams, from screening and due diligence to valuation and portfolio monitoring.',
  'hero.seek': 'Available for a finance internship from January 2027',
  'hero.cta1': 'Discover my profile', 'hero.cta2': 'Contact me',

  'p.num': '01 · My motivation',
  'p.title': 'Why Private Equity',
  'p.p1': 'I have always wanted my work to have a tangible effect on the real economy. Econometrics taught me how numbers can describe the world; Private Equity is where I see them used to shape it, by investors who stay alongside a company for several years and help build its strategy, governance and growth.',
  'p.p2': "Investing well requires reading the numbers, valuing a business and making decisions under uncertainty. These are the skills I have been building since my bachelor's degree and continue to develop in my master's, through econometrics, financial modelling and financial analysis.",
  'p.p3': 'What sets me apart is the data side. Data now plays a role at every stage of a deal, from screening targets to monitoring portfolio companies, and I know how to collect, clean, model and explain it. I am curious about every sector and type of transaction, with a particular interest in companies that combine performance and sustainability.',
  'p.p4': 'I am looking for a team where I can learn from experienced investors, take on real responsibilities and contribute from day one.',
  'doc.report': 'Report (PDF) ↗',
  'doc.slides': 'Presentation (PDF) ↗',
  'doc.excel': 'Excel analysis ↗',
  'doc.code': 'SAS code ↗',
  'doc.cert': 'Certificate ↗',
  'doc.model': 'Excel model ↗',
  'doc.log': 'Decision log (PDF) ↗',
  'doc.paper': 'Paper (PDF) ↗',
  'doc.market': 'Market analysis (PDF) ↗',
  'k.num': '02 · How I can contribute',
  'k.title': 'What I can bring to a deal team',
  'k.sub': 'My background combines financial analysis, econometrics and machine learning. Here is how I can put it to work for an investment team:',
  'k1.t': 'Screening &amp; sourcing',
  'k1.p': 'Building data-driven screens to identify and rank potential targets: financial ratios, growth signals, comparable-company clustering and scoring models in Python, R or SQL.',
  'k2.t': 'Due diligence',
  'k2.p': 'Cleaning and analysing company and market data, testing what drives revenue and margins with econometric models, and sizing markets, as I did for the Norwegian market at Autolyzer.',
  'k3.t': 'Valuation &amp; modelling',
  'k3.p': 'Restating financial statements, building DCF models with scenarios and sensitivity analysis, as in my Polestar equity research, and quantifying risk with Monte Carlo simulation.',
  'k4.t': 'Machine learning &amp; monitoring',
  'k4.p': 'Using machine learning to forecast KPIs and spot early-warning signals in portfolio companies, and automating reporting in Excel and VBA, while keeping every result explainable to the team.',
  'p.quote': '“To change the world we live in, we first have to understand it.”',


  'a.num': '02 · What I bring',
  'a.title': 'Three strengths for investment finance',
  'a.sub': 'My background has allowed me to develop several skills that matter in finance and Private Equity, in particular:',
  'a1.t': 'Quantitative rigour', 'a1.p': 'Data is everywhere, finance included, and understanding it is essential. I know how to collect, clean and analyse data, then build an econometric or financial model, test it and understand its limits, in SAS, R and Python.',
  'a2.t': 'Financial analysis', 'a2.p': 'Restating financial statements, computing ratios (margins, ROIC, leverage) and building a DCF valuation with scenarios and sensitivity analysis. I applied all of this in my equity research on Polestar at OsloMet.',
  'a3.t': 'International &amp; strategic outlook', 'a3.p': 'Having lived in four countries and speaking six languages, I connect easily with people from different cultures, a real asset when working with management teams and international partners. Seeing how businesses and markets work in different countries also gives me a broader view of strategy.',

  'x.num': '03 · Experience &amp; projects',
  'x.title': 'Every step, one direction',
  'x.sub': 'My academic projects and professional experiences, and how each one prepares me for an investor’s job.',

  'x1.when': '2026', 'x1.where': 'OsloMet · Oslo',
  'x1.t': 'Equity research: Polestar (PSNY)',
  'x1.p': 'Group equity research report on the Swedish electric-car maker. Using LSEG data, we restated the financial statements, computed NOPAT, invested capital and ROIC, and built a ten-year forecast under three scenarios. The valuation relies on a DCF at an ~8% unlevered cost of capital, with sensitivity analysis on WACC and terminal growth. Our conclusion: a Sell recommendation, as costs above revenue (COGS at 143% of sales) and about 6.5 months of cash runway leave the company dependent on external financing.',
  'x1.l': 'Polestar has one of the strongest sustainability profiles in its sector, yet the numbers led us to a Sell. This project taught me that impact only lasts if the business model is viable, the very judgment an impact investor has to make.',
  'x1.tags': 'DCF valuation|Scenario analysis|ROIC|ESG',

  'x2.when': '2026', 'x2.where': 'OsloMet · Oslo',
  'x2.t': 'Investment strategy for a NOK 5 million inheritance',
  'x2.p': 'Business Analytics case in a group of five: advising a client on how to invest NOK 5 million over 20 years. We compared fixed-rate deposits spread across four banks, a rental apartment in Oslo and an ETF portfolio (VIG/QQQ), net of taxes and fees, using 1,000 Monte Carlo simulations in Excel. I was responsible for the banking module and the decision-theory analysis (Maximin, Maximax, Hurwicz, Laplace, minimax regret, EMV, EVPI), and designed the structure and navigation menu of the Excel model. Every criterion pointed to real estate.',
  'x2.l': 'Turning thousands of simulated outcomes into one clear recommendation for a client with a specific risk profile is what investment decisions are about: weighing scenarios rather than betting on a single one.',
  'x2.tags': 'Monte Carlo simulation|Decision theory|Excel modelling',

  'x3.when': 'March 2026', 'x3.where': 'Autolyzer · Oslo',
  'x3.t': 'Data analyst intern: Human-AI decision alignment model',
  'x3.p': 'Autolyzer’s AI recommends whether a damaged car part should be repaired or replaced. I built an Excel model that measures how often clients actually follow that recommendation: alignment and override rates by damage type, AI confidence, price gap, car segment and number of photos, with 95% confidence intervals, automatic alerts, a cost-impact analysis and a monthly trend. It is designed so that managers can load new data and read the results directly. I also analysed the Norwegian motor-claims market: trends, competitors and an assumption-based market sizing (TAM/SAM/SOM). For confidentiality, the published files use fictive claim data and public market data only.',
  'x3.l': 'An AI that people do not trust creates no value. Measuring adoption and translating it into a business number is exactly what an investor needs to judge a technology company.',
  'x3.tags': 'AI adoption|Excel modelling|Market sizing',

  'x4.when': '2026',
  'x4.where': 'OsloMet · Oslo',
  'x4.t': 'Can ethical leadership and profitability coexist?',
  'x4.p': 'Group exam paper in Leadership. We combined leadership theory with two cases: Indra Nooyi’s “Performance with a Purpose” strategy at PepsiCo, and an interview we conducted with the CEO of a healthy-snack start-up for children. Our conclusion: ethics and profitability can reinforce each other, especially when ethical values are built into strategy and judged over the long term.',
  'x4.l': 'This is the question at the heart of sustainable finance. The paper gave me a framework for assessing how a leadership team turns its values into lasting performance, a key part of evaluating any company.',
  'x4.tags': 'Ethical leadership|Governance|Sustainability',
  'x5.when': '2026', 'x5.where': 'Paris 1 · Stochastic modelling',
  'x5.t': 'Self-organised criticality applied to financial markets',
  'x5.p': 'Implementation in SAS of the Bak-Tang-Wiesenfeld sandpile model, in which small shocks can trigger “avalanches” of any size, and application of this logic to the dynamics of financial markets.',
  'x5.l': 'Extreme events happen far more often than classical models assume. Measuring them is key to judging the real risk an investor takes.',
  'x5.tags': 'SAS|Simulation|Market risk',

  
  
  
  

  
  
  
  

  
  
  
  

  'v.num': '04 · Values &amp; commitments',
  'v.title': 'What drives me',
  'v.sub': 'Beyond finance: what drives me.',
  'v2.t': 'Commitment',
  'v2.p': 'Wherever I have studied, I have found a way to get involved: with the Economics Students’ Association in Strasbourg, the Vélodocteurs bike association in Colmar and, since November 2026, the Brigitte Bardot Foundation in Paris, a cause particularly close to my heart. These experiences have taught me that commitment is built through regular, concrete action, and they keep me close to the realities behind the causes I hope to support as an investor.',
  'v3.t': 'Design',
  'v3.p': 'Three web design certificates and several websites built in HTML/CSS. Design taught me that an idea only convinces when it is clear, and I now apply this to my reports and presentations.',
  'v3.s1': 'Web design portfolio ↗', 'v3.s2': 'Restaurant app ↗', 'v3.s3': 'WayUp ↗',
  'v4.t': 'Sport',
  'v4.p': 'Strength training, daily stretching and sport shooting, which trains focus and calm under pressure.',
  'v5.t': 'Nature &amp; meditation',
  'v5.p': 'Regular mountain hiking and daily meditation: time to recharge, and a reminder of why nature is worth protecting.',
  'v6.t': 'Music &amp; poetry',
  'v6.p': 'I am learning singing and piano, and I won 3rd place in the Taras Shevchenko poetry recitation competition. Both have taught me patience and to choose every word, and every note, with care.',
  
  

  'ce.num': '05 · Certifications',
  'ce.title': 'Certifications',
  'ce.sub': 'Languages, digital skills, finance and web design.',
  'ce.view': 'View ↗',
  'ce1.o': 'ETS · February 2026',
  'ce2.n': 'Pix digital skills certification', 'ce2.o': '“Advanced 2” level · University of Strasbourg · December 2024',
  'ce4.n': 'Web Designer: Explosive Start', 'ce4.o': 'WayUp · online course · June 2021',
  'ce5.n': 'Websites from Scratch', 'ce5.o': 'Pro Free Work · one-page website on Tilda · July 2021',
  'ce6.n': 'Web Layout Developer: Getting Started', 'ce6.o': 'WayUp · online course · July 2021',

  'b.num': '06 · Background', 'b.edu': 'Education', 'b.skills': 'Skills',
  'e1.when': '2026 – present · Paris', 'e1.what': 'MSc Econometrics &amp; Statistics, Paris 1 Panthéon-Sorbonne', 'e1.d': 'Statistics, Econometrics &amp; Financial Modelling track',
  'e2.when': 'Jan. – May 2026 · Oslo', 'e2.what': 'Erasmus exchange, OsloMet', 'e2.d': 'Valuation &amp; equity research, business analytics, economics of banking · highest honours',
  'e3.when': '2023 – 2026 · Strasbourg', 'e3.what': 'BSc Economics &amp; Management, University of Strasbourg', 'e3.d': 'Econometrics, finance, financial analysis, accounting · highest honours',
  'e4.when': '2022 – 2023 · Strasbourg', 'e4.what': 'University Diploma RELIER (advanced French)', 'e4.d': 'Highest honours',
  'e5.when': '2020 – 2022 · Kyiv', 'e5.what': 'BSc Economic Cybernetics (first two years), Taras Shevchenko National University', 'e5.d': 'Advanced mathematics, finance, green economy · highest honours',
  's.fin': 'Finance', 's.fin.t': 'Financial analysis|Ratios|Valuation|Equity research|Banking economics',
  's.quant': 'Quantitative', 's.quant.t': 'Econometrics|Financial modelling|Stochastic calculus|Machine learning',
  's.eco': 'Economics',
  's.eco.t': 'Economic analysis|Research &amp; synthesis|Data interpretation|Reports &amp; presentations',
  's.tools': 'Tools', 's.tools.t': 'Advanced Excel|VBA|SAS|R|Python|SQL',
  's.lang': 'Languages', 's.lang.t': 'Georgian · native|Russian · native|French · C1|English · C1|Ukrainian · B2|Norwegian · A2',

  'c.num': 'Contact', 'c.title': "Let's talk",
  'c.sub': 'Private Equity, financial modelling or data: I would be glad to discuss how I can contribute to your team.'
},

/* ============================== FRANÇAIS ============================== */
fr: {
  'meta.title': 'Ketevan Bachilava · Private Equity',
  'nav.vision': 'Motivation', 'nav.xp': 'Expériences', 'nav.values': 'Valeurs', 'nav.certs': 'Certifications', 'nav.contact': 'Contact',

  'hero.eyebrow': 'Finance · Private Equity · Data · Analyse',
  'hero.title': "Une analyse rigoureuse pour <em>de meilleures décisions d'investissement.</em>",
  'hero.lead': "Étudiante en master Économétrie &amp; Statistique (parcours Modélisation financière) à Paris 1 Panthéon-Sorbonne, j'associe analyse financière, économétrie et machine learning pour accompagner les équipes d'investissement, du screening et de la due diligence jusqu'à la valorisation et au suivi des participations.",
  'hero.seek': "Disponible pour un stage en finance à partir de janvier 2027",
  'hero.cta1': 'Découvrir mon profil', 'hero.cta2': 'Me contacter',

  'p.num': '01 · Ma motivation',
  'p.title': 'Pourquoi le Private Equity',
  'p.p1': "J'ai toujours voulu que mon travail ait un effet concret sur l'économie réelle. L'économétrie m'a appris comment les chiffres décrivent le monde ; le Private Equity, c'est là où je les vois servir à le façonner, grâce à des investisseurs qui accompagnent une entreprise pendant plusieurs années et contribuent à sa stratégie, sa gouvernance et sa croissance.",
  'p.p2': "Pour bien investir, il faut savoir lire des chiffres, évaluer une entreprise et prendre des décisions dans l'incertitude. Ce sont les compétences que je construis depuis ma licence et que je continue de développer en master, à travers l'économétrie, la modélisation financière et l'analyse financière.",
  'p.p3': "Ce qui me distingue, c'est la dimension data. Les données interviennent aujourd'hui à chaque étape d'une opération, du screening des cibles au suivi des participations, et je sais les collecter, les nettoyer, les modéliser et les expliquer. Je suis curieuse de tous les secteurs et de tous les types d'opérations, avec un intérêt particulier pour les entreprises qui allient performance et durabilité.",
  'p.p4': "Je cherche une équipe où je pourrai apprendre auprès d'investisseurs expérimentés, prendre de vraies responsabilités et contribuer dès le premier jour.",
  'doc.report': 'Rapport (PDF) ↗',
  'doc.slides': 'Présentation (PDF) ↗',
  'doc.excel': 'Analyse Excel ↗',
  'doc.code': 'Code SAS ↗',
  'doc.cert': 'Certificat ↗',
  'doc.model': 'Modèle Excel ↗',
  'doc.log': 'Journal des décisions (PDF) ↗',
  'doc.paper': 'Dossier (PDF) ↗',
  'doc.market': 'Analyse de marché (PDF) ↗',
  'k.num': '02 · Ma contribution',
  'k.title': "Ce que je peux apporter à une équipe d'investissement",
  'k.sub': "Mon parcours associe analyse financière, économétrie et machine learning. Voici comment je peux les mettre au service d'une équipe d'investissement :",
  'k1.t': 'Screening &amp; sourcing',
  'k1.p': "Construire des screenings fondés sur les données pour identifier et classer des cibles potentielles : ratios financiers, signaux de croissance, regroupement d'entreprises comparables et modèles de scoring sous Python, R ou SQL.",
  'k2.t': 'Due diligence',
  'k2.p': "Nettoyer et analyser les données d'une entreprise et de son marché, tester les moteurs du chiffre d'affaires et des marges avec des modèles économétriques, et estimer la taille d'un marché, comme je l'ai fait pour le marché norvégien chez Autolyzer.",
  'k3.t': 'Valorisation &amp; modélisation',
  'k3.p': 'Retraiter des états financiers, construire des DCF avec scénarios et analyse de sensibilité, comme dans mon equity research sur Polestar, et quantifier le risque par simulation de Monte Carlo.',
  'k4.t': 'Machine learning &amp; suivi',
  'k4.p': "Utiliser le machine learning pour prévoir des indicateurs clés et repérer des signaux d'alerte dans les participations, et automatiser le reporting sous Excel et VBA, en gardant chaque résultat explicable pour l'équipe.",
  'p.quote': "« Pour changer le monde dans lequel on vit, il faut d'abord le comprendre. »",


  'a.num': "02 · Ce que j'apporte",
  'a.title': "Trois atouts pour la finance d'investissement",
  'a.sub': "Mon parcours m'a permis de développer plusieurs compétences importantes pour la finance et le Private Equity, notamment :",
  'a1.t': 'Rigueur quantitative', 'a1.p': 'Les données sont partout, y compris en finance, et savoir les comprendre est essentiel. Je sais collecter, nettoyer et analyser des données, puis construire un modèle économétrique ou financier, le tester et en comprendre les limites, en SAS, R et Python.',
  'a2.t': 'Lecture financière', 'a2.p': "Retraiter des états financiers, calculer des ratios (marges, ROIC, levier) et construire une valorisation DCF avec scénarios et analyse de sensibilité. J'ai mis tout cela en pratique dans mon analyse equity research de Polestar à OsloMet.",
  'a3.t': 'Ouverture internationale et stratégique', 'a3.p': "J'ai vécu dans quatre pays et je parle six langues, ce qui me permet d'échanger facilement avec des personnes de cultures différentes, un vrai atout pour travailler avec des équipes dirigeantes et des partenaires internationaux. Avoir vu fonctionner des entreprises et des marchés dans plusieurs pays me donne aussi une vision plus large de la stratégie.",

  'x.num': '03 · Expériences &amp; projets',
  'x.title': 'Chaque étape, une même direction',
  'x.sub': "Mes projets académiques et mes expériences professionnelles, et la manière dont chacun me prépare au métier d'investisseur.",

  'x1.when': '2026', 'x1.where': 'OsloMet · Oslo',
  'x1.t': 'Equity research : Polestar (PSNY)',
  'x1.p': "Rapport d'equity research réalisé en groupe sur le constructeur suédois de voitures électriques. À partir des données LSEG, nous avons retraité les états financiers, calculé le NOPAT, le capital investi et le ROIC, puis construit une prévision sur dix ans selon trois scénarios. La valorisation repose sur un DCF actualisé à un coût du capital non endetté d'environ 8 %, avec une analyse de sensibilité au WACC et à la croissance terminale. Notre conclusion : une recommandation de vente, car des coûts supérieurs au chiffre d'affaires (COGS à 143 % des ventes) et environ 6,5 mois de trésorerie rendent l'entreprise dépendante de financements externes.",
  'x1.l': "Polestar a l'un des meilleurs profils de durabilité de son secteur, et pourtant les chiffres nous ont conduits à recommander la vente. Ce projet m'a appris que l'impact ne dure que si le modèle économique est viable : c'est précisément le jugement que doit porter un investisseur à impact.",
  'x1.tags': 'Valorisation DCF|Analyse de scénarios|ROIC|ESG',

  'x2.when': '2026', 'x2.where': 'OsloMet · Oslo',
  'x2.t': "Stratégie d'investissement pour un héritage de 5 millions NOK",
  'x2.p': "Cas de Business Analytics réalisé en groupe de cinq : conseiller une cliente sur l'investissement de 5 millions NOK sur 20 ans. Nous avons comparé des dépôts à taux fixe répartis entre quatre banques, un appartement locatif à Oslo et un portefeuille d'ETF (VIG/QQQ), nets d'impôts et de frais, grâce à 1 000 simulations de Monte Carlo sous Excel. J'étais responsable du volet bancaire et de l'analyse par la théorie de la décision (Maximin, Maximax, Hurwicz, Laplace, regret minimax, EMV, EVPI), et j'ai conçu la structure et le menu de navigation du modèle Excel. Tous les critères désignaient l'immobilier.",
  'x2.l': "Transformer des milliers de résultats simulés en une recommandation claire pour une cliente au profil de risque précis, c'est l'essence d'une décision d'investissement : peser plusieurs scénarios plutôt que miser sur un seul.",
  'x2.tags': 'Simulation de Monte Carlo|Théorie de la décision|Modélisation Excel',

  'x3.when': 'Mars 2026', 'x3.where': 'Autolyzer · Oslo',
  'x3.t': "Stagiaire analyste de données : modèle d'alignement humain-IA",
  'x3.p': "L'IA d'Autolyzer recommande s'il faut réparer ou remplacer une pièce de voiture endommagée. J'ai construit un modèle Excel qui mesure à quelle fréquence les clients suivent réellement cette recommandation : taux d'alignement et de désaccord par type de dommage, niveau de confiance de l'IA, écart de prix, gamme de voiture et nombre de photos, avec intervalles de confiance à 95&nbsp;%, alertes automatiques, analyse de l'impact sur les coûts et tendance mensuelle. Il est conçu pour que les responsables puissent charger de nouvelles données et lire directement les résultats. J'ai aussi analysé le marché norvégien des sinistres automobiles : tendances, concurrents et estimation de la taille du marché à partir d'hypothèses (TAM/SAM/SOM). Par souci de confidentialité, les fichiers publiés utilisent uniquement des données de sinistres fictives et des données de marché publiques.",
  'x3.l': "Une IA à laquelle les utilisateurs ne font pas confiance ne crée aucune valeur. Mesurer son adoption et la traduire en chiffre économique, c'est exactement ce dont un investisseur a besoin pour juger une entreprise technologique.",
  'x3.tags': "Adoption de l'IA|Modélisation Excel|Taille de marché",

  'x4.when': '2026',
  'x4.where': 'OsloMet · Oslo',
  'x4.t': 'Leadership éthique et rentabilité peuvent-ils coexister ?',
  'x4.p': "Dossier d'examen en groupe pour le cours de Leadership. Nous avons croisé la théorie du leadership avec deux cas : la stratégie « Performance with a Purpose » d'Indra Nooyi chez PepsiCo, et un entretien que nous avons mené avec le dirigeant d'une start-up de snacks sains pour enfants. Notre conclusion : éthique et rentabilité peuvent se renforcer mutuellement, surtout lorsque les valeurs éthiques sont intégrées à la stratégie et évaluées sur le long terme.",
  'x4.l': "C'est la question au cœur de la finance durable. Ce travail m'a donné une grille de lecture pour évaluer comment une équipe dirigeante transforme ses valeurs en performance durable, un élément clé de l'analyse de toute entreprise.",
  'x4.tags': 'Leadership éthique|Gouvernance|Durabilité',
  'x5.when': '2026', 'x5.where': 'Paris 1 · Modélisation stochastique',
  'x5.t': 'La criticité auto-organisée appliquée aux marchés financiers',
  'x5.p': "Mise en œuvre en SAS du modèle du tas de sable de Bak-Tang-Wiesenfeld, où de petits chocs peuvent déclencher des « avalanches » de toute taille, et application de cette logique à la dynamique des marchés financiers.",
  'x5.l': "Les événements extrêmes sont bien plus fréquents que ne le supposent les modèles classiques. Savoir les mesurer est essentiel pour juger du risque réel que prend un investisseur.",
  'x5.tags': 'SAS|Simulation|Risque de marché',

  
  
  
  

  
  
  
  

  
  
  
  

  'v.num': '04 · Valeurs &amp; engagements',
  'v.title': 'Ce qui me fait avancer',
  'v.sub': 'Au-delà de la finance : ce qui me fait avancer.',
  'v2.t': 'Engagement',
  'v2.p': "Partout où j'ai étudié, j'ai trouvé un moyen de m'engager : à l'Association des étudiants en économie de Strasbourg, à l'association Vélodocteurs à Colmar et, depuis novembre 2026, à la Fondation Brigitte Bardot à Paris, une cause qui me tient particulièrement à cœur. Ces expériences m'ont appris que l'engagement se construit par des actions concrètes et régulières, et elles me gardent proche des réalités derrière les causes que j'espère soutenir en tant qu'investisseuse.",
  'v3.t': 'Design',
  'v3.p': "Trois certificats en web design et plusieurs sites web créés en HTML/CSS. Le design m'a appris qu'une idée ne convainc que si elle est claire, et je l'applique aujourd'hui à mes rapports et présentations.",
  'v3.s1': 'Portfolio web ↗', 'v3.s2': 'Restaurant app ↗', 'v3.s3': 'WayUp ↗',
  'v4.t': 'Sport',
  'v4.p': 'Musculation, étirements quotidiens et tir sportif, qui entraîne la concentration et le calme sous pression.',
  'v5.t': 'Nature &amp; méditation',
  'v5.p': "Randonnées régulières en montagne et méditation quotidienne : un temps pour me ressourcer, et un rappel de la raison pour laquelle la nature mérite d'être protégée.",
  'v6.t': 'Musique &amp; poésie',
  'v6.p': "J'apprends le chant et le piano, et j'ai obtenu la 3e place au concours de récitation de poésie Taras Chevtchenko. Les deux m'ont appris la patience et à choisir chaque mot, et chaque note, avec soin.",
  
  

  'ce.num': '05 · Certifications',
  'ce.title': 'Certifications',
  'ce.sub': 'Langues, compétences numériques, finance et web design.',
  'ce.view': 'Voir ↗',
  'ce1.o': 'ETS · février 2026',
  'ce2.n': 'Certification Pix (compétences numériques)', 'ce2.o': 'Niveau « Avancé 2 » · Université de Strasbourg · décembre 2024',
  'ce4.n': 'Web designer : un départ fulgurant', 'ce4.o': 'WayUp · cours en ligne · juin 2021',
  'ce5.n': 'Créer un site à partir de zéro', 'ce5.o': 'Pro Free Work · site d’une page sur Tilda · juillet 2021',
  'ce6.n': 'Intégrateur web : les bases', 'ce6.o': 'WayUp · cours en ligne · juillet 2021',

  'b.num': '06 · Parcours', 'b.edu': 'Formation', 'b.skills': 'Compétences',
  'e1.when': "2026 – aujourd'hui · Paris", 'e1.what': 'Master Économétrie &amp; Statistique, Paris 1 Panthéon-Sorbonne', 'e1.d': 'Parcours Statistique, économétrie et modélisation financière',
  'e2.when': 'Janv. – mai 2026 · Oslo', 'e2.what': 'Erasmus, OsloMet', 'e2.d': 'Valorisation &amp; equity research, business analytics, économie bancaire · mention très bien',
  'e3.when': '2023 – 2026 · Strasbourg', 'e3.what': 'Licence Économie-Gestion, Université de Strasbourg', 'e3.d': 'Économétrie, finance, analyse financière, comptabilité · mention très bien',
  'e4.when': '2022 – 2023 · Strasbourg', 'e4.what': 'Diplôme universitaire RELIER (français avancé)', 'e4.d': 'Mention très bien',
  'e5.when': '2020 – 2022 · Kyiv', 'e5.what': 'Licence Économie cybernétique (L1–L2), Université Taras-Chevtchenko', 'e5.d': 'Mathématiques avancées, finance, économie verte · mention très bien',
  's.fin': 'Finance', 's.fin.t': 'Analyse financière|Ratios|Valorisation|Equity research|Économie bancaire',
  's.quant': 'Quantitatif', 's.quant.t': 'Économétrie|Modélisation financière|Calcul stochastique|Machine learning',
  's.eco': 'Économie',
  's.eco.t': 'Analyse économique|Recherche &amp; synthèse|Interprétation de données|Rapports &amp; présentations',
  's.tools': 'Outils', 's.tools.t': 'Excel avancé|VBA|SAS|R|Python|SQL',
  's.lang': 'Langues', 's.lang.t': 'Géorgien · natif|Russe · natif|Français · C1|Anglais · C1|Ukrainien · B2|Norvégien · A2',

  'c.num': 'Contact', 'c.title': 'Échangeons',
  'c.sub': "Private Equity, modélisation financière ou data : je serais ravie d'échanger sur la façon dont je peux contribuer à votre équipe."
},

/* ============================== РУССКИЙ ============================== */
ru: {
  'meta.title': 'Кетеван Бачилава · Private Equity',
  'nav.vision': 'Мотивация', 'nav.xp': 'Опыт', 'nav.values': 'Ценности', 'nav.certs': 'Сертификаты', 'nav.contact': 'Контакты',

  'hero.eyebrow': 'Финансы · Private Equity · Данные · Анализ',
  'hero.title': 'Строгий анализ для <em>лучших инвестиционных решений.</em>',
  'hero.lead': 'Я учусь в магистратуре по эконометрике и статистике (профиль «Финансовое моделирование») в Университете Париж 1 Пантеон-Сорбонна и сочетаю финансовый анализ, эконометрику и машинное обучение, чтобы поддерживать инвестиционные команды — от отбора компаний и due diligence до оценки и мониторинга портфеля.',
  'hero.seek': 'Готова пройти стажировку в финансах с января 2027 года',
  'hero.cta1': 'Узнать обо мне', 'hero.cta2': 'Связаться со мной',

  'p.num': '01 · Моя мотивация',
  'p.title': 'Почему Private Equity',
  'p.p1': 'Мне всегда хотелось, чтобы моя работа ощутимо влияла на реальную экономику. Эконометрика научила меня тому, как цифры описывают мир, а в Private Equity я вижу, как они помогают его формировать: инвесторы несколько лет сопровождают компанию и участвуют в выстраивании её стратегии, управления и роста.',
  'p.p2': 'Чтобы инвестировать грамотно, нужно уметь читать цифры, оценивать бизнес и принимать решения в условиях неопределённости. Эти навыки я развиваю с бакалавриата и продолжаю развивать в магистратуре — через эконометрику, финансовое моделирование и финансовый анализ.',
  'p.p3': 'Меня отличает работа с данными. Сегодня данные используются на каждом этапе сделки — от отбора целей до мониторинга портфельных компаний, — и я умею их собирать, очищать, моделировать и объяснять. Мне интересны все отрасли и типы сделок, особенно компании, которые сочетают эффективность и устойчивое развитие.',
  'p.p4': 'Я ищу команду, в которой смогу учиться у опытных инвесторов, брать на себя реальную ответственность и приносить пользу с первого дня.',
  'doc.report': 'Отчёт (PDF) ↗',
  'doc.slides': 'Презентация (PDF) ↗',
  'doc.excel': 'Анализ в Excel ↗',
  'doc.code': 'Код SAS ↗',
  'doc.cert': 'Сертификат ↗',
  'doc.model': 'Модель Excel ↗',
  'doc.log': 'Журнал решений (PDF) ↗',
  'doc.paper': 'Работа (PDF) ↗',
  'doc.market': 'Анализ рынка (PDF) ↗',
  'k.num': '02 · Мой вклад',
  'k.title': 'Что я могу привнести в инвестиционную команду',
  'k.sub': 'Мой опыт сочетает финансовый анализ, эконометрику и машинное обучение. Вот как я могу применить их в работе инвестиционной команды:',
  'k1.t': 'Отбор и поиск целей',
  'k1.p': 'Построение отбора на основе данных для поиска и ранжирования потенциальных целей: финансовые коэффициенты, сигналы роста, кластеризация сопоставимых компаний и скоринговые модели на Python, R или SQL.',
  'k2.t': 'Due diligence',
  'k2.p': 'Очистка и анализ данных компании и рынка, проверка факторов выручки и маржи с помощью эконометрических моделей и оценка объёма рынка — как я делала для норвежского рынка в Autolyzer.',
  'k3.t': 'Оценка и моделирование',
  'k3.p': 'Корректировка финансовой отчётности, построение DCF-моделей со сценариями и анализом чувствительности, как в моём отчёте по Polestar, и оценка риска методом Монте-Карло.',
  'k4.t': 'Машинное обучение и мониторинг',
  'k4.p': 'Применение машинного обучения для прогнозирования ключевых показателей и выявления тревожных сигналов в портфельных компаниях, автоматизация отчётности в Excel и VBA — с понятным объяснением каждого результата для команды.',
  'p.quote': '«Чтобы изменить мир, в котором мы живём, нужно сначала его понять».',


  'a.num': '02 · Что я могу предложить',
  'a.title': 'Три сильные стороны для инвестиционных финансов',
  'a.sub': 'Мой путь позволил мне развить несколько навыков, важных для финансов и Private Equity, в частности:',
  'a1.t': 'Количественная строгость', 'a1.p': 'Данные повсюду, в том числе в финансах, и умение их понимать необходимо. Я умею собирать, очищать и анализировать данные, а затем строить эконометрическую или финансовую модель, проверять её и понимать её ограничения в SAS, R и Python.',
  'a2.t': 'Финансовый анализ', 'a2.p': 'Корректировка финансовой отчётности, расчёт коэффициентов (маржа, ROIC, долговая нагрузка) и построение DCF-оценки со сценариями и анализом чувствительности. Всё это я применила в своём аналитическом отчёте (equity research) по Polestar в OsloMet.',
  'a3.t': 'Международный и стратегический кругозор', 'a3.p': 'Я жила в четырёх странах и говорю на шести языках, поэтому легко нахожу общий язык с людьми разных культур — это важно при работе с руководством компаний и международными партнёрами. Опыт наблюдения за тем, как работают компании и рынки в разных странах, также даёт мне более широкий взгляд на стратегию.',

  'x.num': '03 · Опыт и проекты',
  'x.title': 'Каждый этап — в одном направлении',
  'x.sub': 'Мои учебные проекты и профессиональный опыт, и то, как каждый из них готовит меня к работе инвестора.',

  'x1.when': '2026', 'x1.where': 'OsloMet · Осло',
  'x1.t': 'Equity research: Polestar (PSNY)',
  'x1.p': 'Групповой аналитический отчёт о шведском производителе электромобилей. На основе данных LSEG мы скорректировали финансовую отчётность, рассчитали NOPAT, инвестированный капитал и ROIC и построили прогноз на десять лет по трём сценариям. Оценка основана на DCF со ставкой дисконтирования около 8% (стоимость капитала без учёта долга) и анализом чувствительности к WACC и темпу роста в постпрогнозном периоде. Наш вывод — рекомендация «продавать»: затраты превышают выручку (себестоимость — 143% продаж), а денежных средств хватает примерно на 6,5 месяца, поэтому компания зависит от внешнего финансирования.',
  'x1.l': 'У Polestar один из лучших профилей устойчивого развития в отрасли, и всё же цифры привели нас к рекомендации «продавать». Этот проект научил меня, что позитивное влияние долговечно, только если бизнес-модель жизнеспособна, — именно такое суждение должен выносить импакт-инвестор.',
  'x1.tags': 'DCF-оценка|Сценарный анализ|ROIC|ESG',

  'x2.when': '2026', 'x2.where': 'OsloMet · Осло',
  'x2.t': 'Инвестиционная стратегия для наследства в 5 млн норвежских крон',
  'x2.p': 'Кейс по бизнес-аналитике в группе из пяти человек: консультирование клиентки по инвестированию 5 млн крон на 20 лет. Мы сравнили срочные вклады с фиксированной ставкой в четырёх банках, квартиру для сдачи в аренду в Осло и портфель ETF (VIG/QQQ) с учётом налогов и комиссий, используя 1000 симуляций Монте-Карло в Excel. Я отвечала за банковский блок и анализ на основе теории принятия решений (максимин, максимакс, Гурвиц, Лаплас, минимакс сожалений, EMV, EVPI), а также разработала структуру и меню навигации Excel-модели. Все критерии указали на недвижимость.',
  'x2.l': 'Превратить тысячи смоделированных исходов в одну ясную рекомендацию для клиентки с определённым профилем риска — в этом и суть инвестиционного решения: взвешивать сценарии, а не ставить на один.',
  'x2.tags': 'Метод Монте-Карло|Теория решений|Моделирование в Excel',

  'x3.when': 'Март 2026', 'x3.where': 'Autolyzer · Осло',
  'x3.t': 'Стажёр-аналитик данных: модель согласованности решений человека и ИИ',
  'x3.p': 'ИИ компании Autolyzer рекомендует, ремонтировать или заменять повреждённую деталь автомобиля. Я построила модель в Excel, которая измеряет, как часто клиенты действительно следуют этой рекомендации: доля согласия и отклонений по типу повреждения, уровню уверенности ИИ, разнице в цене, классу автомобиля и числу фотографий, с 95% доверительными интервалами, автоматическими предупреждениями, анализом влияния на затраты и помесячной динамикой. Модель устроена так, чтобы руководители могли загружать новые данные и сразу видеть результаты. Также я проанализировала норвежский рынок автомобильного страхования: тенденции, конкурентов и оценку объёма рынка на основе допущений (TAM/SAM/SOM). В целях конфиденциальности в опубликованных файлах используются только вымышленные данные о страховых случаях и открытые рыночные данные.',
  'x3.l': 'ИИ, которому люди не доверяют, не создаёт ценности. Измерить его использование и перевести его в экономический показатель — именно то, что нужно инвестору для оценки технологической компании.',
  'x3.tags': 'Внедрение ИИ|Моделирование в Excel|Объём рынка',

  'x4.when': '2026',
  'x4.where': 'OsloMet · Осло',
  'x4.t': 'Могут ли этичное лидерство и прибыльность сосуществовать?',
  'x4.p': 'Групповая экзаменационная работа по курсу «Лидерство». Мы соединили теорию лидерства с двумя кейсами: стратегией Индры Нуйи «Performance with a Purpose» в PepsiCo и интервью, которое мы провели с руководителем стартапа по производству полезных снеков для детей. Наш вывод: этика и прибыльность могут усиливать друг друга, особенно когда этические ценности встроены в стратегию и оцениваются в долгосрочной перспективе.',
  'x4.l': 'Это главный вопрос устойчивых финансов. Работа дала мне основу для оценки того, как команда руководителей превращает свои ценности в устойчивые результаты, — ключевой элемент анализа любой компании.',
  'x4.tags': 'Этичное лидерство|Корпоративное управление|Устойчивое развитие',
  'x5.when': '2026', 'x5.where': 'Париж 1 · Стохастическое моделирование',
  'x5.t': 'Самоорганизованная критичность и финансовые рынки',
  'x5.p': 'Реализация в SAS модели «кучи песка» Бака, Тана и Визенфельда, в которой небольшие толчки могут вызывать «лавины» любого размера, и применение этой логики к динамике финансовых рынков.',
  'x5.l': 'Экстремальные события происходят гораздо чаще, чем предполагают классические модели. Умение их измерять необходимо, чтобы оценить реальный риск инвестора.',
  'x5.tags': 'SAS|Моделирование|Рыночный риск',

  
  
  
  

  
  
  
  

  
  
  
  

  'v.num': '04 · Ценности и участие',
  'v.title': 'Что меня вдохновляет',
  'v.sub': 'За пределами финансов: что меня вдохновляет.',
  'v2.t': 'Участие',
  'v2.p': 'Везде, где я училась, я находила способ участвовать в общественной жизни: в Ассоциации студентов-экономистов в Страсбурге, в велоассоциации Vélodocteurs в Кольмаре и с ноября 2026 года — в Фонде Брижит Бардо в Париже, деле, особенно близком моему сердцу. Этот опыт научил меня, что участие строится на регулярных конкретных действиях, и помогает мне оставаться ближе к реальности тех целей, которые я надеюсь поддерживать как инвестор.',
  'v3.t': 'Дизайн',
  'v3.p': 'Три сертификата по веб-дизайну и несколько сайтов, созданных на HTML/CSS. Дизайн научил меня, что идея убеждает, только когда она ясна, и сегодня я применяю это в отчётах и презентациях.',
  'v3.s1': 'Портфолио сайтов ↗', 'v3.s2': 'Restaurant app ↗', 'v3.s3': 'WayUp ↗',
  'v4.t': 'Спорт',
  'v4.p': 'Силовые тренировки, ежедневная растяжка и спортивная стрельба, которая тренирует концентрацию и спокойствие под давлением.',
  'v5.t': 'Природа и медитация',
  'v5.p': 'Регулярные походы в горы и ежедневная медитация: время восстановить силы и напоминание о том, почему природу стоит защищать.',
  'v6.t': 'Музыка и поэзия',
  'v6.p': 'Я учусь пению и игре на фортепиано и заняла 3-е место на конкурсе чтецов имени Тараса Шевченко. И то и другое научило меня терпению и умению тщательно выбирать каждое слово и каждую ноту.',
  
  

  'ce.num': '05 · Сертификаты',
  'ce.title': 'Сертификаты',
  'ce.sub': 'Языки, цифровые навыки, финансы и веб-дизайн.',
  'ce.view': 'Открыть ↗',
  'ce1.o': 'ETS · февраль 2026',
  'ce2.n': 'Сертификат Pix (цифровые навыки)', 'ce2.o': 'Уровень «Продвинутый 2» · Страсбургский университет · декабрь 2024',
  'ce4.n': '«Веб-дизайнер: взрывной старт»', 'ce4.o': 'WayUp · онлайн-курс · июнь 2021',
  'ce5.n': '«Сайты с нуля»', 'ce5.o': 'Pro Free Work · одностраничный сайт на Tilda · июль 2021',
  'ce6.n': '«Веб-верстальщик: начало»', 'ce6.o': 'WayUp · онлайн-курс · июль 2021',

  'b.num': '06 · Образование', 'b.edu': 'Образование', 'b.skills': 'Навыки',
  'e1.when': '2026 – сейчас · Париж', 'e1.what': 'Магистратура по эконометрике и статистике, Университет Париж 1 Пантеон-Сорбонна', 'e1.d': 'Профиль «Статистика, эконометрика и финансовое моделирование»',
  'e2.when': 'Янв. – май 2026 · Осло', 'e2.what': 'Erasmus, OsloMet', 'e2.d': 'Оценка компаний и equity research, бизнес-аналитика, банковская экономика · с отличием',
  'e3.when': '2023 – 2026 · Страсбург', 'e3.what': 'Бакалавриат по экономике и менеджменту, Страсбургский университет', 'e3.d': 'Эконометрика, финансы, финансовый анализ, бухгалтерский учёт · с отличием',
  'e4.when': '2022 – 2023 · Страсбург', 'e4.what': 'Университетский диплом RELIER (французский язык, продвинутый уровень)', 'e4.d': 'С отличием',
  'e5.when': '2020 – 2022 · Киев', 'e5.what': 'Экономическая кибернетика (1–2 курс), КНУ имени Тараса Шевченко', 'e5.d': 'Высшая математика, финансы, зелёная экономика · с отличием',
  's.fin': 'Финансы', 's.fin.t': 'Финансовый анализ|Коэффициенты|Оценка компаний|Equity research|Банковская экономика',
  's.quant': 'Количественные методы', 's.quant.t': 'Эконометрика|Финансовое моделирование|Стохастическое исчисление|Машинное обучение',
  's.eco': 'Экономика',
  's.eco.t': 'Экономический анализ|Поиск и обобщение информации|Интерпретация данных|Отчёты и презентации',
  's.tools': 'Инструменты', 's.tools.t': 'Excel (продвинутый)|VBA|SAS|R|Python|SQL',
  's.lang': 'Языки', 's.lang.t': 'Грузинский · родной|Русский · родной|Французский · C1|Английский · C1|Украинский · B2|Норвежский · A2',

  'c.num': 'Контакты', 'c.title': 'Давайте общаться',
  'c.sub': 'Private Equity, финансовое моделирование или данные — буду рада обсудить, чем могу быть полезна вашей команде.'
}
};
