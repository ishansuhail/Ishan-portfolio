export const info = {
  baseUrl: "https://astro-portfolio-uzair.vercel.app",
  name: "Eljohn Agojo",
  jobDescription: "Web Developer",
  about: `I am an aspiring software engineer from Boston, Massachusetts. For the past 1-2 years, I've been making the web a more interesting place with my front-end wizardry. I'm fluent in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, StyledComponents, React JS, and Next JS—basically, if it’s web-related, I’ve probably dabbled in it.
One of my favorite projects was recreating the classic "Sokoban" game using the SFML library and C++. I added some cool sound effects and visuals, and used vectors to keep everything running smoothly. And yes, I tested the heck out of it with the Boost framework.
I'm also pretty pumped about KyMo, a full-stack web app aimed at building communities and managing organizations. It’s got team creation, user profiles, event scheduling, and real-time updates thanks to Firebase. Built with React and Tailwind CSS, it looks as good as it performs.
When I'm not coding, you'll find me powerlifting, playing video games, or shooting hoops. I’m driven by the omnipresence of tech and my desire to make it better. Right now, I’m diving into Machine Learning and Next.js, keeping up with the latest trends via Computer Science TikToks—yes, they’re actually quite informative!
I’m always learning, always exploring, and always up for a new challenge. Let’s make something awesome together!


  `,

  experience: [
    {
      name: "StarterKitz  |  Freelance Developer",
      location: "Remote",
      startDate: "June 2024",
      endDate: "Present",
      description: [
        "- Developing and maintaining a comprehensive web application for chefs using ReactJS and Firebase ensuring a smooth user interface and experience.",
        "- Created an admin panel for secure content management, utilizing Firebase custom claims for user role management.",
      ],
    },

    {
      name: "Cognizant   |  Generative AI externship",
      location: "Remote",
      startDate: "June 2024",
      endDate: "July 2024",
      description: [
        "- Participating in Cognizant’s Synapse program to develop advance skills in Python and Generative AI.",
      ],
    },

    {
      name: "Wayfair  |  IT Engineer(Co-op)",
      location: "Boston, MA",
      startDate: "Jan 2024",
      endDate: "June 2024",
      description: [
        "- Developed a AI-powered Slack support bot, which leverages the Slack Bolt framework and OpenAI’s GPT-4 turbo model to interpret and respond to tech queries within Wayfair, enhancing support efficiency and user experience.",
        "- Created a PowerShell script that leverages PSGSuite, a module associated to Google’s .NET SDK, to mass deprovision Chrome devices.",
        "- Collaborated closely with a team to utilize the Zoom API to gather user information and optimize accessibility to Zoom licenses given to users. ",
      ],
    },
  ],

  education: [
    {
      name: "University of Massachusetts Lowell",
      location: "Lowell, Massachusetts",
      startDate: "2021",
      endDate: "2025",
      description: [
        "Bachelor of Science in Computer Science",
      ],
    },
  ],

  socialMedia: {
    github: "https://github.com/ejagojo",
    email: "mailto:agojo.eljohn@gmail.com",
    linkedin: "https://www.linkedin.com/in/eljohn-agojo",
  },

  projects: [
    {
      title: "KyMo",
      isFeatured: true,
      thumbnail: "/assets/images/kymo-image.png"
    },
    {
      title: "Sokoban",
      isFeatured: true,
      thumbnail: "/assets/images/sokoban-image.png"
    },
    {
      title: "Discord Powerlifting Bot",
      isFeatured: true,
      thumbnail: "/assets/images/discord-logo.jpg"
    },
  ],
};
