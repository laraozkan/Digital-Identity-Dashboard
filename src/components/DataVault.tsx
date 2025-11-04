import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { Fingerprint, MessageSquare, FileText, Smartphone, Lock, Download, Key, RefreshCw, ChevronDown, ChevronRight } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

interface DataVaultProps {
  darkMode: boolean;
}

export function DataVault({ darkMode }: DataVaultProps) {
  const [openSections, setOpenSections] = useState<string[]>(['biometric']);

  const toggleSection = (section: string) => {
    setOpenSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const vaultSections = [
    {
      id: 'biometric',
      icon: Fingerprint,
      title: 'Biometric Data',
      color: 'purple',
      items: [
        { name: 'Facial Recognition Data', apps: 3, status: 'encrypted', sharing: true },
        { name: 'Voice Prints', apps: 2, status: 'encrypted', sharing: false },
        { name: 'Fingerprint Scans', apps: 1, status: 'local', sharing: false }
      ]
    },
    {
      id: 'communication',
      icon: MessageSquare,
      title: 'Communication Data',
      color: 'blue',
      items: [
        { name: 'Message History', apps: 5, status: 'encrypted', sharing: true },
        { name: 'Call Logs', apps: 2, status: 'encrypted', sharing: false },
        { name: 'Email Metadata', apps: 4, status: 'encrypted', sharing: true }
      ]
    },
    {
      id: 'documents',
      icon: FileText,
      title: 'Documents',
      color: 'indigo',
      items: [
        { name: 'Identity Documents', apps: 2, status: 'local', sharing: false },
        { name: 'Medical Records', apps: 1, status: 'encrypted', sharing: false },
        { name: 'Financial Statements', apps: 3, status: 'encrypted', sharing: true }
      ]
    },
    {
      id: 'apps',
      icon: Smartphone,
      title: 'Connected Apps',
      color: 'green',
      items: [
        { name: 'Social Media (5 apps)', apps: 5, status: 'shared', sharing: true },
        { name: 'Banking Apps (3 apps)', apps: 3, status: 'encrypted', sharing: true },
        { name: 'Health & Fitness (4 apps)', apps: 4, status: 'shared', sharing: true }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; icon: string }> = {
      purple: {
        bg: darkMode ? 'bg-purple-950/40' : 'bg-purple-100',
        text: darkMode ? 'text-purple-300' : 'text-purple-700',
        icon: darkMode ? 'bg-purple-900/50' : 'bg-purple-200'
      },
      blue: {
        bg: darkMode ? 'bg-blue-950/40' : 'bg-blue-100',
        text: darkMode ? 'text-blue-300' : 'text-blue-700',
        icon: darkMode ? 'bg-blue-900/50' : 'bg-blue-200'
      },
      indigo: {
        bg: darkMode ? 'bg-indigo-950/40' : 'bg-indigo-100',
        text: darkMode ? 'text-indigo-300' : 'text-indigo-700',
        icon: darkMode ? 'bg-indigo-900/50' : 'bg-indigo-200'
      },
      green: {
        bg: darkMode ? 'bg-green-950/40' : 'bg-green-100',
        text: darkMode ? 'text-green-300' : 'text-green-700',
        icon: darkMode ? 'bg-green-900/50' : 'bg-green-200'
      }
    };
    return colors[color];
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'encrypted':
        return <Badge className="bg-green-500 hover:bg-green-600">Encrypted</Badge>;
      case 'local':
        return <Badge className="bg-blue-500 hover:bg-blue-600">Local Only</Badge>;
      case 'shared':
        return <Badge variant="outline">Shared</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Encryption Status Banner */}
      <Card className={`${darkMode ? 'bg-gradient-to-r from-green-950/40 to-green-900/20 border-green-800/50' : 'bg-gradient-to-r from-green-50 to-green-100/50 border-green-200'}`}>
        <CardContent className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl ${darkMode ? 'bg-green-900/50' : 'bg-green-200'} flex items-center justify-center`}>
                <Lock className={`w-6 h-6 ${darkMode ? 'text-green-300' : 'text-green-700'}`} />
              </div>
              <div>
                <h3 className={`font-medium ${darkMode ? 'text-green-300' : 'text-green-900'}`}>
                  Encryption Status: Active
                </h3>
                <p className={`text-sm ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                  AES-256 end-to-end encryption enabled • Last synced 2 minutes ago
                </p>
              </div>
            </div>
            <Badge className="bg-green-600 hover:bg-green-700 text-white">
              Secure
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button variant="outline" className={`h-auto py-4 justify-start gap-3 ${darkMode ? 'border-gray-800 hover:bg-gray-900/50' : ''}`}>
          <Download className="w-5 h-5" />
          <div className="text-left">
            <div>Export Vault</div>
            <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Download encrypted backup</div>
          </div>
        </Button>
        
        <Button variant="outline" className={`h-auto py-4 justify-start gap-3 ${darkMode ? 'border-gray-800 hover:bg-gray-900/50' : ''}`}>
          <Key className="w-5 h-5" />
          <div className="text-left">
            <div>Add New Key</div>
            <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Generate encryption key</div>
          </div>
        </Button>
        
        <Button variant="outline" className={`h-auto py-4 justify-start gap-3 ${darkMode ? 'border-gray-800 hover:bg-gray-900/50' : ''}`}>
          <RefreshCw className="w-5 h-5" />
          <div className="text-left">
            <div>Sync Settings</div>
            <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Manage device sync</div>
          </div>
        </Button>
      </div>

      {/* Vault Sections */}
      <div className="space-y-3">
        {vaultSections.map((section) => {
          const colors = getColorClasses(section.color);
          const Icon = section.icon;
          const isOpen = openSections.includes(section.id);

          return (
            <Collapsible
              key={section.id}
              open={isOpen}
              onOpenChange={() => toggleSection(section.id)}
            >
              <Card className={`${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'}`}>
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-gray-50/5 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center`}>
                          <Icon className={`w-6 h-6 ${colors.text}`} />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{section.title}</CardTitle>
                          <CardDescription className={darkMode ? 'text-gray-400' : ''}>
                            {section.items.length} items • {section.items.reduce((sum, item) => sum + item.apps, 0)} app connections
                          </CardDescription>
                        </div>
                      </div>
                      {isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <CardContent className="pt-0 space-y-3">
                    {section.items.map((item, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} flex items-center justify-between`}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium">{item.name}</h4>
                            {getStatusBadge(item.status)}
                          </div>
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {item.status === 'local' ? 'Stored locally' : `Shared with ${item.apps} apps`}
                          </p>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="text-right mr-2">
                            <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Allow sharing</p>
                          </div>
                          <Switch checked={item.sharing} />
                          <Button size="sm" variant="outline">
                            Manage
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          );
        })}
      </div>

      {/* Storage Summary */}
      <Card className={`${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'}`}>
        <CardHeader>
          <CardTitle>Vault Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Total Items</p>
              <p className="text-2xl">12</p>
            </div>
            <div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Connected Apps</p>
              <p className="text-2xl">28</p>
            </div>
            <div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Encryption Coverage</p>
              <p className="text-2xl">100%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
