// Category configuration - edit this to add/remove/modify categories
// Each category corresponds to a folder in src/content/docs/

export interface Category {
  id: string;           // Folder name in src/content/docs/
  label: string;        // Display name
  description: string;  // Short description for the card
  icon: string;         // SVG icon (paste full SVG string)
  iconBg: string;       // Background color for icon
  iconColor: string;    // Stroke color for icon
}

export const categories: Category[] = [
  {
    id: 'overview',
    label: 'Getting Started',
    description: 'Learn the basics and set up your clinic profile',
    icon: '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line>',
    iconBg: '#e8f4ec',
    iconColor: '#22c55e',
  },
  {
    id: 'bookings',
    label: 'Bookings',
    description: 'Manage patient visits and digital scheduling',
    icon: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
    iconBg: '#e8e7ff',
    iconColor: '#6D66FE',
  },
  {
    id: 'patients',
    label: 'Patients',
    description: 'Track patient records, histories, and data',
    icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
    iconBg: '#fef3e2',
    iconColor: '#f59e0b',
  },
  {
    id: 'gps-referrals',
    label: 'GPs & Referrals',
    description: 'Manage referring doctors and referral workflows',
    icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
    iconBg: '#fce7f3',
    iconColor: '#ec4899',
  },
  {
    id: 'medical-records',
    label: 'Medical Records',
    description: 'Electronic medical records and clinical notes',
    icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>',
    iconBg: '#fce7f3',
    iconColor: '#ec4899',
  },
  {
    id: 'billing',
    label: 'Billing',
    description: 'Invoicing, payments, and insurance claims',
    icon: '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
    iconBg: '#dbeafe',
    iconColor: '#3b82f6',
  },
  {
    id: 'settings',
    label: 'Settings',
    description: 'Configure your clinic preferences',
    icon: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
    iconBg: '#f3f4f6',
    iconColor: '#6b7280',
  },
  {
    id: 'support',
    label: 'Support',
    description: 'Get help and contact our team',
    icon: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
    iconBg: '#ecfdf5',
    iconColor: '#10b981',
  },
];
