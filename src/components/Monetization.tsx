import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Badge } from './ui/badge';
import { DollarSign, TrendingUp, Users, Activity, Lock, Shield } from 'lucide-react';

interface MonetizationProps {
  darkMode: boolean;
}

export function Monetization({ darkMode }: MonetizationProps) {
  const dataCategories = [
    { name: 'Demographics', value: '$12/mo', status: 'protected', sharing: false, description: 'Age, gender, location' },
    { name: 'Browsing Behavior', value: '$8/mo', status: 'monetizable', sharing: true, description: 'Web activity, interests' },
    { name: 'Biometric Data', value: '$25/mo', status: 'protected', sharing: false, description: 'Face, voice, fingerprint' },
    { name: 'Health & Fitness', value: '$18/mo', status: 'protected', sharing: false, description: 'Activity, heart rate, sleep' },
    { name: 'Shopping Preferences', value: '$15/mo', status: 'shared', sharing: true, description: 'Purchase history, wishlists' },
    { name: 'Communication Metadata', value: '$10/mo', status: 'protected', sharing: false, description: 'Contact patterns, frequency' },
    { name: 'Location History', value: '$20/mo', status: 'shared', sharing: true, description: 'Travel patterns, frequented places' },
    { name: 'Device Usage', value: '$6/mo', status: 'monetizable', sharing: false, description: 'App usage, screen time' }
  ];

  const sharedCategories = dataCategories.filter(cat => cat.sharing);
  const potentialValue = dataCategories.reduce((sum, cat) => {
    const value = parseInt(cat.value.replace(/[^0-9]/g, ''));
    return sum + value;
  }, 0);
  const currentValue = sharedCategories.reduce((sum, cat) => {
    const value = parseInt(cat.value.replace(/[^0-9]/g, ''));
    return sum + value;
  }, 0);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'protected':
        return <Badge className="bg-green-500 hover:bg-green-600">Protected</Badge>;
      case 'monetizable':
        return <Badge className="bg-blue-500 hover:bg-blue-600">Monetizable</Badge>;
      case 'shared':
        return <Badge className="bg-purple-500 hover:bg-purple-600">Shared</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Value Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className={`${darkMode ? 'bg-gradient-to-br from-green-950/40 to-green-900/20 border-green-800/50' : 'bg-gradient-to-br from-green-50 to-green-100/50 border-green-200'}`}>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl ${darkMode ? 'bg-green-900/50' : 'bg-green-200'} flex items-center justify-center`}>
                <DollarSign className={`w-6 h-6 ${darkMode ? 'text-green-300' : 'text-green-700'}`} />
              </div>
              <CardTitle className="text-lg">Current Earnings</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-3xl">${currentValue}</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                per month from {sharedCategories.length} data categories
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className={`${darkMode ? 'bg-gradient-to-br from-blue-950/40 to-blue-900/20 border-blue-800/50' : 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200'}`}>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl ${darkMode ? 'bg-blue-900/50' : 'bg-blue-200'} flex items-center justify-center`}>
                <TrendingUp className={`w-6 h-6 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`} />
              </div>
              <CardTitle className="text-lg">Potential Value</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-3xl">${potentialValue}</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                if all categories shared
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className={`${darkMode ? 'bg-gradient-to-br from-purple-950/40 to-purple-900/20 border-purple-800/50' : 'bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200'}`}>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl ${darkMode ? 'bg-purple-900/50' : 'bg-purple-200'} flex items-center justify-center`}>
                <Users className={`w-6 h-6 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`} />
              </div>
              <CardTitle className="text-lg">Active Buyers</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-3xl">12</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                verified data partners
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Sharing Chart */}
      <Card className={`${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'}`}>
        <CardHeader>
          <CardTitle>Data Sharing Overview</CardTitle>
          <CardDescription className={darkMode ? 'text-gray-400' : ''}>
            Visual breakdown of your data privacy vs monetization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1">
              <div className="h-12 rounded-lg overflow-hidden flex">
                <div 
                  className="bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white text-sm"
                  style={{ width: `${((dataCategories.length - sharedCategories.length) / dataCategories.length) * 100}%` }}
                >
                  Protected
                </div>
                <div 
                  className="bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center text-white text-sm"
                  style={{ width: `${(sharedCategories.length / dataCategories.length) * 100}%` }}
                >
                  Shared
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-green-500"></div>
              <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {dataCategories.length - sharedCategories.length} categories protected
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-purple-500"></div>
              <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {sharedCategories.length} categories shared
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Categories */}
      <Card className={`${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'}`}>
        <CardHeader>
          <CardTitle>Data Categories</CardTitle>
          <CardDescription className={darkMode ? 'text-gray-400' : ''}>
            Control which data you want to monetize
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {dataCategories.map((category, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} flex items-center justify-between`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium">{category.name}</h4>
                  {getStatusBadge(category.status)}
                  <span className={`text-sm ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                    {category.value}
                  </span>
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {category.description}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right mr-2">
                  <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    {category.sharing ? 'Sharing enabled' : 'Private'}
                  </p>
                </div>
                <Switch checked={category.sharing} />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Set Sharing Rules */}
      <Card className={`${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'}`}>
        <CardHeader>
          <CardTitle>Sharing Rules</CardTitle>
          <CardDescription className={darkMode ? 'text-gray-400' : ''}>
            Define who can access your data and for what purpose
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className={`p-4 rounded-lg border-2 ${darkMode ? 'border-blue-800 bg-blue-950/20' : 'border-blue-200 bg-blue-50'}`}>
              <div className="flex items-start gap-3 mb-3">
                <Activity className={`w-5 h-5 mt-0.5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <div>
                  <h4 className={`font-medium mb-1 ${darkMode ? 'text-blue-300' : 'text-blue-900'}`}>
                    Research & Analytics Only
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
                    Your data will only be used for research purposes and market analytics. No advertising or profiling.
                  </p>
                </div>
              </div>
              <Switch checked={true} />
            </div>

            <div className={`p-4 rounded-lg border-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-start gap-3 mb-3">
                <Shield className={`w-5 h-5 mt-0.5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                <div>
                  <h4 className={`font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                    Anonymized Only
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    All personally identifiable information will be removed before sharing.
                  </p>
                </div>
              </div>
              <Switch checked={true} />
            </div>

            <div className={`p-4 rounded-lg border-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-start gap-3 mb-3">
                <Lock className={`w-5 h-5 mt-0.5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                <div>
                  <h4 className={`font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                    Verified Partners Only
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Only share with companies that pass privacy and security audits.
                  </p>
                </div>
              </div>
              <Switch checked={true} />
            </div>
          </div>

          <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Update Sharing Preferences
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
