angular.module("myModule")
  .factory("People",function(){
    return [
      {name:"yangfei",age:12},
      {name:"tomcat",age:15},
      {name:"jackson",age:22},
    ]
  })
  .service("Classes",function(){
  })
