const Room = function(area) {
  this.area = area
  this.painted = 0
}

Room.prototype.paintRoom = function (paint) {
  if (this.area>this.painted+paint) {
  this.painted += paint
}else{
  console.log('XXX');
}
};




module.exports = Room;
