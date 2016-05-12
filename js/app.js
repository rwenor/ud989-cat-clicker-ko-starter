

var catList = [
  {
    name: "Tabby",
    imgSrc: "img/434164568_fea0ad4013_z.jpg",
    nickName: [
      { name: "Bungle", type: "Bear" },
      { name: "George", type: "Hippo" },
      { name: "Zippy", type: "Unknown" }
    ]
  },
  {
    name: "Tabby2",
    imgSrc: "img/22252709_010df3379e_z.jpg",
    nickName: [
      { name: "Bungle2", type: "Bear" },
      { name: "George2", type: "Hippo" },
      { name: "Zippy2", type: "Unknown" }
    ]
  },
  {
    name: "Tabby3",
    imgSrc: "img/4154543904_6e2428c421_z.jpg",
    nickName: [
      { name: "Bungle3", type: "Bear" },
      { name: "George3", type: "Hippo" },
      { name: "Zippy3", type: "Unknown" }
    ]
  }

];


var Cat = function(cat) {
  this.clickCnt = ko.observable(0);
  this.name = ko.observable(cat.name);
  console.log(cat.name);
  this.imgSrc = ko.observable(cat.imgSrc);
  this.imgAttr = ko.observable("xxxxx");

  this.level = ko.computed(function() {
    // console.log("Hei");
    return "Calk: "+ parseInt(this.clickCnt() / 10);
  }, this);

  this.callName = ko.observableArray(cat.nickName);
};



var ViewModel = function() {
  self = this;

  self.currentCat = ko.observable( new Cat(catList[0]) );

  self.catList = ko.observableArray([]);
  catList.forEach( function(cat) {
    self.catList.push(new Cat(cat));
    //console.log(cat.name);
  });

  this.incCounter = function() {
    this.clickCnt( this.clickCnt() + 1);
  };

  this.setCurrentCat = function() {
    self.currentCat(this);
    console.log(this.name());
  };

};


ko.applyBindings(new ViewModel());
