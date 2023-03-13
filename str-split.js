// node strSplit.js
let address = " 3808 Main Street, 210, Austin, TX  12345";

const addressObj = {
  num: "",
  name: "",
  apt: "",
  city: "",
  state: "",
  zip: "",
};

function getStreetNumber() {
  console.log("address: ", address);
  if (address !== "") {
    let strArray = address.split(",");

    const streetNum = strArray[0].match(/(\d+)/);
    if (streetNum !== null) {
      addressObj.name = address.substring(
        streetNum[0].length + 1,
        address.length
      );
      addressObj.num = streetNum[0].split("");
    } else {
      addressObj.name = address;
    }
    return addressObj.num;
  }
}

function getStreetName() {
  var streetName = addressObj.name;
  if (streetName !== "") {
    let strArray = streetName.split(",");
    streetName = strArray[0];
    streetName = streetName.trim();
  }
  return streetName;
}

function splitApartment() {
  var apt = addressObj.name;
  let strArray = apt.split(",");
  if (strArray.length >= 4) {
    return strArray[1];
  }
  return "";
}

function getCity() {
  let strArray = address.split(",");
  if (apt !== "") {
    return strArray[2].trim();
  } else {
    return strArray[1].trim();
  }
}

function getState() {
  let strArray = address.split(",");
  if (apt !== "") {
    return strArray[3].trim().slice(0, 2);
  } else {
    return strArray[2].trim().slice(0, 2);
  }
}

function getZip() {
  let strArray = address.split(/(\s+)/);
  return strArray[strArray.length - 1];
}

const streetNum = getStreetNumber();
console.log("streetNum:", streetNum);

const streetName = getStreetName();
console.log("streetName:", streetName);

const apt = splitApartment();
console.log("apt:", apt);

const city = getCity();
console.log("city:", city);

const state = getState();
console.log("state:", state);

const zip = getZip();
console.log("zip:", zip);
