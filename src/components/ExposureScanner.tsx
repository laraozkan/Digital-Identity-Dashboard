import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Image, Mic, MapPin, FileText, Shield, X, AlertTriangle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ExposureScannerProps {
  darkMode: boolean;
}

export function ExposureScanner({ darkMode }: ExposureScannerProps) {
  const [scanning, setScanning] = useState(false);
  const [filter, setFilter] = useState<'all' | 'image' | 'voice' | 'text' | 'location'>('all');

  const exposures = [
    {
      id: 1,
      type: 'image',
      platform: 'Instagram',
      description: 'Possible face match found in 3 posts',
      status: 'uncloaked',
      riskLevel: 'high',
      thumbnail: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      type: 'image',
      platform: 'TikTok',
      description: 'Face detected in profile picture',
      status: 'uncloaked',
      riskLevel: 'medium',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      type: 'voice',
      platform: 'YouTube',
      description: 'Voice sample detected in video comments',
      status: 'pending',
      riskLevel: 'medium',
      thumbnail: null
    },
    {
      id: 4,
      type: 'image',
      platform: 'Reddit',
      description: 'Possible face match in r/travel',
      status: 'cloaked',
      riskLevel: 'low',
      thumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    },
    {
      id: 5,
      type: 'location',
      platform: 'Twitter/X',
      description: 'Location metadata found in 12 posts',
      status: 'uncloaked',
      riskLevel: 'high',
      thumbnail: null
    },
    {
      id: 6,
      type: 'image',
      platform: 'LinkedIn',
      description: 'Professional photo analysis',
      status: 'cloaked',
      riskLevel: 'low',
      thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
    }
  ];

  const filteredExposures = filter === 'all' 
    ? exposures 
    : exposures.filter(e => e.type === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'uncloaked': return darkMode ? 'bg-red-950/50 text-red-300 border-red-800' : 'bg-red-50 text-red-700 border-red-200';
      case 'cloaked': return darkMode ? 'bg-green-950/50 text-green-300 border-green-800' : 'bg-green-50 text-green-700 border-green-200';
      case 'pending': return darkMode ? 'bg-yellow-950/50 text-yellow-300 border-yellow-800' : 'bg-yellow-50 text-yellow-700 border-yellow-200';
      default: return darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700';
    }
  };

  const getRiskBadge = (level: string) => {
    switch (level) {
      case 'high': return <Badge variant="destructive" className="capitalize">{level}</Badge>;
      case 'medium': return <Badge className="bg-yellow-500 hover:bg-yellow-600 capitalize">{level}</Badge>;
      case 'low': return <Badge className="bg-green-500 hover:bg-green-600 capitalize">{level}</Badge>;
      default: return null;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'image': return <Image className="w-4 h-4" />;
      case 'voice': return <Mic className="w-4 h-4" />;
      case 'location': return <MapPin className="w-4 h-4" />;
      case 'text': return <FileText className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Scanner Header */}
      <Card className={`${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'}`}>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle>Exposure Scanner</CardTitle>
              <CardDescription className={darkMode ? 'text-gray-400' : ''}>
                Monitor your digital footprint across the web
              </CardDescription>
            </div>
            <Button 
              onClick={() => {
                setScanning(true);
                setTimeout(() => setScanning(false), 3000);
              }}
              disabled={scanning}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {scanning ? 'Scanning...' : 'Start New Scan'}
            </Button>
          </div>
        </CardHeader>
        
        {scanning && (
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  Scanning for face and voice matches across the web...
                </span>
                <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>47%</span>
              </div>
              <Progress value={47} className="h-2" />
              <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                Checking Instagram, TikTok, YouTube, Reddit, Twitter/X, and 15 other platforms
              </p>
            </div>
          </CardContent>
        )}
      </Card>

      {/* AI Risk Widget */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className={`${darkMode ? 'bg-gradient-to-br from-red-950/40 to-red-900/20 border-red-800/50' : 'bg-gradient-to-br from-red-50 to-red-100/50 border-red-200'}`}>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              AI Model Risk
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl">High</span>
                <Badge variant="destructive">Alert</Badge>
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Your images and voice can be used to train AI models
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className={`${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'}`}>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Total Exposures</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-3xl">{exposures.length}</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Across {new Set(exposures.map(e => e.platform)).size} platforms
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className={`${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'}`}>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Protection Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-3xl">33%</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {exposures.filter(e => e.status === 'cloaked').length} items cloaked
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filter Bar */}
      <div className={`flex flex-wrap gap-2 p-4 rounded-2xl ${darkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-white border border-gray-200'}`}>
        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mr-2`}>Filter by:</span>
        <Button
          variant={filter === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setFilter('all')}
          className={filter === 'all' ? 'bg-gradient-to-r from-blue-600 to-purple-600' : ''}
        >
          All
        </Button>
        <Button
          variant={filter === 'image' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setFilter('image')}
          className={filter === 'image' ? 'bg-gradient-to-r from-blue-600 to-purple-600' : ''}
        >
          <Image className="w-4 h-4 mr-1" />
          Images
        </Button>
        <Button
          variant={filter === 'voice' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setFilter('voice')}
          className={filter === 'voice' ? 'bg-gradient-to-r from-blue-600 to-purple-600' : ''}
        >
          <Mic className="w-4 h-4 mr-1" />
          Voice
        </Button>
        <Button
          variant={filter === 'text' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setFilter('text')}
          className={filter === 'text' ? 'bg-gradient-to-r from-blue-600 to-purple-600' : ''}
        >
          <FileText className="w-4 h-4 mr-1" />
          Text
        </Button>
        <Button
          variant={filter === 'location' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setFilter('location')}
          className={filter === 'location' ? 'bg-gradient-to-r from-blue-600 to-purple-600' : ''}
        >
          <MapPin className="w-4 h-4 mr-1" />
          Location
        </Button>
      </div>

      {/* Exposure Results */}
      <div className="space-y-3">
        {filteredExposures.map((exposure) => (
          <Card key={exposure.id} className={`${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-200'} hover:shadow-lg transition-shadow`}>
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                {/* Thumbnail */}
                {exposure.thumbnail ? (
                  <ImageWithFallback
                    src={exposure.thumbnail}
                    alt={exposure.platform}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  />
                ) : (
                  <div className={`w-16 h-16 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} flex items-center justify-center flex-shrink-0`}>
                    {getTypeIcon(exposure.type)}
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium">{exposure.platform}</h3>
                        {getRiskBadge(exposure.riskLevel)}
                      </div>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {exposure.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-3">
                    <Badge variant="outline" className={getStatusColor(exposure.status)}>
                      {exposure.status === 'cloaked' && <Shield className="w-3 h-3 mr-1" />}
                      {exposure.status.charAt(0).toUpperCase() + exposure.status.slice(1)}
                    </Badge>
                    {getTypeIcon(exposure.type)}
                    <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'} capitalize`}>
                      {exposure.type}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 flex-shrink-0">
                  {exposure.status === 'uncloaked' && (
                    <Button size="sm" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                      Cloak Now
                    </Button>
                  )}
                  {exposure.status === 'pending' && (
                    <Button size="sm" variant="outline">
                      Review
                    </Button>
                  )}
                  <Button size="sm" variant="ghost">
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
