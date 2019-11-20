//slider panel, controla el scrolling de la pagina de login
        $(document).ready(function() {   
        $('a.panel').click(function () {   
            $('a.panel').removeClass('selected');
            $(this).addClass('selected');
            current = $(this);       
            $('#wrapper').scrollTo($(this).attr('href'), 300);		
            return false;
        }); 
        $(window).resize(function () {
            resizePanel();
        });  
    });   
    function resizePanel() {
        width = $(window).width();
        height = $(window).height();
        mask_height = height * $('.item').length;
        $('#debug').html(width  + ' ' + height + ' ' + mask_height);
        $('#wrapper, .item').css({width: width, height: height});
        $('#mask').css({width: width, height: mask_height});
        $('#wrapper').scrollTo($('a.selected').attr('href'), 0);    
    }

    $(document).ready(function() {
        $('a.panel').click(function () {
            $('a.panel').removeClass('selected');
            $(this).addClass('selected');
            current = $(this);				
            $('#wrapper').scrollTo($(this).attr('href'), 300);				
            return false;
        });	
        $(window).resize(function () {
            resizePanel();
        });
    });