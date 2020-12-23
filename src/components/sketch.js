const sketch = p => {
  let canvasWidth = p.windowWidth
  let canvasHeight = p.windowHeight

  const colors = [
    p.color(255, 3, 62, 150),
    p.color(232, 57, 110, 150),
    p.color(31, 173, 102, 150),
    p.color(255, 117, 24, 150),
    p.color(0, 191, 255, 150),
    p.color(0, 128, 128, 150),
    p.color(251, 96, 127, 150),
    p.color(170, 152, 169, 150),
    p.color(255, 204, 51, 150),
    p.color(162, 162, 208, 150),
    p.color(53, 164, 248, 150),
    p.color(255, 196, 12, 150),
    p.color(154, 205, 50, 150),
    p.color(102, 255, 0, 150),
    p.color(160, 32, 240, 150),
  ]

  const randomiser = num => Math.floor(Math.random() * num)
  let randomColor = colors[randomiser(colors.length)]

  p.setup = () => {
    let canvas = p.createCanvas(canvasWidth, canvasHeight)

    canvas.mousePressed(() => {
      p.mousePressed = true
    })
  
    canvas.touchStarted(()=> {
      p.mousePressed = true
    })

    canvas.mouseReleased(() => {
      p.mousePressed = false
    })

    canvas.touchEnded(()=> {
      p.mousePressed = false
    })
  }



  p.draw = () => {
    if (p.mousePressed === true) {
      p.stroke(randomColor)
      p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY)
    }
  }

  p.resizeCanvas(canvasWidth, canvasHeight)
}

export default sketch
