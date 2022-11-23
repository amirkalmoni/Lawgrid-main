import {
  GrowIcon,
  TrustIcon,
  SimpleIcon,
  ResultsIcon,
  ServiceIcon,
  CasesIcon,
  DiaryIcon,
  RequestIcon,
  ListIcon,
  SocialIcon,
} from '../Icons'

export const features = [
  {
    id: 0,
    icon: '',
    icon: <CasesIcon />,
    title: 'Reschedule Cases',
    description:
      'Reschedule your case online from the comfort of your home, office or your home office.',
  },
  {
    id: 1,
    title: 'Nation-wide Causelists',
    icon: <ListIcon />,
    description:
      'View up-to-date cases across the nation and get push notifications on your saved cases.',
  },
  {
    id: 2,
    title: 'Court Documents Request',
    icon: <RequestIcon />,
    description: 'Procure your digital court documents with a few clicks.',
  },
  {
    id: 3,
    title: 'GridSocial',
    icon: <SocialIcon />,
    description:
      'Join our community of lawyers to share ideas and explore new opportunities.',
  },
  {
    id: 4,
    title: "Lawyer's Diary",
    icon: <DiaryIcon />,
    description:
      'Create custom notes and reminders for your arguments within seconds.',
  },
]

export const menus = [
  {
    name: 'Home',
    slug: '/',
  },
  {
    name: 'About',
    slug: '/about',
  },
  {
    name: 'Pricing',
    slug: '/pricing',
  },
  {
    name: 'Contact',
    slug: '/contact',
  },
]

export const heroData = [
  {
    image: '/static/main-hero-1.png',
    title: 'LawGrid helps Lawyers Stay Ahead of the Courtroom',
    subTitle:
      'We provide critical digital infrastructure to facilitate the Nigerian legal industry in a technological era.',
  },
  {
    image: '/static/device_with_app.png',
    title: 'Request Documents and More, With A Click',
    subTitle:
      'Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.',
  },
  {
    image: '/static/device_with_app.png',
    title: 'Digital Legal Solutions by Lawyers, For Lawyers',
    subTitle:
      'Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.',
  },
]

export const values = [
  {
    id: 0,
    title: 'Our desire to constantly evolve',
    icon: <GrowIcon />,
    description:
      'Our team is constantly looking for impactful ways to solve problems. We want our users to have a better and more effective litigation experience using our technology.',
  },
  {
    id: 1,
    icon: <ResultsIcon />,
    title: 'Results that speak volumes',
    description:
      "The core components of LawGrid's digital platforms guarantee the coherence and smooth organization of our consumer's needs. These solutions are aimed at making sure that attorneys and their clients have all they require to operate effectively and get their issues resolved without difficulty.",
  },
  {
    id: 2,
    title: 'Mutual trust',
    icon: <TrustIcon />,
    description:
      'To solve any problem, there must be trust. We provide effective service by developing strong bonds of trust with our clients and customers.',
  },
  {
    id: 3,
    icon: <SimpleIcon />,
    title: 'Simplicity',
    description:
      'We create for ease. Law Grid was designed to be easy to use, helping our users to find solutions to their issues faster.',
  },
  {
    id: 4,
    icon: <ServiceIcon />,
    title: 'Unbridled Service',
    description:
      'We understand the challenges lawyers face and are committed to improving them by working closely with our users.',
  },
]

export const pricingList = [
  {
    title: 'Personal',
    price: '1,500',
    currency: 'NGN',
    frequency: '/month',
    description: 'The essentials to provide your best work for clients',
    features: ['5 hours a day', 'up to 1000 subscribers', 'Basic analystics'],
    cta: 'Get Started',
    mostpopular: false,
  },

  {
    title: 'Startup',
    price: '2,500',
    currency: 'NGN',
    frequency: '/month',
    description: 'A plan that scales with your rapidly growing business',
    features: [
      '23 hours a day',
      'up to 4000 subscribers',
      'Basic analystics',
      'Marketplace auto subscription',
    ],
    cta: 'Get Started',
    mostpopular: true,
  },

  {
    title: 'Enterprise',
    currency: 'USD',
    frequency: '/month',
    description: 'Dedicated support and infrastructure for your company',
    features: [
      '5 hours a day',
      'up to 1000 subscribers',
      'Basic analystics',
      'Marketplace auto subscription',
      'HandsOn',
    ],
    cta: 'Contact Sales',
    mostpopular: false,
  },
]

export const marqueeData = {
  items: [
    {
      _type: 'simple',
      text: 'Firm 1',
    },
    {
      _type: 'simple',
      text: 'Firm 2',
    },
    {
      _type: 'simple',
      text: 'Firm 3',
    },
    {
      _type: 'simple',
      text: 'Firm 4',
    },
  ],
  speed: 0.5,
  direction: 'reverse',
  pausable: true,
}
