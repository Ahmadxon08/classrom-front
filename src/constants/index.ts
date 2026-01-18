import { Subject } from "@/types";
import { GraduationCap, School } from "lucide-react";

export const USER_ROLES = {
  STUDENT: "student",
  TEACHER: "teacher",
  ADMIN: "admin",
};

export const ROLE_OPTIONS = [
  {
    value: USER_ROLES.STUDENT,
    label: "Student",
    icon: GraduationCap,
  },
  {
    value: USER_ROLES.TEACHER,
    label: "Teacher",
    icon: School,
  },
];

export const DEPARTMENTS = [
  "Computer Science",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "History",
  "Geography",
  "Economics",
  "Business Administration",
  "Engineering",
  "Psychology",
  "Sociology",
  "Political Science",
  "Philosophy",
  "Education",
  "Fine Arts",
  "Music",
  "Physical Education",
  "Law",
] as const;

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
  value: dept,
  label: dept,
}));

export const subjectsMock: Subject[] = [
  {
    id: 1,
    code: "MATH-101",
    name: "Calculus I",
    department: "math",
    description: "Introduction to limits, derivatives, and integrals.",
    createdAt: "2024-01-10T09:30:00Z",
  },
  {
    id: 2,
    code: "CS-201",
    name: "Data Structures",
    department: "computer",
    description: "Arrays, linked lists, stacks, queues, trees, and graphs.",
    createdAt: "2024-02-01T11:15:00Z",
  },
  {
    id: 3,
    code: "PHY-110",
    name: "Physics I",
    department: "physics",
    description: "Basic mechanics, motion, and forces.",
    createdAt: "2024-02-12T08:00:00Z",
  },
  {
    id: 4,
    code: "ENG-102",
    name: "Academic Writing",
    department: "language",
    description: "Essay writing and academic research skills.",
    createdAt: "2024-03-01T10:45:00Z",
  },
  {
    id: 5,
    code: "CS-305",
    name: "Operating Systems",
    department: "computer",
    description: "Processes, memory management, and file systems.",
    createdAt: "2024-03-15T14:20:00Z",
  },
  {
    id: 6,
    code: "MATH-210",
    name: "Linear Algebra",
    department: "math",
    description: "Vectors, matrices, determinants, and linear equations.",
    createdAt: "2024-04-01T09:10:00Z",
  },
  {
    id: 7,
    code: "CHEM-101",
    name: "General Chemistry",
    department: "chemistry",
    description: "Atoms, molecules, reactions, and stoichiometry.",
    createdAt: "2024-04-10T13:00:00Z",
  },
  {
    id: 8,
    code: "BIO-120",
    name: "Biology Basics",
    department: "biology",
    description: "Cell structure, genetics, and evolution.",
    createdAt: "2024-05-05T08:30:00Z",
  },
  {
    id: 9,
    code: "HIST-200",
    name: "World History",
    department: "history",
    description: "Major civilizations and historical events.",
    createdAt: "2024-05-20T16:45:00Z",
  },
  {
    id: 10,
    code: "CS-410",
    name: "Software Engineering",
    department: "computer",
    description: "Software design patterns and project management.",
    createdAt: "2024-06-01T11:00:00Z",
  },
];

export const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3MB in bytes
export const ALLOWED_TYPES = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/webp",
];

// const getEnvVar = (key: string): string => {
//   const value = import.meta.env[key];
//   if (!value) {
//     throw new Error(`Missing environment variable: ${key}`);
//   }
//   return value;
// };

// export const CLOUDINARY_UPLOAD_URL = getEnvVar("VITE_CLOUDINARY_UPLOAD_URL");
// export const CLOUDINARY_CLOUD_NAME = getEnvVar("VITE_CLOUDINARY_CLOUD_NAME");
// export const BACKEND_BASE_URL = getEnvVar("VITE_BACKEND_BASE_URL");

// export const BASE_URL = import.meta.env.VITE_API_URL;
// export const ACCESS_TOKEN_KEY = import.meta.env.VITE_ACCESS_TOKEN_KEY;
// export const REFRESH_TOKEN_KEY = import.meta.env.VITE_REFRESH_TOKEN_KEY;

// export const REFRESH_TOKEN_URL = `${BASE_URL}/refresh-token`;

// export const CLOUDINARY_UPLOAD_PRESET = getEnvVar(
//   "VITE_CLOUDINARY_UPLOAD_PRESET"
// );

// export const teachers = [
//   {
//     id: "1",
//     name: "John Doe",
//   },
//   {
//     id: "2",
//     name: "Jane Smith",
//   },
//   {
//     id: "3",
//     name: "Dr. Alan Turing",
//   },
// ];

// export const subjects = [
//   {
//     id: 1,
//     name: "Mathematics",
//     code: "MATH",
//   },
//   {
//     id: 2,
//     name: "Computer Science",
//     code: "CS",
//   },
//   {
//     id: 3,
//     name: "Physics",
//     code: "PHY",
//   },
//   {
//     id: 4,
//     name: "Chemistry",
//     code: "CHEM",
//   },
// ];
