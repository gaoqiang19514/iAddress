var Random = Mock.Random;

var lg = function(arg){
  // console.log(arg);
};

Mock.setup({
  // timeout: '1000'
});

const stateMap = {
  provinces: [],
  cities: [],
  areas: [],
  streets: []
};

var init = function(){
  Api.get('./mock/provinces.json')
    .then(function(res){
      const { data } = res;
      stateMap.provinces = data;
    });
  Api.get('./mock/cities.json')
    .then(function(res){
      const { data } = res;
      stateMap.cities = data;
    });
  Api.get('./mock/areas.json')
    .then(function(res){
      const { data } = res;
      stateMap.areas = data;
    });
  Api.get('./mock/streets.json')
    .then(function(res){
      const { data } = res;
      stateMap.streets = data;
    });
};

init();

Mock.mock(/getProvince/, 'get', function(options){
  lg('调用getProvince接口');
  return stateMap.provinces;
});

Mock.mock(/getCities/, 'get', function(options){
  lg('调用cities接口');

  var code = Util.getCodeFromUrlString(options.url);

  return stateMap.cities.filter((item) => {
    return item.provinceCode === code;
  });
});

Mock.mock(/getAreas/, 'get', function(options){
  lg('调用areas接口');
  var code = Util.getCodeFromUrlString(options.url);
  return stateMap.areas.filter((item) => {
    return item.cityCode === code;
  }); 
});

Mock.mock(/getStreets/, 'get', function(options){
  lg('调用streets接口');

  var code = Util.getCodeFromUrlString(options.url);
  return stateMap.streets.filter((item) => {
    return item.areaCode === code;
  }); 
});
