import React from 'react';
import { motion } from 'framer-motion';
import { Pencil, FileText, Target, Users, Magnet, Zap, Globe, TrendingUp, DollarSign, X, Sparkles, ArrowRight, Mail, Linkedin, Award, Building, Clock, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const SampleBriefSection: React.FC = () => {
  return (
    <section id="sample-brief" className="py-20 px-6 bg-gradient-to-br from-white via-gray-100 to-blue-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-5xl font-extrabold text-gray-900 mb-4">
            Sample Lead Brief
          </h3>
          <p className="text-xl text-gray-600">See what you'll receive for every prospect</p>
          <div className="w-32 h-2 bg-yellow-400 mx-auto mt-4 transform rotate-1"></div>
        </div>

        <div className="relative bg-white border-3 border-gray-900 shadow-[16px_16px_0_0_rgb(17,24,39)] transform -rotate-1 hover:rotate-0 transition-transform duration-500 min-h-[1400px]">
          {/* Paper texture and lines - Extended coverage */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
            {/* Notebook lines - Full coverage with more lines */}
            {Array.from({ length: 200 }).map((_, i) => (
              <div key={i} className="absolute left-0 right-0 w-full h-0.5 bg-blue-100" style={{ top: `${40 + i * 16}px` }}></div>
            ))}
            {/* Red margin line - Full height */}
            <div className="absolute top-0 left-16 w-0.5 h-full bg-red-300 opacity-60"></div>
            {/* Hole punches - More distributed */}
            {[20, 50, 80, 110, 140, 170, 200, 230, 260, 290, 320, 350, 380, 410, 440].map((top, i) => (
              <div key={i} className="absolute left-4 w-3 h-3 bg-gray-200 rounded-full border border-gray-300" style={{ top: `${top}px` }}></div>
            ))}
          </div>

          {/* Animated pencil drawing effect */}
          <motion.div
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute top-4 right-4"
          >
            <Pencil className="w-8 h-8 text-yellow-600 transform rotate-45" />
          </motion.div>

          <div className="relative z-10 p-8 space-y-4 pb-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-between border-b-3 border-gray-900 pb-4 mb-4">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h4 className="text-4xl font-black text-gray-900">Sarah Chen</h4>
                <p className="text-xl text-gray-600">VP Marketing @ TechFlow Solutions</p>
                <p className="text-sm text-gray-600 mt-1">Generated on March 15, 2024</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <Linkedin className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-600">linkedin.com/in/sarahchen</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Mail className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">s.chen@techflow.com</span>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right space-y-2">
                <Badge className="bg-green-400 text-gray-900 font-bold text-lg px-4 py-2 shadow-sm">High Priority Lead</Badge>
                <div className="text-sm text-gray-600">Confidence: 94%</div>
                <div className="flex items-center space-x-2 justify-center md:justify-end">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                </div>
              </div>
            </div>

            {/* Executive Summary - Comic Style */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3 }}
              className="bg-yellow-50 border-3 border-yellow-400 p-4 rounded-xl shadow-lg transform -rotate-1 mb-4"
            >
              <h5 className="text-2xl font-black text-gray-900 mb-3 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-yellow-600" />
                Executive Summary
              </h5>
              <div className="bg-white border-2 border-gray-800 p-4 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center border-3 border-gray-800">
                    <span className="text-white font-black text-xl">SC</span>
                  </div>
                  <div>
                    <p className="text-lg font-black text-gray-900">Perfect Timing!</p>
                    <p className="text-sm text-gray-600">Q1 Budget Planning Phase</p>
                    <p className="text-xs text-gray-500 mt-1">Recently promoted • Actively hiring • Budget approved</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-green-100 border-2 border-green-400 p-3 rounded-lg">
                    <div className="text-2xl font-black text-green-600">NEW</div>
                    <div className="text-xs text-gray-600">VP Role</div>
                  </div>
                  <div className="bg-blue-100 border-2 border-blue-400 p-3 rounded-lg">
                    <div className="text-2xl font-black text-blue-600">AI</div>
                    <div className="text-xs text-gray-600">Focused</div>
                  </div>
                  <div className="bg-purple-100 border-2 border-purple-400 p-3 rounded-lg">
                    <div className="text-2xl font-black text-purple-600">$2M</div>
                    <div className="text-xs text-gray-600">Budget</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Content Grid - Compact */}
            <div className="grid lg:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.4 }}
                >
                  <h5 className="text-xl font-black text-gray-900 mb-3 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-blue-600" />
                    Key Insights
                  </h5>
                  <div className="space-y-3">
                    {/* Activity Level */}
                    <div className="bg-white border-2 border-gray-800 p-3 rounded-xl shadow-md">
                      <h6 className="font-black text-gray-900 mb-2 text-sm">Activity Level</h6>
                      <div className="flex items-center space-x-3">
                        <div className="relative w-16 h-16">
                          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#e5e7eb"
                              strokeWidth="3"
                            />
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#3b82f6"
                              strokeWidth="3"
                              strokeDasharray="85, 100"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm font-black text-blue-600">85%</span>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-xs font-bold text-gray-900">High Engagement</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                            <span className="text-xs text-gray-600">Inactive</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Recent Achievements */}
                    <div className="bg-white border-2 border-gray-800 p-3 rounded-xl shadow-md">
                      <h6 className="font-black text-gray-900 mb-2 text-sm">Recent Wins</h6>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between bg-green-50 border border-green-400 p-2 rounded-lg">
                          <span className="font-bold text-green-800 text-xs">VP Promotion</span>
                          <Badge className="bg-green-400 text-green-900 font-black text-xs">3 months</Badge>
                        </div>
                        <div className="flex items-center justify-between bg-blue-50 border border-blue-400 p-2 rounded-lg">
                          <span className="font-bold text-blue-800 text-xs">LinkedIn Article</span>
                          <Badge className="bg-blue-400 text-blue-900 font-black text-xs">15K views</Badge>
                        </div>
                        <div className="flex items-center justify-between bg-purple-50 border border-purple-400 p-2 rounded-lg">
                          <span className="font-bold text-purple-800 text-xs">SaaS Events</span>
                          <Badge className="bg-purple-400 text-purple-900 font-black text-xs">3 recent</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.5 }}
                >
                  <h5 className="text-xl font-black text-gray-900 mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-green-600" />
                    Conversation Starters
                  </h5>
                  <div className="space-y-3">
                    {/* Speech Bubble Style Conversation Starters */}
                    <div className="relative bg-green-100 border-2 border-green-400 p-3 rounded-2xl shadow-lg transform rotate-1">
                      <div className="absolute -top-1 left-4 w-3 h-3 bg-green-100 border-l-2 border-t-2 border-green-400 transform rotate-45"></div>
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center border border-gray-800">
                          <span className="text-white font-black text-xs">1</span>
                        </div>
                        <span className="font-black text-green-800 text-sm">Shared Connection</span>
                      </div>
                      <p className="text-gray-700 font-bold text-xs italic">"Hey! Mike Johnson mentioned you're crushing it at TechFlow!"</p>
                    </div>

                    <div className="relative bg-blue-100 border-2 border-blue-400 p-3 rounded-2xl shadow-lg transform -rotate-1">
                      <div className="absolute -top-1 right-4 w-3 h-3 bg-blue-100 border-r-2 border-t-2 border-blue-400 transform -rotate-45"></div>
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center border border-gray-800">
                          <span className="text-white font-black text-xs">2</span>
                        </div>
                        <span className="font-black text-blue-800 text-sm">Recent Win</span>
                      </div>
                      <p className="text-gray-700 font-bold text-xs italic">"Saw your TechCrunch feature - incredible user growth!"</p>
                    </div>

                    <div className="relative bg-purple-100 border-2 border-purple-400 p-3 rounded-2xl shadow-lg transform rotate-1">
                      <div className="absolute -top-1 left-4 w-3 h-3 bg-purple-100 border-l-2 border-t-2 border-purple-400 transform rotate-45"></div>
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center border border-gray-800">
                          <span className="text-white font-black text-xs">3</span>
                        </div>
                        <span className="font-black text-purple-800 text-sm">Content Hook</span>
                      </div>
                      <p className="text-gray-700 font-bold text-xs italic">"Your AI marketing article was brilliant - 15K views!"</p>
                    </div>
                  </div>
                </motion.div>

                {/* Pain Points Analysis */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.6 }}
                >
                  <h5 className="text-xl font-black text-gray-900 mb-3 flex items-center">
                    <X className="w-5 h-5 mr-2 text-red-600" />
                    Pain Points
                  </h5>
                  <div className="bg-red-50 border-2 border-red-400 p-3 rounded-xl shadow-lg">
                    <div className="space-y-2">
                      <div className="bg-white p-2 rounded-lg border border-red-200">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-red-800 text-xs">Manual Research Time</span>
                          <span className="text-sm font-black text-red-600">60%</span>
                        </div>
                        <div className="w-full bg-red-200 rounded-full h-1">
                          <div className="bg-red-500 h-1 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-red-200">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-red-800 text-xs">EU Conversion Rate</span>
                          <span className="text-sm font-black text-red-600">12%</span>
                        </div>
                        <div className="w-full bg-red-200 rounded-full h-1">
                          <div className="bg-red-500 h-1 rounded-full" style={{ width: '12%' }}></div>
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-red-200">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-red-800 text-xs">Lead Quality Score</span>
                          <span className="text-sm font-black text-red-600">3/10</span>
                        </div>
                        <div className="w-full bg-red-200 rounded-full h-1">
                          <div className="bg-red-500 h-1 rounded-full" style={{ width: '30%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Additional Insights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.7 }}
                >
                  <h5 className="text-xl font-black text-gray-900 mb-3 flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 text-purple-600" />
                    Social Signals
                  </h5>
                  <div className="bg-purple-50 border-2 border-purple-400 p-3 rounded-xl shadow-lg">
                    <div className="space-y-2">
                      <div className="bg-white p-2 rounded-lg border border-purple-200">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-purple-800 text-xs">LinkedIn Activity</span>
                          <Badge className="bg-purple-400 text-purple-900 font-black text-xs">Daily</Badge>
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-purple-200">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-purple-800 text-xs">Industry Events</span>
                          <Badge className="bg-purple-400 text-purple-900 font-black text-xs">Speaker</Badge>
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-purple-200">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-purple-800 text-xs">Content Creation</span>
                          <Badge className="bg-purple-400 text-purple-900 font-black text-xs">Weekly</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.8 }}
                >
                  <h5 className="text-xl font-black text-gray-900 mb-3 flex items-center">
                    <Building className="w-5 h-5 mr-2 text-red-600" />
                    Company Intel
                  </h5>
                  <div className="space-y-3">
                    {/* Company metrics with cartoon charts */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-blue-100 border-2 border-blue-400 p-3 rounded-xl shadow-lg transform -rotate-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-black text-blue-800 text-xs">Team Size</span>
                          <Users className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-black text-blue-600 mb-1">500+</div>
                          <div className="flex justify-center space-x-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <div key={i} className={`w-2 h-4 rounded-full ${i < 4 ? 'bg-blue-500' : 'bg-blue-200'}`}></div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-100 border-2 border-green-400 p-3 rounded-xl shadow-lg transform rotate-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-black text-green-800 text-xs">Funding</span>
                          <DollarSign className="w-4 h-4 text-green-600" />
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-black text-green-600 mb-1">Series B</div>
                          <div className="flex justify-center space-x-1">
                            <div className="w-3 h-3 bg-green-500 rounded-full border border-gray-800"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full border border-gray-800"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full border border-gray-800"></div>
                            <div className="w-3 h-3 bg-gray-300 rounded-full border border-gray-800"></div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-purple-100 border-2 border-purple-400 p-3 rounded-xl shadow-lg transform rotate-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-black text-purple-800 text-xs">Industry</span>
                          <Globe className="w-4 h-4 text-purple-600" />
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-black text-purple-600">B2B SaaS</div>
                          <div className="mt-1 w-8 h-8 bg-purple-400 rounded-full mx-auto border-2 border-gray-800 flex items-center justify-center">
                            <span className="text-white font-black text-xs">SaaS</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-100 border-2 border-yellow-400 p-3 rounded-xl shadow-lg transform -rotate-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-black text-yellow-800 text-xs">Growth</span>
                          <TrendingUp className="w-4 h-4 text-yellow-600" />
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-black text-yellow-600 mb-1">150%</div>
                          <div className="flex justify-center items-end space-x-1 h-6">
                            <div className="w-2 bg-yellow-400 h-1 rounded border border-gray-800"></div>
                            <div className="w-2 bg-yellow-500 h-2 rounded border border-gray-800"></div>
                            <div className="w-2 bg-yellow-600 h-4 rounded border border-gray-800"></div>
                            <div className="w-2 bg-yellow-700 h-6 rounded border border-gray-800"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Tech Stack - Comic Style */}
                    <div className="bg-white border-2 border-gray-800 p-3 rounded-xl shadow-md">
                      <h6 className="font-black text-gray-900 mb-2 flex items-center text-sm">
                        <Zap className="w-4 h-4 mr-1 text-blue-600" />
                        Tech Stack
                      </h6>
                      <div className="grid grid-cols-3 gap-1">
                        {[
                          { name: 'Salesforce', color: 'bg-blue-400' },
                          { name: 'HubSpot', color: 'bg-orange-400' },
                          { name: 'Marketo', color: 'bg-purple-400' },
                          { name: 'Slack', color: 'bg-green-400' },
                          { name: 'Zoom', color: 'bg-blue-500' },
                          { name: 'Notion', color: 'bg-gray-400' }
                        ].map((tech, i) => (
                          <div key={tech.name} className={`${tech.color} border border-gray-800 p-1 rounded-lg text-center transform ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
                            <span className="text-white font-black text-xs">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recent News - Newspaper Style */}
                    <div className="bg-white border-2 border-gray-800 p-3 rounded-xl shadow-md">
                      <h6 className="font-black text-gray-900 mb-2 flex items-center text-sm">
                        <FileText className="w-4 h-4 mr-1 text-green-600" />
                        Hot News
                      </h6>
                      <div className="space-y-2">
                        <div className="bg-green-50 border border-green-400 p-2 rounded-lg transform rotate-1">
                          <div className="flex items-center justify-between">
                            <span className="font-black text-green-800 text-xs">€10M Expansion</span>
                            <Badge className="bg-green-400 text-green-900 font-black text-xs">Q2 2024</Badge>
                          </div>
                        </div>
                        <div className="bg-blue-50 border border-blue-400 p-2 rounded-lg transform -rotate-1">
                          <div className="flex items-center justify-between">
                            <span className="font-black text-blue-800 text-xs">50+ New Hires</span>
                            <Badge className="bg-blue-400 text-blue-900 font-black text-xs">Growing</Badge>
                          </div>
                        </div>
                        <div className="bg-purple-50 border border-purple-400 p-2 rounded-lg transform rotate-1">
                          <div className="flex items-center justify-between">
                            <span className="font-black text-purple-800 text-xs">AI Product Line</span>
                            <Badge className="bg-purple-400 text-purple-900 font-black text-xs">Summer</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.9 }}
                >
                  <h5 className="text-xl font-black text-gray-900 mb-3 flex items-center">
                    <Magnet className="w-5 h-5 mr-2 text-yellow-600" />
                    Perfect Lead Magnet
                  </h5>
                  <div className="bg-yellow-100 border-2 border-yellow-400 p-4 rounded-xl shadow-lg transform -rotate-1">
                    {/* Magnet visual */}
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-blue-500 rounded-lg border-2 border-gray-800 flex items-center justify-center transform rotate-12">
                        <Magnet className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h6 className="text-lg font-black text-gray-900">"European SaaS Playbook"</h6>
                        <p className="text-xs font-bold text-gray-600">25-page comprehensive guide</p>
                      </div>
                    </div>
                    
                    {/* Match percentage */}
                    <div className="bg-white border border-gray-800 p-3 rounded-lg mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-black text-gray-900 text-sm">Perfect Match</span>
                        <span className="text-xl font-black text-green-600">98%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 border border-gray-800">
                        <div className="bg-green-500 h-full rounded-full border-r border-gray-800" style={{ width: '98%' }}></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <Badge className="bg-yellow-400 text-yellow-900 font-black text-sm px-3 py-1 border border-gray-800 shadow-md">
                        🎯 Aligns with €10M expansion!
                      </Badge>
                    </div>
                  </div>
                </motion.div>

                {/* Timing Analysis */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1.0 }}
                >
                  <h5 className="text-xl font-black text-gray-900 mb-3 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-orange-600" />
                    Timing Analysis
                  </h5>
                  <div className="bg-orange-50 border-2 border-orange-400 p-3 rounded-xl shadow-lg">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white p-2 rounded-lg border border-orange-200 text-center">
                        <div className="text-sm font-black text-orange-600">Q1</div>
                        <div className="text-xs text-gray-600">Budget Planning</div>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-orange-200 text-center">
                        <div className="text-sm font-black text-orange-600">3 Months</div>
                        <div className="text-xs text-gray-600">In New Role</div>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-orange-200 text-center">
                        <div className="text-sm font-black text-orange-600">Active</div>
                        <div className="text-xs text-gray-600">Hiring Mode</div>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-orange-200 text-center">
                        <div className="text-sm font-black text-orange-600">High</div>
                        <div className="text-xs text-gray-600">Engagement</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Competitive Intelligence */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1.1 }}
                >
                  <h5 className="text-xl font-black text-gray-900 mb-3 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-indigo-600" />
                    Competitive Edge
                  </h5>
                  <div className="bg-indigo-50 border-2 border-indigo-400 p-3 rounded-xl shadow-lg">
                    <div className="space-y-2">
                      <div className="bg-white p-2 rounded-lg border border-indigo-200">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-indigo-800 text-xs">Current Tools</span>
                          <Badge className="bg-indigo-400 text-indigo-900 font-black text-xs">Legacy</Badge>
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-indigo-200">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-indigo-800 text-xs">Pain Point</span>
                          <Badge className="bg-red-400 text-red-900 font-black text-xs">Manual</Badge>
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-indigo-200">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-indigo-800 text-xs">Our Solution</span>
                          <Badge className="bg-green-400 text-green-900 font-black text-xs">AI-Powered</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Next Steps - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 1.2 }}
              className="bg-blue-50 border-2 border-blue-400 p-4 rounded-xl shadow-md mt-4"
            >
              <h5 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-blue-600" />
                Recommended Next Steps
              </h5>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded-lg border border-blue-200 text-center">
                  <div className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">1</div>
                  <h6 className="font-black text-blue-800 mb-1 text-sm">LinkedIn Connection</h6>
                  <p className="text-xs text-gray-600 mb-2">Mention Mike Johnson and congratulate on TechCrunch coverage</p>
                  <Badge className="bg-blue-100 text-blue-800 font-bold text-xs">Within 24h</Badge>
                </div>
                <div className="bg-white p-3 rounded-lg border border-blue-200 text-center">
                  <div className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">2</div>
                  <h6 className="font-black text-blue-800 mb-1 text-sm">Email Playbook</h6>
                  <p className="text-xs text-gray-600 mb-2">Send European Market Entry guide, mention €10M expansion</p>
                  <Badge className="bg-green-100 text-green-800 font-bold text-xs">Day 3</Badge>
                </div>
                <div className="bg-white p-3 rounded-lg border border-blue-200 text-center">
                  <div className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">3</div>
                  <h6 className="font-black text-blue-800 mb-1 text-sm">Schedule Demo</h6>
                  <p className="text-xs text-gray-600 mb-2">30-minute demo focusing on automation and EU compliance</p>
                  <Badge className="bg-purple-100 text-purple-800 font-bold text-xs">Week 2</Badge>
                </div>
              </div>
            </motion.div>

            {/* Success Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 1.3 }}
              className="bg-white border-2 border-gray-800 p-4 rounded-xl shadow-md"
            >
              <h5 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                <Award className="w-4 h-4 mr-2 text-green-600" />
                Expected Impact
              </h5>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-green-50 p-3 rounded-lg border border-green-200 text-center">
                  <div className="text-2xl font-black text-green-600 mb-1">+40%</div>
                  <p className="text-xs font-bold text-green-800">Conversion Rate</p>
                  <p className="text-xs text-gray-600">vs. cold outreach</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg border border-green-200 text-center">
                  <div className="text-2xl font-black text-green-600 mb-1">80%</div>
                  <p className="text-xs font-bold text-green-800">Time Saved</p>
                  <p className="text-xs text-gray-600">on research</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg border border-green-200 text-center">
                  <div className="text-2xl font-black text-green-600 mb-1">9/10</div>
                  <p className="text-xs font-bold text-green-800">Lead Quality</p>
                  <p className="text-xs text-gray-600">score improvement</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleBriefSection;