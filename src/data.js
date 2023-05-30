// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import AboutImg from '../src/assets/img/about.png';
import Feature1Img from '../src/assets/img/features/feature1.png';
import Feature2Img from '../src/assets/img/features/feature2.png';
import Feature3Img from '../src/assets/img/features/feature3.png';
import Feature4Img from '../src/assets/img/features/feature4.png';
import Avatar1Img from '../src/assets/img/testimonials/avatar1.png';
import Avatar2Img from '../src/assets/img/testimonials/avatar2.png';
import Avatar3Img from '../src/assets/img/testimonials/avatar3.png';
import HeroImage from '../src/assets/img/mobile-map-rb.png';
import cloud from '../src/assets/img/cloud.png'

export const navigationData = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'Services',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Signup',
    href: '#',
  },
];

export const heroData = {
  title: `GeoSmart: Location Intelligence`,
  subtitle:
    'Empowering Businesses with Advanced and Actionable Geolocation Insights',
  btnText: 'Get Started',
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: 'Empowering Businesses with Geolocation Services',
  subtitle:
    'At GeoSmart, we specialize in providing businesses with powerful geolocation services that open up a world of possibilities. Our advanced technology enables precise location tracking, geofencing, and intelligent mapping solutions.',
};

export const featuresData = {
  title: 'Some Services We Offer',
  subtitle:
    'With our app you can view the route of your order, from our local headquarters to the place where you are. Look for the app now!',
  list: [
    {
      image: Feature1Img,
      title: 'Geolocation Tracking',
      description:
        'Real-time location monitoring for efficient asset management and logistics.',
      linkText: 'Learn more',
      delay: '400',
    },
    {
      image: Feature2Img,
      title: 'Geofencing Solutions',
      description:
        'Virtual boundaries with customized actions for targeted marketing.',
      linkText: 'Learn more',
      delay: '400',
    },
    {
      image: Feature3Img,
      title: 'Intelligent Mapping',
      description:
        'Interactive maps for data visualization and informed decision-making.',
      linkText: 'Learn more',
      delay: '400',
    },
    {
      image: Feature4Img,
      title: 'Location-based Personalization',
      description:
        'Personalized experiences based on user location and preferences.',
      linkText: 'Learn more',
      delay: '400',
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar1Img,
    name: 'Serena',
    web: 'rena.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '300',
  },
  {
    image: Avatar2Img,
    name: 'Natalia',
    web: 'nataliya.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '600',
  },
  {
    image: Avatar3Img,
    name: 'Vebin',
    web: 'vebin.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '900',
  },
];

export const ctaData = {
  title: 'Contact Us From Here',
  subtitle: 'Get limited 1 week free try our features!',
  btnText1: 'Learn more',
  btnText2: 'Request Demo',
};

export const footerData = {
  logo: cloud,
  address: 'Product Texas, 234 Bokki Avenue Street BMW 99388',
  email: 'info@producttexas.project',
  phone: '1-232-7788 (Main)',
  list1: [
    {
      name: 'Profile',
      href: '#',
    },
    {
      name: 'Features',
      href: '#',
    },
    {
      name: 'Careers',
      href: '#',
    },
    {
      name: 'DW News',
      href: '#',
    },
  ],
  list2: [
    {
      name: 'Support',
      href: '#',
    },
    {
      name: 'Sign Up',
      href: '#',
    },
    {
      name: 'Guide',
      href: '#',
    },
    {
      name: 'Reports',
      href: '#',
    },
    {
      name: 'Q & A',
      href: '#',
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: '#',
    },
    {
      icon: <FaInstagram />,
      href: '#',
    },
    {
      icon: <FaGithub />,
      href: '#',
    },
  ],
};

export const copyrightData = {
  text: '© Product Texas, 2022. All rights reserved. Company Registration Number: 09833888.',
  icon: <BsChatDotsFill />,
};
