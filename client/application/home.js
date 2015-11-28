/* 
* @File: home.js
* @Author: Sujith_G
* @Date:   2014-06-28 00:53:25
* @Last Modified time: 2014-11-21 22:15:50
* @Email: sujith3g@gmail.com 
*/
Template.home.events({
	'keyup #search': function () {
		if($('#search').val().trim() !==""){
			// $('#results').find('.spinner').remove();
			$('#results').empty();
			Blaze.render(Template.spinner,$('#results')[0]);
			Meteor.call('sample',$('#search').val().trim(), function (error, result) {
				if(error){
					console.log(error);
				}else{
					// console.log(result);
					
					$('#results').empty();
					$('#results').append('<br/>');
					// Template.home.books = result.Books;
					// UI.render(Template.home);
					if(result.Books){
						$.each(result.Books, function(index, book) {
							var row = $('<div class="row" style="padding:5px;cursor:pointer;"></div>');
							var anchr = $('<a style="display:block;text-decoration:none;color:black;" href="books/'+book.ID+'"></a>');
							col1 = $('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>');
							col2 = $('<div class="col-xs-9 col-sm-9 col-md-9 col-lg-9"></div>');
							img = $('<img src="'+book.Image+'" style="float:left;" class="img-thumbnail"/>');
							col1.append(img);
							col2.append('<h4>'+book.Title+'</h4>');
							col2.append('<p>'+book.Description+'</b>');
							col2.append("ISBN: "+'<b>'+book.isbn.substr(0,3)+"-"+book.isbn.substr(3,1)+"-"+book.isbn.substr(4,5)+"-"+book.isbn.substr(9,3)+"-"+book.isbn.substr(12)+'</b>');
							col2.append('<b id="bookId" style="display:none;">'+book.ID+"</b>");
							col2.append('<br/>for Download Link and More Details <a href="books/'+book.ID+'">Click here</a>');
							anchr.append(col1);
							anchr.append(col2);
							row.append(anchr);
							$('#results').append(row);
						});
					}
				}			
			});
		}
	}//,
	// 'click #results > .row':function(evt){
	// 	console.log($(evt.target).find('a').eq('0').attr('href'));
	// }
});
Template.home.rendered = function () {
	$(document.body).on('click', '.row', function(event) {
		// event.preventDefault();
		// console.log($(this));
		// if($(event.target).find('a').length > 0){
		// 	$(event.target).find('a')[0].click();
		// }else if($(event.target).parent().find('a').length > 0){
		// 	$(event.target).parent().find('a')[0].click();
		// }else if($(event.target).parent().parent().find('a').length > 0){
		// 	$(event.target).parent().parent().find('a')[0].click();
		// }
		// $(event.target).find('a')[0].click();
	});
};