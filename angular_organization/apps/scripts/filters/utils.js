angular.module("shopApp.filter")
  .filter("myToUpper",function(){

    return function(value,txt1,txt2){
      console.log(txt1);
      console.log(txt2);
      return String(value).toUpperCase();

    }

  })
  .filter("filterUsers",function(){
    /**
      注意：这里的 objValue 参数 是 users 这个对象 而不是对象里的item

    **/
    return function(objValue,param){
      var list = [];

      angular.forEach(objValue,function(item){

        if( item.age > param ){
          list.push( item );
        }

      })

      return list;
    }

  })
