// this is image_share.js
Images = new Mongo.Collection("images");

if (Meteor.isClient) {
   Template.images.helpers({images:
    Images.find({}, {sort:{createdOn: -1, rating:-1}})
  });

   Template.images.events({
    'click .js-image':function(event){
        $(event.target).css("width", "50px");
    },
    'click .js-del-image':function(event){
       var image_id = this._id;
       console.log(image_id);
       // use jquery to hide the image component
       // then remove it at the end of the animation
       $("#"+image_id).hide('slow', function(){
        Images.remove({"_id":image_id});
       })
    },
    'click .js-rate-image':function(event){
      var rating = $(event.currentTarget).data("userrating");
      // console.log(rating);
      var image_id = this.data_id;
      console.log("Image: "+image_id+" rating now: "+rating);

      Images.update({_id:image_id},
                    {$set: {rating:rating}});
    },
   });
}
