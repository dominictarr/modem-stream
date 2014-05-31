# modem-stream

slow a stream down to modem speeds.

I wrote this to test `quickansi`.

## example

``` js
var modem = require('modem-stream')
var baud = 300 //300 bits per second. about 37 characters per second.
process.stdin.pipe(modem(baud)).pipe(process.stdout)
```

If you cant think of anything interesting about using a terminal
at 300 baud, I recommend reading [underground](http://www.underground-book.net/)
by Suelette Dreyfus.

## License

MIT
