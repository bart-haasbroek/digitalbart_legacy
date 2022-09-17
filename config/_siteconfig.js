export default {
    siteName: 'Headless blog',
    logo: '/images/placeholder-logo.png',
    hostname: 'https://www.testsite.nl',
    googleAnalytics: {
        on: false,
        id: process.env.GOOGLE_ANALYTICS_ID
    },
    mainMenu: [
      {
        url: "/",
        title: "Home",
        icon: "house-door",
      },
      {
        url: "/over-mij",
        title: "Over mij",
        icon: "house-door",
      },
      {
        url: "/berichten",
        title: "Blog",
        icon: "house-door",
      }
    ]
}