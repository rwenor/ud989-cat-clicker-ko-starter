
var ViewModel = function() {
  this.clickCnt = ko.observable(0);
  this.name = ko.observable("Tabby");
  this.imgSrc = ko.observable("img/434164568_fea0ad4013_z.jpg");
  this.imgAttr = ko.observable("xxxxx");

  this.incCounter = function() {
    this.clickCnt( this.clickCnt() + 1);
  };

  this.level = ko.computed(function() {
    console.log("Hei");
    return "Calk: "+ parseInt(this.clickCnt() / 10);
  }, this);

  this.callName = ko.observableArray([
    { name: "Bungle", type: "Bear" },
    { name: "George", type: "Hippo" },
    { name: "Zippy", type: "Unknown" }
  ]);

};


ko.applyBindings(new ViewModel());
