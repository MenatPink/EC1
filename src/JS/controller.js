angular.module('EC1', [])
  .controller('Ctrl', function($scope) {
  $scope.newsArray =[
    {'img':'Assets/event1.png',
    'strapline':'Exhibition: He Xiangu monograph released by Distanz',
    'date':'From March 2016',
    'text': 'he Xiangyu and Liu Wei are among 74 international artist from 33 countries chosen to feature in the Yinchuan biennale 2016'},
    {'img':'Assets/event2.png',
      'strapline': 'Exhibition: Runa Islam at SFMOMA, San Francisco',
      'date':'From March 2016',
      'text':"'Verso', SFMOMA's solo presentation of Bangladeshi-born British artist Runa Islam, features the US premiere of Cabinet of Prototypes (2009-10)"
  },
    {'img': 'Assets/event3.png',
    'strapline': "Preview: White Cube Mason's Yard",
    'date':'19 January 2017, 6 to 8pm',
    'text': "Join us at Mason's Yard, London for the preview of the new Park Seo-Bo exhibition curated by Katharine Kostyál. Curated by Katharine Kostyál"}
  ]
})
;
