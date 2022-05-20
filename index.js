const messageConfig = {
  frontContent: "Happy Birthday, Odin One-Eye!",
  insideContent: "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
  closing: {
      "Thor": "Admiration, respect, and love",
      "Loki": "Your son"
  },
  signatories: [
      "Thor",
      "Loki"
  ]
};


const printCard = function () {
  console.log(this.frontContent);
  console.log(this.insideContent);

  // this.signatories.forEach(function (signatory) {
  //   const message = `${this.closing[signatory]}, ${signatory}`;
  //   console.log(message);
  // }, this);

/////////////////////////////////////////////////////////////////////////////////////
  // const contextBoundForEachExpr = function (signatory) {
  //   const message = `${this.closing[signatory]}, ${signatory}`;
  //   console.log(message);
  // }.bind(this);

  // this.signatories.forEach(contextBoundForEachExpr);

/////////////////////////////////////////////////////////////////////////////////////
  // const outerContext = this;

  // this.signatories.forEach(function (signatory) {
  //   const message = `${outerContext.closing[signatory]}, ${signatory}`;
  //   console.log(message);
  // });

/////////////////////////////////////////////////////////////////////////////////////
  this.signatories.forEach((signatory) =>
    console.log(`${this.closing[signatory]}, ${signatory}`)
  );
};

printCard.call(messageConfig);


/////////////////////////////////////////////////////////////////////////////////////

// The `const greeter` is merely the assignment, the expression begins after the `=`
const greeter = (nameToGreet) => {
  const message = `Good morning ${nameToGreet}`;
  console.log(message);
  return "Greeted: " + nameToGreet;
};
const result = greeter("Max"); //=> "Greeted: Max"

console.log(result);