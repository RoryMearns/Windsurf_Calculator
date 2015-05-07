


/* Form submit on enter? (below) or just have a form auto draw with update on change jQuery .change()  */
function submitenter (myfield,e) {
	var keycode;
	if (window.event) keycode = window.event.keyCode;
	else if (e) keycode = e.which;
	else return true;

	if (keycode == 13) {
		myfield.form.submit();
		return false;
	}
	else {
		return true;
	}
}