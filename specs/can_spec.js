const assert = require('assert')
const Can = require('../can.js')

describe('Can', function() {

  let can;

  beforeEach( function(){
    can = new Can(10)
    emptyCan = new Can(0)
  })

  it('should have a volume', function(){
    const actual = can.volume;
    assert.strictEqual(actual, 10)
  })

  it('should return false when empty', function(){
    const actual = emptyCan.checkEmpty()
    assert.strictEqual(actual, true)
  })

  it('should lose volume when paint used', function(){
    can.usePaint(5)
    const actual = can.volume
    assert.strictEqual(actual, 5)
  })

  it('should not lose volume when too much paint used', function(){
    can.usePaint(11)
    const actual = can.volume
    assert.strictEqual(actual, 10)
  })

})
