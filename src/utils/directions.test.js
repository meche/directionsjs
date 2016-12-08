'use strict'

import { expect } from 'chai'
import directions from './directions'

test('directions() should be a function', () => {
  expect(directions).to.be.a('function')
})

test('directions("R") should return ["East"]', () => {
  const action = 'R'
  const result = ['East']
  expect(directions(action)).to.be.deep.equal(result)
})

test('directions("L") should return ["West"]', () => {
  const action = 'L'
  const result = ['West']
  expect(directions(action)).to.be.deep.equal(result)
})

test('directions("L", []) should return ["West"]', () => {
  const action = 'L'
  const result = ['West']
  expect(directions(action, [])).to.be.deep.equal(result)
})

test('directions("L", ["West"]) should return ["West", "South"]', () => {
  const action = 'L'
  const result = ['West', 'South']
  expect(directions(action, ['West'])).to.be.deep.equal(result)
})

test('directions("L", ["West", "South"]) should return ["West", "South", "East"]', () => {
  const action = 'L'
  const lastState = ['West', 'South']
  const result = ['West', 'South', 'East']
  expect(directions(action, lastState)).to.be.deep.equal(result)
})

test('directions("L", ["West", "North"]) should return ["West", "North", "West"]', () => {
  const action = 'L'
  const lastState = ['West', 'North']
  const result = ['West', 'North', 'West']
  expect(directions(action, lastState)).to.be.deep.equal(result)
})

test('directions("R", ["West"]) should return ["West", "North"]', () => {
  const action = 'R'
  const lastState = ['West']
  const result = ['West', 'North']
  expect(directions(action, lastState)).to.be.deep.equal(result)
})

test('directions("R", ["North"]) should return ["North", "East"]', () => {
  const action = 'R'
  const lastState = ['North']
  const result = ['North', 'East']
  expect(directions(action, lastState)).to.be.deep.equal(result)
})
