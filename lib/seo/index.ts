export function getDefaultSeo () {
  return {
    defaultTitle: "Kanmon - A Gateway Guarding against NSFW/Spoiler Content",
    twitter: {
      cardType: "summary",
      site: "@BachMacintosh",
      handle: "@BachMacintosh",
    },
    openGraph: {
      type: "website",
      title: "Kanmon - A Gateway Guarding against NSFW/Spoiler Content",
      // eslint-disable-next-line camelcase
      site_name: "Kanmon",
      url: process.env.baseUrl,
    },
  };
}
