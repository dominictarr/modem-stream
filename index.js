
var through = require('through')

//make the bytes trickle through like molasses
//
module.exports = function (baud) {
  var perChar = 1000/(baud/8)
  var chars = ~~(perChar < 5 ? 5 / perChar : 1)

  function chunks (string) {
    return string.split('')
    var a = []
    for(var i = 0; i < string.length; i += chars)
      a.push(string.substring(i, chars))
    return a
  }

  return t = through(function (data) {
    chunks(data.toString()).forEach(function (c) {
      t.queue(c)
    })
  }).on('data', function () {
    if(baud == 0) return
    t.pause()
    setTimeout(function () {
      t.resume()
    }, Math.max(perChar, 5))
    // ^ as slow as a 300 baud modem
    // (read: "underground" by Suelette Dreyfus. http://www.underground-book.net/)
  })
}
