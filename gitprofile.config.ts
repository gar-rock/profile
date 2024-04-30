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
      // https://gar-rock.github.io/dev-sec-wiki/
      projects: [
        {
          title: 'Pass-Share.com',
          description:
            'Pass-Share enables secure sharing of sensitive information, such as passwords, bank details, and secrets, with a friend. This fully encrypted service prioritizes privacy by abstaining from storing any plain-text data. Decryption capability is exclusively granted to the recipient, ensuring heightened confidentiality. Additionally, Pass-Share offers the convenience of instantly generating pseudo-random, multi-character class passwords directly within the browser.',
          imageUrl:
            'https://media.me-cuisine.com/logo/ps_logo_6.png',
          link: 'https://pass-share.com/',
        },
         {
          title: 'Security Developer Wiki',
          description:
            'This wiki is a repo of knowledge docs that represents a standard toolkit for any cyber security professional, with a slight lean towards developers and automation engineers.',
          imageUrl:
            'https://icons8.com/icon/rl0sIZNchpNB/cyber-security',
          link: 'https://gar-rock.github.io/dev-sec-wiki/',
        }
        ,
         {
          title: 'LeRock-Summits',
          description:
            'LeRock-Summits is a blog that we started to keep track of our ongoing high pointing adventures. The main members of this groups are Gary, Garrison, Victor LeRock and Adam Dunn. There are many other that have joined us on various trips, and their stories can be found in here as well. Enjoy learning about our journey as we describe our stuggles, lessons learned, and memories made.',
          imageUrl:
            'https://icons8.com/icon/XmZedKb7r3lU/autumn-landscape',
          link: 'https://gar-rock.github.io/lerock-summits/',
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
    'Tailwind',
    'Bootstrap',
    'Flask',
    'Python',
    'Java',
    'Jinja',
    'Terraform',
    'AWS',
    'Firewall',
    'Networking',
    'GRC'
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
  educations: [
    {
      institution: 'University Of Oklahoma',
      degree: 'Computer Engineering, BS',
      from: '2013',
      to: '2018',
    }
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'gar.rock', // to hide blog section, keep it empty
    limit: 4, // How many articles to display. Max is 10.
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
