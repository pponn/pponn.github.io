const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/baby-kitten.jpg") {
    myImage.setAttribute("src", "images/baby-kitten2.avif");
  } else {
    myImage.setAttribute("src", "images/baby-kitten.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Baby Kitten, ' + myName;
    }
  }
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Baby Kitten, ' + storedName;
  }
  
  myButton.onclick = function() {
    setUserName();
  }