// mock-subjects.ts
import { Subject } from "../types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "An introductory course covering basic programming concepts, algorithms, and problem-solving techniques using modern programming languages.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "EE205",
    name: "Digital Electronics",
    department: "Electrical Engineering",
    description:
      "This course focuses on digital logic design, Boolean algebra, combinational and sequential circuits, and their applications in electronic systems.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "BUS310",
    name: "Principles of Management",
    department: "Business Administration",
    description:
      "A foundational course that explores management theories, organizational behavior, leadership, and strategic decision-making in modern organizations.",
    createdAt: new Date().toISOString(),
  },
];
