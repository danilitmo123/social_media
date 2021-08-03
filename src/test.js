const calculateNum = {
  calculate (b,c,d) {
    console.log(this.a + b + c + d)
  }
}

const numberOfA = {
  a: 100
}

let bindResult = calculateNum.calculate.bind(numberOfA, 2)
bindResult(3,4)

