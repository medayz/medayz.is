const metascraper = require("metascraper")([
  require("metascraper-description")(),
  require("metascraper-image")(),
  require("metascraper-logo")(),
  require("metascraper-clearbit")(),
  require("metascraper-title")(),
  require("metascraper-url")()
]);
const got = require("got");

import { negate as not } from "lodash";
import { Client } from "clearbit";
var clearbit = new Client({ key: process.env.CLEARBIT_API_TOKEN });

async function fetchTechStackshare(tech) {
  [tech] = tech.split(".");
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
    .map(({ name, imageUrl, websiteUrl }) => ({
      name,
      logo: imageUrl,
      domain: websiteUrl.split("//").pop()
    }))
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

async function fetchMetaScraper() {
  const targetUrl = "https://rxjs.dev";
  const { body: html, url } = await got(targetUrl);
  const metadata = await metascraper({ html, url });
  console.log(metadata);
}

export function getTechs(techs) {
  return Promise.all(
    // fetch data
    techs.map(fetchTechClearbit)
  ).then(async (techs) => {
    const hasLogo = (tech) => tech.logo !== null;
    const stackshare_data = await Promise.all(
      techs
        // filter nulls and get data from stackshare
        .filter(not(hasLogo))
        .map(({ domain }) => fetchTechStackshare(domain))
    );
    const clearbit_data = techs.filter(hasLogo);

    return [...stackshare_data, ...clearbit_data].map(
      ({ name, domain, ...rest }) =>
        name === "null"
          ? {
              name: domain.split(".").pop(),
              domain: domain,
              ...rest
            }
          : {
              name,
              domain,
              ...rest
            }
    );
  });
}
