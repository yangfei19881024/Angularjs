angular.module("sportsStore")
  .service("getData",function(){

    var classList=[{

      "classId": 1,
      "className": "Elvish 101",
      "startDate": "2015-01-21T00:00:00Z",
      "endDate": "2015-05-10T00:00:00Z",
      "instructorEmail": "baggins@pcc.edu",
      "description": "Learn the language of the elves."
    }, {
      "classId": 2,
      "className": "Hobbit Studies",
      "startDate": "2015-01-22T00:00:00Z",
      "endDate": "2015-05-11T00:00:00Z",
      "instructorEmail": "baggins@pcc.edu",
      "description": "Reflect on your inner hobbit."
    }, {
      "classId": 3,
      "className": "Dwarven Poetry",
      "startDate": "2015-01-20T00:00:00Z",
      "endDate": "2015-05-09T00:00:00Z",
      "instructorEmail": "baggins@pcc.edu",
      "description": "Immerse yourself in the beauty and power of the Dwarven word."
    }, {
      "classId": 4,
      "className": "Middle Earth: A History",
      "startDate": "2015-01-21T00:00:00Z",
      "endDate": "2015-05-10T00:00:00Z",
      "instructorEmail": "took@pcc.edu",
      "description": "Relive Middle Earth adventures through tales and songs."
    }, {
      "classId": 5,
      "className": "Fireworks and Wizardry",
      "startDate": "2015-01-21T00:00:00Z",
      "endDate": "2015-05-10T00:00:00Z",
      "instructorEmail": "gandalf@pcc.edu",
      "description": "Understand the general framework for developing and deploying fireworks."
    }];

    return classList;

  })
