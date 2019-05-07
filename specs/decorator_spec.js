const assert = require('assert')
const Decorator = require('../decorator.js')
const Room = require('../room.js')

describe('Decorator', function() {

  let decorator;
  let room;

  beforeEach(function() {
    decorator = new Decorator('Clive', [])
    room = new Room(20)
  })

  it('should have a name', function () {
    const actual = decorator.name
    assert.strictEqual(actual, 'Clive')
  })

  it('should start with no cans', function(){
    const actual = decorator.cans
    assert.deepStrictEqual(actual, [])
  })

  it('should add a can to his cans', function(){
    decorator.addCanOfPaint(10)
    const actual = decorator.cans
    assert.deepStrictEqual(actual, [10])
  })

  it('should add two cans to his cans', function(){
    decorator.addCanOfPaint(10)
    decorator.addCanOfPaint(10)
    const actual = decorator.cans
    assert.deepStrictEqual(actual, [10, 10])
  })

  it('should calculate total paint held', function(){
    decorator.addCanOfPaint(10)
    decorator.addCanOfPaint(10)
    decorator.addCanOfPaint(10)
    const actual = decorator.totalVolume()
    assert.strictEqual(actual, 30)
  })

  it('should compare room volume to paint volume', function() {
    decorator.addCanOfPaint(10)
    decorator.addCanOfPaint(10)
    decorator.room = room
    const actual = decorator.hasEnoughPaint()
    assert.strictEqual(actual, true)
  })

  it('should paint the room', function(){
    decorator.addCanOfPaint(10)
    decorator.addCanOfPaint(10)
    decorator.room = room
    decorator.hasEnoughPaint()
    const actual = decorator.room.painted
    assert.strictEqual(actual, 20)
  })

  it('should decrease the decorators held paint', function(){
    decorator.addCanOfPaint(10)
    decorator.addCanOfPaint(10)
    decorator.room = room
    decorator.hasEnoughPaint()
    const actual = decorator.cans
    assert.strictEqual(actual, 0)
  })

})
