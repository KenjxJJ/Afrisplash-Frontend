import CameronImage from "assets/teams/cameron.png";
import JacobImage from "assets/teams/jacob.png";
import RobertImage from "assets/teams/robert.png";
import WadeImage from "assets/teams/wade.png";

export const jobData = [
  {
    image: "/company/google.png",
    company: "GOOGLE ",
    service: "Google search and other services",
    employees: "10-20  EMPLOYEES",
    hiring: true,
    promoted: true,
    isDirectApply: true,
    offer: "UI/UX Designer",
    priceRange: "$100k - $300k",
    postDate: "2 MONTHS AGO",
  },
  {
    image: "/company/google.png",
    company: "GOOGLE ",
    service: "Google search and other services",
    employees: "10-20  EMPLOYEES",
    hiring: true,
    promoted: true,
    isDirectApply: false,
    offer: "UI/UX Designer",
    priceRange: "$100k - $300k",
    postDate: "2 MONTHS AGO",
  },
];

export const teamData = [
  {
    name: "Jacob Jones",
    image: JacobImage,
    job: "Recruiter",
  },
  {
    name: "Cameron Williamson",
    image: CameronImage,
    job: "Recruiter",
  },
  {
    name: "Wade Warren",
    image: WadeImage,
    job: "Recruiter",
  },
  {
    name: "Robert Fox",
    image: RobertImage,
    job: "Recruiter",
  },
];

export const jobOpeneingsData = [
  {
    image: "/company/standard.png",
    position: "Product Manager",
    name: "Pandascrow",
    duration: "Contract/Hybrid",
  },
  {
    image: "/company/standard.png",
    position: "Data Analyst",
    name: "Standard Chartered Bank Nigeria",
    duration: "Part time/Remote",
  },
  {
    image: "/company/standard.png",
    position: "Product Designer",
    name: "Standard Chartered Bank Nigeria",
    duration: "Full time/Remote",
  },
  {
    image: "/company/standard.png",
    position: "Network Analyst",
    name: "Hotels.ng",
    duration: "Contract/Hybrid",
  },
  {
    image: "/company/standard.png",
    position: "Security Engineer",
    name: "ALAT by Wema",
    duration: "Full time/Onsite",
  },
];

export const applicantsList = [
  {
    id: "jkl",
    name: "JMary Dekkoo",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    role: "Front End Developer",
    isSelected: false,
  },
  {
    id: "hjkl",
    name: "Jane Miysey",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    role: "Front End Developer",
    isSelected: false,
  },
  {
    id: "uikm",
    name: "JMary Dekkoo",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    role: "DevOps Engineer",
    isSelected: false,
  },
  {
    id: "ghbnm",
    name: "Jane Heuwolo",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    role: "Backend Developer",
    isSelected: false,
  },
  {
    id: "oiuytrgh",
    name: "Hellen Miysey",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    role: "Front End Developer",
    isSelected: false,
  },
];


export const RecruiterInfoData = {
  name: "Adaeze Ruby",
  role: "recruiter",
  company: "IDesign Agency",
  isActivelyHiring: true,
  bio: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Ab sequi itaque vitae expedita placeat eius esse nulla magnam, porro quaerat?`,
  contact:
  {
    email: "kenjx@gmail.com",
    phone: "+234 8130312056",
    location: "Nigeria",
    shouldMakePrivate: true
  }
  ,
  desiredSkills: [
    "design", "tech", "product"
  ],
  languages: [
    { item: "english", proficiency: "fluent" },
    { item: "russian", proficiency: "advanced" },
  ],
  experience: [
    {
      year: "2008 - 2010", company: "Microsoft", role: "UI/UX Designer",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus reiciendis vel!`
    },
    {
      year: "2016 - 2018", company: "Versuspay", role: "UI/UX Designer",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus reiciendis vel!`
    },
    {
      year: "2019 - 2021", company: "Qeema", role: "UI/UX Designer",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus reiciendis vel!`
    },
    {
      year: "2021 - Present", company: "Afrisplash", role: "UI/UX Designer",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus reiciendis vel!`
    }
  ],
  education: [{
    year: "2008 - 2010", school: "ATBU Bauchi", role: "UI/UX Designer",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus reiciendis vel!`
  },
  {
    year: "2016 - 2018", school: "Open Classrooms", role: "UI/UX Designer",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus reiciendis vel!`
  },
  {
    year: "2019 - 2021", school: "Youtube Design School", role: "UI/UX Designer",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus reiciendis vel!`
  },
  {
    year: "2021 - 2022", school: "Harvard Design School", role: "UI/UX Designer",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus reiciendis vel!`
  }
  ]
}
