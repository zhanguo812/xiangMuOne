let http = {
  url: "",//默认地址
  post: function (url, data, fun) {
    $.ajax({
      type: "post",
      url: url,
      async: true,
      data: data,
      success: function (result) {
        fun(result)
      }
    });
  },
  get: function (url, data, fun) {
    $.ajax({
      type: "get",
      url: url,
      async: true,
      data: data,
      success: function (result) {
        fun(result)
      }
    });
  },
  mukuan: () => {
    let url = http.url + "";
    let data = {
      //请求参数
    };
    fun = function (result) {
      //请求处理
    };
    this.get(url, data, fun);
  }
}
http.mukuan();