// const metascraper = require("metascraper")([
//   require("metascraper-description")(),
//   require("metascraper-image")(),
//   require("metascraper-logo")(),
//   require("metascraper-clearbit")(),
//   require("metascraper-title")(),
//   require("metascraper-url")()
// ]);
// const got = require("got");

import { Client } from "clearbit";
var clearbit = new Client({ key: process.env.CLEARBIT_API_TOKEN });

async function fetchTechStackshare(tech) {
  const matches = await fetch("https://api.stackshare.io/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-api-key": process.env.STACKSHARE_API_TOKEN
    },
    body: JSON.stringify({
      query: `{
          tools(query: "${tech}", first: 50) {
            edges {
              node {
                name
                imageUrl
                slug
                ossRepo
                description
                websiteUrl
              }
            }
          }
        }
      `
    })
  });
  const { data: { tools: { edges } = {} } = {} } = await matches.json();

  return edges
    .map((edge) => edge.node)
    .filter((node) => node.slug.toLowerCase() === tech)
    .shift();
}

async function fetchTechClearbit(domain) {
  var tech = await clearbit.Company.find({ domain });

  return {
    domain: tech.domain,
    name: tech.name,
    logo: tech.logo
  };
}

// async function fetchMetaScraper(targetUrl) {
//   const { body: html, url } = await got(targetUrl);

//   return await metascraper({ html, url });
// }

async function getFormatedTechObject({ name: techName, url: techUrl = "", query, logo = "" }) {
  const [
    // metascraperObj = {},
    clearbitObj = {},
    stackshareObj = {}
  ] = await Promise.all([
    techUrl && fetchTechClearbit(techUrl),
    fetchTechStackshare(query)
  ]);
  // techUrl && fetchMetaScraper(techUrl),

  return {
    name: techName,
    logo: logo || clearbitObj.logo || stackshareObj.imageUrl || "",
    domain: stackshareObj.websiteUrl || techUrl,
    title: techName
    // title: metascraperObj.title || techName
  };
}

export function getTechs(techs) {
  return Promise.all(techs.map(getFormatedTechObject));
}
