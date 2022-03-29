/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    CleverTap.setDebugLevel(3);
    CleverTap.notifyDeviceReady();
    //CleverTap.registerPush();


    /*cordova.plugins.firebase.messaging.onMessage(function(payload) {
    console.log("New foreground FCM message: ", payload);
});
    cordova.plugins.firebase.messaging.onBackgroundMessage(function(payload) {
    console.log("New background FCM message: ", payload);
});

    cordova.plugins.firebase.messaging.requestPermission({forceShow: true}).then(function() {
    console.log("You'll get foreground notifications when a push message arrives");
});

    cordova.plugins.firebase.messaging.getToken().then(function(token) {
    console.log("Got device token: ", token);
});

    cordova.plugins.firebase.messaging.onTokenRefresh(function() {
    console.log("Device token updated");
});

    cordova.plugins.firebase.messaging.createChannel({
    id: "promotion",
    name: "promotion",
    importance: 5
});

    cordova.plugins.firebase.messaging.listChannels().then(function(channels) {
    console.log(channels);
});*/

cordova.plugins.firebase.messaging.getToken().then(function(token) {
    console.log("Got device token: ", token);
    CleverTap.setPushToken(token);
});

cordova.plugins.firebase.messaging.onMessage(function(payload) {
    console.log("New foreground FCM message: ", payload);
    CleverTap.createNotification(payload);
});
    cordova.plugins.firebase.messaging.onBackgroundMessage(function(payload) {
    console.log("New background FCM message: ", payload);
    CleverTap.createNotification(payload);
});

    cordova.plugins.firebase.messaging.requestPermission({forceShow: true}).then(function() {
    console.log("You'll get foreground notifications when a push message arrives");
});


 CleverTap.createNotificationChannel("promotion","promotion","promotion",5,true);

}




