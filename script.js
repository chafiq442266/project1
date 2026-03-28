const articles = [
  {
    id: 'ia-introduction',
    title: 'Introduction à l’Intelligence Artificielle',
    category: 'Technologie',
    summary: 'Comprendre les bases de l’IA, de son histoire à ses principales applications.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>L'intelligence artificielle (IA) est un vaste domaine de l'informatique qui consiste à construire des systèmes capables de réaliser des tâches habituellement associées à l'intelligence humaine.</p>
      <h2>Origines et évolution</h2>
      <p>Les premiers travaux en IA remontent aux années 1950. Depuis, les progrès des algorithmes et de la puissance de calcul ont permis des avancées spectaculaires.</p>
      <h3>Applications modernes</h3>
      <ul>
        <li>Reconnaissance vocale et assistants intelligents.</li>
        <li>Analyse de données et prédictions métiers.</li>
        <li>Vision par ordinateur et automatisation.</li>
      </ul>
      <p>La compréhension des principes de l’IA ouvre la voie à des usages responsables et efficaces dans tous les secteurs.</p>
    `
  },
  {
    id: 'cybersecurite-basics',
    title: 'Les bases de la cybersécurité',
    category: 'Sécurité',
    summary: 'Principes essentiels pour protéger un site, ses données et ses utilisateurs.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>La cybersécurité vise à protéger les systèmes, les réseaux et les données contre les attaques et intrusions.</p>
      <h2>Bonnes pratiques</h2>
      <ul>
        <li>Mettre à jour régulièrement logiciels et systèmes.</li>
        <li>Utiliser des mots de passe forts et une authentification multifactorielle.</li>
        <li>Sauvegarder les données et tester les processus de restauration.</li>
      </ul>
      <h3>Gestion des risques</h3>
      <p>L'identification des vulnérabilités et la mise en place de mesures préventives font partie intégrante de toute stratégie IT.</p>
    `
  },
  {
    id: 'web-responsive',
    title: 'Créer des sites web responsive',
    category: 'Web',
    summary: 'Techniques d’adaptation des interfaces sur tous les écrans avec CSS Flexbox et Grid.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Le responsive design permet à un site de s’adapter aux différentes tailles d’écran (mobile, tablette, desktop).</p>
      <h2>Flexbox et Grid</h2>
      <p>Flexbox gère l’alignement sur une dimension, Grid sur deux dimensions. Ensemble, ils rendent les mises en page modernes fluides.</p>
      <h3>Exemple de points clés</h3>
      <ul>
        <li>Utiliser des unités relatives (<code>%, rem, vw</code>) plutôt que fixes.</li>
        <li>Définir des breakpoints pour ajuster la grille sur les petits écrans.</li>
        <li>Tester régulièrement sur mobile pour garantir l’accessibilité.</li>
      </ul>
    `
  }
];

const initNav = () => {
  const nav = document.getElementById('mainNav');
  const btn = document.getElementById('navToggle');

  btn?.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  const links = document.querySelectorAll('.nav-link');
  const current = window.location.pathname.split('/').pop();

  links.forEach((link) => {
    if (link.getAttribute('href') === current || (current === '' && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    }
  });
};

const renderArticles = () => {
  const holder = document.getElementById('articlesGrid');
  if (!holder) return;

  holder.innerHTML = articles.map((a) => `
    <article class="card">
      <img src="${a.image}" alt="${a.title}" />
      <div class="card-body">
        <h3>${a.title}</h3>
        <p>${a.summary}</p>
        <a class="btn" href="article.html?id=${a.id}">Lire plus</a>
      </div>
    </article>
  `).join('');
};

const renderDetail = () => {
  const idParam = new URLSearchParams(window.location.search).get('id');
  const article = articles.find((item) => item.id === idParam);

  const title = document.getElementById('detailTitle');
  const img = document.getElementById('detailImage');
  const content = document.getElementById('detailContent');

  if (!idParam || !article || !title || !img || !content) {
    if (title) title.textContent = 'Article introuvable';
    if (content) content.innerHTML = '<p>Nous n’avons pas pu trouver l’article demandé. Essayez une autre entrée dans la liste.</p>';
    if (img) img.style.display = 'none';
    return;
  }

  title.textContent = article.title;
  img.src = article.image;
  img.alt = `Image pour ${article.title}`;
  content.innerHTML = article.content;
};

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderArticles();
  renderDetail();
});