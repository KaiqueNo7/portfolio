var texts = [
  "Front-end",
  "Back-end",
  "Full-Stack",
];

var textIndex = 0;
var charIndex = 0;
var textElement = document.getElementById("text-animation");

function type() {
  if (charIndex < texts[textIndex].length) {
    textElement.innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 50);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    textElement.innerHTML = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex++;
    if (textIndex >= texts.length) {
      textIndex = 0;
    }
    setTimeout(type, 500);
  }
}

setTimeout(type, 500);	

var scrollToProjects = document.getElementById("scroll");

scrollToProjects.addEventListener("click", function() {
  scrollToElement("#projects"); 
});

function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
  if (!element) {
    console.error('Element with ID ' + elementId + ' not found.');
    return;
  }
  var elementPosition = element.getBoundingClientRect().top;
  var startingY = window.pageYOffset;
  var duration = 1000; 
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startingY, elementPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});


const translationsPt = {
  t1: "Olá mundo!",
  t2: "Meu nome é Kaique Nocetti",
  t3: "e eu sou desenvolvedor",
  d1: "O que mais uso:",
  d2: "PHP - 2 Anos",
  d3: "JavaScript - 2 Anos",
  d4: "PostgreeSQL - 1 Ano",
  d5: "HTML5/CSS3 - 3 Anos",
  d6: "Baixe meu CV",

  p1: "My Projects",
  p2: "Projects I worked on",

  ajfimoveis: "Meu primeiro projeto como programador, na primeira versão só usava Front-End, HTML, CSS e um pouco de Javascript. Eu fui ganhando experiência e com o tempo eu ia adicionando coisas novas, como google recaptcha para validar os envios de e-mail através do formulário de contato, também inclui uma funcionalidade onde o usuário pode calcular o financiamento de um imóvel, e gera um gráfico demonstrando as parcelas, recentemente eu acrescentei um banco de dados, para fazer o controle do meu Back-End. Hoje o site é dinâmico e tem um painel de controle do administrador do site, no caso meu pai,para ele poder adicionar e editar informações sobre o imóvel dinamicamente. As tecnologias utilizadas nesse projeto foram: PHP, HTML5, CSS3, Javascript, Jquery, MySQL e ChartJs.",
  mostruarioOnline: "Uma plataforma online para as pessoas criarem seu próprio mostruário/catálogo e terem para uso pessoal. Esse projeto era para ser somente um mostruário para a minha mãe que trabalha com jóias, um produto mais complexo de se vender online através de um e-commerce ou anunciar nas redes socais por falta de segurança e ser um produto de alta valia. Então eu criei o mostruário para ela poder copiar o link e mandar para as clientes de forma privativa. Porém depois dei conta que poderia ser solução para outros tipos de negócio, então me transformei numa plataforma com diversas funcionalidades. A minha ideia é ser o mais simples de utilizar possível, além eu criei imaginando que o cliente final era minha mãe, então eu busquei simplificar ao máximo toda o UX e UI. O projeto já está online e funcionando em sua primeira versão. As tecnologias que eu utilizei foram: PHP, HTML5, CSS3, Javascript, Jquery e MySQL",
  adoteme: "Um web site para adoção de cães. A ideia do projeto é facilitar para pessoas que querem adotar um pet ou querem por um pet para adoção. Transformar esse processo numa experiência leve, com questionários divertidos, um algoritmo bem feito para encontrar o tutor perfeito para o pet e tomando cuidado com todas responsabilidades que uma adoção requisita. Esse projeto eu estou utilizando: React JS, NODEjs e MySQL.",
  school: "Sistema Web de gerenciamento de escolas. Trabalhei incluindo funcionalidades e correções de bugs. Tecnologias usadas: PHP,  HTML5, CSS3, Bootstrap e PostgreeSQL.",
  medical: "Sistema Web de gerenciamento de clínicas médicas. Trabalhei incluindo funcionalidades e correções de bugs. Tecnologias usadas: PHP,  HTML5, CSS3, Bootstrap e PostgreeSQL.",
  vet: "Sistema Web de gerenciamento de clínicas veterinárias. Trabalhei incluindo funcionalidades e correções de bugs. Tecnologias usadas: PHP,  HTML5, CSS3, Bootstrap e PostgreeSQL.",
  auditoron: "Sistema Web de gerenciamento de auditorias. Trabalhei incluindo funcionalidades e correções de bugs. Tecnologias usadas: PHP,  HTML5, CSS3, Bootstrap e PostgreeSQL."

};

const translationsEn = {
  t1: "Hello World!",
  t2: "My name is Kaique Nocetti",
  t3: "and I'm a developer",
  d1: "Main tools I use:",
  d2: "PHP - 2 Years",
  d3: "JavaScript - 2 Years",
  d4: "PostgreeSQL - 1 Year",
  d5: "HTML5/CSS3 - 3 Years",
  d6: "Download my CV",

  p1: "My person projects",
  p2: "Projects I worked on",

  ajfimoveis: "My first project as a programmer, in the first version I only used Front-End, HTML, CSS and a little bit of Javascript. I gained experience and over time I added new things, such as google recaptcha to validate email submissions through the contact form, it also includes a functionality where the user can calculate the financing of a property, and generates a graph showing the installments, recently I added a database, to control my Back-End. Today the site is dynamic and has a control panel for the site administrator, in my father's case, so he can dynamically add and edit information about the property. The technologies used in this project were: PHP, HTML5, CSS3, Javascript, Jquery, MySQL and ChartJs.",
  mostruarioOnline: "An online platform for people to create their own showcase/catalog and have it for personal use. This project was meant to be just a showcase for my mother who works with jewelry, a more complex product to sell online through an e-commerce or advertise on social networks due to lack of security and to be a high value product. So I created the showcase so she could copy the link and send it to her clients privately. But then I realized that it could be a solution for other types of business, so I turned into a platform with several features. My idea is to be as simple to use as possible, besides I created it imagining that the end customer was my mother, so I tried to simplify the entire UX and UI as much as possible. The project is already online and working in its first version. The technologies I used were: PHP, HTML5, CSS3, Javascript, Jquery and MySQL",
  adoteme: "A website for adopting dogs. The idea of the project is to make it easier for people who want to adopt a pet or want to put a pet up for adoption. Transforming this process into a light experience, with fun questionnaires, a well-designed algorithm to find the perfect tutor for the pet and taking care of all the responsibilities that an adoption requires. This project I'm using: React JS, NODEjs and MySQL.",
  school: "School Management Web System. I worked including features and bug fixes. Technologies used: PHP, HTML5, CSS3, Bootstrap and PostgreeSQL.",
  medical: "Web management system for medical clinics. I worked including features and bug fixes. Technologies used: PHP, HTML5, CSS3, Bootstrap and PostgreeSQL.",
  vet: "Web management system for veterinary clinics. I worked including features and bug fixes. Technologies used: PHP, HTML5, CSS3, Bootstrap and PostgreeSQL.",
  auditoron: "Web audit management system. I worked including features and bug fixes. Technologies used: PHP, HTML5, CSS3, Bootstrap and PostgreeSQL."
};

const translationsFr = {
    t1: "Bonjour le monde!",
    t2: "Je m'appelle Kaique Nocetti",
    t3: "je suis développeur",
    d1: "Ce que j'utilise le plus:",
    d2: "PHP - 2 Années",
    d3: "JavaScript - 2 Années",
    d4: "PostgreeSQL - 1 Année",
    d5: "HTML5/CSS3 - 3 Années",
    d6: "Télécharger mon CV",
  
    p1: "Mes projets personnels",
    p2: "Projets sur lesquels j'ai travaillé",
  
    ajfimoveis: "Mon premier projet en tant que programmeur, dans la première version j'utilisais uniquement le Front-End, HTML, CSS et un peu de Javascript. J'ai acquis de l'expérience et au fil du temps j'ai ajouté de nouvelles choses, comme google recaptcha pour valider les soumissions par e-mail via le formulaire de contact, il comprend également une fonctionnalité où l'utilisateur peut calculer le financement d'une propriété, et génère un graphique montrant les versements, récemment j'ai ajouté une base de données, pour contrôler mon Back-End. Aujourd'hui, le site est dynamique et dispose d'un panneau de contrôle pour l'administrateur du site, dans le cas de mon père, afin qu'il puisse ajouter et modifier dynamiquement des informations sur la propriété. Les technologies utilisées dans ce projet étaient : PHP, HTML5, CSS3, Javascript, Jquery, MySQL et ChartJs.",
    mostruarioOnline: "Une plateforme en ligne permettant aux personnes de créer leur propre vitrine/catalogue et de l'avoir pour un usage personnel. Ce projet était censé n'être qu'une vitrine pour ma mère qui travaille la joaillerie, un produit plus complexe à vendre en ligne via un e-commerce ou à faire de la publicité sur les réseaux sociaux faute de sécurité et d'être un produit à forte valeur ajoutée. J'ai donc créé la vitrine pour qu'elle puisse copier le lien et l'envoyer à ses clients en privé. Mais ensuite, j'ai réalisé que cela pouvait être une solution pour d'autres types d'entreprises, alors je me suis transformé en une plateforme avec plusieurs fonctionnalités. Mon idée est d'être le plus simple à utiliser possible, d'ailleurs je l'ai créé en imaginant que le client final était ma mère, j'ai donc essayé de simplifier au maximum l'ensemble de l'UX et de l'UI. Le projet est déjà en ligne et fonctionne dans sa première version. Les technologies que j'ai utilisées étaient : PHP, HTML5, CSS3, Javascript, Jquery et MySQL",
    adoteme: "Un site pour adopter des chiens. L'idée du projet est de faciliter la tâche des personnes qui souhaitent adopter un animal de compagnie ou qui souhaitent mettre un animal de compagnie à l'adoption. Transformer ce processus en une expérience légère, avec des questionnaires amusants, un algorithme bien conçu pour trouver le tuteur idéal pour l'animal et prendre en charge toutes les responsabilités qu'une adoption nécessite. Ce projet que j'utilise : React JS, NODEjs et MySQL.",
    school: "Système Web de gestion scolaire. J'ai travaillé notamment sur les fonctionnalités et les corrections de bugs. Technologies utilisées : PHP, HTML5, CSS3, Bootstrap et PostgreeSQL.",
    medical: "Système de gestion Web pour cliniques médicales. J'ai travaillé notamment sur les fonctionnalités et les corrections de bugs. Technologies utilisées : PHP, HTML5, CSS3, Bootstrap et PostgreeSQL.",
    vet: "Système de gestion Web pour cliniques vétérinaires. J'ai travaillé notamment sur les fonctionnalités et les corrections de bugs. Technologies utilisées : PHP, HTML5, CSS3, Bootstrap et PostgreeSQL.",
    auditoron: "Système de gestion d'audit Web. J'ai travaillé notamment sur les fonctionnalités et les corrections de bugs. Technologies utilisées : PHP, HTML5, CSS3, Bootstrap et PostgreeSQL."
  };

function changeLanguage(language) {

  let translations;
  if (language === 'pt') {
    translations = translationsPt;
  } 
  
  if (language === 'en') {
    translations = translationsEn;
  }

  if (language === 'fr') {
    translations = translationsFr;
  }

  for (const key in translations) {
    if (translations.hasOwnProperty(key)) {
      const element = document.getElementById(key);
      if (element) {
        element.innerText = translations[key];
      }
    }
  }
}
