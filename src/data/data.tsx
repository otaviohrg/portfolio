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
import porfolioImage1 from '../images/portfolio/portfolio-1.webp';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import profilepic from '../images/profilepic.jpg';
import cv from '../assets/resume.pdf';

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
  title: 'Otavio Ribas',
  description: "Portfolio of Otavio Ribas",
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
        I'm a Brazilian <strong className="text-stone-100">Engineering Student</strong> at <strong className="text-stone-100">École Polytechnique de Paris</strong>,
        with emphasis on Computer Science. I've been specializing in Software Engineering and Machine Learning/AI, and have a strong academic background in CS and Applied mathematics.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Having taken part in many different engineering and development teams, I have a solid understanding of the dynamics associated with the development cycle of an engineering product, 
        as well as extensive <strong className="text-stone-100">teamwork</strong> and <strong className="text-stone-100">communication</strong> skills. Fluent in English, French and Portuguese, and 
        seeking to work with coworkers from diverse backgrounds.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        While I'm not coding, you can find me either doing <strong className="text-stone-100">fencing</strong>, practicing the
        <strong className="text-stone-100"> violin</strong>, <strong className="text-stone-100">producing</strong> eletronic music, or simply studying for my college exams.
      </p>
    </>
  ),
  actions: [
    /**
    {
      href: {'/assets/resume.pdf'},
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
     */
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
  an Engineer's degree at the École Polytechnique de Paris, with an specialization in Software Engineering and Machine Learning/AI. As a Software Engineer, I love the idea of developing tools that improve people lives and 
  that help businesses to thrive. As such, I've worked for a year and a half in the back-end of Tino, a company that aims to provide to retailers an easier way to 
  purchase goods from their suppliers, specially in the reality they face in the context of credit in Brazil. Furthermore, I'm also fascinated 
  about Artificial Intelligence, and in developing machines that can reach and surpass our own capabilities. As such, during my time at ITA I did work at
  ITAndroids, their robotics team, where I delved into the study of CNNs and Computer Vision. There, I developed a research on Encoder-Decoder Networks for Semantic Segmentation, which, in 2023, led to the publication of
  a paper on the Latin-American Robotics Symposium, awarded Best Paper at the occasion.
`,
  aboutItems: [
    {label: 'Location', text: 'Palaiseau, Île-de-France', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Brazilian', Icon: FlagIcon},
    {label: 'Interests', text: 'Machine Learning, Fencing, Violin, DJing', Icon: SparklesIcon},
    {label: 'Study', text: 'École Polytechnique de Paris; Aeronautics Institute of Technology (ITA)', Icon: AcademicCapIcon},
    //{label: 'Employment', text: 'Tino', Icon: OfficeBuildingIcon},
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
        level: 8,
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
        level: 6,
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
  {
    name: 'Machine Learning',
    skills: [
      {
        name: 'Pandas',
        level: 9,
      },
      {
        name: 'Pytorch',
        level: 8,
      },
      {
        name: 'TensorFlow',
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
    title: 'Ad Astra',
    description: 'A physics simulator for planetary systems',
    url: 'https://github.com/otaviohrg/ad-astra-backend',
    image: porfolioImage1,
  },
  {
    title: 'Soccer Segmentation',
    description: 'Implementations of Encoder-Decoder CNNs for segmenting a soccer field',
    url: 'https://github.com/otaviohrg/computer-vision-for-segmentation',
    image: porfolioImage2,
  },
  {
    title: 'Tweet Sentiment Extraction',
    description: 'Extraction of sentiments from tweets using roBERTa',
    url: 'https://github.com/otaviohrg/tweet-sentiment-extraction',
    image: porfolioImage3,
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
          <li>• Extended and maintained the internal system of 100k+ lines of code, distributed across more than 20 microservices.
          </li>
          <li>• Developed the communication system used for sending automated messages to more than 1000 clients.
          </li>
          <li>• Created an interface to be used by more than 20 colleagues from the operations team to access relevant data and metrics for specific
clients, consumed from 5 different APIs.
          </li>
          <li>• Optimized routines from said interface, implementing parallel calls that made them 2x faster for larger data.
          </li>
          <li>• Prepared over 10 Metabase views containing core metrics for the business.          </li>
        </ol>

            ),
  },
  {
    date: 'June 2021 - December 2021',
    location: 'Radix Portfolio',
    title: 'Software Engineer',
    content: (
        <ol>
          <li>• Built an MVP for the new asset analysis automation system, building a JavaScript program for Google Apps Script and integrating it with
the Pipefy platform. </li>
          <li>• Wrote scripts for automating core tasks of the business, cutting the time spent on them by more than 90%.</li>
          <li>• Programmed a script for scraping 500+ pages of public documents.</li>
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
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/otaviohrg/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/otaviohribas/'},
];
