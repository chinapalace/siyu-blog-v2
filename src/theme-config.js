module.exports = {
  name: 'Siyu Capital',
  initialLinks: {
    paths: [
      {
        path: '/',
        title: 'Home',
      },
      {
        path: '/about',
        title: 'About'
      },
      {
        path: '/contact',
        title: 'Contact'
      },
    ],
    socialLinks: [
      {
        path: 'https://www.twitter.com/',
        icon: 'fa-twitter',
        name: 'Twitter',
      },
      {
        path: 'https://www.linkedin.com/in/',
        icon: 'fa-linkedin',
        name: 'LinkedIn',
      },
      {
        path: 'https://www.github.com/',
        icon: 'fa-github',
        name: 'Github',
      }
    ]
  },
  copyright: {
    owner: '© Justin McLaren',
  },
  introText: {
    '/': 'A weekly brief on financial markets curated by daily market watchers',
    '/about': 'Proin a eros ut diam aliquam blandit non ut diam. Proin ut vehicula enim.',
    '/speaking': 'Praesent in pellentesque dui. Donec ultrices hendrerit sem rhoncus auctor.',
    '/contact': 'Proin urna mauris, tristique quis diam non, blandit rhoncus orci.'
  }
}
