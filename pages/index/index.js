//index.js
//获取应用实例
const app = getApp()

Page({
  onLoad: function() {
    var itemId = 5
    this.myPromise(itemId)
                  .then((x) => {
                    // Action: show success pop-up .. if status is success
                    wx.showToast({ title: `Purchase SUCCESS!!`, icon: 'success', duration: 3000 }) 
                  })
                  .catch((err) => {
                    wx.showToast({ title: err, icon: 'none', duration: 3000 }) 
                  })
  },

  myPromise: function(params) {
    return new Promise((resolve, reject) => {
      // Assume .. we request Api with itemId
      // and return details of item
      // but, we need to wait for 3 seconds
      setTimeout((params) => {
        var responseFromApi = { name: "Salmon", price: 30, purchase: "fail" }
        if (responseFromApi.purchase == "success") {
          resolve(responseFromApi)
        } else {
          reject("Fail Purchase from server")
        }
      }, 3000)
    })
  }
})
