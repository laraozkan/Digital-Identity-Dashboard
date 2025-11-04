import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Shield, Scan, Vault, DollarSign, BookOpen, User, Moon, Sun } from 'lucide-react';
import { HomeOverview } from './components/HomeOverview';
import { ExposureScanner } from './components/ExposureScanner';
import { DataVault } from './components/DataVault';
import { Monetization } from './components/Monetization';
import { EducationInsights } from './components/EducationInsights';
import { ProfileSettings } from './components/ProfileSettings';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-950 text-white' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-gray-50'} transition-colors duration-300`}>
      {/* Header */}
      <header className={`${darkMode ? 'bg-gray-900/50' : 'bg-white/80'} backdrop-blur-lg border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'} sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl tracking-tight">Digital Identity Dashboard</h1>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Control your digital footprint</p>
              </div>
            </div>
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="home" className="space-y-6">
          <TabsList className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white/80'} backdrop-blur-lg p-1.5 rounded-2xl border shadow-lg inline-flex gap-1`}>
            <TabsTrigger value="home" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-xl px-4 py-2.5">
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </TabsTrigger>
            <TabsTrigger value="scanner" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-xl px-4 py-2.5">
              <Scan className="w-4 h-4" />
              <span className="hidden sm:inline">Exposure</span>
            </TabsTrigger>
            <TabsTrigger value="vault" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-xl px-4 py-2.5">
              <Vault className="w-4 h-4" />
              <span className="hidden sm:inline">Data Vault</span>
            </TabsTrigger>
            <TabsTrigger value="monetization" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-xl px-4 py-2.5">
              <DollarSign className="w-4 h-4" />
              <span className="hidden sm:inline">Monetize</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-xl px-4 py-2.5">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Insights</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-xl px-4 py-2.5">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home">
            <HomeOverview darkMode={darkMode} />
          </TabsContent>
          
          <TabsContent value="scanner">
            <ExposureScanner darkMode={darkMode} />
          </TabsContent>
          
          <TabsContent value="vault">
            <DataVault darkMode={darkMode} />
          </TabsContent>
          
          <TabsContent value="monetization">
            <Monetization darkMode={darkMode} />
          </TabsContent>
          
          <TabsContent value="education">
            <EducationInsights darkMode={darkMode} />
          </TabsContent>
          
          <TabsContent value="profile">
            <ProfileSettings darkMode={darkMode} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
