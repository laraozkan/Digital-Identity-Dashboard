import { Shield, Image, Mic, Lock, ArrowRight, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

interface HomeOverviewProps {
  darkMode: boolean;
}

export function HomeOverview({ darkMode }: HomeOverviewProps) {
  const score = 72;
  const getScoreColor = (score: number) => {
    if (score >= 80) return { ring: 'stroke-green-500', bg: 'from-green-500/20 to-green-600/10', text: 'text-green-600', label: 'Low Risk' };
    if (score >= 50) return { ring: 'stroke-yellow-500', bg: 'from-yellow-500/20 to-orange-500/10', text: 'text-yellow-600', label: 'Moderate Risk' };
    return { ring: 'stroke-red-500', bg: 'from-red-500/20 to-red-600/10', text: 'text-red-600', label: 'High Risk' };
  };
  
  const scoreData = getScoreColor(score);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Alert Banner */}
      <div className={`${darkMode ? 'bg-blue-950/30 border-blue-800' : 'bg-blue-50 border-blue-200'} border rounded-2xl p-4 flex items-start gap-3`}>
        <AlertCircle className={`w-5 h-5 mt-0.5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
        <div>
          <p className={`${darkMode ? 'text-blue-300' : 'text-blue-900'}`}>
            New exposure detected on 2 platforms
          </p>
          <p className={`text-sm ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
            We found possible face matches on Instagram and TikTok. Review now to protect your data.
          </p>
        </div>
      </div>

      {/* Data Footprint Score Card */}
      <Card className={`${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'} overflow-hidden`}>
        <CardHeader className={`bg-gradient-to-br ${scoreData.bg} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle>Your Digital Exposure Score</CardTitle>
              <CardDescription className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                Based on your online image, voice, and data exposure
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-8 pb-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Score Ring */}
            <div className="relative flex-shrink-0">
              <svg className="w-40 h-40 transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke={darkMode ? '#1f2937' : '#e5e7eb'}
                  strokeWidth="12"
                  fill="none"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  className={scoreData.ring}
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${(score / 100) * 439.6} 439.6`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl">{score}</span>
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>/ 100</span>
              </div>
            </div>

            {/* Score Details */}
            <div className="flex-1 space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Risk Level</span>
                  <span className={`${scoreData.text} px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    {scoreData.label}
                  </span>
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  You have moderate exposure across online platforms. Take action to improve your privacy score.
                </p>
              </div>
              
              <div className="space-y-3 pt-2">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Image Privacy</span>
                    <span>55%</span>
                  </div>
                  <Progress value={55} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Voice Privacy</span>
                    <span>78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Data Vault Security</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className={`${darkMode ? 'bg-gradient-to-br from-purple-950/40 to-purple-900/20 border-purple-800/50' : 'bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200'} hover:shadow-lg transition-shadow`}>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl ${darkMode ? 'bg-purple-900/50' : 'bg-purple-200'} flex items-center justify-center`}>
                <Image className={`w-6 h-6 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`} />
              </div>
              <CardTitle className="text-lg">Image Exposure</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-3xl">45%</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                of your public photos are uncloaked
              </p>
              <p className={`text-xs ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                Found on 12 platforms
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className={`${darkMode ? 'bg-gradient-to-br from-blue-950/40 to-blue-900/20 border-blue-800/50' : 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200'} hover:shadow-lg transition-shadow`}>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl ${darkMode ? 'bg-blue-900/50' : 'bg-blue-200'} flex items-center justify-center`}>
                <Mic className={`w-6 h-6 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`} />
              </div>
              <CardTitle className="text-lg">Voice Exposure</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-3xl">3</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                voice samples detected online
              </p>
              <p className={`text-xs ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                Moderate AI model risk
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className={`${darkMode ? 'bg-gradient-to-br from-indigo-950/40 to-indigo-900/20 border-indigo-800/50' : 'bg-gradient-to-br from-indigo-50 to-indigo-100/50 border-indigo-200'} hover:shadow-lg transition-shadow`}>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl ${darkMode ? 'bg-indigo-900/50' : 'bg-indigo-200'} flex items-center justify-center`}>
                <Lock className={`w-6 h-6 ${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`} />
              </div>
              <CardTitle className="text-lg">Data Vault</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-3xl">28</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                linked apps with stored permissions
              </p>
              <p className={`text-xs ${darkMode ? 'text-indigo-400' : 'text-indigo-700'}`}>
                AES-256 encrypted
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Bar */}
      <Card className={`${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'}`}>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription className={darkMode ? 'text-gray-400' : ''}>
            Take control of your digital identity
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-auto py-4 px-6 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5" />
                <div className="text-left">
                  <div>Cloak My Photos</div>
                  <div className="text-xs opacity-90">Protect 24 images</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button className="h-auto py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <Mic className="w-5 h-5" />
                <div className="text-left">
                  <div>Protect My Voice</div>
                  <div className="text-xs opacity-90">Add voice cloak</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button className="h-auto py-4 px-6 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-xl flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5" />
                <div className="text-left">
                  <div>Open Data Vault</div>
                  <div className="text-xs opacity-90">Manage permissions</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
