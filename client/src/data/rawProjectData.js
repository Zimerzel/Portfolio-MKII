export const rawProjectData = [
    {
      id: 'mealmatch',
      title: 'Meal Match',
      subtitle: 'Date Night Randomizer',
      briefDescription:
        'An app to make date night simple.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'GitHub'],
      livesite: 'https://misn0147.github.io/meal_match/',
      github: 'https://github.com/misn0147/meal_match',
      category: ['featured', 'featured-home'],
      moreInfo: true,
      overview:
        'MovieWave is a single-page web app built in ReactJS that allows users to browse movie information and keep track of movies. It is an online movie database where movie lovers can find the relevant movie information based on popular, top-rated, now playing and upcoming. This application uses the TMDb API to fetch movie data and outputs the content dynamically to the webpage. Users can also be able to search and save movies to their favourites. A dark/light theme is also included in this application to improve the user experience.',
      duration: '4 Weeks',
      team: ['Jimmy Tan'],
      roles: ['UI/UX Design', 'Front-End Development'],
      stack: ['React', 'HTML5', 'Sass', 'GitHub', 'Adobe XD', 'Photoshop'],
      development: [
        {
          title: 'Movie Filter',
          description: [
            'A movie filter was made to allow users to view movies according to popular, top-rated, now playing and upcoming. This feature required the manipulation of the TMDb API with React useState and useEffect hooks. The impactful hero image section on the home page will also change based on the selected filter.',
          ],
        },
        {
          title: 'Multiple Pages',
          description: [
            'The page selector buttons will allow users to browse more movies without having a long page to scroll. Each page will display 20 movies, with 5 pages and 100 movies in total.',
          ],
        },
        {
          title: 'Add to Favourites',
          description: [
            'The Add to Favourites feature allows user to add their favourite movies into the local storage in their browsers. The global state was created and used to keep track of favourited movies across different React components. The favourited movies will display on a dedicated page and also has a button that allows users to add/remove favourites on every page.',
          ],
        },
        {
          title: 'Movie Search',
          description: [
            'Search functionality was incorporated to provide an opportunity for users to discover any movies available on the database. When there is no movie result or the search term is empty, the corresponding messages will display to users.',
          ],
        },
        {
          title: 'Dark/Light Theme Toggle',
          description: [
            'The React useState hook was used to implement dark/light theme toggle functionality to create a better user experience.',
          ],
        },
        {
          title: 'Fully Responsive',
          description: [
            'A mobile-first design approach to ensure the layout of the movie cards and the movie detail information is to best fit the page in different devices without being too overcrowded or too much white space. The website is responsive for mobile, tablet and desktop devices.',
          ],
        },
      ],
      reflection: [
        'This is the first project in the BCIT FWD program that allows me to implement a complete design, development and deployment process. There were differences between the prototype and the final product. These changes were made based on the personal usability testing that went through all the development processes until it was published. In addition, compare to the design prototype, I added a lot of additional movie information such as a trailer from YouTube, poster images carousel and cast information in the movie detail page based on my discovery in the API documents.',
        'This project also helped me to get familiar with React JS and also its ecosystem. I would say this application achieves the basic functionality of an online movie database. In the future, I am planning to add more features/sections into this application such as having a movie review section.',
      ],
    },
    {
      id: 'tranquil-tofino-cabins',
      title: 'Tranquil Tofino Cabins',
      subtitle: 'WordPress & WooCommerce Website',
      briefDescription:
        'A fully customized cabin rental business website that comes with an online booking feature. The site was developed using WordPress and WooCommerce plugins in a collaborative team.',
      tags: ['WordPress', 'WooCommerce', 'PHP', 'HTML5', 'Sass'],
      livesite: 'https://tranquiltofino.bcitwebdeveloper.ca/',
      category: ['featured', 'featured-home'],
      moreInfo: true,
      overview:
        'Tranquil Tofino Cabins is an e-commerce website project for the cabin rental business. This is a collaborative project that was designed and developed from scratch with 3 other team members. We built a fully custom WordPress theme based on the starter theme Underscores. The project involves project management principles, UI/UX design, content planning and customized WordPress development with the WooCommerce plugin. I mainly focused on WordPress development such as creating the development plan with one of my team members, modifying template files and plugin files, using hooks to control the content output.',
      duration: '5 Weeks',
      team: ['Jimmy Tan', 'John Maguss', 'Patrick Neil', 'Vivi Zeng'],
      roles: ['Content Planning', 'WordPress Development', 'Styling'],
      stack: [
        'WordPress',
        'WooCommerce',
        'PHP',
        'HTML5',
        'JavaScript',
        'Sass',
        'Figma',
        'GitHub',
        'Trello',
      ],
      planning: [
        {
          title: 'Project Goal & Planning',
          description: [
            'The goal for this project was to help our fictional client to build a cabin rental website that has online booking functionality. Our team started by reviewing the project brief then researched some cabin rentals website competitors to gain inspiration for design and features. We summarized our findings and prepared questions for the client. We then had a discovery meeting with our fictional client and created a memo of understanding after the meeting.',
            'From there, we began to create a content plan and information architecture for the site. The planning process will guide the design and development of the website.',
            'Due to Covid-19, we had to do the project remotely. In order to manage our project efficiently, our team lead set up a Trello workspace and we used its task boards to update our to-dos and current status. We also utilized Slack, Zoom to communicate effectively on a daily basis. We used GitHub to share files that we edited and used Google Drive to store assets.',
          ],
        },
        {
          title: 'Project Management Using Trello',
        },
      ],
      design: [
        {
          title: 'Theme & Wireframe',
          description: [
            'The design of this site is to convey relaxation. The primary colour for the website will be dark green to express the feeling of relaxation and also represents the natural beauty of Tofino, BC.',
          ],
          designURL: [
            {
              title: 'Wireframe',
              link: 'https://www.figma.com/file/2GVwycuVmxJLLopxLScpid/Tranquil-Tofino-Cabin-Wireframes?node-id=0%3A1',
            },
          ],
        },
      ],
      development: [
        {
          title: 'Booking Feature',
          description: [
            "We used the WooCommerce plugins and adjust the booking settings according to our clients' requirements. The booking feature allows users to select the bookable dates, create an account and checkout.",
          ],
        },
        {
          title: 'Customized Theme',
          description: [
            'We started with configuring the backend of WordPress then dived into template and plugin files. To have better control of the content, we created custom fields using the ACF(Advanced Custom Fields) plugin and output the content of the fields using appropriate template files.',
            'We also used action hooks and filter hooks to organize the content to position it in the way we want based on the wireframes. We made sure our clients can easily update the content on their own and display them properly without touching the template files.',
          ],
        },
      ],
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      subtitle: 'React Portfolio Website',
      briefDescription:
        'A portfolio website that was designed and developed as a platform to showcase my design and development skills as a front-end developer.',
      tags: ['React', 'HTML5', 'Sass'],
      livesite: 'https://ztan.ca/',
      github: 'https://github.com/jimmytan123/portfolio',
      category: ['featured', 'featured-home'],
      moreInfo: true,
      overview:
        "A portfolio website that was designed and developed as a platform to showcase my design and development skills as a front-end developer. As I want my portfolio to be more manageable, I decided to build my portfolio using React since I can update my projects easier with React's reusable components.",
      duration: '5 Weeks',
      team: ['Jimmy Tan'],
      roles: ['UI/UX Design', 'Front-End Development'],
      stack: ['React', 'HTML5', 'Sass', 'GitHub', 'Adobe XD', 'Figma', 'SEO'],
      planning: [
        {
          title: 'Project Goal & Planning',
          description: [
            'The goal of the portfolio site project is to demonstrate Jimmy Tan’s web design and development skills. The website should display the content in a clear and user-friendly way since I value the content of this site to be the most important. In addition, the website should be easy for me to manage as the project lists may be updated regularly to showcase my latest skills and knowledge.',
            'Thanks to React’s component-based architecture, I can create reusable components and divide a large app into smaller parts. It is easier for me to add more features to the website and maintain the projects data.',
            'I also created a content plan, information architecture, wireframe, interactive prototype and style guide to allow me to be well-planned before the development phase.',
          ],
        },
        {
          title: 'Information Architecture',
        },
      ],
      design: [
        {
          title: 'Wireframe',
          description: [
            'The wireframe was created based on the content plan and information architecture. To let users focus on the content, the theme of the website is based on a white background, dark grey text, and a lot of whitespaces. On the project list page, I delicately set different background colours for different projects to add some uniqueness to each project. ',
            'To view the interactive wireframe, please click the links below.',
          ],
          designURL: [
            {
              title: 'Mobile Wireframe',
              link: 'https://xd.adobe.com/view/18848f33-a96e-43f3-94c3-698d505d9168-4dd7/',
            },
            {
              title: 'Desktop Wireframe',
              link: 'https://xd.adobe.com/view/db189623-7188-42d6-86ad-874107258803-8e4b/',
            },
          ],
        },
      ],
      development: [
        {
          title: 'Project Filter',
          description: [
            'The project filter helps to organize the projects into categories, which makes the users view the projects that they are interested in easier. The filter feature needs to use React useState hook, event listeners, and array filtering techniques. I also used React state to determine the default filter.',
          ],
        },
        {
          title: 'One Data File, Long Data File',
          description: [
            'To make the projects more manageable, I designed and created one data file containing a list of projects information. I created reusable React components to fetch data from the data file and output the content. It makes updating/adding/deleting projects really convenient and efficient.',
          ],
        },
        {
          title: 'Responsive Images',
          description: [
            'The banner image in the single project page is responsive (art direction) for users with different sizes of devices.',
          ],
        },
        {
          title: 'SEO',
          description: [
            'In order to increase the visibility of the portfolio website in search engines, I used React Helmet to optimize the SEO. Therefore, it allowed me to have every page have its own custom meta tags.',
          ],
        },
      ],

      reflection: [
        'This portfolio project gave me an opportunity to try out new skills and get familiar with React during the process. It also let me realize how React components are useful when building templates to serve project data. I spent a lot of time planning before the design and development phase. Breaking down the project into small pieces, following the plan allows me to make the workflow smoother and more efficient. ',
        'One thing that I learned during this project is to put myself in the user’s shoes. Only when we have learnt more about the target users, we can create a website that has the features/design that is more suitable to their needs. I initially think of putting my contact information as an individual page, but I decided to put it as a section to locate at the end of every page based on user experience consideration. ',
        'In the middle of the development phase, I realized React, as a single-page application, has limited capabilities of improving SEO. Although I  have used React Helmet to get around the issue, I think using a static site generator such as Gatsby to build a portfolio site will be a more SEO-friendly solution. I am going to learn Gatsby or Next.js to rebuild my portfolio website in the future.',
      ],
    },
    {
      id: 'codeBreaker',
      title: 'Code Breaker',
      subtitle: 'JavaScript Game',
      briefDescription:
        'A browser-based code guessing game using jQuery, JavaScript and object-oriented programming principles. Comes with difficulty level selection, countdown timer and star rating features.',
      tags: ['jQuery', 'JavaScript', 'HTML5', 'CSS3', 'BootStrap'],
      livesite: 'https://ztan.ca/code-breaker/',
      github: 'https://github.com/jimmytan123/Code-Breaker-Game',
      category: ['fun'],
      moreInfo: false,
    },
    {
      id: 'weather-app',
      title: 'Weather App',
      subtitle: 'JavaScript Weather App',
      briefDescription:
        'The responsive weather app allows you to search for a city or click Show My Location to get the weather info. The background image is from Unsplash API and it changes according to different cities. ',
      tags: ['JavaScript', 'HTML5', 'Sass'],
      livesite: 'https://ztan.ca/weather-app/',
      github: 'https://github.com/jimmytan123/weather-app',
      category: ['fun'],
      moreInfo: false,
    },
    {
      id: 'gallery',
      title: 'Gallery',
      subtitle: 'React Image Gallery',
      briefDescription:
        'A responsive masonry gallery that showcases my interests in landscape photography. All the images can be uploaded from local devices via the site.',
      tags: ['ReactJS', 'Sass', 'Firebase'],
      livesite: 'https://ztan.ca/gallery/',
      category: ['fun'],
      moreInfo: false,
    },
  ];