// Master's application page: same content as the Private Equity page (../private-equity/i18n.js),
// with the texts below replacing the internship-oriented ones. Edit only what differs here.
(function () {
  var O = {
    en: {
      'meta.title': "Ketevan Bachilava · Master's application",
      'hero.eyebrow': 'Finance · Strategy · Impact · Analysis',
      'hero.lead': "MSc student in Econometrics &amp; Statistics (Financial Modelling track) at Paris 1 Panthéon-Sorbonne, I am applying for a master's in finance to prepare for a career in Private Equity, with a focus on companies that are building a more sustainable economy.",
      'p.p2': "Investing well requires reading the numbers, valuing a business and making decisions under uncertainty. I have built solid quantitative foundations through econometrics, financial modelling and financial analysis. A master's in finance is the natural next step: it would add corporate finance, strategy and governance to these tools, together with the practical experience and network that Private Equity requires.",
      'a.title': 'What I bring to the programme',
      'a.sub': 'My background has given me solid foundations for an advanced programme in finance, and perspectives I look forward to sharing with my classmates:',
      'x.sub': 'My academic projects and professional experiences, and what each one has taught me.',
      'c.sub': 'I would be delighted to tell you more about my background and my project.'
    },
    fr: {
      'meta.title': 'Ketevan Bachilava · Candidature en master',
      'hero.eyebrow': 'Finance · Stratégie · Impact · Analyse',
      'hero.lead': "Étudiante en master Économétrie &amp; Statistique (parcours Modélisation financière) à Paris 1 Panthéon-Sorbonne, je candidate à un master en finance pour me préparer à une carrière en Private Equity, tournée vers les entreprises qui construisent une économie plus durable.",
      'p.p2': "Pour bien investir, il faut savoir lire des chiffres, évaluer une entreprise et prendre des décisions dans l'incertitude. J'ai construit des bases quantitatives solides à travers l'économétrie, la modélisation financière et l'analyse financière. Un master en finance est la suite logique : il ajouterait à ces outils la finance d'entreprise, la stratégie et la gouvernance, ainsi que l'expérience pratique et le réseau qu'exige le Private Equity.",
      'a.title': "Ce que j'apporte au programme",
      'a.sub': "Mon parcours m'a donné des bases solides pour un programme avancé en finance, ainsi que des regards que j'ai hâte de partager avec ma promotion :",
      'x.sub': "Mes projets académiques et mes expériences professionnelles, et ce que chacun m'a appris.",
      'c.sub': "Je serais ravie de vous en dire plus sur mon parcours et mon projet."
    },
    ru: {
      'meta.title': 'Кетеван Бачилава · Поступление в магистратуру',
      'hero.eyebrow': 'Финансы · Стратегия · Импакт · Анализ',
      'hero.lead': 'Я учусь в магистратуре по эконометрике и статистике (профиль «Финансовое моделирование») в Университете Париж 1 Пантеон-Сорбонна и поступаю в магистратуру по финансам, чтобы подготовиться к карьере в Private Equity с акцентом на компании, которые строят более устойчивую экономику.',
      'p.p2': 'Чтобы инвестировать грамотно, нужно уметь читать цифры, оценивать бизнес и принимать решения в условиях неопределённости. Я заложила прочную количественную базу благодаря эконометрике, финансовому моделированию и финансовому анализу. Магистратура по финансам — логичный следующий шаг: она дополнит эти инструменты корпоративными финансами, стратегией и корпоративным управлением, а также практическим опытом и связями, которых требует Private Equity.',
      'a.title': 'Что я привнесу в программу',
      'a.sub': 'Мой путь дал мне прочную основу для продвинутой программы по финансам, а также взгляды, которыми я с радостью поделюсь с однокурсниками:',
      'x.sub': 'Мои учебные проекты и профессиональный опыт и то, чему меня научил каждый из них.',
      'c.sub': 'Буду рада подробнее рассказать о своём пути и своих планах.'
    }
  };
  ['en', 'fr', 'ru'].forEach(function (l) {
    for (var k in O[l]) window.I18N[l][k] = O[l][k];
  });
})();
