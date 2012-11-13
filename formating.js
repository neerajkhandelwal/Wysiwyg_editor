$(document).ready(function(){
	if(this.getElementById('formatted-text').contentDocument){
		var doc = this.getElementById('formatted-text').contentDocument;
	}
	doc.designMode = "on";
	doc.getElementsByTagName('body')[0].style.fontSize = '13px';
	doc.getElementsByTagName('body')[0].style.fontFamily = 'Helvetica';
	var val = null;
	
	$('button').click(function(){
		var format = this.id;
		var val = window.val;
		
		var isActive = $(this).hasClass('active');
		if(isActive){
			$(this).removeClass('active');
		}
		else{
			$(this).addClass('active');
		}
		
		if(format == 'formatblock'){
			if(val == '<p>')
				val = '<pre>';
			else if(val == '<pre>')
				val = '<p>';
			else
				val = '<pre>';
		}
		else if(format == 'InsertImage'){
		//image upload from hardisk missing.
			var val = prompt("URL:");
			$(this).removeClass('active');
		}
		window.val = val;
		document.getElementById("formatted-text").contentWindow.document.execCommand(format, false, val);		
	});
	
	$('#done').live('click', function(){
		getUserText('formatted-text');
	});
	
});

function getUserText(id){
	var formatingArea =  document.getElementById(id);
	var formatted_text = formatingArea.contentDocument.getElementsByTagName('body')[0].innerHTML;
	//htmlentities of php function for html safe.
	$('.text-written').html(formatted_text);
}
