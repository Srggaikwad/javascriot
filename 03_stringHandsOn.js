string = "   Hey you are doing good, keep it up    ";

function stringHandsOn() {
  console.log("************Step 1*****************");
  console.log(`as it is string is: ${string}`);

  console.log("************Step 2*****************");

  var length = string.length;
  console.log(`lenght of string is: ${length}`);

  console.log("************Step 3*****************");

  var trim = string.trim();
  console.log(
    `after tream string is:${trim} and its lenght is: ${trim.length}`
  );
  console.log("************Step 4*****************");
  var count = string.length - trim.length;
  console.log(`extra spaces removed are: ${count}`);

  console.log("************Step 5*****************");

  var first = trim.charAt(0);
  console.log("the first character is:", first);

  var last = trim.charAt(33);
  console.log("the last character is:", last);

  console.log("************Step 6*****************");

  var word = trim.split(" ");
  console.log(`count of total words is:${word.length}`);

  console.log("************Step 7*****************");

  var index = trim.indexOf("good");
  console.log(`the index of good is:${index}`);

  console.log("************Step 8*****************");

  var substring = trim.substring("22");
  var slice = trim.slice("22");
  console.log(
    `substring starting from index 22 is:${substring},slice starting from index 22 is:${slice}`
  );

  console.log("************Step 9*****************");

  var end = trim.endsWith("up");
  console.log(`the string ends with up:${end}`);

  console.log("************Step 10*****************");

  var start = trim.startsWith("Hey");
  console.log(`the string starts with up:${start}`);
}

stringHandsOn();
