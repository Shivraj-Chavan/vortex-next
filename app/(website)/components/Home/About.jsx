// "use client";

// import { CheckCircle, Users, Award, Target, TrendingUp } from "lucide-react";

// export default function About() {

//   return (
//     <section
//       id="about"
//       className="relative overflow-hidden text-white bg-transparent "
//     >

//       <div className="relative max-w-7xl mx-auto px-6 w-full mt-15">

//         <div className="grid lg:grid-cols-2 gap-12 items-center">

//           {/* LEFT SIDE */}
//           <div className="space-y-6">

//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md shadow-lg">
//               <Award className="w-4 h-4 text-indigo-400" />
//               <span className="text-sm font-semibold text-indigo-300">
//                 About Our Company
//               </span>
//             </div>

//             <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
//               <span>Professional </span>
//               <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
//                 Software Development
//               </span>{" "}
//               <span>Consulting Services</span>
//             </h2>

//             <div className="space-y-4 max-w-xl">
//               <p className="text-sm text-gray-300 leading-relaxed">
//                 Vortex Web Technologies seamlessly combines specialized services in software development, website designing, brand awareness, and digital marketing since{" "}
//                 <span className="font-semibold text-indigo-400">2009</span>.
//               </p>

//               <p className="text-xs text-gray-400">
//                 We are one of the fastest-growing digital service companies providing web, mobile, e-commerce, and marketing solutions.
//               </p>
//             </div>

//             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
//               {[
//                 "15+ Years Industry Experience",
//                 "1500+ Projects Delivered",
//                 "Modern & Scalable Development",
//                 "Client-Focused Solutions",
//                 "Expert Designers & Developers",
//                 "24/7 Technical Support",
//               ].map((item, i) => (
//                 <li key={i} className="flex items-start gap-2">
//                   <CheckCircle className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
//                   <span className="text-sm text-gray-200">{item}</span>
//                 </li>
//               ))}
//             </ul>

//             <a
//               href="#contact"
//               className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm
//               bg-gradient-to-r from-indigo-600 to-blue-600
//               text-white
//               hover:scale-105 transition-transform shadow-lg"
//             >
//               Read More
//             </a>
//           </div>

//           {/* RIGHT SIDE CARD */}
//           <div className="relative">
//             <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
//                   <Target className="w-5 h-5 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-white">Why Choose Us?</h3>
//               </div>

//               <p className="text-sm text-gray-300 mb-6">
//                 We combine design, technology, and innovation to deliver reliable digital solutions that help businesses grow online.
//               </p>

//               <div className="grid grid-cols-2 gap-5 mb-6">
//                 {[
//                   { label: "Projects", value: "1500+", color: "text-indigo-400" },
//                   { label: "Satisfaction", value: "100%", color: "text-blue-400" },
//                   { label: "Experience", value: "15+", color: "text-purple-400" },
//                   { label: "Support", value: "24/7", color: "text-green-400" },
//                 ].map((stat, i) => (
//                   <div
//                     key={i}
//                     className="rounded-xl p-4 text-center bg-white/5 border border-white/10"
//                   >
//                     <div className={`text-3xl font-black ${stat.color}`}>
//                       {stat.value}
//                     </div>
//                     <p className="text-xs text-gray-400">{stat.label}</p>
//                   </div>
//                 ))}
//               </div>

//               <div className="space-y-3 pt-4 border-t border-white/10">
//                 <div className="flex items-center gap-2">
//                   <Users className="w-4 h-4 text-indigo-400" />
//                   <span className="text-sm text-gray-300">Dedicated Expert Team</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <TrendingUp className="w-4 h-4 text-blue-400" />
//                   <span className="text-sm text-gray-300">Proven Success Record</span>
//                 </div>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { CheckCircle, Users, Award, Target, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-transparent text-gray-900 dark:text-white"
    >
      <div className="relative max-w-7xl mx-auto px-6 w-full mt-15">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
              bg-gray-100 dark:bg-white/10 
              border border-gray-200 dark:border-white/15 
              backdrop-blur-md shadow-lg">
              <Award className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
              <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-300">
                About Our Company
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              <span>Professional </span>
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Software Development
              </span>{" "}
              <span>Consulting Services</span>
            </h2>

            <div className="space-y-4 max-w-xl">
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Vortex Web Technologies seamlessly combines specialized services 
                in software development, website designing, brand awareness, 
                and digital marketing since{" "}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  2009
                </span>.
              </p>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                We are one of the fastest-growing digital service companies 
                providing web, mobile, e-commerce, and marketing solutions.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {[
                "15+ Years Industry Experience",
                "1500+ Projects Delivered",
                "Modern & Scalable Development",
                "Client-Focused Solutions",
                "Expert Designers & Developers",
                "24/7 Technical Support",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-500 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-200">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-sm
              bg-gradient-to-r from-indigo-600 to-blue-600
              text-white hover:scale-105 transition-transform shadow-lg"
            >
              Read More
            </a>
          </div>

          {/* RIGHT SIDE CARD */}
          <div className="relative">
            <div className="relative 
              bg-white dark:bg-white/5 
              backdrop-blur-xl 
              border border-gray-200 dark:border-white/10 
              rounded-3xl p-8 shadow-2xl">

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Why Choose Us?
                </h3>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                We combine design, technology, and innovation to deliver reliable 
                digital solutions that help businesses grow online.
              </p>

              <div className="grid grid-cols-2 gap-5 mb-6">
                {[
                  { label: "Projects", value: "1500+", color: "text-indigo-500" },
                  { label: "Satisfaction", value: "100%", color: "text-blue-500" },
                  { label: "Experience", value: "15+", color: "text-purple-500" },
                  { label: "Support", value: "24/7", color: "text-green-500" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-4 text-center 
                    bg-gray-50 dark:bg-white/5 
                    border border-gray-200 dark:border-white/10"
                  >
                    <div className={`text-3xl font-black ${stat.color}`}>
                      {stat.value}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Dedicated Expert Team
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Proven Success Record
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}