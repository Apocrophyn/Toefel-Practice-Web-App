import type { Metadata, Viewport } from "next";
import { Archivo, Archivo_Narrow } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  variable: "--font-archivo-narrow",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Overture — practise the 2026 TOEFL iBT",
    template: "%s · Overture",
  },
  description:
    "Overture is a practice board for the TOEFL iBT in its 2026 shape: adaptive Reading and Listening modules, four Speaking tasks, three Writing tasks, and AI evaluation scored on the 1–6 band scale.",
  keywords: [
    "TOEFL",
    "TOEFL iBT",
    "TOEFL practice",
    "TOEFL 2026",
    "English test",
    "language proficiency",
    "AI evaluation",
    "speaking practice",
    "writing practice",
  ],
  authors: [{ name: "Overture" }],
  creator: "Overture",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Overture",
    title: "Overture — practise the 2026 TOEFL iBT",
    description:
      "The TOEFL iBT in its 2026 shape — adaptive modules, four skills, banded scoring, instant AI evaluation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Overture — practise the 2026 TOEFL iBT",
    description:
      "The TOEFL iBT in its 2026 shape — adaptive modules, four skills, banded scoring, instant AI evaluation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0B0C",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${archivoNarrow.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased font-sans concourse-ground">
        {/*
          THESIS: A TOEFL sitting is a departure, so this app is the concourse
          board that governs one — ranked rows, fixed columns, a running clock,
          a lamp per live row. It refuses the neon-glass SaaS dashboard the
          category ships and the pastel edtech playroom that is its opposite.
          OWN-WORLD: Matte flap faces (#17191C) with the split seam, brushed
          steel frames and hairline rules, warm ivory paint (#EDEAE4), exactly
          one accent — signal amber (#F2A93B) — reserved for live rows, running
          clocks and the primary action; platform green and signal red are
          state only. Archivo Narrow caps on every flap, 2px corners, round
          black glass indicator plates as the only circles on the board.
          STORY: The learner reads the board, sees which section is boarding,
          works the task under the clock, and gets a banded score posted back to
          the row like a departure time.
          FIRST VIEWPORT: Full-height board rail on the left — brand plate, then
          ruled rows (READING / LISTENING / SPEAKING / WRITING, FULL TEST, VOCAB,
          HISTORY), each a glass plate, a three-letter flap code, a name, and a
          lamp. Right of it a departure strip: section name in flap cells, the
          task line, and the clock at display scale. The primary action sits at
          the strip's right edge, amber.
          FORM: rail-concourse split-flap board; candidate 6 of the grounded
          list, fused with catalog world signals-instruments-split-flap-concourse;
          seed key 717fbf57.
          FINISH: unreviewed and undocumented is unfinished; this build ends with
          the finish review, the verdict, DESIGN.md, and every shipping raster
          carrying its provenance.
        */}
        {children}
      </body>
    </html>
  );
}
