var Util = {
  // /getCities?code=21
  getCodeFromUrlString: function(url){
    if(url && url.match(/code=(\d+)$/)){
      return url.match(/code=(\d+)$/)[1];
    }
    return null;
  }
};