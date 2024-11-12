
import maps from "./assets/images/Photos-maps-&-reviews.svg";
import trip from "./assets/images/Customizable-trip-plans.png";
import popular from "./assets/images/Popular-itineraries.png";
import tripAi from "./assets/images/Your-trip-with-AI.png";

import blog1 from "./assets/images/nautre-1.jpg";
import blog2 from "./assets/images/trip-2.jpg";
import blog3 from "./assets/images/trip-3.webp";

import facebook from "./assets/icon/facebook.svg";
import instagram from "./assets/icon/instagram.svg";
import x from "./assets/icon/x.svg";
import youtube from "./assets/icon/youtube.svg";

import tripImg4 from "./assets/images/nautre-1.jpg";
import tripImg2 from "./assets/images/trip-2.jpg";
import tripImg3 from "./assets/images/trip-3.webp";
import tripImg1 from "./assets/images/dubai.jpg";

const data = {
  website: {
    name: "Travel.ai",
    tagline: "Discover your perfect Trip with AI-Power",
    description: "Plan unforgettable journeys tailored to your preferences, powered by intelligent algorithms for a seamless travel experience.",
    cta_buttons: [
      {
        text: "Join Waitlist",
        link: "#"
      },
    ],
    social_btn: [
      {
        text:"Facebook",
        link:"https://facebook.com",
        img: facebook,
      },
      {
        text:"Intagram",
        link:"https://instagram.com",
        img: instagram,
      },
      {
        text:"X",
        link:"https://x.com",
        img: x,
      },
      {
        text:"Youtube",
        link:"https://youtube.com",
        img : youtube,
      }
    ],
    navigation: [
      { text: "Home", link: "#home" },
      { text: "How it works", link: "#how-it-works" },
      { text: "Blogs", link: "#blogs" }
    ],
    section_one: {
      title: {
        span1: "Here is",
        span2: "how it works"
      },
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      child: [
        {
          title: {
            span1: "Tell us what",
            span2: "you love"
          },
          description: "Ask us for suggestions for any destination or ask us for an entire itinerary. Be as specific as you can about the types of experiences that you like or take our quiz to determine your travel style.",
          alt: "Tell us what you love"
        },
        {
          title: {
            span1: "Your perfect trip,",
            span2: "Handpicked for you"
          },
          description: "We’ll provide personalized, actionable travel experiences based on your preferences. Check out photos, reviews, maps and more. Favorite the items you like and add them to your trip plan.",
          alt: "Your perfect trip, Handpicked for you"
        },
        {
          title: {
            span1: "All your trip plans,",
            span2: "in one place"
          },
          description: "We’ll provide personalized, actionable travel experiences based on your preferences. Check out photos, reviews, maps and more. Favorite the items you like and add them to your trip plan.",
          alt: "All your trip plans, in one place"
        }
      ]
    },
    section_two: {
      title: {
        span1: "Everything you need",
        span2: "for your next adventure"
      },
      description: "",
      child: [
        {
          title: "Photos, maps & reviews",
          description: "Don’t just read about a place; experience it. With vibrant photos, interactive maps and reviews, you’ll feel like you’re already there.",
          alt: "Photos, maps & reviews",
          image: maps
        },
        {
          title: "Customizable trip plans",
          description: "Let you customize the trip as per your preference",
          alt: "Customizable trip plans",
          image: trip
        },
        {
          title: "Popular itineraries",
          description: "Visit our Explore page to get ideas and inspiration from other travelers",
          alt: "Popular itineraries",
          image: popular
        },
        {
          title: "Your trip with AI",
          description: "Visit our Explore page to get ideas and inspiration from other travelers",
          alt: "Your trip with AI",
          image: tripAi
        }
      ]
    },
    read_more:{
      title:"Read more",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    },
    blogs:[
      {
        title: "Most popular places to visit in 2024",
        short_title:"Most popular places to visit in 2024",
        description:`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
        date:"24 June 2024",
        link:"",
        image:blog1,
        banner_image:"",
        labels: ["UNSEEN", "NATURE", "MOST VISITED"],
      },
      {
        title: "Most popular places to visit in 2024",
        short_title:"Most popular places to visit in 2024",
        description:`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
        date:"25 June 2024",
        link:"",
        image:blog2,
        banner_image:"",
        labels: ["UNSEEN", "NATURE", "MOST VISITED"],
      },
      {
        title: "Most popular places to visit in 2024",
        short_title:"Most popular places to visit in 2024",
        description:`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
        date:"26 June 2024",
        link:"",
        image:blog3,
        banner_image:"",
        labels: ["UNSEEN", "NATURE", "MOST VISITED"],
      },
     
    ],

    social: {
      title:"Tag us on your trips",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      hashtags: ["#JOINTRAVELAI","#AITRAVELS"],
      tripImages:[tripImg1,tripImg2,tripImg3,tripImg4]

    },
    footer: {
      text: "© 2024 Travel.ai by TCB"
    },
    modal:{
      heading:'Join our wait list',
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      buttonTxt:'Join Waitlist',
      successTitle:'Thank you for joining the waitlist! We’ll be in touch soon.',
      successbutton:'Close'
    }
  }
};

export default data;
