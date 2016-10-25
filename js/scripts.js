jQuery(document).ready(function($) {
    console.log('start');

    var windowH = $(window).height();
    var wrapperH = $('#backgroundimagecontainer').height();
    if(windowH > wrapperH) {                            
        $('#backgroundimagecontainer').css({'height':($(window).height())+'px'});
    }                                                                               
    $(window).resize(function(){
        var windowH = $(window).height();
        var wrapperH = $('#backgroundimagecontainer').height();
        var differenceH = windowH - wrapperH;
        var newH = wrapperH + differenceH;
        var truecontentH = $('#page').height();
        if(windowH > truecontentH) {
            $('#backgroundimagecontainer').css('height', (newH)+'px');
        }
    });

    var muteicon = document.getElementById('mute');
    $('#mute').on('click', function() {
        var el = $(this);
        if (el.html() == ('<i class="fa fa-volume-off" aria-hidden="true"></i>')) {
            el.html( '<i class="fa fa-volume-up" aria-hidden="true"></i>' );
        } else {
            el.html( '<i class="fa fa-volume-up" aria-hidden="true"></i>' , el.html());
            el.html( '<i class="fa fa-volume-off" aria-hidden="true"></i>' );
        }
    });




    $.ajax( {
        type: "GET",
        url: 'http://choiceadventures.dev/wp-json/wp/v2/storypage/9',
        dataType: 'json',
        error: function() {
            alert( 'Unable to load.' );
        },
        success: function(data) {
            
            // load image and audio
            $( '#backgroundimage' ).css( 'background-image', 'url("' + data.acf.background_image + '"');
            $( 'article' ).prepend( '<audio autoplay="autoplay" id="background_audio"><source src="' + data.acf.audio_file + '" type="audio/mpeg"></audio>' );
            
            // Initialize jRumble on Selector
            $('#backgroundimage').jrumble();

            if ( data.acf.background_shake === true ) {
                // Start rumble on element
                $('#backgroundimage').trigger('startRumble');
            }

            // mute audio
            var audio = document.getElementById('background_audio');
            document.getElementById('mute').addEventListener('click', function (e)
            {
                e = e || window.event;
                audio.muted = !audio.muted;
                //muteicon.html( '<i class="fa fa-volume-off" aria-hidden="true"></i>') = muteicon.html( '<i class="fa fa-volume-up" aria-hidden="true"></i>')
                e.preventDefault();
            }, false);


            // load content
            $( '.entry-title' ).text( data.title.rendered );
            $( '.entry-content' ).html( data.acf.content);

            // load choices
            var obj = data.acf.choices;  // get entry object (array) from JSON data
            for (var i = 0, l = obj.length; i < l; ++i) {  // iterate over the array and build the list
                $('ul.choices').append('<li><a href="#" id="' + obj[i].choice_link + '">' + obj[i].choice_text + '</a></li>');
                //return false;
            }
            $('#results').append( 'ul.choices' );    // add the list to the DOM
            $( 'ul.choices > li > a').on( 'click' , clickchoice );
        }
    });

    function clickchoice() {

        $('audio').each(function(){
            this.pause(); // Stop playing
            this.currentTime = 0; // Reset time
            this.remove();
        });

        
        //$( '.entry-title' ).fadeOut( 200 );
        //$( '.entry-content' ).fadeOut( 200);
        //$( 'ul.choices' ).fadeOut( 400 ).delay(400);
        $( '#content.site-content .container' ).fadeOut( 400 );
        $( '#backgroundimage' ).fadeOut( 400 );
        
        //$( 'ul.choices' ).delay( 4400 ).html( '' );
        
        window.setTimeout(function () {
            $( 'ul.choices' ).html( '' );
        }, 400);

        // Stop rumble on element
        $('#backgroundimage').trigger('stopRumble');

        $.ajax( {
            type: "GET",
            url: 'http://choiceadventures.dev/wp-json/wp/v2/storypage/' + this.id,
            dataType: 'json',
            error: function() {
                alert( 'Unable to load.' );
            },
            success: function(data) {
                
                //load image and audio
                $( '#backgroundimage' ).css( 'background-image', 'url("' + data.acf.background_image + '"').fadeIn( 150 );
                $( 'article' ).prepend( '<audio autoplay="autoplay" loop id="background_audio"><source src="' + data.acf.audio_file + '" type="audio/mpeg"></audio>' );

                if ( data.acf.background_shake === true ) {
                    // Start rumble on element
                    $('#backgroundimage').trigger('startRumble');
                }
                
                // mute audio
                var audio = document.getElementById('background_audio');
                document.getElementById('mute').addEventListener('click', function (e)
                {
                    e = e || window.event;
                    audio.muted = !audio.muted;
                    //muteicon.html( '<i class="fa fa-volume-off" aria-hidden="true"></i>') = muteicon.html( '<i class="fa fa-volume-up" aria-hidden="true"></i>')
                    e.preventDefault();
                }, false);


                // load content
                $( '.entry-title' ).text( data.title.rendered );
                $( '.entry-content' ).html( data.acf.content);

                // load choices
                var obj = data.acf.choices;  // get entry object (array) from JSON data
                for (var i = 0, l = obj.length; i < l; ++i) { // iterate over the array and build the list
                    $('ul.choices').append('<li><a href="#" id="' + obj[i].choice_link + '">' + obj[i].choice_text + '</a></li>');
                    //return false;
                }
                $('#results').append( 'ul.choices' );    // add the list to the DOM
                $( '#content.site-content .container' ).fadeIn( 800 );
                $( 'ul.choices > li > a').on( 'click' , clickchoice );
            }
        } );
    }
});