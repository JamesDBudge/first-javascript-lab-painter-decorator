const Decorator = function (name, cans) {
  this.name = name
  this.cans = cans
}

Decorator.prototype.addCanOfPaint = function (canVolume) {
  this.cans.push(canVolume)
};

Decorator.prototype.totalVolume = function () {
  function getSum(total, num) {
    return total + num;
  }
  return this.cans.reduce(getSum)
};

Decorator.prototype.hasEnoughPaint = function () {
  const paintAvailable = this.totalVolume()
  if (paintAvailable >= this.room.area) {
    this.room.painted += paintAvailable
    return true
  }
  return false
};

module.exports = Decorator
