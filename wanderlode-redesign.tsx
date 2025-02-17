import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Map, Award, MessageSquare, ArrowRight } from 'lucide-react';

const WanderlodePlatform = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Copper Porphyry System",
      location: "Northern Arizona",
      description: "Large outcrop showing typical copper porphyry mineralization with significant alteration halos.",
      mineralization: "Copper, Molybdenum",
      status: "Early Stage",
      interest: "High",
      updates: 12,
      comments: 8,
      lastActivity: "2h ago"
    },
    {
      id: 2,
      title: "Gold-bearing Quartz Veins",
      location: "Eastern Nevada",
      description: "Series of parallel quartz veins with visible gold and sulfides.",
      mineralization: "Gold, Silver",
      status: "Advanced Exploration",
      interest: "Medium",
      updates: 6,
      comments: 15,
      lastActivity: "1d ago"
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">WanderLode</h1>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              + New Discovery
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
              <Map className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="font-semibold text-gray-900">Active Projects</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">24</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
              <Award className="h-5 w-5 text-green-600 mr-2" />
              <h3 className="font-semibold text-gray-900">Success Rate</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">68%</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
              <MessageSquare className="h-5 w-5 text-purple-600 mr-2" />
              <h3 className="font-semibold text-gray-900">Active Discussions</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900">156</p>
          </div>
        </div>

        <div className="space-y-6">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h2>
                    <p className="text-gray-600 flex items-center">
                      <Map className="h-4 w-4 mr-1" />
                      {project.location}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.interest === 'High' ? 'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.interest} Interest
                  </span>
                </div>
                
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Status</p>
                    <p className="font-medium text-gray-900">{project.status}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Type</p>
                    <p className="font-medium text-gray-900">{project.mineralization}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Last Activity</p>
                    <p className="font-medium text-gray-900">{project.lastActivity}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <div className="flex space-x-4">
                    <span className="text-gray-600 flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {project.comments} Comments
                    </span>
                    <span className="text-gray-600">
                      {project.updates} Updates
                    </span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                    View Details 
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WanderlodePlatform;