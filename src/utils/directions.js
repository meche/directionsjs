'use strict'

const cardinalPoints = ['North', 'East', 'South', 'West']

const turnRight = (lastState) => {
  let fix = 0
  fix = cardinalPoints.indexOf(lastState[0]) + 1
  if (!fix) {
    return cardinalPoints[1]
  }
  if (fix === 4) {
    return cardinalPoints[0]
  }
  return cardinalPoints[fix]
}

const turnLeft = (lastState) => {
  let fix = 0
  fix = cardinalPoints.indexOf(lastState[0]) - 1
  if (fix <= -1) {
    return cardinalPoints[3]
  }
  return cardinalPoints[fix]
}

const directions = (action, setState = []) => {
  let state = setState
  let lastState = setState

  lastState = lastState.slice(-1)

  if (action === 'R') {
    state.push(turnRight(lastState))
  }

  if (action === 'L') {
    state.push(turnLeft(lastState))
  }
  return state
}
export default directions
