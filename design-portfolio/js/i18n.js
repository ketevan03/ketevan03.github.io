// Translations of the design portfolio: English (default), French, Russian (original).
var I18N = {
  en: {
    'nav.about':'About me','nav.portfolio':'Portfolio','nav.consult':'Consultation','nav.contacts':'Contact',
    'about.t':'About me',
    'about.1':'My name is Katie and I am a certified designer',
    'about.2':'I work in PowerPoint, Figma, Adobe Illustrator and Photoshop',
    'about.3':'I create stylish, clear presentations from scratch',
    'about.4':'I will design your website and build it',
    'pf.t':'Portfolio','pf.sub':'50+ projects completed in just over a year','pf.click':'click here',
    'c.t':'Book a free consultation','c.name':'Full name','c.phone':'Phone','c.email':'Email','c.send':'Send',
    'ct.t':'Contact','ct.sub':'Choose the way to reach me that suits you best',
    'ty.t':'Thank you!','ty.p':'Your details have been sent successfully. I will get back to you within 10 minutes :)'
  },
  fr: {
    'nav.about':'À propos','nav.portfolio':'Portfolio','nav.consult':'Consultation','nav.contacts':'Contact',
    'about.t':'À propos',
    'about.1':"Je m'appelle Katie et je suis designer certifiée",
    'about.2':'Je travaille sur PowerPoint, Figma, Adobe Illustrator et Photoshop',
    'about.3':'Je crée des présentations élégantes et claires à partir de zéro',
    'about.4':"Je conçois le design de votre site et je l'intègre",
    'pf.t':'Portfolio','pf.sub':"Plus de 50 projets réalisés en un peu plus d'un an",'pf.click':'cliquez ici',
    'c.t':'Réservez une consultation gratuite','c.name':'Nom complet','c.phone':'Téléphone','c.email':'E-mail','c.send':'Envoyer',
    'ct.t':'Contact','ct.sub':'Choisissez le moyen de contact qui vous convient le mieux',
    'ty.t':'Merci !','ty.p':'Vos coordonnées ont bien été envoyées. Je vous recontacte dans les 10 minutes :)'
  },
  ru: {
    'nav.about':'Обо мне','nav.portfolio':'Портфолио','nav.consult':'Консультация','nav.contacts':'Мои контакты',
    'about.t':'Обо мне',
    'about.1':'Меня зовут Кэти и я сертифицированный дизайнер',
    'about.2':'Работаю в PowerPoint, Figma, Adobe Illustrator, Photoshop',
    'about.3':'Делаю стильную и понятную презентацию с нуля',
    'about.4':'Разработаю дизайн Вашего сайта и сверстаю его',
    'pf.t':'Портфолио','pf.sub':'Больше чем за год я сделала 50+ проектов','pf.click':'нажмите здесь',
    'c.t':'Запишитесь на бесплатную консультацию','c.name':'ФИО','c.phone':'Телефон','c.email':'Электронная почта','c.send':'Отправить данные',
    'ct.t':'Мои контакты','ct.sub':'Выберите удобный для Вас способ связи',
    'ty.t':'Спасибо!','ty.p':'Ваши данные были успешно отправлены. Я свяжусь с Вами в ближайшие 10 минут :)'
  }
};
(function () {
  var SUP = ['en', 'fr', 'ru'];
  function initial() {
    try { var q = new URLSearchParams(location.search).get('lang'); if (SUP.indexOf(q) > -1) return q; } catch (e) {}
    try { var s = localStorage.getItem('lang'); if (SUP.indexOf(s) > -1) return s; } catch (e) {}
    return 'en';
  }
  function apply(l) {
    var d = I18N[l]; document.documentElement.lang = l;
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = d[el.getAttribute('data-i18n')]; });
    document.querySelectorAll('[data-ph]').forEach(function (el) { el.placeholder = d[el.getAttribute('data-ph')]; });
    document.querySelectorAll('.langs button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-l') === l)); });
    try { localStorage.setItem('lang', l); } catch (e) {}
  }
  apply(initial());
  document.querySelectorAll('.langs button').forEach(function (b) {
    b.addEventListener('click', function () {
      document.body.classList.add('switching');
      setTimeout(function () { apply(b.getAttribute('data-l')); document.body.classList.remove('switching'); }, 200);
    });
  });
})();
