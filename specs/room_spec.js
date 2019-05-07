const assert = require('assert')
const Room = require('../room.js')

describe('Room', function() {

  let room;

  beforeEach( function(){
    room = new Room(50)
  })

  it('should start unpainted', function() {
    const actual = room.painted
    assert.strictEqual(actual, 0)
  })

  it('should have an area', function() {
    const actual = room.area
    assert.strictEqual(actual, 50)
  })

  it('should be able to be painted', function(){
    room.paintRoom(8)
    const actual = room.painted
    assert.strictEqual(actual, 8)
  })

  it('should not over paint', function() {
    room.paintRoom(200)
    const actual = room.painted
    assert.strictEqual(actual, 0)
  })

})
