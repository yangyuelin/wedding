function divClick() {

	var show = "";
	var apm = document.getElementsByName("invitation");
	for (var i = 0; i < apm.length; i++) {
		if (apm[i].checked)
			show = apm[i].value;
	}

	switch (show) {
		case '1':
			document.getElementById("form-1").style.display = "flex";
			document.getElementById("form-2").style.display = "block";
			document.getElementById("form-3").style.display = "block";
			document.getElementById("form-4").style.display = "block";
			break;
		case '2':
			document.getElementById("form-1").style.display = "flex";
			document.getElementById("form-2").style.display = "none";
			document.getElementById("form-3").style.display = "none";
			document.getElementById("form-4").style.display = "none";

			break;
		case '3':
			document.getElementById("form-1").style.display = "none";
			document.getElementById("form-2").style.display = "block";
			document.getElementById("form-3").style.display = "block";
			document.getElementById("form-4").style.display = "block";
			break;
		default:
			document.getElementById("form-1").style.display = "none";
			document.getElementById("form-2").style.display = "none";
			document.getElementById("form-3").style.display = "none";
			document.getElementById("form-4").style.display = "none";

			break;
	}
}


$(function()
{  
      $('input').focusin(function()
      {
        input = $(this);
        input.data('place-holder-text', input.attr('placeholder'))
        input.attr('placeholder', '');
      });

      $('input').focusout(function()
      {
          input = $(this);
          input.attr('placeholder', input.data('place-holder-text'));
      });
})




$(function() {
	$('#sendOrder').on('click', function(e) {
		var status = true;

		var gender = $("input[name='gender']:checked").next().text();
		var name = $('#name').val();
		// var adderssN = $('#adderssN').val();
		// var adderssT = $('#adderssT').val();
		var invitation = $("input[name='invitation']:checked").next().text();
		var adderss = $('#adderssN').val() + "-" + $('#adderssT').val();
		var number = $('#number').val();
		var childSeat = $('#childSeat').val();
		var vegetarian = $('#vegetarian').val();


		$('.select').each(function(inedx) {


			if (name == '') {
				$('#name').css('border', '1px solid #ff0000');
				status = false;

			}
			// if (adderssN == '') {
			// 	$('#adderssN').css('border', '1px solid #ff0000');
			// 	status = false;

			// }			
			// if (adderssT == '') {
			// 	$('#adderssT').css('border', '1px solid #ff0000');
			// 	status = false;
			// }
			if (status) {
				var data = {
					'gender': gender,
					'name': name,
					'invitation': invitation,
					'adderss': adderss,
					'number': number,
					'childSeat': childSeat,
					'vegetarian': vegetarian
				}
				send(data);
			}
		})

		function send(data) {
			$.ajax({
				type: "get",
				url: "https://script.google.com/macros/s/AKfycbz4hNH_GpHfDfK_sJknrqfAiehJeZ9r92xBA1XW1ceIV3la4Ygh/exec",
				data: data,
				dataType: "JSON",
				success: function(response) {
					console.log(response);
					$('#alertModal').modal('show');
					$(".closes").click(function(event) {
						/* Act on the event */
						setTimeout(function(){
						    location.reload();
						},500);
					});
				}
			});
		}
	})

})
