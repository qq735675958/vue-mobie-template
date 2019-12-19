import Mock from "mockjs";
var Random = Mock.Random;

function leftClass() {
  let rightMeau = [],
    data = [];
  for (let i = 0; i < 20; i++) {
    var classTitle = Random.ctitle(4);
    var image = Random.image("128x90", "点个菜吧");
    var name = Random.cword(3, 12);
    var subtext = Random.csentence(3, 10);
    var monney = Random.natural(1, 1000);
    rightMeau.push({
      subClassName: name,
      foodimg: image,
      foodsell: subtext,
      foosellnum: monney
    });
    data.push({
      classTitle: classTitle,
      foodlList: rightMeau
    });
  }
  return data;
}

Mock.mock("/dingdong/list", "get", leftClass());
