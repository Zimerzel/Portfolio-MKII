/* Meal Match Images */
import mealMatchImg from '../assets/Images/MealMatch/mealMatch.png'



/* Portfolio */
import portfolio from '../assets/Portfolio/portfolio.png'


export const rawProjectData = [
  {
    id: 'MealMatch',
    image: mealMatchImg ,
    title: 'MealMatch',
    subtitle: 'Date night made simple',
    briefDescription:
      'A dynamic web app for users to browse, search and bookmark movies.',
    tags: ['React', 'HTML5', 'Sass', 'REST API', 'GitHub'],
    livesite: 'https://misn0147.github.io/meal_match/',
    github: 'https://github.com/misn0147/meal_match',
    category: ['featured', 'featured-home'],
    moreInfo: true,
    overview:
      'MovieWave is a single-page web app built in ReactJS that allows users to browse movie information and keep track of movies. It is an online movie database where movie lovers can find the relevant movie information based on popular, top-rated, now playing and upcoming. This application uses the TMDb API to fetch movie data and outputs the content dynamically to the webpage. Users can also be able to search and save movies to their favourites. A dark/light theme is also included in this application to improve the user experience.',
    duration: '2 Weeks',
    team: ['Zach Imerzel, Melissa Natoli, Colin Reinhardt'],
    roles: ['UI/UX Design', 'Front-End Development'],
    stack: ['JavaScript', 'HTML5', 'CSS3', 'GitHub'],
    imgSlider: {
      sliderTitle: 'Site Screenshots',
      // sliderDescription: 'enter description here...',
    },
  },
  {
    id: 'PPIHC',
    image: 'https://user-images.githubusercontent.com/79726069/138946590-25457630-3955-4c31-b419-08beb6c8a6d7.PNG',
    title: 'Pikes Peak International Hill Climb ',
    subtitle: 'Informational site for the Pikes Peak International Hill Climb',
    briefDescription:
      'App built to inform and connect people to the pikes peak hill climb events.',
    tags: ['Vue', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
    livesite: 'https://pikes-peak-329615.web.app/#/',
    github: 'https://github.com/Zimerzel/Pikes-Peak-Hillclimb',
    category: ['featured', 'featured-home'],
    moreInfo: true,
    duration: '2 Weeks',
    team: ['Zach Imerzel'],
    stack: [
      'HTML5',
      'JavaScript',
      'CSS3',
      'Bootstrap',
      'Vue',
      'Vue-Router',
      'GitHub'
    ],
    imgSlider: {
      sliderTitle: 'Site Screenshots',
    },
  },
  {
    id: 'portfolio',
    image: portfolio,
    title: 'Portfolio',
    subtitle: 'React Portfolio Website',
    briefDescription:
      'A portfolio website that was designed and developed as a platform to showcase my design and development skills as a front-end developer.',
    tags: ['React', 'HTML5', 'CSS3', 'Three'],
    livesite: '',
    github: '',
    category: ['featured', 'featured-home'],
    moreInfo: true,
    overview:
      "A portfolio website that was designed and developed as a platform to showcase my design and development skills as a front-end developer. As I want my portfolio to be more manageable, I decided to build my portfolio using React since I can update my projects easier with React's reusable components.",
    duration: '5 Weeks',
    team: ['Jimmy Tan'],
    roles: ['UI/UX Design', 'Front-End Development'],
    stack: ['React', 'React-Helmet', 'Three', 'React-Three-Fiber', 'Drei', 'HTML5', 'CSS3', 'Framer-Motion', 'ityped', 'aos', 'GitHub'],
  },
  // {
  //   id: 'codeBreaker',
  //   title: 'Code Breaker',
  //   subtitle: 'JavaScript Game',
  //   briefDescription:
  //     'A browser-based code guessing game using jQuery, JavaScript and object-oriented programming principles. Comes with difficulty level selection, countdown timer and star rating features.',
  //   tags: ['jQuery', 'JavaScript', 'HTML5', 'CSS3', 'BootStrap'],
  //   livesite: 'https://ztan.ca/code-breaker/',
  //   github: 'https://github.com/jimmytan123/Code-Breaker-Game',
  //   category: ['fun'],
  //   moreInfo: false,
  // },oreInfo: false,
];