

let obj = JSON.parse($response.body);
obj.data.viewer.me.premium = {
          "planType" : "Plus",
        "__typename" : "Premium",
        "paymentProviderName" : "APPLE_IAP_SUBSCRIPTION",
        "endTime" : "2099-12-06T01:22:14.000Z",
        "isEnabled" : true,
        "isFamilyLeader" : null
    };
//obj.user.nickname = "lovebabyforever";
$done({ body: JSON.stringify(obj) });
