export const courses = [
  {
    title: "Introduction to Programming",
    course_code: "CS101",
    description:
      "An introductory course to programming concepts and problem-solving.",
    credit_hours: 3,
    enrolled_students: 50,
  },
  {
    title: "Web Development Fundamentals",
    course_code: "WD200",
    description:
      "Explore the basics of web development, including HTML, CSS, and JavaScript.",
    credit_hours: 4,
    enrolled_students: 40,
  },
  {
    title: "Data Structures and Algorithms",
    course_code: "CS202",
    description:
      "Study fundamental data structures and algorithms for efficient problem-solving.",
    credit_hours: 4,
    enrolled_students: 60,
  },
  {
    title: "JavaScript for Front-End Development",
    course_code: "JS301",
    description:
      "Learn advanced JavaScript concepts for front-end web development.",
    credit_hours: 3,
    enrolled_students: 35,
  },
  {
    title: "Back-End Development with Node.js",
    course_code: "NODE400",
    description:
      "Build server-side applications using Node.js and explore backend development.",
    credit_hours: 4,
    enrolled_students: 45,
  },
  {
    title: "Database Design and Management",
    course_code: "DBMS401",
    description:
      "Study principles of database design, normalization, and database management systems.",
    credit_hours: 3,
    enrolled_students: 55,
  },
  {
    title: "Mobile App Development with React Native",
    course_code: "RN501",
    description:
      "Develop cross-platform mobile applications using React Native.",
    credit_hours: 4,
    enrolled_students: 30,
  },
  {
    title: "Advanced JavaScript Frameworks",
    course_code: "ADVJS502",
    description:
      "Explore advanced JavaScript frameworks like Angular or Vue for web development.",
    credit_hours: 3,
    enrolled_students: 25,
  },
  {
    title: "Cybersecurity Fundamentals",
    course_code: "SEC601",
    description:
      "An overview of cybersecurity principles, tools, and best practices.",
    credit_hours: 3,
    enrolled_students: 50,
  },
  {
    title: "Software Project Management",
    course_code: "PM701",
    description:
      "Learn project management methodologies and tools for software development projects.",
    credit_hours: 4,
    enrolled_students: 40,
  },
];

export const students = [
  {
    unique_ID: "UGR/1001/12",
    name: "John Doe",
    contact_details: {
      email: "john.doe@example.com",
      phone: "123-456-7890",
      city: "New York",
    },
    academic_record: [
      { subject: "Math", grade: "A" },
      { subject: "English", grade: "B" },
      { subject: "Science", grade: "A-" },
      { subject: "History", grade: "B+" },
      { subject: "Computer Science", grade: "A" },
    ],
  },
  {
    unique_ID: "UGR/1002/12",
    name: "Jane Smith",
    contact_details: {
      email: "jane.smith@example.com",
      phone: "987-654-3210",
      city: "San Francisco",
    },
    academic_record: [
      { subject: "Math", grade: "B+" },
      { subject: "English", grade: "A" },
      { subject: "Science", grade: "B" },
      { subject: "History", grade: "A-" },
      { subject: "Art", grade: "B" },
    ],
  },
  {
    unique_ID: "UGR/1003/12",
    name: "Alice Johnson",
    contact_details: {
      email: "alice.johnson@example.com",
      phone: "555-123-4567",
      city: "Chicago",
    },
    academic_record: [
      { subject: "Math", grade: "A-" },
      { subject: "English", grade: "B+" },
      { subject: "Science", grade: "A" },
      { subject: "History", grade: "C" },
      { subject: "Physical Education", grade: "A+" },
    ],
  },
  {
    unique_ID: "UGR/1004/12",
    name: "Bob Williams",
    contact_details: {
      email: "bob.williams@example.com",
      phone: "333-555-7890",
      city: "Houston",
    },
    academic_record: [
      { subject: "Math", grade: "B" },
      { subject: "English", grade: "C" },
      { subject: "Science", grade: "B+" },
      { subject: "Art", grade: "A" },
      { subject: "Computer Science", grade: "B-" },
    ],
  },
  {
    unique_ID: "UGR/1005/12",
    name: "Eva Davis",
    contact_details: {
      email: "eva.davis@example.com",
      phone: "777-888-9999",
      city: "Miami",
    },
    academic_record: [
      { subject: "Math", grade: "A" },
      { subject: "English", grade: "A+" },
      { subject: "Science", grade: "A-" },
      { subject: "History", grade: "B" },
      { subject: "Physical Education", grade: "B+" },
    ],
  },
  {
    unique_ID: "UGR/1006/12",
    name: "Alex Turner",
    contact_details: {
      email: "alex.turner@example.com",
      phone: "111-222-3333",
      city: "Seattle",
    },
    academic_record: [
      { subject: "Math", grade: "A+" },
      { subject: "English", grade: "B-" },
      { subject: "Science", grade: "B" },
      { subject: "History", grade: "A" },
      { subject: "Art", grade: "C" },
    ],
  },
  {
    unique_ID: "UGR/1007/12",
    name: "Grace Miller",
    contact_details: {
      email: "grace.miller@example.com",
      phone: "444-666-8888",
      city: "Denver",
    },
    academic_record: [
      { subject: "Math", grade: "B" },
      { subject: "English", grade: "A-" },
      { subject: "Science", grade: "C" },
      { subject: "History", grade: "B+" },
      { subject: "Computer Science", grade: "A" },
    ],
  },
  {
    unique_ID: "UGR/1008/12",
    name: "Tom Brown",
    contact_details: {
      email: "tom.brown@example.com",
      phone: "999-777-5555",
      city: "Dallas",
    },
    academic_record: [
      { subject: "Math", grade: "A" },
      { subject: "English", grade: "B" },
      { subject: "Science", grade: "A+" },
      { subject: "History", grade: "B-" },
      { subject: "Art", grade: "A" },
    ],
  },
  {
    unique_ID: "UGR/1009/12",
    name: "Sophie Clark",
    contact_details: {
      email: "sophie.clark@example.com",
      phone: "123-987-4567",
      city: "Atlanta",
    },
    academic_record: [
      { subject: "Math", grade: "A-" },
      { subject: "English", grade: "B+" },
      { subject: "Science", grade: "A" },
      { subject: "History", grade: "B+" },
      { subject: "Physical Education", grade: "C" },
    ],
  },
  {
    unique_ID: "UGR/1010/12",
    name: "Ryan Wilson",
    contact_details: {
      email: "ryan.wilson@example.com",
      phone: "876-543-2109",
      city: "Los Angeles",
    },
    academic_record: [
      { subject: "Math", grade: "B" },
      { subject: "English", grade: "A" },
      { subject: "Science", grade: "B-" },
      { subject: "Art", grade: "A+" },
      { subject: "Physical Education", grade: "B" },
    ],
  },
];
