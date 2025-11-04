import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { BookOpen, Shield, AlertTriangle, TrendingUp, ExternalLink, ChevronRight } from 'lucide-react';

interface EducationInsightsProps {
  darkMode: boolean;
}

export function EducationInsights({ darkMode }: EducationInsightsProps) {
  const laws = [
    {
      name: 'GDPR',
      region: 'European Union',
      status: 'Active',
      description: 'Comprehensive data protection regulation giving EU citizens control over personal data',
      coverage: 'Full protection'
    },
    {
      name: 'CCPA',
      region: 'California, USA',
      status: 'Active',
      description: 'California Consumer Privacy Act grants residents rights to know, delete, and opt-out',
      coverage: 'Strong protection'
    },
    {
      name: 'LGPD',
      region: 'Brazil',
      status: 'Active',
      description: 'Lei Geral de Proteção de Dados protects personal data of Brazilian citizens',
      coverage: 'Full protection'
    },
    {
      name: 'PIPEDA',
      region: 'Canada',
      status: 'Active',
      description: 'Personal Information Protection and Electronic Documents Act',
      coverage: 'Moderate protection'
    }
  ];

  const risks = [
    {
      title: 'AI Deepfake Technology Advancing',
      severity: 'high',
      date: 'Nov 1, 2025',
      description: 'New AI models can generate realistic deepfakes with just 3 seconds of voice data. Ensure your voice samples are protected.',
      impact: '45% increase in voice cloning attacks'
    },
    {
      title: 'Social Media Data Scraping Surge',
      severity: 'medium',
      date: 'Oct 28, 2025',
      description: 'Multiple platforms report increased unauthorized data scraping activities targeting profile photos and biometric data.',
      impact: '3.2M users affected'
    },
    {
      title: 'Location Data Privacy Concerns',
      severity: 'medium',
      date: 'Oct 25, 2025',
      description: 'Study reveals major apps sharing precise location data with third-party advertisers without clear consent.',
      impact: '78% of mobile apps'
    }
  ];

  const updates = [
    {
      title: 'EU Passes New AI Regulation Act',
      date: 'Oct 30, 2025',
      region: 'European Union',
      description: 'First comprehensive AI regulation in the world, includes strict rules for biometric data usage and facial recognition.',
      link: '#'
    },
    {
      title: 'California Expands CCPA to Include AI Training Data',
      date: 'Oct 22, 2025',
      region: 'California, USA',
      description: 'Amendment requires companies to disclose if consumer data is used for AI model training and allows opt-out.',
      link: '#'
    },
    {
      title: 'UK Strengthens Data Protection Framework',
      date: 'Oct 15, 2025',
      region: 'United Kingdom',
      description: 'New requirements for data portability and enhanced rights for automated decision-making.',
      link: '#'
    }
  ];

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'high':
        return <Badge variant="destructive">High Risk</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Medium Risk</Badge>;
      case 'low':
        return <Badge className="bg-green-500 hover:bg-green-600">Low Risk</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <Card className={`${darkMode ? 'bg-gradient-to-br from-indigo-950/40 to-indigo-900/20 border-indigo-800/50' : 'bg-gradient-to-br from-indigo-50 to-indigo-100/50 border-indigo-200'}`}>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-xl ${darkMode ? 'bg-indigo-900/50' : 'bg-indigo-200'} flex items-center justify-center`}>
              <BookOpen className={`w-6 h-6 ${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`} />
            </div>
            <div>
              <CardTitle>Understand Your Data Rights</CardTitle>
              <CardDescription className={darkMode ? 'text-indigo-400' : 'text-indigo-700'}>
                Stay informed about privacy laws and emerging threats
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Laws That Protect You */}
      <Card className={`${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'}`}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Laws That Protect You</CardTitle>
              <CardDescription className={darkMode ? 'text-gray-400' : ''}>
                Key privacy regulations around the world
              </CardDescription>
            </div>
            <Shield className={`w-6 h-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {laws.map((law, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium">{law.name}</h4>
                    <Badge variant="outline" className={darkMode ? 'border-green-700 text-green-400' : 'border-green-600 text-green-700'}>
                      {law.status}
                    </Badge>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'} mb-2`}>
                    {law.region}
                  </p>
                </div>
                <Badge className="bg-blue-500 hover:bg-blue-600">{law.coverage}</Badge>
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {law.description}
              </p>
              <Button variant="link" className={`p-0 h-auto mt-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Learn more <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Top Privacy Risks */}
      <Card className={`${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'}`}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Top 3 Privacy Risks This Week</CardTitle>
              <CardDescription className={darkMode ? 'text-gray-400' : ''}>
                Stay aware of emerging threats to your digital identity
              </CardDescription>
            </div>
            <AlertTriangle className={`w-6 h-6 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {risks.map((risk, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border-l-4 ${
                risk.severity === 'high'
                  ? darkMode ? 'border-red-500 bg-red-950/20' : 'border-red-500 bg-red-50'
                  : darkMode ? 'border-yellow-500 bg-yellow-950/20' : 'border-yellow-500 bg-yellow-50'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium">{risk.title}</h4>
                    {getSeverityBadge(risk.severity)}
                  </div>
                  <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'} mb-2`}>
                    {risk.date}
                  </p>
                </div>
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-700'} mb-2`}>
                {risk.description}
              </p>
              <div className="flex items-center gap-2">
                <TrendingUp className={`w-4 h-4 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`} />
                <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  {risk.impact}
                </span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Latest Privacy Updates */}
      <Card className={`${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'}`}>
        <CardHeader>
          <CardTitle>Latest AI Privacy Updates</CardTitle>
          <CardDescription className={darkMode ? 'text-gray-400' : ''}>
            Recent developments in privacy legislation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {updates.map((update, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'} transition-colors cursor-pointer group`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium group-hover:text-blue-600">{update.title}</h4>
                    <ChevronRight className={`w-4 h-4 ${darkMode ? 'text-gray-600' : 'text-gray-400'} group-hover:translate-x-1 transition-transform`} />
                  </div>
                  <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'} mb-2`}>
                    {update.date} • {update.region}
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {update.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Tips */}
      <Card className={`${darkMode ? 'bg-gradient-to-br from-blue-950/40 to-blue-900/20 border-blue-800/50' : 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200'}`}>
        <CardHeader>
          <CardTitle>Quick Privacy Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className={`flex items-start gap-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mt-0.5`}>•</span>
              <span>Review and revoke unused app permissions monthly</span>
            </li>
            <li className={`flex items-start gap-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mt-0.5`}>•</span>
              <span>Use VoiceCloak to protect against AI voice cloning attacks</span>
            </li>
            <li className={`flex items-start gap-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mt-0.5`}>•</span>
              <span>Enable two-factor authentication on all important accounts</span>
            </li>
            <li className={`flex items-start gap-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mt-0.5`}>•</span>
              <span>Regularly audit which platforms have your biometric data</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
