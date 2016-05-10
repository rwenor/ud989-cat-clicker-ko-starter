

var Cat = function() {
  this.clickCnt = ko.observable(0);
  this.name = ko.observable("Tabby");
  this.imgSrc = ko.observable("img/434164568_fea0ad4013_z.jpg");
  this.imgAttr = ko.observable("xxxxx");

  this.level = ko.computed(function() {
    // console.log("Hei");
    return "Calk: "+ parseInt(this.clickCnt() / 10);
  }, this);

  this.callName = ko.observableArray([
    { name: "Bungle", type: "Bear" },
    { name: "George", type: "Hippo" },
    { name: "Zippy", type: "Unknown" }
  ]);
};

var ViewModel = function() {

  this.currentCat = ko.observable( new Cat() );
  this.incCounter = function() {
    this.currentCat().clickCnt( this.currentCat().clickCnt() + 1);
  };

};


ko.applyBindings(new ViewModel());
