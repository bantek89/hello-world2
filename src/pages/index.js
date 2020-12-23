import React from "react"
import { Link } from "gatsby"
import { TweenMax, Power2, TimelineLite } from "gsap"
import P5Wrapper from "react-p5-wrapper"

import Layout from "../components/layout"
import {
  LandingImage,
  FirstImage,
  SecondImage,
  ThirdImage,
} from "../components/image"
import SEO from "../components/seo"
import sketch from "../components/sketch"

const IndexPage = props => {
  const [browser, isBrowser] = React.useState(false)

  React.useEffect(() => {
    if (typeof window !== `undefined`) {
      isBrowser(true)
    }
  }, [])

  const begin = () => {
    const beginAnimate = new TimelineLite()

    beginAnimate
      .to(".begin", 0.25, { opacity: 0, display: "none" }, "start+=0.2")
      .to(".skip", 0.25, { opacity: 0, display: "none" }, "start")
      .to(
        ".landingImg",
        3,
        { opacity: 0, display: "none", ease: Power2.easeIn },
        "start"
      )
      .to(".imgContainer", 0.1, { display: "block", ease: Power2.easeIn })
      .to(".helloWorld", 2, { opacity: 0, display: "none" }, "start+=1")
      .to(
        ".firstImg",
        3,
        { opacity: 1, display: "block", ease: Power2.easeIn },
        "one"
      )
      .to(
        ".textOne",
        2,
        { opacity: 2, display: "block", ease: Power2.easeIn },
        "one+=2"
      )

      .to(".next", 0.25, { opacity: 1, display: "block" }, "one+=7")
  }

  const imgSlides = [".firstImg", ".secondImg", ".thirdImg"]
  const textSlides = [".textOne", ".textTwo", ".textThree"]
  let position = 0
  const next = () => {
    if (position >= imgSlides.length - 1) {
      const endAnimate = new TimelineLite()
      endAnimate
        .to(
          imgSlides[position],
          3,
          { opacity: 0, display: "block", ease: Power2.easeIn },
          "start"
        )
        .to(textSlides[position], 1, { opacity: 0, display: "none" }, "start")
        .to(".next", 0.75, { opacity: 0, display: "none" }, "start+=0.2")
        .to(
          ".code",
          1,
          { opacity: 1, display: "block", ease: Power2.easeIn, delay: 4 },
          "start"
        )
    } else {
      TweenMax.to(
        imgSlides[position],
        2,
        {
          opacity: 0,
          display: "none",
          ease: Power2.easeIn,
        },
        "start"
      )
      TweenMax.to(
        textSlides[position],
        1,
        {
          opacity: 0,
          display: "none",
        },
        "start"
      )
      TweenMax.to(
        ".next",
        1,
        {
          opacity: 0,
          display: "none",
        },
        "start"
      )
      TweenMax.to(imgSlides[position + 1], 6, {
        opacity: 1,
        display: "block",
        ease: Power2.easeIn,
        delay: 3,
      })
      TweenMax.to(textSlides[position + 1], 3, {
        opacity: 1,
        display: "block",
        delay: 4,
      })
      TweenMax.to(".next", 1, {
        opacity: 1,
        display: "block",
        delay: 10,
      })

      position += 1
    }
  }

  return (
    <Layout>
      <SEO title="hello world" />

      {browser ? (
        <P5Wrapper sketch={sketch}>
          <div
            style={{
              width: `50%`,
              textAlign: `center`,
              margin: `auto`,
              marginTop: `10em`,
            }}
          >
            <div
              style={{
                maxWidth: `250px`,
              }}
            >
              <LandingImage />
            </div>
            <div
              className="imgContainer"
              style={{
                maxWidth: `300px`,
                margin: `0`,
                display: `none`,
              }}
            >
              <div
                className="firstImg"
                style={{
                  display: `none`,
                  opacity: `0`,
                }}
              >
                <FirstImage />
              </div>
              <div
                className="secondImg"
                style={{
                  display: `none`,
                  opacity: `0`,
                }}
              >
                <SecondImage />
              </div>
              <div
                className="thirdImg"
                style={{
                  display: `none`,
                  opacity: `0`,
                }}
              >
                <ThirdImage />
              </div>
            </div>
            <h1 className="helloWorld">'hello world'</h1>
            <div>
              <div
                className="textOne"
                style={{
                  display: `none`,
                  opacity: `0`,
                }}
              >
                <h2>I like to build things</h2>
              </div>
              <div
                className="textTwo"
                style={{
                  display: `none`,
                  opacity: `0`,
                }}
              >
                <h2>I like to watch things grow</h2>
              </div>
              <div
                className="textThree"
                style={{
                  display: `none`,
                  opacity: `0`,
                }}
              >
                <h2>I like to make space</h2>
              </div>
              <div
                className="code"
                style={{
                  display: `none`,
                  opacity: `0`,
                }}
              >
                <Link to="/contact/">
                  <h2>
                    and for these reasons,
                    <br />I really like to code :)
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </P5Wrapper>
      ) : null}
      <p
        style={{
          position: `absolute`,
          width: `100%`,
          textAlign: `center`,
        }}
        className="begin"
        onClick={() => begin()}
      >
        begin
      </p>
      <p
        style={{
          display: `none`,
          opacity: `0`,
          position: `absolute`,
          width: `100%`,
          textAlign: `center`,
        }}
        className="next"
        onClick={() => next()}
      >
        next
      </p>
    </Layout>
  )
}

export default IndexPage
