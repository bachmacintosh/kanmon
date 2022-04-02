export function getDefaultSeo () {
  return {
    defaultTitle: "Kanmon - A Gateway Guarding against NSFW/Spoilery Content",
    twitter: {
      cardType: "summary",
      site: "@BachMacintosh",
      handle: "@BachMacintosh",
    },
    openGraph: {
      type: "website",
      title: "BachMacintosh",
      // eslint-disable-next-line camelcase
      site_name: "BachMacintosh",
      url: process.env.baseUrl,
    },
  };
}
