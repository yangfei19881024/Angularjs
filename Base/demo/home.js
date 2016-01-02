angular.module("Boqii.Module")
  .controller("indexController",function($scope,People){

    $scope.name = "yangfei";

    $scope.items = ["item1","item2","item3"];

    $scope.image_data = [{
        content: "http://img.2258.com/d/file/yule/mingxing/bagua/2015-09-15/848cb750dabbc45bc2fcf0271b84c107.jpg",
    },{
        content: "http://ww3.sinaimg.cn/large/60ca8a58jw1ew9x2893fwj20qe0hl438.jpg",
    },{
        content: "http://www.ybxww.com/content/2007-9/10/xinhua_sc_yibin2007910143426.jpg",
    }];
    console.log ("-----data-----");
    console.log ($scope.image_data);
    console.log ("-----data-----");

    var datas1 = [{
        content: "http://img.2258.com/d/file/yule/mingxing/bagua/2015-09-15/848cb750dabbc45bc2fcf0271b84c107.jpg",
    },{
        content: "http://ww3.sinaimg.cn/large/60ca8a58jw1ew9x2893fwj20qe0hl438.jpg",
    },{
        content: "http://www.ybxww.com/content/2007-9/10/xinhua_sc_yibin2007910143426.jpg",
    }];

    var datas2 = [{
        content: "http://g.hiphotos.baidu.com/image/pic/item/bd3eb13533fa828b40966dd8f81f4134970a5a50.jpg"
    },{
        content: "http://f.hiphotos.baidu.com/image/pic/item/30adcbef76094b3669bf85d6a6cc7cd98d109dd8.jpg"
    }];

    $scope.showLayer = false;
    $scope.active_slider = false;

    $scope.clickMe = function(){
      $scope.datas = datas1;
      $scope.hideWrap = true;
      $scope.showLayer = true;
      $scope.active_slider = true;
      setTimeout(function(){
        $scope.$emit("startSlider");
      },20)
    }


    $scope.closeLayer = function(){
      $scope.hideWrap = false;
      $scope.showLayer = false;
      $scope.active_slider = false;
    }

    $scope.clickMe1 = function(){
      $scope.datas = datas2;
      $scope.hideWrap = true;
      $scope.showLayer = true;
      $scope.active_slider = true;
      setTimeout(function(){
        $scope.$emit("startSlider");
      },20)

    }


    var str = "<h2>Hello world!</h2>";
    // var tplEl = angular.element(str)

    $("body").append(str);

    var arr1 = ["one","two","three"];
    var arr2 = ["yang","jack","tomcat"];

    var alertstr = "alert('yangfei')";

    $scope.users = [
      {
        id:"1"
      },
      {
        id:"1"
      },
      {
        id:"1"
      },
      {
        id:"1"
      },
      {
        id:"1"
      },{
        id:"1"
      }
      ,{
        id:"1"
      },
      {
        id:"1"
      },
      {
        id:"1"
      },
      {
        id:"1"
      },{
        id:"1"
      },{
        id:"1"
      },{
        id:"1"
      },{
        id:"1"
      },{
        id:"1"
      },{
        id:"1"
      },{
        id:"1"
      },{
        id:"1"
      },{
        id:"1"
      }
    ];

    $scope.new_users = [
      {
        id:"2"
      },
      {
        id:"2"
      },
      {
        id:"2"
      },
      {
        id:"2"
      },
      {
        id:"2"
      },{
        id:"2"
      }
      ,{
        id:"2"
      },
      {
        id:"2"
      },
      {
        id:"2"
      },
      {
        id:"2"
      }
    ]

    $scope.$on("loadmoredata",function(){
      $scope.users = $scope.new_users;
      // console.log($scope.users);
      $scope.$digest(); //!!!!!!!!!!!!!
    });

  });
