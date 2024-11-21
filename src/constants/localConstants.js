import {
  FaCalendar,
  FaCode,
  FaHome,
  FaMoneyBill,
  FaSketch,
  FaSuitcase,
} from "react-icons/fa";
import {
  FaArrowTrendUp,
  FaLaptopFile,
  FaPeopleGroup,
  FaPersonCirclePlus,
} from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { TbMessage2Share } from "react-icons/tb";

export const menuItems = [
  {
    category: "MAIN MENU",
    items: [
      {
        label: "Dashboard",
        icon: <FaHome color="#6b7280" />,
        focusedIcon: <FaHome color="#4338ca" />,
      },
      {
        label: "Employee",
        icon: <FaPeopleGroup color="#6b7280" />,
        focusedIcon: <FaPeopleGroup color="#4338ca" />,
      },
      {
        label: "Recruitment",
        icon: <FaPersonCirclePlus color="#6b7280" />,
        focusedIcon: <FaPersonCirclePlus color="#4338ca" />,
      },
      {
        label: "Payroll",
        icon: <FaMoneyBill color="#6b7280" />,
        focusedIcon: <FaMoneyBill color="#4338ca" />,
      },
      {
        label: "Schedule",
        icon: <FaCalendar color="#6b7280" />,
        focusedIcon: <FaCalendar color="#4338ca" />,
      },
    ],
  },
  {
    category: "DEPARTMENT",
    items: [
      {
        label: "Business & Marketing",
        icon: <FaArrowTrendUp color="#6b7280" />,
        focusedIcon: <FaArrowTrendUp color="#4338ca" />,
      },
      {
        label: "Design",
        icon: <FaSketch color="#6b7280" />,
        focusedIcon: <FaSketch color="#4338ca" />,
      },
      {
        label: "Project Manager",
        icon: <FaSuitcase color="#6b7280" />,
        focusedIcon: <FaSuitcase color="#4338ca" />,
      },
      {
        label: "Human Resources",
        icon: <FaLaptopFile color="#6b7280" />,
        focusedIcon: <FaLaptopFile color="#4338ca" />,
      },
      {
        label: "Development",
        icon: <FaCode color="#6b7280" />,
        focusedIcon: <FaCode color="#4338ca" />,
      },
    ],
  },
];

export const otherMenu = [
  { label: "Setting", icon: <IoSettingsOutline color="#6b7280" /> },
  { label: "Help Center", icon: <TbMessage2Share color="#6b7280" /> },
];

export const jobList = [
  {
    jobTitle: "UI/UX Designer",
    description:
      "Gathering and evaluating user requirements, in collaboration with product managers and engineers",
    role: "Design",
    workMode: "Onsite",
    duration: "Full Time",
    expired:"Jan 31, 2024",
    prefferdColors:{
        primary:"#15803d",
        secondary:"#dcfce7"
    }
  },
  {
    jobTitle: "Junior Frontend Developer",
    description:
      "A front-end developer is basically a  web developer who has a specialization in creating user interface for Gathering and evaluating user requirements, in collaboration with product managers and engineers",
    role: "Development",
    workMode: "Remote",
    duration: "Full Time",
    expired:"Jan 31, 2024",
    prefferdColors:{
        primary:"#1d4ed8",
        secondary:"#dbeafe"
    }
  },
  {
    jobTitle: "Motion Graphic Designer",
    description:
      "We are currently hiring a motion graphics designer who will work closely with the marketing team, Gathering and evaluating user requirements, in collaboration with product managers and engineers",
    role: "Design",
    workMode: "Onsite",
    duration: "Full Time",
    expired:"Jan 31, 2024",
    prefferdColors:{
        primary:"#15803d",
        secondary:"#dcfce7"
    }
  },
  {
    jobTitle: "SEO Specialist",
    description:
      "Program in HTML, CSS and JavaScript to ensure the site is accessible and easy to Gathering and evaluating user requirements, in collaboration with product managers and engineers",
    role: "Design",
    workMode: "Onsite",
    duration: "Full Time",
    expired:"Jan 31, 2024",
    prefferdColors:{
        primary:"#0e7490",
        secondary:"#e0e7ff"
    }
  },
  {
    jobTitle: "Project Assistant Manager",
    description:
      "Ensure the project complies with the schedule, rules and regulations, Manage and Gathering and evaluating user requirements, in collaboration with product managers and engineers",
    role: "Design",
    workMode: "Onsite",
    duration: "Full Time",
    expired:"Jan 31, 2024",
    prefferdColors:{
        primary:"#b45309",
        secondary:"#fef9c3"
    }
  },
  {
    jobTitle: "Intern Graphic Design",
    description:
      "Develop Illustrations, Logos and other designs using software by hand Gathering and evaluating user requirements, in collaboration with product managers and engineers",
    role: "Design",
    workMode: "Onsite",
    duration: "Full Time",
    expired:"Jan 31, 2024",
    prefferdColors:{
        primary:"#15803d",
        secondary:"#dcfce7"
    }
  },
  {
    jobTitle: "3D Animation (Junior-Middle)",
    description:
      "Using 3D modelling, texturing, mopping and other techniques to create graphics, Gathering and evaluating user requirements, in collaboration with product managers and engineers",
    role: "Design",
    workMode: "Remote",
    duration: "Full Time",
    expired:"Jan 31, 2024",
    prefferdColors:{
        primary:"#15803d",
        secondary:"#dcfce7"
    }
  },
  {
    jobTitle: "Senior Web Developer",
    description:
      "Able to communicate well and collabrate with other dev teams, Have strong skills in program and debugging Gathering and evaluating user requirements, in collaboration with product managers and engineers",
    role: "Design",
    workMode: "Onsite",
    duration: "Full Time",
    expired:"Jan 31, 2024",
    prefferdColors:{
        primary:"#be185d",
        secondary:"#fce7f3"
    }
  },
];
