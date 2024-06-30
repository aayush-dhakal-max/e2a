const pastPaperData = require("./src/data/pastPapersData.json");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://e2alearning.com",
  generateRobotsTxt: true,
  additionalPaths: async (config) => {
    return pastPaperData.flatMap((subject) =>
      subject.papers.map((paper) => {
        return { loc: paper.href, lastmod: new Date().toISOString() };
      })
    );
  },
};
