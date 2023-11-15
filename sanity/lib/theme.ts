import { buildLegacyTheme } from 'sanity';

const myTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': '#2B2B2B', // A dark shade for text and important elements
  '--white': '#F5F5F5', // A soft white for backgrounds and cards

  '--gray': '#666', // You can adjust this gray to match your theme if needed
  '--gray-base': '#666', // Same as above

  '--component-bg': '#F5F5F5', // Background for components, using soft white
  '--component-text-color': '#2B2B2B', // Text color for components, using dark shade

  /* Brand */
  '--brand-primary': 'hsl(154, 40%, 25%)', // Using British Racing Green as primary brand color

  // Default button
  '--default-button-color': '#666', // Default button color, can be gray or another neutral
  '--default-button-primary-color': 'hsl(154, 40%, 25%)', // Primary button color, British Racing Green
  '--default-button-success-color': 'hsl(120, 39%, 54%)', // A green color for success buttons
  '--default-button-warning-color': 'hsl(40, 90%, 60%)', // A yellow/orange color for warning buttons
  '--default-button-danger-color': 'hsl(0, 79%, 63%)', // A red color for danger buttons

  /* State */
  '--state-info-color': 'hsl(210, 90%, 60%)', // A blue color for informational states
  '--state-success-color': 'hsl(120, 39%, 54%)', // Success state, matching the success button
  '--state-warning-color': 'hsl(40, 90%, 60%)', // Warning state, matching the warning button
  '--state-danger-color': 'hsl(0, 79%, 63%)', // Danger state, matching the danger button

  /* Navbar */
  '--main-navigation-color': '#2B2B2B', // Dark color for main navigation
  '--main-navigation-color--inverted': '#F5F5F5', // Soft white for inverted navigation color

  '--focus-color': 'hsl(154, 40%, 25%)', // Focus color, using British Racing Green
});

export default myTheme;
