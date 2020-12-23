import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import P5Wrapper from "react-p5-wrapper"
import sketch from "../components/sketch"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ data }) => {
  const [browser, isBrowser] = React.useState(false)

  React.useEffect(() => {
    if (typeof window !== `undefined`) {
      isBrowser(true)
    }
  }, [])
  return (
    <Layout>
      <SEO title="contact" />

      {browser ? (
        <P5Wrapper sketch={sketch}>
          <h2>contact</h2>
          <ul style={{ textAlign: `center` }}>
            {data.github.repositoryOwner.pinnedItems.edges.map(
              ({ node }, i) => (
                <li key={i}>
                  <h4>{node.name}</h4>
                  <p>{node.description}</p>
                  <a
                    href={node.homepageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clickableText"
                  >
                    <div style={{ color: `#581e8d` }}>{node.homepageUrl}</div>
                  </a>
                  <div>
                    github repo:
                    <a
                      href={node.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="clickableText"
                    >
                      <span style={{ color: `#581e8d` }}> {node.url}</span>
                    </a>
                  </div>
                </li>
              )
            )}

            <li style={{ userSelect: `text`, marginTop: `5em` }}>
              If you'd like to get in touch, please email me -
              bannatekle@icloud.com
            </li>
            <li
              style={{
                fontSize: `0.8rem`,
                userSelect: `text`,
              }}
            >
              (Illustrations from
              <a
                href="https://www.instagram.com/schmoulia/"
                target="_blank"
                className="clickableText"
              >
                @schmoulia
              </a>
              )
            </li>
          </ul>
          <Link
            to="/"
            className="clickableText"
            style={{ width: `100%`, position: `absolute`, textAlign: `center` }}
          >
            Go back to homepage
          </Link>
          <br />
          <br />
        </P5Wrapper>
      ) : null}
    </Layout>
  )
}

export const query = graphql`
  query {
    github {
      repositoryOwner(login: "bantek89") {
        ... on GitHub_User {
          pinnedItems(first: 10) {
            edges {
              node {
                ... on GitHub_Repository {
                  name
                  homepageUrl
                  description
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`

export default SecondPage
