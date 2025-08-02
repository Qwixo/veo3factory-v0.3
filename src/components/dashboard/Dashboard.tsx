import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Bot, Video, Calendar, TrendingUp, Settings, Play } from 'lucide-react';

export function Dashboard() {
  const { user } = useAuth();

  const stats = [
    { label: 'Videos Generated', value: '127', icon: Video, color: 'text-blue-400' },
    { label: 'Total Views', value: '2.4M', icon: TrendingUp, color: 'text-green-400' },
    { label: 'Posts This Month', value: '89', icon: Calendar, color: 'text-purple-400' },
    { label: 'Automation Status', value: 'Active', icon: Bot, color: 'text-yellow-400' },
  ];

  const recentVideos = [
    { title: 'ASMR Fruit Cutting #127', views: '45.2K', platform: 'TikTok', status: 'Published' },
    { title: 'Satisfying Slime Mix #126', views: '38.7K', platform: 'Instagram', status: 'Published' },
    { title: 'Kinetic Sand Art #125', views: '52.1K', platform: 'YouTube', status: 'Published' },
    { title: 'Color Mixing Magic #124', views: '41.9K', platform: 'TikTok', status: 'Processing' },
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back, {user?.profile?.full_name || user?.email.split('@')[0]}!
          </h1>
          <p className="text-gray-400">
            Your viral automation system is running smoothly. Here's your overview:
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-yellow-400 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Videos */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Recent Videos</h2>
                <button className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors">
                  View All
                </button>
              </div>
              
              <div className="space-y-4">
                {recentVideos.map((video, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                        <Play className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">{video.title}</h3>
                        <p className="text-gray-400 text-sm">
                          {video.views} views • {video.platform}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        video.status === 'Published'
                          ? 'bg-green-900 text-green-300'
                          : 'bg-yellow-900 text-yellow-300'
                      }`}
                    >
                      {video.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <Settings className="w-5 h-5 text-yellow-400" />
                  <span className="text-white">Automation Settings</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <Video className="w-5 h-5 text-blue-400" />
                  <span className="text-white">Generate Video Now</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-white">View Analytics</span>
                </button>
              </div>
            </div>

            {/* Automation Status */}
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">System Status</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">VEO 3 API</span>
                  <span className="flex items-center text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    Connected
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">GROK Integration</span>
                  <span className="flex items-center text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    Active
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Social Posting</span>
                  <span className="flex items-center text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    Running
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Next Post</span>
                  <span className="text-gray-400">in 3h 24m</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}