import localFont from "next/font/local";

// PPMori regular and bold
export const ppmori = localFont({
  src: [
    {
      path: "client/font/PP Mori - Free for Personal Use v1.0/PPMori-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../client/fonts/PPMori-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ppmori",
  display: "swap",
});

// Another font
// export const anotherFont = localFont({
//   src: "../client/font/AnotherFont-Regular.ttf",
//   variable: "--font-another",
//   display: "swap",
// });
