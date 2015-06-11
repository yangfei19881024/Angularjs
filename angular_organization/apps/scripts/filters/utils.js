angular.module("shopApp.filter")
  .filter("myToUpper",function(){

    return function(value,txt1,txt2){
      console.log(txt1);
      console.log(txt2);
      return String(value).toUpperCase();

    }

  });
