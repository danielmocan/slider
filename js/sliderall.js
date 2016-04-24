/*** CHANGE THIS WITH YOUR OWN JSON
The slider will be populated with information from this json,
***/
var jsonImgWithTitle =
  [
  {
    "title": "This is title for Image 0",
    "alt": "Image no 0",
    "picture": "https://unsplash.it/1600/800?image=0",
    "about": "Aute nisi nulla adipisicing magna dolore consequat mollit ullamco. Anim ex minim ullamco tempor aliqua dolore qui cillum. Voluptate consequat id do nulla amet deserunt officia. Voluptate duis aliqua non exercitation dolor pariatur. Consectetur aute aliquip occaecat aliquip elit laborum enim nisi commodo ea dolore nisi id non. Occaecat in labore exercitation fugiat.\r\n",
    "_id": "5704e912c3b440d95a284618"
  },
  {
    "title": "This is title for Image 1",
    "alt": "Image no 1",
    "picture": "https://unsplash.it/1600/800?image=1",
    "about": "Ullamco irure cillum nostrud et excepteur eiusmod magna adipisicing id eu irure. Velit aute ad est id occaecat ipsum ea sit cupidatat sit occaecat occaecat. Aute duis anim tempor proident. Aliquip cupidatat cupidatat consequat et labore tempor enim.\r\n",
    "_id": "5704e912d42987483f4dda97"
  },
  {
    "title": "This is title for Image 2",
    "alt": "Image no 2",
    "picture": "https://unsplash.it/1600/800?image=2",
    "about": "In exercitation tempor ut eiusmod excepteur esse laborum laboris sint ex. Consectetur sit esse ex qui magna occaecat labore deserunt anim. Aute sunt minim est ullamco cupidatat veniam duis officia.\r\n",
    "_id": "5704e9121b00a4ca58d3a698"
  },
  {
    "title": "This is title for Image 3",
    "alt": "Image no 3",
    "picture": "https://unsplash.it/1600/800?image=3",
    "about": "Excepteur laboris irure minim laboris fugiat nisi qui do anim. In exercitation cupidatat id labore esse minim pariatur excepteur nisi. Reprehenderit consectetur do laboris non quis nisi aliquip quis et adipisicing.\r\n",
    "_id": "5704e9125dc49443321a4a07"
  },
  {
    "title": "This is title for Image 4",
    "alt": "Image no 4",
    "picture": "https://unsplash.it/1600/800?image=4",
    "about": "Minim ad Lorem aute et et ea et do duis. Do elit enim eu ex amet culpa. Elit pariatur sint non elit amet mollit excepteur duis pariatur quis et. Elit proident consequat nisi elit. Nostrud in anim dolor velit quis aute mollit deserunt ea occaecat Lorem. Labore consequat esse duis cupidatat est sunt mollit aliquip cupidatat tempor eu ut adipisicing. Minim sunt mollit nostrud in et enim aliqua laborum pariatur fugiat culpa qui nulla est.\r\n",
    "_id": "5704e91296afa02bf5fc669d"
  },
  {
    "title": "This is title for Image 5",
    "alt": "Image no 5",
    "picture": "https://unsplash.it/1600/800?image=5",
    "about": "Dolore deserunt fugiat laboris ullamco enim sit labore velit aliquip sit labore. Esse elit esse nisi ut adipisicing mollit. Sint incididunt deserunt et proident occaecat aute cillum qui sit duis elit ea eu. Culpa adipisicing officia commodo cillum qui ex. Dolor non culpa dolore enim laboris dolore amet excepteur magna elit. Ut laborum ullamco ex deserunt dolore quis et tempor.\r\n",
    "_id": "5704e91210aefe3414066d22"
  },
  {
    "title": "This is title for Image 6",
    "alt": "Image no 6",
    "picture": "https://unsplash.it/1600/800?image=6",
    "about": "Ullamco veniam ea minim laborum cupidatat non occaecat velit aute esse incididunt anim quis nisi. Est laboris in dolore nisi voluptate irure labore esse quis cupidatat excepteur occaecat. Nostrud cupidatat eiusmod labore fugiat quis culpa adipisicing. Ullamco nulla laboris sunt ad ullamco velit. Culpa magna ut aute quis magna est aliqua qui pariatur nulla aliquip Lorem. Deserunt irure qui sit amet nisi consequat fugiat est non voluptate elit quis officia reprehenderit.\r\n",
    "_id": "5704e9128c94e4b0e8b29bc4"
  },
  {
    "title": "This is title for Image 7",
    "alt": "Image no 7",
    "picture": "https://unsplash.it/1600/800?image=7",
    "about": "Consectetur non elit id consequat eiusmod. Veniam officia nulla tempor sit aliquip in fugiat aliquip fugiat qui aliqua ea. Anim ad ad nisi ullamco dolor esse deserunt laboris minim. Consectetur cupidatat irure labore sit esse. Veniam duis deserunt labore excepteur nisi esse amet proident ipsum cupidatat laborum quis amet. Voluptate esse non in velit fugiat magna esse reprehenderit officia excepteur. Adipisicing officia anim sint dolore minim.\r\n",
    "_id": "5704e912091b852fffaef5d9"
  }
];
/*** End of Json Template ***/

/** This is the template for the slider you can change the classes and more stuff to suit your needs **/
var template ='<div class="sld-cont gradient-layer">\
    <div class="slider-left-container">\
        <img id="prev" src="assets/img/prev.png">\
    </div>\
    <div class="slider-center-container">\
        <div id="moveMe" style="animation: slider1 9s linear infinite;">\
            <div class="slider-40">\
                <div class="sliderImgBack" id="sliderImg" style="background-image: url(&quot;https://unsplash.it/1600/800?image=0&quot;);">\
                </div>\
            </div>\
            <div class="slider-60">\
                <div class="slider-title" id="sliderTitle">{{sliderTitle}}</div>\
                <p class="slider-text" id="sliderText">{{sliderText}}</p>\
            </div>\
        </div>\
        <div class="slider-circles-container" id="sliderCircles">\
              {{circles}}\
      </div>\
    </div>\
    <div class="slider-right-container">\
        <img id="next" src="assets/img/next.png">\
    </div>\
</div>\
';
/*** End of slider template ***/

var slider = new List();
for (var i = 0; i < jsonImgWithTitle.length; i++) {
  slider.append(jsonImgWithTitle[i]);
}

/* The List to move through the slider */
function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;
}

function append(element) {
  this.dataStore[this.listSize++] = element;
}

function find(element) {
  for (var i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] === element) {
      return i;
    }
  }

  return -1;
}

function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    this.listSize--;
    return true;
  }

  return false;
}

function length() {
  return this.listSize;
}

function toString() { //its used only to see elements in the list
  return this.dataStore;
}

function insert(element, after) {
  var insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos + 1, 0, element);
    this.listSize++;
    return true;
  }

  return false;
}

function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

function contains(element) {
  for (var i = 0; i < this.listSize; i++) {
    if (this.dataStore[i] === element) {
      return true;
    }
  }

  return false;
}

function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize - 1;
}

function prev() {
  if (this.pos > 0) {
    this.pos--;
  }
}

function next() {
  if (this.pos < this.listSize - 1) {
    this.pos++;
  }
}

function currPos() {
  return this.pos;
}

function moveTo(position) {
  this.pos = position;
}

function getElement() {
  return this.dataStore[this.pos];
}
/*** End of list  ***/

/*** Utility Functions ***/
function compose(template, slider) {
  var element = slider.getElement();
  var toAdd = [['{{sliderTitle}}', element.title], ['{{sliderImage}}', element.picture], ['{{sliderText}}', element.about], ['{{circles}}', composeCircles(slider)]];
  var temp = template.substring(0);
  for (var i = 0; i < toAdd.length; i++) {
    temp = temp.replace(toAdd[i][0], toAdd[i][1]);
  }
  return temp;
}

function composeCircles(slider) {
  var comp = '';
  var currentPos = slider.currPos();
  for (var i = 0; i < slider.length(); i++) {
    comp += comparePosition(i, currentPos);
  }
  return comp;
}

function comparePosition(toVer, pos) {
  if (toVer != pos) {
    return '<div class="circle" sliderPosition=' + toVer + ' ></div>';
  }else {
    return '<div class="circle-selected"  sliderPosition=' + toVer + '></div>';
  }
}

function setEvents() {
  var circle = document.getElementsByClassName('circle');
  for (var i = 0; i < circle.length; i++) {
    circle[i].addEventListener('click', function(event) {
      var target = event.target;
      moveToPos( parseInt( target.attributes['sliderPosition'].value ) );
    });
  }
}

function setAnimate() {
  var temp = '';
  temp = 'slider1 '+ speed + 's linear infinite';
  return temp;
}

function setAnimateFastOutLeft() {
  var temp = '';
  temp = 'fastOutLeft 1s linear';
  return temp;
}

function setAnimateFastOutRight() {
  var temp = '';
  temp = 'fastOutRight 1s linear';
  return temp;
}


function nextSlider() {
  if (slider.pos === slider.length() - 1) {
    slider.front();
  }else {
    slider.next();
  }
  movingPart.style.animation = setAnimateFastOutLeft();
  animateSliderEvent();
}

function nextSliderAuto() {
  if (slider.pos === slider.length() - 1) {
    slider.front();
  }else {
    slider.next();
  }
  insertNewData();
}

function prevSlider() {
  if (slider.pos === 0) {
    slider.end();
  }else {
    slider.prev();
  }
  movingPart.style.animation = setAnimateFastOutRight();
  animateSliderEvent();
}

function moveToPos(pos) {
  movingPart.style.animation = setAnimateFastOutLeft();
  slider.moveTo(pos);
  animateSliderEvent();
}

function insertNewData() {
  imgToChange.style.backgroundImage = 'url(\''+slider.getElement().picture+'\')';
  sliderTitle.innerText = slider.getElement().title;
  sliderText.innerText = slider.getElement().about;
  sliderCircles.innerHTML = composeCircles(slider);
  setEvents();
}

function animateSliderEvent() {
  setTimeout(function(){movingPart.style.animation = setAnimate(); insertNewData();}, 500);
  clearInterval(myInterval);
  myInterval = setInterval(function(){ nextSliderAuto();}, speed*1000);
}

/*** End of utility functions ***/

/*** Main ***/
var sliderDiv = document.getElementById('sliderDiv');
var speed = parseInt(sliderDiv.attributes['speed'].value);
var startFrom = parseInt(sliderDiv.attributes['start'].value);
slider.moveTo(startFrom);
sliderDiv.innerHTML = compose(template, slider);

var imgToChange = document.getElementById('sliderImg');
var sliderTitle = document.getElementById('sliderTitle');
var sliderText = document.getElementById('sliderText');
var sliderCircles = document.getElementById('sliderCircles');
var movingPart = document.getElementById('moveMe');
var prev = document.getElementById('prev');
var next = document.getElementById('next');

movingPart.style.animation = setAnimate();
next.addEventListener('click', nextSlider);
prev.addEventListener('click', prevSlider);


setEvents();
var myInterval = setInterval(function(){ nextSliderAuto();}, speed*1000);
/*** End ***/
