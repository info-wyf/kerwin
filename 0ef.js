var body = $response.body;

body = body.replace(/"endTime": null/g, 
'"endTime": "2099-12-06T01:22:14.000Z"');

body = body.replace(/"paymentProviderName": null/g, 
'"paymentProviderName": "APPLE_IAP_SUBSCRIPTION"');

body = body.replace(/"planType": null/g, 
'"planType": "Plus"');

body = body.replace(/"isEnabled": false/g, 
'"isEnabled": true');

body = body.replace(/"isEnrolled": false/g, 
'"isEnrolled": true');

body = body.replace(/"policy": "NONE"/g, 
'"policy": "UNRESTRICTED"');

$done({ body });
