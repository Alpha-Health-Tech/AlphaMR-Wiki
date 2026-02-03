import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://alpha-health-tech.github.io',
  base: '/AlphaMR-Wiki',
  integrations: [
    starlight({
      title: 'AlphaMR Help',
      logo: {
        src: './src/assets/logo-emblem.png',
        alt: 'AlphaMR',
      },
      customCss: ['./src/styles/custom.css'],
      // Disable dark mode - light only
      head: [
        {
          tag: 'script',
          content: `localStorage.setItem('starlight-theme', 'light'); document.documentElement.dataset.theme = 'light';`,
        },
      ],
      sidebar: [
        {
          label: 'Overview',
          autogenerate: { directory: 'overview' },
        },
        {
          label: 'Bookings',
          autogenerate: { directory: 'bookings' },
        },
        {
          label: 'Patients',
          autogenerate: { directory: 'patients' },
        },
        {
          label: 'GPs & Referrals',
          autogenerate: { directory: 'gps-referrals' },
        },
        {
          label: 'Medical Records',
          autogenerate: { directory: 'medical-records' },
        },
        {
          label: 'Billing',
          autogenerate: { directory: 'billing' },
        },
        {
          label: 'Settings',
          autogenerate: { directory: 'settings' },
        },
        {
          label: 'Support',
          autogenerate: { directory: 'support' },
        },
      ],
    }),
  ],
});
