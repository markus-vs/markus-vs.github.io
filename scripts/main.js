let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bicycle.webp') {
      myImage.setAttribute('src','images/car.webp');
    } else {
      myImage.setAttribute('src','images/bicycle.webp');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'I like fast bikes my name is ' + myName;
    }
  }
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'I like big cars, my name is ' + storedName;
  }
  
  myButton.onclick = function() {
    setUserName();
  }
