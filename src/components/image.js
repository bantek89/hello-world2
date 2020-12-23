import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */
function withImageData(WrappedComponent) {
  return props => (
    <StaticQuery
      query={graphql`
        query AstronautImageQuery {
          landingImage: file(relativePath: { eq: "landing_image.png" }) {
            childImageSharp {
              fluid(maxWidth: 500, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          firstImage: file(relativePath: { eq: "image01.png" }) {
            childImageSharp {
              fluid(maxWidth: 500, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          secondImage: file(relativePath: { eq: "image02.png" }) {
            childImageSharp {
              fluid(maxWidth: 500, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          thirdImage: file(relativePath: { eq: "image03.png" }) {
            childImageSharp {
              fluid(maxWidth: 500, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <WrappedComponent {...props} imageData={data} />}
    />
  )
}

const LandingImage = withImageData(props => (
  <Img
    className="landingImg"
    fluid={props.imageData.landingImage.childImageSharp.fluid}
  />
))

const FirstImage = withImageData(props => (
  <Img fluid={props.imageData.firstImage.childImageSharp.fluid} />
))
const SecondImage = withImageData(props => (
  <Img fluid={props.imageData.secondImage.childImageSharp.fluid} />
))
const ThirdImage = withImageData(props => (
  <Img fluid={props.imageData.thirdImage.childImageSharp.fluid} />
))

export { LandingImage, FirstImage, SecondImage, ThirdImage }
