//index.js
//获取应用实例
const app = getApp()

Page({
  onLoad: function() {
    var itemId = 5
    this.myPromise(itemId)
                  .then((x) => {
                    console.log(x)
                    if(x.purchase == "success") {
                        wx.showToast({
                          title: `Purchase SUCCESS!!`,
                          icon: 'success',
                          duration: 3000
                        })
                    }
                  })
  },

  myPromise: function(params) {
    return new Promise((resolve, reject) => {
      // Assume .. we request Api with itemId
      // and return details of item
      // but, we need to wait for 3 seconds
      setTimeout((params) => {
        var responseFromApi = { name: "Salmon", price: 30, purchase: "success" }
        resolve(responseFromApi)
      }, 3000)
    })
  }
})
