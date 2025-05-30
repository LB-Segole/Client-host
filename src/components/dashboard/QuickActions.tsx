import { Phone, Calendar, Zap, Headphones, Settings, UserPlus } from 'lucide-react';

import { Button } from '@/components/ui/Button';

const actions = [
  {
    icon: <Phone className="h-5 w-5" />,
    title: "New Call",
    description: "Start a voice call",
    action: () => {
      // TODO: Implement new call initiation logic here
    }
  },
  {
    icon: <Calendar className="h-5 w-5" />,
    title: "Schedule Call",
    description: "Set up future calls",
    action: () => {
      // TODO: Implement schedule call logic here
    }
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Quick Response",
    description: "Send pre-recorded audio",
    action: () => {
      // TODO: Implement quick response logic here
    }
  },
  {
    icon: <Headphones className="h-5 w-5" />,
    title: "Call Templates",
    description: "Use conversation flows",
    action: () => {
      // TODO: Implement templates logic here
    }
  },
  {
    icon: <UserPlus className="h-5 w-5" />,
    title: "Add Contact",
    description: "Save new number",
    action: () => {
      // TODO: Implement add contact logic here
    }
  },
  {
    icon: <Settings className="h-5 w-5" />,
    title: "Settings",
    description: "Configure preferences",
    action: () => {
      // TODO: Implement settings logic here
    }
  }
];

export function QuickActions() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-semibold text-lg">Quick Actions</h3>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="outline"
            className="h-24 flex flex-col items-center justify-center gap-2 p-2 hover:bg-blue-50 hover:border-blue-200 transition-colors"
            onClick={action.action}
          >
            <div className="p-2 rounded-full bg-blue-100 text-blue-600">
              {action.icon}
            </div>
            <div className="text-center">
              <p className="text-sm font-medium">{action.title}</p>
              <p className="text-xs text-gray-500">{action.description}</p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}