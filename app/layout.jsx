// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { ThemeProvider } from "./components/ThemeProvider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Vortex Web Technologies | Professional Web Development Company",
//   description:
//     "Professional software development and digital solutions since 2009.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={`
//           ${geistSans.variable}
//           ${geistMono.variable}
//           antialiased
//           text-gray-100
//           bg-[#0b1120]
//           relative
//           overflow-x-hidden
//         `}
//       >
//         {/* GLOBAL GRID BACKGROUND */}
//         <div
//           className="fixed inset-0 z-0 pointer-events-none"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
//             `,
//             backgroundSize: "22px 22px",
//           }}
//         />

//         {/* GLOBAL GRADIENT OVERLAY */}
//         <div className="fixed inset-0 bg-gradient-to-br from-[#0b1120]/95 via-[#0f172a]/90 to-[#0b1120]/95 z-0" />
//         <ThemeProvider>
//   <Navbar />
//   <main className="flex flex-col">{children}</main>
//   <Footer />
// </ThemeProvider >
//       </body>
//     </html>
//   );
// }



// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { ThemeProvider } from "./components/ThemeProvider";
// import { Toaster } from "react-hot-toast";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Vortex Web Technologies | Professional Web Development Company",
//   description:
//     "Professional software development and digital solutions since 2009.",
// };


// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={`
//           ${geistSans.variable}
//           ${geistMono.variable}
//           antialiased
//           text-gray-900 dark:text-gray-100
//           bg-white dark:bg-[#0b1120]
//           relative
//           overflow-x-hidden
//         `}
//       >
//         {/* GRID BACKGROUND */}
//         <div
//           className="fixed inset-0 z-0 pointer-events-none"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
//             `,
//             backgroundSize: "22px 22px",
//           }}
//         />

//         {/* GRADIENT OVERLAY */}
//         <div className="fixed inset-0 z-0 bg-gradient-to-br from-[#0b1120]/95 via-[#0f172a]/90 to-[#0b1120]/95" />
//         <Toaster position="top-center"/>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="dark"
//           enableSystem
//         >
//           <Navbar />
//           <main className="flex flex-col min-h-screen relative z-10">
//             {children}
//           </main>
//           <Footer />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }




// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { ThemeProvider } from "./components/ThemeProvider";
// import { Toaster } from "react-hot-toast";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Vortex Web Technologies | Professional Web Development Company",
//   description:
//     "Professional software development and digital solutions since 2009.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={`
//           ${geistSans.variable}
//           ${geistMono.variable}
//           antialiased
//           text-gray-900 dark:text-gray-100
//           bg-white dark:bg-[#0b1120]
//           relative
//           overflow-x-hidden
//         `}
//       >
//         <ThemeProvider>  

//           {/* LIGHT GRID */}
//           <div
//             className="fixed inset-0 z-0 pointer-events-none block dark:hidden"
//             style={{
//               backgroundImage: `
//                 linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
//                 linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
//               `,
//               backgroundSize: "22px 22px",
//             }} 
//           />

//           {/* DARK GRID */}
//           <div
//             className="fixed inset-0 z-0 pointer-events-none hidden dark:block"
//             style={{
//               backgroundImage: `
//                 linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
//                 linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
//               `,
//               backgroundSize: "22px 22px",
//             }}
//           />

//           {/* GRADIENT OVERLAY */}
//           <div
//             className="
//               fixed inset-0 z-0
//               bg-gradient-to-br `````````````````````````````````````````````````````````````                                                                                                                                                                                   
//               from-gray-100 via-white to-gray-100
//               dark:from-[#0b1120]/95 dark:via-[#0f172a]/90 dark:to-[#0b1120]/95
//             "
//           />

//           <Toaster position="top-center" />

//           <Navbar />

//           <main className="flex flex-col min-h-screen relative z-10">
//             {children}
//           </main>

//           <Footer />

//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }















import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./(website)/components/ThemeProvider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vortex Web Technologies | Professional Web Development Company",
  description:
    "Professional software development and digital solutions since 2009.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          text-gray-900 dark:text-gray-100
          bg-white dark:bg-[#0b1120]
          relative
          overflow-x-hidden
        `}
      >
        {/* <ThemeProvider> */}

          {/* LIGHT GRID */}
          <div
            className="fixed inset-0 z-0 pointer-events-none block dark:hidden"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
              `,
              backgroundSize: "22px 22px",
            }}
          />

          {/* DARK GRID */}
          <div
            className="fixed inset-0 z-0 pointer-events-none hidden dark:block"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "22px 22px",
            }}
          />

          {/* GRADIENT OVERLAY */}
          <div
            className="
              fixed inset-0 z-0
              bg-gradient-to-br
              from-gray-100 via-white to-gray-100
              dark:from-[#0b1120]/95 dark:via-[#0f172a]/90 dark:to-[#0b1120]/95
            "
          />

          <Toaster position="top-center" />

          {/* All routes render here */}
          <div className="relative z-10">
            {children}
          </div>

        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}