// this is image_share.js
Images = new Mongo.Collection("images");

if (Meteor.isClient) {
   Template.images.helpers({images:Images.find()});

   Template.images.events({
    'click .js-image':function(event){
        $(event.target).css("width", "50px");
    },
   });
}

if (Meteor.isServer) {
   console.log("I am the server");
}


console.log("where am I running");
