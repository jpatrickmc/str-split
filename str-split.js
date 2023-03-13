// node strSplit.js

let fullName = "Jerry Jones";

function splitName() {
  let strArray = fullName.split(/(\s+)/);
  console.log("strArray: ", strArray);
  console.log("strArray.lengtth: ", strArray.length);
  let fName = strArray[0].length > 0 ? strArray[0] : "";
  let lName = strArray[2].length > 0 ? strArray[2] : "";
  console.log("fname: ", fName);
  console.log("lname: ", lName);
}

splitName();
