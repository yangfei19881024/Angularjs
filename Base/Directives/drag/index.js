var module = angular.module("module",[]);

		module.controller("ctrl",["$scope",function($scope){

			$scope.color = "red";

			$scope.changeColor = function(){
				return 'yellow';
			}

		}]);

		module.directive("helloWorld",function(){
			return {
				restrict:"AE",
				template:"<p style='background:{{color}}'>{{color}}</p>",
				replace:true,
				scope:{
					color:"@",
					colorChange:"&"
				},
				link:function(scope,element,attr){
					console.log(attr);
					element.on("click",function(){
						scope.$apply(function(){
							scope.color = "blue";
						});
					});

					element.on('mouseover',function(){
						scope.$apply(function(){
							scope.color = scope.colorChange();
						})
					})

				}
			}
		});

		module.directive("draggable",function($document){

			return{
				restrict:"AE",
				link:function(scope,element,attr){
					console.log(element);

					/**
   					 *element 就是所有绑定 draggable指令的元素
   					 *element 是个jquery对象，可以使用jquery的方法(如下)
					*/
					element.addClass("draggables");
					element.text("hello helloWorld");

					var startX = 0,
						startY = 0,
						x = 0,
						y = 0;

					element.on("mousedown",function(e){
						e = e || window.event;
						startX = e.pageX - element[0].offsetLeft;
						startY = e.pageY - element[0].offsetTop;
						$document.on("mousemove",mousemove);
						$document.on("mouseup",mouseup);
					});

					function mousemove(e){

						e.preventDefault();

						e = e || window.event;

						x = e.pageX - startX;
						y = e.pageY - startY;

						element.css({
							"left":x+"px",
							"top":y+"px"
						});
					}

					function mouseup(e){

						$document.unbind("mousemove",mousemove);
						$document.unbind("mouseup",mouseup);

					}

				}
			}

		});
