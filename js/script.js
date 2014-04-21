$(document).ready(function()
{
     setupSkills();
     checkContactForm()

	function setupSkills()
	{
    	if(true)
    	{
       		var counter=1;
        	$('.skill').each(function()
        	{
            	var el=$(this);
            	var level=el.attr('data-level');
           
                el.append("<div class='bar-holder'><div class='progress-bar'></div></div>")
                   
            	el.find('.progress-bar').delay(counter*100).animate({width:level+'%'}, 1500)
            
            	counter++;
        	});
    	}
	}

	function checkContactForm()
	{
        var formStatus=$(".contact-form").validate();

        $(".contact-form").submit(function(e)
        {
            e.preventDefault();
            if(formStatus.errorList.length===0)
            { 
                $(".contact-form .submit").fadeOut(function(){
                    $('#loading').css('visibility','visible');
                    $.post('/submit.php',$(".contact-form").serialize(),
				
                        function(data){
                            $(".contact-form input,.contact-form textarea").not('.submit').val('');
                                
                            $('.message-box').html(data);
						
						
                            $('#loading').css('visibility','hidden');
                            $(".contact-form .submit").removeClass('disabled').css('display','block');
                    }); 
                });      
            }
        });	
			
	}
    
	$('.nav-menu a').address($(this).attr('href'));

    $.address.change(function(event)
    {  
     
    	var pageID=event.value.split('/')[1];
   		if(pageID!='')
   		{
     		var el=$(".nav-menu [href=#"+pageID+"]");
     
     		$('select.nav option').each(function()
     		{
        
         		var val=$(this).val();
      
         		if(val==="#"+pageID)
         		{
              		$('select.nav option:selected').removeAttr('selected');
              		$(this).attr('selected','selected');
         		}
        
     		});
     		
     		scrollToSection("#"+pageID);
   		}
	}); 

 	$('select.nav').change(function()
 	{
    	var loc=($(this).find('option:selected').val());
     
     	scrollToSection(loc);
  	})
  
  
	function scrollToSection(destSection)
	{
    	$('html, body').stop().animate({
            scrollTop: $(destSection).offset().top - 30
        }, 1500);
 
	}

 	$('.nav-menu a').bind('click',function(event)
 	{
        var clickedMenu = $(this);
        scrollToSection(clickedMenu.attr('href'));

        event.preventDefault();
    });

});


// Sticky Nav
$(window).scroll(function(e)
{
	var nav_anchor = $(".cv-title").offset().top;

    if ($(this).scrollTop() >= nav_anchor && $('.nav').css('position') != 'fixed') 
    {    
        $('.nav').css({
            'position': 'fixed',
            'top': '-1px'
        }).addClass('splited');

        $('.nav_anchor').css('height', '60px');
    } 
    else if ($(this).scrollTop() < nav_anchor && $('.nav').css('position') != 'relative') 
    {   

        $('.nav_anchor').css('height', '0px');

        $('.nav').css({
            'position': 'relative'
        }).removeClass('splited');
    }
});