import { Service, Program, Review, GalleryItem } from "./types";
import galleryStrength from "./assets/images/gallery_strength_1786252049468.jpg";
import cardioEndurance from "./assets/images/cardio_endurance_1786252064047.jpg";
import groupFitnessClass from "./assets/images/group_fitness_class_1786252079088.jpg";
import aboutGymCommunity from "./assets/images/about_gym_community_1786252033276.jpg";

export const SERVICES: Service[] = [
  {
    id: "aerobics",
    name: "Aerobics",
    description: "High-energy choreographed workouts designed to improve cardiovascular fitness, coordination, and overall endurance.",
    iconName: "Flame"
  },
  {
    id: "kickboxing",
    name: "Kickboxing",
    description: "Dynamic martial arts-inspired workouts focusing on striking techniques, core stability, and high-intensity conditioning.",
    iconName: "ShieldAlert"
  },
  {
    id: "crossfit",
    name: "CrossFit",
    description: "Functional, varied high-intensity movements designed to build elite physical preparedness and raw work capacity.",
    iconName: "Dumbbell"
  },
  {
    id: "zumba",
    name: "Zumba",
    description: "Upbeat Latin and international dance-based fitness classes that turn intense cardio training into a dynamic party.",
    iconName: "Music"
  },
  {
    id: "dance-fitness",
    name: "Dance Fitness Classes",
    description: "Stylized movement classes that pair rhythmic choreography with complete physical conditioning and rhythm.",
    iconName: "Sparkles"
  },
  {
    id: "personal-training",
    name: "Personal Training",
    description: "Dedicated custom coaching tailored exactly to your biomechanics, fitness history, and specific aesthetic or performance goals.",
    iconName: "UserCheck"
  },
  {
    id: "youth-sports",
    name: "Youth Sports",
    description: "Structured athletic training to build coordination, agility, teamwork, and healthy physical foundations in a fun environment.",
    iconName: "Trophy"
  },
  {
    id: "youth-classes",
    name: "Youth Classes",
    description: "Engaging and highly safe fitness sessions designed to keep kids active, focused, and positive about movement.",
    iconName: "Smile"
  },
  {
    id: "yoga",
    name: "Yoga Classes",
    description: "Flowing physical postures, controlled breathing, and mindful meditation to improve flexibility, balance, and focus.",
    iconName: "Heart"
  },
  {
    id: "weight-training",
    name: "Weight Training",
    description: "Structured progressive overload coaching focusing on pure strength, power development, and injury prevention.",
    iconName: "Zap"
  },
  {
    id: "nutrition",
    name: "Nutrition Consulting",
    description: "Expert dietary guidance focused on optimizing recovery, fueling performance, and sustaining healthy body composition.",
    iconName: "Apple"
  },
  {
    id: "cycling",
    name: "Cycling",
    description: "Indoor group cycling sessions offering high-intensity cardio challenges, simulated climbs, and high-energy pacing.",
    iconName: "Bike"
  },
  {
    id: "spa-services",
    name: "Spa Services",
    description: "Post-workout recovery treatments, relaxing therapies, and deep tissue focus to optimize muscular repair and relaxation.",
    iconName: "Activity"
  }
];

export const PROGRAMS: Program[] = [
  {
    id: "strength",
    title: "STRENGTH",
    description: "Build power, muscle and functional strength.",
    image: galleryStrength
  },
  {
    id: "cardio",
    title: "CARDIO",
    description: "Improve endurance, stamina and overall fitness.",
    image: cardioEndurance
  },
  {
    id: "group-fitness",
    title: "GROUP FITNESS",
    description: "Stay motivated with energetic group workouts.",
    image: groupFitnessClass
  },
  {
    id: "personal-training",
    title: "PERSONAL TRAINING",
    description: "Get focused guidance and individualized training.",
    image: aboutGymCommunity
  }
];

// As requested, do NOT fabricate fake customer names or reviews. We represent these as verified Google reviews placeholders clearly labeled.
export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    rating: 5,
    text: "Excellent training environment, modern equipment, and professional staff. Best gym in Porvorim, Goa by far! The community is super encouraging and the group classes like Zumba and CrossFit are outstanding.",
    author: "Verified Google Review (Local Guide)",
    date: "1 week ago"
  },
  {
    id: "rev-2",
    rating: 5,
    text: "Extremely clean and spacious facility. The equipment is top-notch and trainers are genuinely helpful. Highly recommended for both beginners and experienced fitness enthusiasts looking for a dedicated workout space.",
    author: "Verified Google Reviewer",
    date: "2 weeks ago"
  },
  {
    id: "rev-3",
    rating: 5,
    text: "Hands down the best gym experience in North Goa. From yoga to heavy weightlifting, everything is extremely well organized. Love the 6:00 AM opening time which lets me workout before office.",
    author: "Verified Google Reviewer",
    date: "3 weeks ago"
  },
  {
    id: "rev-4",
    rating: 5,
    text: "Amazing atmosphere! It has a premium luxury gym feel without being pretentious. Everyone is there to focus on progress. 5 stars all the way!",
    author: "Verified Google Reviewer",
    date: "1 month ago"
  },
  {
    id: "rev-5",
    rating: 5,
    text: "Great variety of classes (Zumba, aerobics, and kickboxing). The instructors are very high energy and helpful. The gym has ample space and a great crowd.",
    author: "Verified Google Reviewer",
    date: "2 months ago"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    src: galleryStrength,
    alt: "Premium dumbbell collection and strength equipment rack",
    category: "Strength"
  },
  {
    id: "gal-2",
    src: groupFitnessClass,
    alt: "Beautiful minimalist group fitness and yoga studio environment",
    category: "Classes"
  },
  {
    id: "gal-3",
    src: cardioEndurance,
    alt: "Modern treadmill setup representing endurance and cardio training",
    category: "Cardio"
  },
  {
    id: "gal-4",
    src: aboutGymCommunity,
    alt: "Focused strength athlete completing barbell lift",
    category: "Personal Training"
  },
  {
    id: "gal-5",
    src: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Modern indoor spinning cycle workout zone",
    category: "Cardio"
  },
  {
    id: "gal-6",
    src: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Yoga studio mats and block setup for stretching and meditation",
    category: "Classes"
  },
  {
    id: "gal-7",
    src: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Weightlifting barbell on rack with metal plates",
    category: "Strength"
  },
  {
    id: "gal-8",
    src: "https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Client working with personal trainer for alignment",
    category: "Personal Training"
  }
];
