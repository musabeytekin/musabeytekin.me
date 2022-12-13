import pwsMain from "./projectImages/personalWebSite/main.jpeg";
import pws1 from "./projectImages/personalWebSite/1.jpeg";
import pws2 from "./projectImages/personalWebSite/2.jpeg";
import pws3 from "./projectImages/personalWebSite/3.jpeg";
import dhmain from "./projectImages/deluxeHotel/main.jpeg";
import dh2 from "./projectImages/deluxeHotel/2.jpeg";
import dh3 from "./projectImages/deluxeHotel/3.jpeg";
import dh4 from "./projectImages/deluxeHotel/4.jpeg";
import dh5 from "./projectImages/deluxeHotel/5.jpeg";
import dh6 from "./projectImages/deluxeHotel/6.jpeg";
import dh7 from "./projectImages/deluxeHotel/7.jpeg";
import newsMain from "./projectImages/news/main.png";
import news2 from "./projectImages/news/2.png";
import news3 from "./projectImages/news/3.png";
import news4 from "./projectImages/news/4.png";
import news5 from "./projectImages/news/5.png";
import news6 from "./projectImages/news/6.png";
import fwsMain from "./projectImages/freelancerWebSite/main.jpeg";
import fws2 from "./projectImages/freelancerWebSite/2.jpeg";
import fws3 from "./projectImages/freelancerWebSite/3.jpeg";
import fws4 from "./projectImages/freelancerWebSite/4.jpeg";
import fws5 from "./projectImages/freelancerWebSite/5.jpeg";
import fws6 from "./projectImages/freelancerWebSite/6.jpeg";
import fws7 from "./projectImages/freelancerWebSite/7.jpeg";
import fws8 from "./projectImages/freelancerWebSite/8.jpeg";
import fws9 from "./projectImages/freelancerWebSite/9.jpeg";
import fws10 from "./projectImages/freelancerWebSite/10.jpeg";
import awsbMain from "./projectImages/awesomeBlog/main.jpeg";
import awsb2 from "./projectImages/awesomeBlog/2.jpeg";
import awsb3 from "./projectImages/awesomeBlog/3.jpeg";
import awsb4 from "./projectImages/awesomeBlog/4.jpeg";
import awsb5 from "./projectImages/awesomeBlog/5.jpeg";

export const projects = [
  {
    name: "Personal Website",
    link: "https://musabeytekin.me",
    description:
      " My own personal website. ReactJS framework has been used quite a lot. Redux toolkit was used for global states. I used MongoDB, ExpressJS, NodeJS for backend operations. There is a panel for admin operations. From this panel, the admin can reply to the messages he receives. He can view your messages in detail. He can see the number of people visiting the site. He can filter messages.",
    mainSlide: pwsMain,
    slides: [
      {
        src: pwsMain,
        alt: "Personal Website"
      },
      {
        src: pws1,
        alt: "Personal Website"
      },
      {
        src: pws2,
        alt: "Personal Website"
      },
      {
        src: pws3,
        alt: "Personal Website"
      }
    ]
  },
  {
    name: "Blog Site REST API",
    github: "https://github.com/musabeytekin/whatsonmymind-blogsite",

    description:
      "Back side of a Blog site where NodeJS, ExpressJs, MongoDB, Mongoose, JWT technologies are used extensively."
  },
  {
    name: "Deluxe Hotel",
    github: "https://github.com/musabeytekin/hotel-site",
    link: "https://deluxehoteldh.netlify.app",

    description:
      "My personal work to become more practical and better in the use of HTML, CSS technologies.",
    mainSlide: dhmain,
    slides: [
      {
        src: dhmain,
        alt: "Deluxe Hotel"
      },

      {
        src: dh2,
        alt: "Deluxe Hotel"
      },
      {
        src: dh3,
        alt: "Deluxe Hotel"
      },
      {
        src: dh4,
        alt: "Deluxe Hotel"
      },
      {
        src: dh5,
        alt: "Deluxe Hotel"
      },
      {
        src: dh6,
        alt: "Deluxe Hotel"
      },
      {
        src: dh7,
        alt: "Deluxe Hotel"
      }
    ]
  },
  {
    name: "Freelancer Website",
    github: "https://github.com/musabeytekin/personal-web-site",
    link: "https://freelancerpersonalwebsite.netlify.app/",
    description:
      "My personal work to become more practical and better in the use of HTML, CSS, SCSS technologies.",

    mainSlide: fwsMain,
    slides: [
      {
        src: fwsMain,
        alt: "Freelancer Website"
      },
      {
        src: fws2,
        alt: "Freelancer Website"
      },
      {
        src: fws3,
        alt: "Freelancer Website"
      },
      {
        src: fws4,
        alt: "Freelancer Website"
      },
      {
        src: fws5,
        alt: "Freelancer Website"
      },
      {
        src: fws6,
        alt: "Freelancer Website"
      },
      {
        src: fws7,
        alt: "Freelancer Website"
      },
      {
        src: fws8,
        alt: "Freelancer Website"
      },
      {
        src: fws9,
        alt: "Freelancer Website"
      },
      {
        src: fws10,
        alt: "Freelancer Website"
      }
    ]
  },

  {
    name: "News",
    github: "https://github.com/musabeytekin/news-site",
    link: "https://newstime.netlify.app/",
    description:
      "My personal work to become more practical and better in the use of HTML, CSS,technologies.",
    mainSlide: newsMain,
    slides: [
      {
        src: newsMain,
        alt: "News"
      },
      {
        src: news2,
        alt: "News"
      },
      {
        src: news3,
        alt: "News"
      },
      {
        src: news4,
        alt: "News"
      },
      {
        src: news5,
        alt: "News"
      },
      {
        src: news6,
        alt: "News"
      }
    ]
  },
  {
    name: "Awesome Blog",
    github: "https://github.com/musabeytekin/awesome-blog",
    link: "https://awesomeblogmb.netlify.app",

    description:
      "My personal work to become more practical and better in the use of HTML, CSS,technologies.",
    mainSlide: awsbMain,
    slides: [
      {
        src: awsbMain,
        alt: "Awesome Blog"
      },
      {
        src: awsb2,
        alt: "Awesome Blog"
      },
      {
        src: awsb3,
        alt: "Awesome Blog"
      },
      {
        src: awsb4,
        alt: "Awesome Blog"
      },
      {
        src: awsb5,
        alt: "Awesome Blog"
      }
    ]
  }
];
