import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '8f7147606db14bc19952fe8cffdf7137',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Mike',
  domain: 'maithedung.com',
  author: 'Mai The Dung',

  // open graph metadata (optional)
  description: 'Mai The Dung',

  // social usernames (optional)
  twitter: 'maithedungg',
  github: 'maithedung',
  linkedin: 'maithedung',
  // newsletter: '#', // optional newsletter URL
  youtube: 'schoolXedu', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/243943237_370909634748025_7480659804088447008_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uhta9x_ZXxcAX9nVd3Y&_nc_ht=scontent.fdad3-5.fna&oh=00_AfDXQgUfoSSXX8YDgn0BVgvAyr8rf1uvWAgYX68Gr5QBOw&oe=636C48F1',
  defaultPageCover: 'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/241550779_372991371206518_9076249130238549616_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=QA-8rUTFlc4AX-d83GN&_nc_ht=scontent.fdad3-1.fna&oh=00_AfByWifzAv74Mixk4Bbm84ny7JEN03HjtDYac9GjdXdDrA&oe=636D0E65',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  pageUrlAdditions: {
    '/the-social-audio-revolution': 'c4deaf33cc924ad7a5b9f69c6ae04a01'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    // {
    //   title: 'About',
    //   pageId: '8d0062776d0c4afca96eb1ace93a7538'
    // },
    {
      title: 'Resume',
      pageId: '316d2281788c49009b702dd45c47ba15'
    },
    {
      title: 'Contact',
      pageId: '99228bd65b144b20831d11e5857b89e0'
    }
  ]
})
