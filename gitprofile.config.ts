// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'gar-rock', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/profile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Pass-Share.com',
          description:
            'Pass-Share enables secure sharing of sensitive information, such as passwords, bank details, and secrets, with a friend. This fully encrypted service prioritizes privacy by abstaining from storing any plain-text data. Decryption capability is exclusively granted to the recipient, ensuring heightened confidentiality. Additionally, Pass-Share offers the convenience of instantly generating pseudo-random, multi-character class passwords directly within the browser.',
          imageUrl:
            'https://media.me-cuisine.com/logo/ps_logo_6.png',
          link: 'https://pass-share.com/',
        }
      ],
    },
  },
  seo: {
    title: 'Portfolio of Garrison LeRock',
    description: 'View projects and contributions that Garrison LeRock has made to the dev community!',
    imageURL: 'https://icons8.com/icon/121324/resume',
  },
  social: {
    linkedin: 'garrison-lerock/',
    twitter: 'gar_rock',
    mastodon: '',
    researchGate: '',
    facebook: 'garrison.lerock',
    instagram: 'g_lerock',
    youtube: 'GarrisonLeRock', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'gar.rock',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://pass-share.com',
    phone: '',
    email: 'gar.rock@hotmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1kj7UHZZ72G0fHd9TKLg48xVaATcJOBo4/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
    'Antd',
    'Tailwind',
    'Bootstrap',
    'Flask',
    'Python',
    'Java',
    'Jinja',
    'Terraform',
    'AWS',
    ''
  ],
  experiences: [
    {
      company: 'Koch Industries',
      position: 'Cyber Security Engineer',
      from: 'January 2022',
      to: 'Present',
      companyLink: 'https://kochind.com',
    },
    {
      company: 'Koch Global Services',
      position: 'Network Security Engineer',
      from: 'July 2021',
      to: 'December 2021',
      companyLink: 'https://kochind.com',
    },
    {
      company: 'Koch Business Soultions',
      position: 'Network Security Analyst',
      from: 'May 2016',
      to: 'June 2021',
      companyLink: 'https://kochind.com',
    }
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'University Of Oklahoma',
      degree: 'Computer Engineering, BS',
      from: '2013',
      to: '2018',
    }
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
