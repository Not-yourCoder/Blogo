import { request, gql } from "graphql-request";

export const getPosts = async () => {
  const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              name
              id
              bio
              photo {
                url
              }
            }
            categories {
              name
              slug
              createdAt
            }
            excert
            slug
            title
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlApi, query);
  return result.postsConnection.edges;
};

export const getRecentPosts = async () => {
  const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
  const query = gql`
  query GetPostDetails(){
    posts(
      orderBy: createdAt_ASC
      last: 3  
    ) {
      title
      featuredImage{
        url
      }
      createdAt
      slug
    }
  }
  `
  const result = await request(graphqlApi, query);
  return result.posts;
};

export const getSimilarPosts = async () => {
  const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlApi, query);
  return result.posts;
};


export const getCategories = async () => {
  const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
  const query = gql`
    query GetPostDetails() {
      categories{
        name
        slug
      }
    }
  `;
  const result = await request(graphqlApi, query);
  return result.categories;
};