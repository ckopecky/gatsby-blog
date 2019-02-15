const config = {
  siteTitle: "CK Labs Notes", // Site title.
  siteTitleShort: "CK Blog", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Lambda Labs Blog", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://christinakopecky.netlify.com", // Domain of your website without pathPrefix.
  pathPrefix: "/gatsby-blog", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: true, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "A Lambda Labs10 Journey.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  siteGATrackingID: "UA-47311644-4", // Tracking code ID for google analytics.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "MM/DD/YYYY", // Date format for display.
  userName: "Christina K", // Username to display in the author segment.
  userEmail: "kopecky12112@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "flute1952", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "San Jose, CA", // User location to display in the author segment.
  userAvatar: "https://pbs.twimg.com/profile_images/1094507993993859072/9M9VpQbS_400x400.jpg", // User avatar to display in the author segment.
  userDescription:
    "Hi! I'm Christina. I'm a full-stack web developer, a professional flutist and a flute teacher.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/ckopecky/gatsby-blog",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/flute1952",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:kopecky12112@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2019. Christina Kopecky" // Copyright string for the footer of the website and RSS feed.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
