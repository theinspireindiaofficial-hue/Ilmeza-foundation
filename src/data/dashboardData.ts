/**
 * Ilmeza Next 50 — Student Dashboard Configuration
 * ═══════════════════════════════════════════════════
 * Edit this file to update dashboard content.
 * No code knowledge required — just change values.
 */

/* ─── Access Password ──────────────────────────────── */
export const DASHBOARD_PASSWORD = "ilmeza2026";

/* ─── Live Class ───────────────────────────────────── */
export const LIVE_CLASS = {
  meetLink: "https://meet.google.com/abc-defg-hij", // Replace with actual Meet link
  title: "Daily Live Class",
  instructor: "Ilmeza Faculty",
  schedule: "Mon–Sat, 7:00 PM – 9:00 PM",
  isLive: true, // Set to false when no class is live
};

/* ─── Announcements ────────────────────────────────── */
export const ANNOUNCEMENTS = [
  "Weekly test on Sunday at 10:00 AM. Prepare chapters 1–5.",
  "New study materials for Organic Chemistry uploaded.",
  "Next doubt-clearing session: Thursday 4:00 PM.",
];

/* ─── Assessments/Tests ───────────────────────────── */
export interface Assessment {
  id: string;
  title: string;
  date: string;
  duration: string;
  testLink: string;
}

export const ASSESSMENTS: Assessment[] = [
  {
    id: "test-1",
    title: "Maha Mock Test — JEE Pattern",
    date: "Sunday, 10:00 AM",
    duration: "3 Hours",
    testLink: "https://forms.gle/your-test-link-here", // Replace with actual test link
  },
  {
    id: "test-2",
    title: "Weekly Practice — Organic Chem",
    date: "Available Now",
    duration: "45 Mins",
    testLink: "https://forms.gle/your-test-link-here",
  }
];

/* ─── Recorded Lectures ────────────────────────────── */
export interface Lecture {
  id: string;
  title: string;
  youtubeId: string; // YouTube video ID (from unlisted video URL)
  date: string;
  duration: string;
}

export interface SubjectLectures {
  subject: string;
  icon: string; // lucide icon name
  color: string; // tailwind gradient
  lectures: Lecture[];
}

export const RECORDED_LECTURES: SubjectLectures[] = [
  {
    subject: "Physics",
    icon: "Atom",
    color: "from-blue-500 to-indigo-600",
    lectures: [
      {
        id: "phy-1",
        title: "Newton's Laws of Motion — Part 1",
        youtubeId: "dQw4w9WgXcQ", // Replace with actual unlisted video ID
        date: "Apr 7, 2026",
        duration: "1h 20m",
      },
      {
        id: "phy-2",
        title: "Newton's Laws of Motion — Part 2",
        youtubeId: "dQw4w9WgXcQ",
        date: "Apr 8, 2026",
        duration: "1h 15m",
      },
      {
        id: "phy-3",
        title: "Work, Energy & Power — Basics",
        youtubeId: "dQw4w9WgXcQ",
        date: "Apr 9, 2026",
        duration: "1h 30m",
      },
    ],
  },
  {
    subject: "Chemistry",
    icon: "FlaskConical",
    color: "from-emerald-500 to-teal-600",
    lectures: [
      {
        id: "chem-1",
        title: "Atomic Structure — Bohr's Model",
        youtubeId: "dQw4w9WgXcQ",
        date: "Apr 7, 2026",
        duration: "1h 10m",
      },
      {
        id: "chem-2",
        title: "Chemical Bonding — Basics",
        youtubeId: "dQw4w9WgXcQ",
        date: "Apr 8, 2026",
        duration: "1h 25m",
      },
    ],
  },
  {
    subject: "Maths",
    icon: "Calculator",
    color: "from-amber-500 to-orange-600",
    lectures: [
      {
        id: "math-1",
        title: "Trigonometric Functions — Introduction",
        youtubeId: "dQw4w9WgXcQ",
        date: "Apr 7, 2026",
        duration: "1h 15m",
      },
      {
        id: "math-2",
        title: "Quadratic Equations — Advanced",
        youtubeId: "dQw4w9WgXcQ",
        date: "Apr 8, 2026",
        duration: "1h 20m",
      },
    ],
  },
  {
    subject: "Biology",
    icon: "Dna",
    color: "from-rose-500 to-pink-600",
    lectures: [
      {
        id: "bio-1",
        title: "Cell Biology — Structure & Function",
        youtubeId: "dQw4w9WgXcQ",
        date: "Apr 7, 2026",
        duration: "1h 30m",
      },
      {
        id: "bio-2",
        title: "Plant Anatomy — Tissues",
        youtubeId: "dQw4w9WgXcQ",
        date: "Apr 8, 2026",
        duration: "1h 10m",
      },
    ],
  },
];

/* ─── Study Materials ──────────────────────────────── */
export interface StudyMaterial {
  id: string;
  title: string;
  type: "PDF" | "Notes" | "PYQ" | "Formula Sheet" | "DPP";
  subject: string;
  driveLink: string; // Google Drive link
}

export const STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: "mat-1",
    title: "Newton's Laws — Complete Notes",
    type: "Notes",
    subject: "Physics",
    driveLink: "https://drive.google.com/file/d/example/view",
  },
  {
    id: "mat-2",
    title: "Physics Formula Sheet — Mechanics",
    type: "Formula Sheet",
    subject: "Physics",
    driveLink: "https://drive.google.com/file/d/example/view",
  },
  {
    id: "mat-3",
    title: "Atomic Structure — Chapter Notes",
    type: "Notes",
    subject: "Chemistry",
    driveLink: "https://drive.google.com/file/d/example/view",
  },
  {
    id: "mat-4",
    title: "NEET 2025 — Chemistry PYQ",
    type: "PYQ",
    subject: "Chemistry",
    driveLink: "https://drive.google.com/file/d/example/view",
  },
  {
    id: "mat-5",
    title: "Trigonometry — Practice Problems",
    type: "DPP",
    subject: "Maths",
    driveLink: "https://drive.google.com/file/d/example/view",
  },
  {
    id: "mat-6",
    title: "Cell Biology — NCERT Notes",
    type: "Notes",
    subject: "Biology",
    driveLink: "https://drive.google.com/file/d/example/view",
  },
  {
    id: "mat-7",
    title: "NEET Biology — PYQ Compilation",
    type: "PYQ",
    subject: "Biology",
    driveLink: "https://drive.google.com/file/d/example/view",
  },
];
