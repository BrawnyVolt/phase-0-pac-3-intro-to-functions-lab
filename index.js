function shout(string) {
  return string.toUpperCase();
} 

function whisper(string) {
  return string.toLowerCase();
}
function logShout(string){
  console.log(string.toUpperCase());

}function logWhisper(string){
  console.log (string.toLowerCase());
}

// function sayHiToGrandma(string){
//   switch (string){
//     case (string === (string.toUpperCase())):
//     return "YES INDEED!";
//     break;

//     case (string === string.toLowerCase()):
//     return "I can't hear you!";
//     break;

//     case (string === "I love you, Grandma."):
//     return "I love you, too.";
//     break;
//   }

// }
function sayHiToGrandma(string){
  if (string === string.toUpperCase()) {
    return "YES INDEED!";
  }
  else if (string === string.toLowerCase()) {
    return "I can't hear you!" 
  }
  else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }

  }
