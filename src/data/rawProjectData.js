/* Meal Match Images */
import mealMock1 from '../assets/Images/MealMatch/mock1.png'
import mealMock2 from '../assets/Images/MealMatch/mock2.png'
import mealMock3 from '../assets/Images/MealMatch/mock3.png'

/* Pikes Peak */
import pikesMock1 from '../assets/Images/Pikes/mock1.png'
import pikesMock2 from '../assets/Images/Pikes/mock2.png'
import pikesMock3 from '../assets/Images/Pikes/mock3.png'

/* Portfolio */
import portfolio from '../assets/Portfolio/portfolio.png'
import portMock1 from '../assets/Portfolio/mock1.png'
import portMock2 from '../assets/Portfolio/mock2.png'
import portMock3 from '../assets/Portfolio/mock3.png'

/* Weather */
import weatherMock1 from '../assets/Images/Weather/mock1.png'
import weatherMock2 from '../assets/Images/Weather/mock2.png'
import weatherMock3 from '../assets/Images/Weather/mock3.png'


export const rawProjectData = [
  {
    id: 'MealMatch',
    image: '' ,
    imageMock1: mealMock1,
    imageMock2: mealMock2,
    imageMock3: mealMock3,
    title: 'MealMatch',
    subtitle: 'Date night made simple',
    briefDescription:
      'A dynamic web app for users to browse, search and bookmark movies.',
    tags: ['React', 'HTML5', 'Sass', 'REST API', 'GitHub'],
    livesite: 'https://misn0147.github.io/meal_match/',
    github: 'https://github.com/misn0147/meal_match',
    category: ['featured', 'featured-home', 'all'],
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
    imageMock1: pikesMock1,
    imageMock2: pikesMock2,
    imageMock3: pikesMock3,
    title: 'Pikes Peak International Hill Climb ',
    subtitle: 'Informational site for the Pikes Peak International Hill Climb',
    briefDescription:
      'App built to inform and connect people to the pikes peak hill climb events.',
    tags: ['Vue', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
    livesite: 'https://pikes-peak-329615.web.app/#/',
    github: 'https://github.com/Zimerzel/Pikes-Peak-Hillclimb',
    category: ['featured', 'featured-home', 'all'],
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
    imageMock1: portMock1,
    imageMock2: portMock2,
    imageMock3: portMock3,
    title: 'Portfolio',
    subtitle: 'React Portfolio Website',
    briefDescription:
      'A portfolio website that was designed and developed as a platform to showcase my design and development skills as a front-end developer.',
    tags: ['React', 'HTML5', 'CSS3', 'Three'],
    livesite: '#',
    github: 'https://github.com/Zimerzel/Portfolio-MKII',
    category: ['featured', 'featured-home', 'all'],
    moreInfo: true,
    overview:
      "A portfolio website that was designed and developed as a platform to showcase my design and development skills as a front-end developer. As I want my portfolio to be more manageable, I decided to build my portfolio using React since I can update my projects easier with React's reusable components.",
    duration: '3 Weeks',
    team: ['Zach Imerzel'],
    roles: ['UI/UX Design', 'Front-End Development'],
    stack: ['React', 'React-Helmet', 'Three', 'React-Three-Fiber', 'Drei', 'HTML5', 'CSS3', 'Framer-Motion', 'ityped', 'aos', 'GitHub'],
  },
  {
    id: 'Weather Today',
    imageMock1: weatherMock1,
    imageMock2: weatherMock2,
    imageMock3: weatherMock3,
    image: 'https://user-images.githubusercontent.com/79726069/116834786-46195f00-ab85-11eb-848a-25b745b30e5d.PNG' ,
    title: 'Weather Today',
    subtitle: 'Find out the weather anywhere in the world',
    briefDescription:
      'Weather App.',
    tags: [ 'HTML5', 'JavaScript', 'REST API', 'CSS3', 'GitHub'],
    livesite: 'https://zimerzel.github.io/Weather-Today/',
    github: 'https://github.com/Zimerzel/Weather-Today',
    category: ['all'],
    moreInfo: false,
    overview:
      '',
    duration: '1 Weeks',
    team: ['Zach Imerzel'],
    roles: ['UI/UX Design', 'Front-End Development'],
    stack: ['JavaScript', 'HTML5', 'CSS3', 'GitHub'],
    imgSlider: {
      sliderTitle: 'Site Screenshots',
      // sliderDescription: 'enter description here...',
    },
  },
  // {
  //   id: 'Social Network',
  //   image: 'https://user-images.githubusercontent.com/79726069/127700891-51e938e1-6f59-4af1-881c-22a7301d0d33.PNG' ,
  //   title: 'Social Network',
  //   subtitle: 'Social Network back end',
  //   briefDescription:
  //     'Basic social network app back end.',
  //   tags: [ 'HTML5', 'JavaScript', 'CSS3', 'Mongoose','Moment', 'Express', 'GitHub'],
  //   // livesite: 'https://misn0147.github.io/meal_match/',
  //   github: 'https://github.com/Zimerzel/Social-Network',
  //   category: ['all'],
  //   moreInfo: false,
  //   overview:
  //     '',
  //   duration: '1 Weeks',
  //   team: ['Zach Imerzel'],
  //   roles: ['Back-End Development'],
  //   stack: [ 'HTML5', 'JavaScript', 'CSS3', 'Mongoose','Moment', 'Express', 'GitHub'],
  //   imgSlider: {
  //     sliderTitle: 'Site Screenshots',
  //     // sliderDescription: 'enter description here...',
  //   },
  // },
  // {
  //   id: 'Sofa Spud',
  //   image: 'https://user-images.githubusercontent.com/79726069/131258624-7afeec32-51c4-4a09-a93d-7b02dbe8a166.PNG' ,
  //   title: 'Sofa Spud',
  //   subtitle: 'Movie night made simple',
  //   briefDescription:
  //     'A dynamic web app for users to browse, search and bookmark movies.',
  //   tags: ['React, JWT-Decode, Graphql, Apollo, Mongoose, Express, Bcrypt, Stripe', 'GitHub'],
  //   livesite: 'https://protected-earth-79211.herokuapp.com/',
  //   github: 'https://github.com/godwinbw/sofa-spud',
  //   category: [ 'all'],
  //   moreInfo: false,
  //   overview:
  //     '',
  //   duration: '2 Weeks',
  //   team: ['Zach Imerzel, Eric Webber'],
  //   roles: ['UI/UX Design', 'Front-End Development', 'Back-End Development'],
  //   stack: ['React, JWT-Decode, Graphql, Apollo, Mongoose, Express, Bcrypt, Stripe', 'GitHub'],
  //   imgSlider: {
  //     sliderTitle: 'Site Screenshots',
  //     // sliderDescription: 'enter description here...',
  //   },
  // },

  /* Add working projects back in by just adding raw data */

];