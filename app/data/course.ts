export const courses = [
  {
    slug: "financial-accounting-fundamentals",
    title: "Financial Accounting Fundamentals",
    category: "Accounting",
    price: 149,
    rating: 4.8,
    students: 12500,
    instructor: "Dr. Sarah Johnson",
    duration: "8 weeks",
    lessons: 24,
    image: "/FA1.svg",
    description:
      "Master the essential principles of financial accounting from basic concepts to advanced reporting techniques.",

    sections: [
      {
        title: "Section 1: Introduction to Accounting",
        lessons: [
          {
            title: "What is Financial Accounting?",
            duration: "12:45",
            completed: true,
          },
          {
            title: "The Accounting Equation",
            duration: "15:30",
            completed: true,
          },
          {
            title: "Financial Statements Overview",
            duration: "18:20",
            completed: true,
          },
          {
            title: "Accounting Standards and Principles",
            duration: "18:20",
            completed: false,
          },
        ],
      },
      {
        title: "Section 2: Recording Transactions",
        lessons: [
          {
            title: "Journal Entries Explained",
            duration: "14:10",
            completed: false,
          },
          {
            title: "Ledger Posting",
            duration: "16:40",
            completed: false,
          },
          {
            title: "Trial Balance Preparation",
            duration: "20:15",
            completed: false,
          },
        ],
      },
      {
        title: "Section 3: Adjusting Entries",
        lessons: [
          {
            title: "Accruals and Deferrals",
            duration: "17:22",
            completed: false,
          },
          {
            title: "Depreciation Methods",
            duration: "19:05",
            completed: false,
          },
        ],
      },
    ],
  },

  {
    slug: "advanced-tax-strategies",
    title: "Advanced Tax Strategies",
    category: "Tax Planning",
    price: 199,
    rating: 4.8,
    students: 12500,
    instructor: "Dr. Sarah Johnson",
    duration: "8 weeks",
    lessons: 24,
    image: "/tax.svg",
    description:
      "Learn strategic tax planning techniques and compliance best practices.",

    sections: [
      {
        title: "Section 1: Tax Planning Fundamentals",
        lessons: [
          {
            title: "Understanding Tax Systems",
            duration: "13:50",
            completed: true,
          },
          {
            title: "Tax Saving Instruments",
            duration: "16:20",
            completed: false,
          },
        ],
      },
      {
        title: "Section 2: Compliance and Reporting",
        lessons: [
          {
            title: "Corporate Tax Filing",
            duration: "21:10",
            completed: false,
          },
          {
            title: "Tax Audits Explained",
            duration: "18:45",
            completed: false,
          },
        ],
      },
    ],
  },

  {
    slug: "corporate-finance-mastery",
    title: "Corporate Finance Mastery",
    category: "Finance",
    price: 249,
    rating: 4.8,
    students: 12500,
    instructor: "Dr. Sarah Johnson",
    duration: "8 weeks",
    lessons: 24,
    image: "/corp.svg",
    description:
      "Develop strong financial analysis and corporate decision-making skills.",

    sections: [
      {
        title: "Section 1: Financial Analysis Basics",
        lessons: [
          {
            title: "Reading Financial Statements",
            duration: "14:30",
            completed: true,
          },
          {
            title: "Ratio Analysis",
            duration: "17:55",
            completed: true,
          },
          {
            title: "Cash Flow Analysis",
            duration: "19:40",
            completed: false,
          },
        ],
      },
      {
        title: "Section 2: Corporate Decision Making",
        lessons: [
          {
            title: "Capital Budgeting",
            duration: "22:10",
            completed: false,
          },
          {
            title: "Risk and Return",
            duration: "18:35",
            completed: false,
          },
        ],
      },
    ],
  },
];
