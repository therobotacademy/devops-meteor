if (Meteor.isServer){
	Meteor.startup(function(){
		/*if (Images.find().count() == 0){
				Images.insert(
					{
      				img_src:"laptops.jpg",
      				img_alt:"some laptops on a table"
   					}
				);
		}*/
		if (Images.find().count() == 0){		
			for (var i=1;i<23;i++){
				Images.insert(
					{
      				img_src:"img_"+i+".jpg",
      				img_alt:"image number "+i 
   					}
				);	
			}// end of for insert images
			// count the images!
			console.log("startup.js says: "+Images.find().count());
		}// end of if have no images
	});
}