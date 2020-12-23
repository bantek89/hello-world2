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
          <ul style={{ textAlign: `center`, marginTop: `2em` }}>
            {data.github.repositoryOwner.pinnedItems.edges.map(
              ({ node }, i) => (
                <li key={i} style={{ textAlign: `center`, marginTop: `1.5em` }}>
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
          </ul>
          <div style={{ marginLeft: `25px` }}>
            <h2 style={{ marginBottom: 0 }}>contact</h2>
            <p style={{ fontSize: `16px`, marginBottom: `1em` }}>
              If you'd like to get in touch, <br /> please email me - <br />
              bannatekle@icloud.com
            </p>
            <p style={{ fontSize: `12px`, marginBottom: `1em` }}>
              Illustrations from
              <a
                href="https://www.instagram.com/schmoulia/"
                target="_blank"
                className="clickableText"
              >
                @schmoulia
              </a>
            </p>
            <Link
              to="/"
              className="clickableText"
              style={{
                width: `95%`,
                position: `absolute`,
                textAlign: `center`,
              }}
            >
              Back to homepage
            </Link>
          </div>
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
