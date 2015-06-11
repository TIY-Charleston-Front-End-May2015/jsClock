(function randomHex(){
  'use strict'

  function randomHexValue() {
    var myVal = ""
    var possibleChars = "ABCDEF0123456789"
    for(var i=0; i<5; i++) {
      myVal += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length))
    }
    return myVal
  }
  //Should my invocation happen inside our outside??
}());
