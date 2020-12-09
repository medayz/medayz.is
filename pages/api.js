async function fetchTech(tech) {
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

export function getTechs(techs) {
  return Promise.all(techs.map(fetchTech));
}
