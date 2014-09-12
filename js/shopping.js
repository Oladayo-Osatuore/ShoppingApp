//using object literal style for better code readabilitys//
var shoppingApp = {
	//checks if user inputs values other than strings//
	validate: function(item) {
		if ($.trim(item) === "" || $.trim(item.length) < 3) {
			$('.warning').text("Please enter a valid item !");
			return false;
		} else {
            return true;
		}
	},


	//receives the validated input and adds the item to the new list//
	addItem: function() {
		var item = $("#text_shoppingItem").val();
		var checkbox = '<input type="checkbox">';
		var del = '<button id="delete">Delete</button>';
		if(shoppingApp.validate(item)) {
			$('#initial_list').append('<li>' + checkbox + " " + item + " " + del + '</li>');
			$('#text_shoppingItem').val("");

		}
		else {
			return false;
		}
		
	},

	// on the click of the add button adds the item to the list//
	//submitItem: function(){
		//$('#add').click(shoppingApp.addItem());
	//},

	//deletes items from either lists on click of the delete button//
	deleteItem: function(event) {
		event.preventDefault();
		$(this).parent().remove();
	},

	//switches between new lists and confirmed lists columns on user click on check box//
	switching: function(event) {
		event.preventDefault();
		if($(this).is(':checked')) {
			$(this).parent().appendTo('#completed');
		} else {
			$(this).parent().appendTo('#initial_list')
		}
	},

	//initializes the functions when called//
	initialize: function() {
		$('#submitid').click(shoppingApp.addItem);
		$('.container ul').on('change', 'input[type=checkbox]', shoppingApp.switching);
		$('.container ul').on('click', 'button', shoppingApp.deleteItem)
	},

}
$(document).ready(shoppingApp.initialize);