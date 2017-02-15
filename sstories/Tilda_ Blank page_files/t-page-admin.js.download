
$(document).ready(function(){
	var keys = {};
	window.minimalview='';
	
	$(document).keydown(function (e) {
	    keys[e.which] = true;  
	    printKeys();
	});
	
	$(document).keyup(function (e) {
	    delete keys[e.which];
	    printKeys();
	});
	
	function printKeys() {
	    var combo = '';
	    for (var i in keys) {
	        if (!keys.hasOwnProperty(i)) continue;
	        combo += '' + i + '+';
	    }
	    //console.log(combo);
		if(combo=="17+70+"){
			if(window.minimalview=='yes'){
				window.minimalview='';
				$('.tp-record-edit-icons-left__wrapper').css('display','block');
				$('.tp-record-edit-icons-right__wrapper').css('display','block');
				$('.secondleft').css('opacity','1');
				$('.intercom-container').css('opacity','1');
				$('.insertafterrecorbutton center').css('opacity','1');
				$('.recordborderbottom').css('opacity','1');
				$('.recordbordertop').css('opacity','1');
				$('#shortcuttooldiv').css('opacity','1');			
			}else{
				window.minimalview='yes';
				$('.tp-record-edit-icons-left__wrapper').css('display','none');
				$('.tp-record-edit-icons-right__wrapper').css('display','none');
				$('.secondleft').css('opacity','0');
				$('.intercom-container').css('opacity','0');
				$('.insertafterrecorbutton center').css('opacity','0');
				$('.recordborderbottom').css('opacity','0');
				$('.recordbordertop').css('opacity','0');
				$('#shortcuttooldiv').css('opacity','0');			
			}
		}
		
	}
});


