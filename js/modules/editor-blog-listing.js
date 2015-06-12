(function(){	
	//triggered when modal is about to be shown
	$('#blog-delete-modal').on('show.bs.modal', function(e) {

	    //get data-id attribute of the clicked element
	    var title = $(e.relatedTarget).parents().find('.panel-title').html();

	    title = (title)? title : '';

	    //populate the textbox
	    $(e.currentTarget).find('.modal-body p').text('Are you sure you want to delete the post '+title+ '?');
	});
})();