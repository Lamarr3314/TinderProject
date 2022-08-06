let newUser = document.getElementById("newUser");
let profileImg = document.getElementById("profileImg");
let usrname = document.getElementById("Name");
let birthday = document.getElementById("Birthday");
let addie = document.getElementById("Location");
let age = document.getElementById("Age");
let men = document.getElementById("myCheck1");
let women = document.getElementById("myCheck2");
let answer = document.getElementById("answer");
let reasons = document.getElementById("reasons");
let all = document.getElementById("myCheck3");
let yesBox = document.getElementById("yesBox");
let noBox = document.getElementById("noBox");
let loadUser = document.getElementById("loadUser");
let selection = document.getElementById("selection");
let wingSpan = document.getElementById("WingSpan");
let curHeart = document.getElementById("heartImg1");
let heart = document.getElementById("heartImg");
let heartbtn = document.getElementById("heartbtn");
let favButton = document.getElementById("Titles");
let favContainer = document.getElementById("favorites");
let rNav1 = document.getElementById("rightNav1");
let rNav2 = document.getElementById("rightNav2");
let lNav1 = document.getElementById("leftNav1");
let lNav2 = document.getElementById("leftNav2");
let lastDiv = document.createElement("div");
let greenBack = document.getElementById("greenBack");
let blueBack = document.getElementById("blueBack");
let yellowBack = document.getElementById("yellowBack");
let greyBack = document.getElementById("greyBack");
let aiSelection = document.getElementById("aiSelect");
let aiSection = document.getElementById("aiSection");
let whiteBack = document.getElementById("whiteBack");
let dName = document.getElementById("Names");
let description = document.getElementById("description");
let redBack = document.getElementById("redBack");
let goToNextPage = document.getElementById("Titles");
let orangeBack = document.getElementById("orangeBack");
let page1 = document.getElementById("page1");
let backCust = document.getElementById("backgroundCustomizations");
let backColor;
let nreasonArray = [];
let yreasonArray = [];
let result;
let menIndex = [];
let permaNum = 0;
let womenIndex = [];
let likedIndex = [];
let passthrough = 0;
let toggleLiked = false;
for (let i = 0; i < data.results.length; i++) {
  if (data.results[i].gender == "male") {
    menIndex.push(i);
  } else if (data.results[i].gender == "female") {
    womenIndex.push(i);
  }
}
curHeart.src = "images/whiteHeart.png";
heart.src = "images/whiteHeart.png";
aiSection.style.display = "none";
aiSelection.style.display = "none";
console.log(menIndex);
console.log(womenIndex);
console.log(permaNum);
// console.log(data.results[0].name)
men.onclick = function () {
  if (men.checked == true) {
    loadUser.style.display = "flex";
    pref = "men";
    passthrough = 0;
  }
};
women.onclick = function () {
  if (women.checked == true) {
    loadUser.style.display = "flex";
    pref = "women";
    passthrough = 0;
  }
};
all.onclick = function () {
  if (all.checked == true) {
    loadUser.style.display = "flex";
    pref = "all";
    passthrough = 0;
  }
};
newUser.onclick = function () {
  reasons.innerHTML = "";
  if (toggleLiked) {
    permaNum = likedIndex[passthrough];
    passthrough++;
  } else {
    if (pref == "men") {
      permaNum = menIndex[passthrough];
      passthrough++;
    } else if (pref == "women") {
      permaNum = womenIndex[passthrough];
      passthrough++;
    } else {
      permaNum = passthrough;
      passthrough++;
    }
  }
  console.log(likedIndex);
  console.log(toggleLiked);
  console.log(permaNum);
  usrname.innerHTML =
    data.results[permaNum].name.first + " " + data.results[permaNum].name.last;
  wingSpan.innerHTML =
    "Wingpan: " + Math.floor(Math.random() * 100) + " inches";
  profileImg.src = data.results[permaNum].picture.medium;
  console.log(likedIndex);
  console.log(toggleLiked);
  curHeart.src = "images/whiteHeart.png";
  if (toggleLiked) {
    aiSection.style.display = "block";
    if (permaNum == 28) {
      nreasonArray.push("Bruh I can't even read that");
    }
    if (permaNum == 11 || permaNum == 9) {
      nreasonArray.push("Mans has got Deyby Eyebrows, run!");
    }
    if (
      permaNum == 1 ||
      permaNum == 4 ||
      permaNum == 5 ||
      permaNum == 9 ||
      permaNum == 11 ||
      permaNum == 12 ||
      permaNum == 15 ||
      permaNum == 21 ||
      permaNum == 24
    ) {
      nreasonArray.push("Def serial killer");
    }
    if (
      data.results[permaNum].dob.age > 40 &&
      data.results[permaNum].gender == "female"
    ) {
      nreasonArray.push("She's a straight up Cougar");
    }
    if (permaNum == 4 || permaNum == 16) {
      nreasonArray.push("Bro's got more hair than Abdel");
    }
    if (permaNum == 18) {
      nreasonArray.push("Guy looks too much like Aksha");
    }
    if (permaNum == 25) {
      nreasonArray.push("Lookin like Kanye off the Space Rocks");
    }
    if (permaNum == 27) {
      nreasonArray.push("Bro looks like if Kenneth and Deyby had a baby");
    }
    if (
      permaNum == 0 ||
      permaNum == 6 ||
      permaNum == 8 ||
      permaNum == 10 ||
      permaNum == 17 ||
      permaNum == 20
    ) {
      yreasonArray.push("She's a Snow Bunny");
    }
    if (
      data.results[permaNum].dob.age < 30 &&
      data.results[permaNum].gender == "female"
    ) {
      nreasonArray.push("She for the streets");
    }
    if (nreasonArray.length == 0) {
      nreasonArray.push("Wingspan is Insufficient.");
    }
    if (yreasonArray.length < 2 && data.results[permaNum].gender == "female") {
      yreasonArray.push("She certified");
    }
    if (
      data.results[permaNum].gender == "female" &&
      data.results[permaNum].location.country == "Brazil"
    ) {
      yreasonArray.push("She's a Brazilian Baddie, Link Up");
    }
    if (permaNum == 22) {
      yreasonArray.push("She's a Black Queen");
    }
    if (nreasonArray.length > yreasonArray.length) {
      result = "Do Not DM, possibly file restraining Order";
      for (i = 0; i < nreasonArray.length; i++) {
        let remDiv = document.createElement("div");
        remDiv.innerHTML = nreasonArray[i];
        reasons.appendChild(remDiv);
      }
    } else {
      result = "Shoot your Shot";
      for (i = 0; i < yreasonArray.length; i++) {
        let remDiv = document.createElement("div");
        remDiv.innerHTML = yreasonArray[i];
        reasons.appendChild(remDiv);
      }
    }
    dName.innerHTML =
      data.results[permaNum].name.first +
      " " +
      data.results[permaNum].name.last;
    birthday.innerHTML =
      "Birthday: " + transferDate(data.results[permaNum].dob.date);
    addie.innerHTML =
      "Location: " +
      data.results[permaNum].location.state +
      "," +
      data.results[permaNum].location.country;
    age.innerHTML = "Age: " + data.results[permaNum].dob.age;
    console.log("Yes" + yreasonArray + yreasonArray.length);
    console.log("No" + nreasonArray + nreasonArray.length);
    answer.innerHTML = result;
    nreasonArray = [];
    yreasonArray = [];
  }
};
heartbtn.onclick = function () {
  lastDiv.style.borderBottomLeftRadius = "0px";
  lastDiv.style.borderBottomRightRadius = "0px";
  let tempDiv = document.createElement("div");
  curHeart.src = "images/redHeart.png";
  likedIndex.push(permaNum);
  heart.src = "images/redHeart.png";
  tempDiv.innerHTML =
    data.results[permaNum].name.first + " " + data.results[permaNum].name.last;
  favContainer.appendChild(tempDiv);
  lastDiv = tempDiv;
  lastDiv.style.borderBottomLeftRadius = "50px";
  lastDiv.style.borderBottomRightRadius = "50px";
};
orangeBack.onclick = function () {
  document.body.style.backgroundColor = "orange";
};
redBack.onclick = function () {
  document.body.style.backgroundColor = "red";
};
blueBack.onclick = function () {
  document.body.style.backgroundColor = "blue";
};
greenBack.onclick = function () {
  document.body.style.backgroundColor = "green";
};
yellowBack.onclick = function () {
  document.body.style.backgroundColor = "yellow";
};
greyBack.onclick = function () {
  document.body.style.backgroundColor = "grey";
};
whiteBack.onclick = function () {
  document.body.style.backgroundColor = "white";
};

function transferDate(date) {
  let newDate = "";
  let it1 = date.slice(5, 7);
  switch (it1) {
    case "01":
      newDate = "January";
      break;
    case "02":
      newDate = "February";
      break;
    case "03":
      newDate = "March";
      break;
    case "04":
      newDate = "April";
      break;
    case "05":
      newDate = "May";
      break;
    case "06":
      newDate = "June";
      break;
    case "07":
      newDate = "July";
      break;
    case "08":
      newDate = "August";
      break;
    case "09":
      newDate = "September";
      break;
    case "10":
      newDate = "October";
      break;
    case "11":
      newDate = "November";
      break;
    case "12":
      newDate = "December";
      break;

    default:
      newDate = "NONE";
      break;
  }
  newDate += ", " + date.slice(5, 7) + ", " + date.slice(0, 4);
  //   it = it.split("-", 3);
  //   it = it.slice(6 - 9);
  return newDate;
}
goToNextPage.onclick = function () {
  toggleLiked = true;
  passthrough = 0;
  backCust.style.display = "none";
  selection.style.display = "none";
  aiSelection.style.display = "block";
};
yesBox.onclick = function () {
  aiSelection.style.display = "block";
};
noBox.onclick = function () {
  aiSection.style.display = "none";
};
