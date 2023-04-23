import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Otávio Ribas.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Brazilian <strong className="text-stone-100">Full Stack Software Engineer</strong> based in Palaiseau, Île-de-France.
        Currently, I'm studying at the <strong className="text-stone-100">École polytechnique</strong> and working at
        <strong className="text-stone-100">Tino</strong>, a startup where I'm helping to build a new way for retailers to buy
        products from their suppliers in the Brazilian context.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        While I'm not coding, you can find me either doing <strong className="text-stone-100">fencing</strong>, practicing the
        <strong className="text-stone-100">violin</strong>, enjoying the parisian <strong className="text-stone-100">night life</strong>
        or simply studying for my college exams.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm passionate about harnessing the power of technology to solve real-life problems in creative ways, and currently, 
  For three years, I've studied for a Bachelor's degree in Computer Engineering at the Aeronautics Institute of Technology (ITA), but now I'm pursuing 
  an Engineer's degree at the École polytechnique. As a Software Engineer, I love the idea of developing tools that improve people lives and 
  that help businesses to thrive. As such, I've been working since 2022 at Tino, a company that aims to provide to retailers an easier way to 
  purchase goods from their suppliers, specially in the reality they face in the context of credit in Brazil. Furthermore, I'm also fascinated 
  about Artificial Intelligence, and in developing machines that can reach and surpass our own capabilities. As such, during my time at ITA I did work at
  ITAndroids, their robotics team, where I delved into the study of CNNs and Computer Vision.
`,
  aboutItems: [
    {label: 'Location', text: 'Palaiseau, Île-de-France', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Brazilian', Icon: FlagIcon},
    {label: 'Interests', text: 'Cinema, Fencing, Violin', Icon: SparklesIcon},
    {label: 'Study', text: 'École polytechnique; Aeronautics Institute of Technology (ITA)', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Tino', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'French',
        level: 7,
      },
      {
        name: 'Portuguese',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 5,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'Tailwind',
        level: 5,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Golang',
        level: 8,
      },
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'C/C++',
        level: 7,
      },
    ],
  },
  {
    name: 'Software & Tools',
    skills: [
      {
        name: 'Docker',
        level: 6,
      },
      {
        name: 'GCloud/Terraform',
        level: 7,
      },
      {
        name: 'SQL',
        level: 9,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2022 - Present',
    location: 'École polytechnique',
    title: 'Engineer\'s Degree',
    content: <p></p>,
  },
  {
    date: 'Jan 2019 - Dec 2021',
    location: 'Aeronautics Institute of Technology',
    title: 'Bachelor\'s degree in Computer Engineering',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'February 2022 - Present',
    location: 'Tino',
    title: 'Software Engineer',
    content: (
        <ol>
          <li>• Currently working as a Software Engineer in the development of a backend service that communicates with
            the institutions of the Brazilian financial market responsible for registering the status of the credit card receivables.
            This project is being developed in Golang, with it's infrastructure in the Google Cloud being created with Terraform.
          </li>
          <li>• During this project, developed a client to communicate with the register institutions APIs over the HTTP protocol,
            executing some of the key methods required for our operation. During this task, I've worked with REST in Golang,
            with Docker, with Google Cloud and with Terraform for building the required infrastructure.
          </li>
        </ol>

            ),
  },
  {
    date: 'June 2021 - December 2021',
    location: 'Radix Portfolio',
    title: 'Software Engineer',
    content: (
        <ol>
          <li>• Worked in the development of an MVP for the company's system, by building a JavaScript program in the
            Google Apps Script platform to be integrated with the Pipefy platform. </li>
          <li>• Worked on the automation of various manual tasks that used to be performed daily in the office, developing
            for this scripts in VBA and Python.</li>
        </ol>
    ),
  },
];

/**
 * Testimonial section
 */

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'otaviohrguimaraes@gmail.com',
      href: 'mailto:otaviohrguimaraes@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Palaiseau, Île-de-France, France',
      href: 'https://www.google.fr/maps/place/91120+Palaiseau/@48.715486,2.2190106,15z/data=!3m1!4b1!4m6!3m5!1s0x47e67815c8bc82eb:0xfcf8dd0628c34a6!8m2!3d48.714509!4d2.245748!16zL20vMDJyaHc1',
    },
    {
      type: ContactType.Instagram,
      text: '@otaviohribas',
      href: 'https://www.instagram.com/otaviohribas/',
    },
    {
      type: ContactType.Github,
      text: 'otaviohrg',
      href: 'https://github.com/otaviohrg',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/otaviohrg'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ot%C3%A1vio-ribas-3a2621186/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/otaviohribas/'},
];
