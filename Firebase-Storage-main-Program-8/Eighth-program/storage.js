(function() {
  // Your web app's Firebase configuration
const firebaseConfig = {
  //Add your code below to setup web app's Firebase configuration
   
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Root ref
  var storage=firebase.storage();
  var storageRef=storage.ref();
  
  //get UI elements
  const file = document.getElementById('file');
  const upload=document.getElementById('upload');
  const download=document.getElementById('download');
  const status=document.getElementById('status');
  const image=document.getElementById('image');

  //upload file
  upload.addEventListener('click',e=>{
     var ref=storageRef.child('globe');
     let photo=document.getElementById('file').files[0];

     //Add your code below to upload to firebase storage
     
  });

    //download file
    download.addEventListener('click',e=>{
        var ref=storageRef.child('globe');
        

       //Add your code below to download from firebase storage
        
        });

}());
    