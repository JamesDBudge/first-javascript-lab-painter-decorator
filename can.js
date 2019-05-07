const Can = function (volume) {
  this.volume = volume
}

Can.prototype.checkEmpty = function () {
  if (this.volume === 0) {
    return true
  }
  return false
};

Can.prototype.usePaint = function (paintUsed) {
  if (this.volume>paintUsed) {
    this.volume -= paintUsed
  } else {
    console.log("not enough paint in this can✓✓✓✓✓✓✓✓✓✓");
  }
};


module.exports = Can;
