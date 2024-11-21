const aboutPageQuery = `{
  aboutPage(id: "4nWqD5MorXrFM4uUjKPVKT") {
    title
    subTitle {
      json
    }
    description {
      json
    }
  }
}`

const projectsQuery = `{
  pageProjects(id: "6UYQLWCBjse3pmS38TInwL") {
    internalName
    projectCollection {
      items {
        sys {
          id
        }
        ... on Project {
          projectTitle
          projectImage {
            url
          }
          projectRole
          projectDate
          projectUrl
          projectDescription {
            json
          }
        }
      }
    }
  }
}`

const headerQuery = `{
  header(id: "3kpxWTHwcJXOoMlxTlnEPu") {
    navbarElementsCollection {
      items {
        title
        slug
      }
    }
    logo{
      url(transform: {cornerRadius: -1})
      title
    }
  }
}`

async function fetchGraphQL(query: string) {
  const NEXT_PUBLIC_CONTENTFUL_SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
  const NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      // cache: 'no-store'
      // next: { tags: ["articles"] },
    }
  ).then((response) => response.json());
}

export async function getHeader() {
  const headerData = await fetchGraphQL(
    headerQuery
  );

  console.log(headerData);

  return headerData;
}


export async function getAboutPage() {
  const pageData = await fetchGraphQL(
    aboutPageQuery
  );

  return pageData;
}

export async function getProjects() {
  const projectsData = await fetchGraphQL(
    projectsQuery
  );

  return projectsData;
}

