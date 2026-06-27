export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    // Nav
    'nav.home': 'Inicio',
    'nav.blog': 'Blog',
    'nav.templates': 'Templates',
    'nav.about': 'Sobre mí',
    // Home
    'home.hero.title': 'Organiza tu freelance con Notion',
    'home.hero.subtitle': 'Recursos, guías y plantillas para freelancers que quieren trabajar con claridad, no con caos.',
    'home.hero.cta': 'Ver templates',
    'home.blog.title': 'Últimos artículos',
    'home.blog.cta': 'Ver todos los artículos',
    'home.templates.title': 'Templates de Notion',
    'home.templates.subtitle': 'Herramientas listas para usar en tu día a día como freelancer.',
    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Guías y recursos para freelancers organizados.',
    'blog.readmore': 'Leer artículo',
    // Templates
    'templates.title': 'Templates de Notion para Freelancers',
    'templates.subtitle': 'Sistemas listos para usar, construidos con fórmulas avanzadas y bases de datos relacionadas.',
    'templates.cta': 'Conseguir template',
    'templates.price': 'Precio',
    // Footer
    'footer.tagline': 'Organiza tu freelance con Notion.',
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.templates': 'Templates',
    'nav.about': 'About',
    // Home
    'home.hero.title': 'Organize your freelance business with Notion',
    'home.hero.subtitle': 'Resources, guides and templates for freelancers who want to work with clarity, not chaos.',
    'home.hero.cta': 'See templates',
    'home.blog.title': 'Latest posts',
    'home.blog.cta': 'See all posts',
    'home.templates.title': 'Notion Templates',
    'home.templates.subtitle': 'Ready-to-use tools for your daily freelance workflow.',
    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Guides and resources for organized freelancers.',
    'blog.readmore': 'Read post',
    // Templates
    'templates.title': 'Notion Templates for Freelancers',
    'templates.subtitle': 'Ready-to-use systems built with advanced formulas and relational databases.',
    'templates.cta': 'Get template',
    'templates.price': 'Price',
    // Footer
    'footer.tagline': 'Organize your freelance business with Notion.',
    'footer.rights': 'All rights reserved.',
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof typeof ui[typeof defaultLang];
