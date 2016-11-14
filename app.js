/**
 * Created by uriel.miranda on 14/11/2016.
 */
(function(){
    'use strict';

    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyCUMeDSI__FvVEnTQs35cKq5wAI47-c_js",
        authDomain: "ualbulkupload.firebaseapp.com",
        databaseURL: "https://ualbulkupload.firebaseio.com",
        storageBucket: "ualbulkupload.appspot.com",
        messagingSenderId: "206109322769"
    };
    firebase.initializeApp(config);

    let progress = null;
    let uploader = document.querySelector("#uploader");
    let fileButton = document.querySelector("#fileButton");

    fileButton.addEventListener('change',(e) =>{
        let file = e.target.files[0];
        let storageRef =  firebase.storage().ref(`files/${file.name}`);

        storageRef.put(file).on('state-changed', progress =(snapshot) =>{
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
        },
            error => (err),
            complete =>{}
    );
    })
})();
