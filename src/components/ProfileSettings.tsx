import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { User, Key, Shield, FileText, Smartphone, LogOut, ExternalLink } from 'lucide-react';

interface ProfileSettingsProps {
  darkMode: boolean;
}

export function ProfileSettings({ darkMode }: ProfileSettingsProps) {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Profile Card */}
      <Card className={`${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'}`}>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription className={darkMode ? 'text-gray-400' : ''}>
            Your digital identity information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-6">
            <Avatar className="w-20 h-20">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl">John Doe</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    john.doe@email.com
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge className="bg-green-500 hover:bg-green-600">Verified</Badge>
                    <Badge variant="outline">Premium Member</Badge>
                  </div>
                </div>
                <Button variant="outline">Edit Profile</Button>
              </div>
              
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Key className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    User ID Key
                  </span>
                </div>
                <code className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-700'} block font-mono`}>
                  0x7f9c8b3d4e5a6f1b2c8d9e0a1f3b5c7d
                </code>
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'} mt-2`}>
                  Encryption key stored locally on your device
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card className={`${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'}`}>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Shield className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <div>
              <CardTitle>Security & Privacy</CardTitle>
              <CardDescription className={darkMode ? 'text-gray-400' : ''}>
                Manage your security preferences
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className="font-medium">Two-Factor Authentication</h4>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Add an extra layer of security to your account
              </p>
            </div>
            <Switch checked={true} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className="font-medium">Biometric Login</h4>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Use fingerprint or face recognition
              </p>
            </div>
            <Switch checked={true} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className="font-medium">End-to-End Encryption</h4>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Encrypt all data before sync
              </p>
            </div>
            <Switch checked={true} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className="font-medium">Anonymous Analytics</h4>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Help improve the app with anonymous usage data
              </p>
            </div>
            <Switch checked={false} />
          </div>
        </CardContent>
      </Card>

      {/* Sync Settings */}
      <Card className={`${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'}`}>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Smartphone className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
            <div>
              <CardTitle>Device Sync</CardTitle>
              <CardDescription className={darkMode ? 'text-gray-400' : ''}>
                Manage synced devices
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className="font-medium">Sync Across Devices</h4>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Keep your data vault synchronized (encrypted)
              </p>
            </div>
            <Switch checked={true} />
          </div>

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} space-y-3`}>
            <div className="flex items-center justify-between">
              <div>
                <h5 className="text-sm">iPhone 15 Pro</h5>
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  Last synced: 2 minutes ago
                </p>
              </div>
              <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h5 className="text-sm">MacBook Pro</h5>
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  Last synced: 1 hour ago
                </p>
              </div>
              <Badge variant="outline">Synced</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transparency Reports */}
      <Card className={`${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'}`}>
        <CardHeader>
          <div className="flex items-center gap-3">
            <FileText className={`w-5 h-5 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
            <div>
              <CardTitle>Transparency & Trust</CardTitle>
              <CardDescription className={darkMode ? 'text-gray-400' : ''}>
                View our commitment to your privacy
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className={`w-full justify-between ${darkMode ? 'border-gray-800 hover:bg-gray-900/50' : ''}`}>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              View Open Source Code
            </span>
            <ExternalLink className="w-4 h-4" />
          </Button>

          <Button variant="outline" className={`w-full justify-between ${darkMode ? 'border-gray-800 hover:bg-gray-900/50' : ''}`}>
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Read Transparency Reports
            </span>
            <ExternalLink className="w-4 h-4" />
          </Button>

          <Button variant="outline" className={`w-full justify-between ${darkMode ? 'border-gray-800 hover:bg-gray-900/50' : ''}`}>
            <span className="flex items-center gap-2">
              <Key className="w-4 h-4" />
              Security Audit Results
            </span>
            <Badge className="bg-green-500 hover:bg-green-600">Verified</Badge>
          </Button>
        </CardContent>
      </Card>

      {/* Account Actions */}
      <Card className={`${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'}`}>
        <CardHeader>
          <CardTitle>Account Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start">
            <Download className="w-4 h-4 mr-2" />
            Download All My Data
          </Button>
          
          <Button variant="outline" className="w-full justify-start">
            <User className="w-4 h-4 mr-2" />
            Request Data Deletion
          </Button>
          
          <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </CardContent>
      </Card>

      {/* Version Info */}
      <div className={`text-center text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
        <p>Digital Identity Dashboard v2.1.0</p>
        <p className="text-xs mt-1">
          Built with privacy-first principles • 
          <Button variant="link" className={`h-auto p-0 ml-1 text-xs ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            Terms
          </Button> • 
          <Button variant="link" className={`h-auto p-0 ml-1 text-xs ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            Privacy Policy
          </Button>
        </p>
      </div>
    </div>
  );
}

function Download({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}
