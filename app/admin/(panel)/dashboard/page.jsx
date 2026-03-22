// 'use client';

// import { 
//   TrendingUp, 
//   Users, 
//   FileText, 
//   DollarSign,
//   ArrowUpRight,
//   ArrowDownRight,
//   Eye,
//   MessageSquare,
//   Clock
// } from 'lucide-react';


// export default function DashboardPage() {
//   const stats = [
//     {
//       title: 'Total Users',
//       value: '2,456',
//       change: '+12.5%',
//       trend: 'up',
//       icon: Users,
//       color: 'from-blue-500 to-cyan-500'
//     },
//     {
//       title: 'Blog Posts',
//       value: '127',
//       change: '+8.2%',
//       trend: 'up',
//       icon: FileText,
//       color: 'from-purple-500 to-pink-500'
//     },
//     {
//       title: 'Contacts Views',
//       value: '89,432',
//       change: '-2.4%',
//       trend: 'down',
//       icon: Eye,
//       color: 'from-orange-500 to-red-500'
//     }
//   ];

//   const recentActivities = [
//     { action: 'New blog post published', time: '2 minutes ago', user: 'John Doe' },
//     { action: 'User registration', time: '15 minutes ago', user: 'Jane Smith' },
//     { action: 'Service updated', time: '1 hour ago', user: 'Admin' },
//     { action: 'New comment on blog', time: '2 hours ago', user: 'Mike Johnson' },
//     { action: 'Settings changed', time: '3 hours ago', user: 'John Doe' },
//   ];

//   const topPosts = [
//     { title: 'How to Build a Modern Web App', views: '12.5k', comments: 45 },
//     { title: 'Best Practices for React', views: '8.3k', comments: 32 },
//     { title: 'Understanding TypeScript', views: '6.7k', comments: 28 },
//     { title: 'CSS Grid vs Flexbox', views: '5.2k', comments: 19 },
//   ];

//   return (
//     <div className="space-y-6 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2 mt-15">
//       <div>
//         <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Dashboard</h1>
//         <p className="text-gray-600 dark:text-gray-400">Welcome back! Here's what's happening today.</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {stats.map((stat, index) => {
//           const Icon = stat.icon;
//           return (
//             <div
//               key={index}
//               className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group overflow-hidden"
//             >
//               <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
//               <div className="relative">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-lg`}>
//                     <Icon className="w-6 h-6 text-white" />
//                   </div>
//                   <div className={`flex items-center gap-1 text-sm font-semibold ${
//                     stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
//                   }`}>
//                     {stat.trend === 'up' ? (
//                       <ArrowUpRight className="w-4 h-4" />
//                     ) : (
//                       <ArrowDownRight className="w-4 h-4" />
//                     )}
//                     {stat.change}
//                   </div>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="lg:col-span-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-xl font-bold text-gray-900 dark:text-white">Recent Activity</h2>
//             <button className="text-sm text-purple-600 dark:text-purple-400 hover:underline">View All</button>
//           </div>
          
//           <div className="space-y-4">
//             {recentActivities.map((activity, index) => (
//               <div
//                 key={index}
//                 className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
//               >
//                 <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
//                   <span className="text-white text-xs font-semibold">
//                     {activity.user.split(' ').map(n => n[0]).join('')}
//                   </span>
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <p className="text-sm font-medium text-gray-900 dark:text-white">
//                     {activity.action}
//                   </p>
//                   <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
//                     by {activity.user}
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
//                   <Clock className="w-3 h-3" />
//                   {activity.time}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-xl font-bold text-gray-900 dark:text-white">Top Posts</h2>
//             <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
//           </div>
          
//           <div className="space-y-4">
//             {topPosts.map((post, index) => (
//               <div
//                 key={index}
//                 className="p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer"
//               >
//                 <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2 line-clamp-2">
//                   {post.title}
//                 </h3>
//                 <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
//                   <div className="flex items-center gap-1">
//                     <Eye className="w-3 h-3" />
//                     {post.views}
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <MessageSquare className="w-3 h-3" />
//                     {post.comments}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700">
//         <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           <button className="p-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg text-white hover:shadow-lg transition-all duration-300 group">
//             <FileText className="w-6 h-6 mb-2 mx-auto group-hover:scale-110 transition-transform" />
//             <p className="text-sm font-semibold">New Post</p>
//           </button>
//           <button className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg text-white hover:shadow-lg transition-all duration-300 group">
//             <Users className="w-6 h-6 mb-2 mx-auto group-hover:scale-110 transition-transform" />
//             <p className="text-sm font-semibold">Add User</p>
//           </button>
//           <button className="p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg text-white hover:shadow-lg transition-all duration-300 group">
//             <TrendingUp className="w-6 h-6 mb-2 mx-auto group-hover:scale-110 transition-transform" />
//             <p className="text-sm font-semibold">Analytics</p>
//           </button>
//           <button className="p-4 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg text-white hover:shadow-lg transition-all duration-300 group">
//             <MessageSquare className="w-6 h-6 mb-2 mx-auto group-hover:scale-110 transition-transform" />
//             <p className="text-sm font-semibold">Messages</p>
//           </button>
//         </div>
//       </div>


//     </div>
//   );
// }










'use client';

import { useEffect, useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  FileText,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  MessageSquare,
  Clock,
  Mail
} from 'lucide-react';
import { fetchDashboard } from '../../../lib/api.js';

export default function DashboardPage() {

  const [loading, setLoading] = useState(true);
  const [statsData, setStatsData] = useState(null);
  const [recentActivities, setRecentActivities] = useState([]);
  const [topPosts, setTopPosts] = useState([]);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const getDashboard = async () => {
      try {
        const res = await fetchDashboard();
        const data = res.data;

        setStatsData(data.stats);
        setRecentActivities(data.recentActivities);
        setTopPosts(data.topPosts);

      } catch (error) {
        console.error("Dashboard Error:", error);
      } finally {
        setLoading(false);
      }
    };

    getDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <p className="text-lg font-semibold">Loading Dashboard...</p>
      </div>
    );
  }

  const stats = [
    // {
    //   title: 'Total Users',
    //   value: statsData?.totalUsers,
    //   change: `${statsData?.usersChange}%`,
    //   trend: statsData?.usersChange >= 0 ? 'up' : 'down',
    //   icon: Users,
    //   color: 'from-blue-500 to-cyan-500'
    // },
    {
      title: "Total Blogs",
      value: statsData?.totalBlogs || 0,
      icon: FileText,
      trend: "up",
      change: "+0%",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Total Contacts",
      value: statsData?.totalContacts || 0,
      icon: Mail,
      trend: "up",
      change: "+0%",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="space-y-6 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2 mt-15">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-semibold ${
                    stat.trend === 'up'
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-red-600 dark:text-red-400'
                  }`}>
                    {stat.trend === 'up' ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4" />
                    )}
                    {stat.change}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity + Top Posts (UNCHANGED UI) */}
      {/* Just using dynamic arrays now */}

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        <div className="lg:col-span-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Recent Activity
          </h2>

          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">
                    {activity.user?.[0]}
                  </span>
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    by {activity.user}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <Clock className="w-3 h-3" />
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Posts */}
        {/* <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Top Posts
          </h2>

          <div className="space-y-4">
            {topPosts?.map((post, index) => (
              <div key={index}>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>

                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {post.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" />
                    {post.comments}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>


      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700">
         <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           <button className="p-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg text-white hover:shadow-lg transition-all duration-300 group">
             <FileText className="w-6 h-6 mb-2 mx-auto group-hover:scale-110 transition-transform" />
             <p className="text-sm font-semibold">New Post</p>
           </button>
           <button className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg text-white hover:shadow-lg transition-all duration-300 group">
             <Users className="w-6 h-6 mb-2 mx-auto group-hover:scale-110 transition-transform" />
             <p className="text-sm font-semibold">Add User</p>
           </button>
           <button className="p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg text-white hover:shadow-lg transition-all duration-300 group">
             <TrendingUp className="w-6 h-6 mb-2 mx-auto group-hover:scale-110 transition-transform" />
             <p className="text-sm font-semibold">Analytics</p>
           </button>
           <button className="p-4 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg text-white hover:shadow-lg transition-all duration-300 group">
             <MessageSquare className="w-6 h-6 mb-2 mx-auto group-hover:scale-110 transition-transform" />
             <p className="text-sm font-semibold">Messages</p>
           </button>
         </div>
       </div>

    </div>
  );
}