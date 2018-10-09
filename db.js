var Mock = require("mockjs");
var Random = Mock.Random;

module.exports = () => {
  for (var i = 0; i < 200; i++) {
var data = Mock.mock({
  'course|10':[{
    'id|+1': 10000,
    author: Random.cname(4, 5), 
    title: Random.ctitle(5, 7), 
    imgUrl: "/asset/logo.png",
    lasttimeL:Random.time('a'),
    lasttimeR:Random.time('HH:mm')
  }]
  
});
}
return data;
};
