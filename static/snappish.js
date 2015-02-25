$( document ).ready(function() {
    $('.menu-icon-one').css('display', 'block');
	//console.log("READY!!!")
    $('#wrapper').snappish()
                // .on('scrollend.snappish', function(e, data) {
                //     data.toSlide.css('background-color', 'transparent');
                // }).on('scrollend.snappish', function(e, data) {
                //     $('.menu-icon-one').css('display', 'block');
                // }).on('scrollend.snappish', function(e, data) {
                //     $('.menu-icon-two').css('display', 'block');
                // }).on('scrollend.snappish', function(e, data) {
                //     $('.menu-icon-three').css('display', 'block');
                // }).on('scrollend.snappish', function(e, data) {
                //     $('.menu-icon-four').css('display', 'block');
                // }).on('scrollend.snappish', function(e, data) {
                //     $('.menu-icon-five').css('display', 'block');
                // }).on('scrollend.snappish', function(e, data) {
                //     $('.menu-icon-six').css('display', 'block');
                // }).on('scrollend.snappish', function(e, data) {
                //     $('.menu-icon-seven').css('display', 'block');
                // }).on('scrollend.snappish', function(e, data) {
                //     $('.menu-icon-eight').css('display', 'block');
                // });

                // .on('scrollbegin.snappish', function(e, data) {
                //     data.toSlide.css('background-color', 'rgba(0,0,0,0.2)');
                // })
            

            $('button.up').on('click', function() {
                $('#wrapper').trigger('scrollup.snappish');
                //console.log("button-up");
            });

            $('button.down').on('click', function() {
                $('#wrapper').trigger('scrolldown.snappish');
                //console.log("button-down");
            });

            $('button.top').on('click', function() {
                $('#wrapper').trigger('scrollto.snappish', 0);
                //console.log("button-top");
            });

            $('button.bottom').on('click', function() {
                $('#wrapper').trigger('scrollto.snappish', 5);
                //console.log("button-bottom");
            });




            $('a.one').on('click', function() {
                $('#wrapper').trigger('scrollto.snappish', 0);
                $('.menu-icon-one').css('display', 'block');
                $('.menu-icon-two').css('display', 'none');
                $('.menu-icon-three').css('display', 'none');
                $('.menu-icon-four').css('display', 'none');
                $('.menu-icon-five').css('display', 'none');
                $('.menu-icon-six').css('display', 'none');
                $('.menu-icon-seven').css('display', 'none');
                $('.menu-icon-eight').css('display', 'none');

                $('.one').css('background', 'none');
                $('.one').css('border', 'none');
                //console.log("Clicking Button One!");
            });

            $('a.two').on('click', function() {
                $('#wrapper').trigger('scrollto.snappish', 1);
                $('.menu-icon-two').css('display', 'block');
                $('.menu-icon-one').css('display', 'none');
                $('.menu-icon-three').css('display', 'none');
                $('.menu-icon-four').css('display', 'none');
                $('.menu-icon-five').css('display', 'none');
                $('.menu-icon-six').css('display', 'none');
                $('.menu-icon-seven').css('display', 'none');
                $('.menu-icon-eight').css('display', 'none');

                $('.two').css('background', 'none');
                $('.two').css('border', 'none');;
                //console.log("Clicking Button Two!");
            });

            $('a.three').on('click', function() {
                $('#wrapper').trigger('scrollto.snappish', 2);
                $('.menu-icon-three').css('display', 'block');
                $('.menu-icon-one').css('display', 'none')
                $('.menu-icon-two').css('display', 'none');
                $('.menu-icon-four').css('display', 'none');
                $('.menu-icon-five').css('display', 'none');
                $('.menu-icon-six').css('display', 'none');
                $('.menu-icon-seven').css('display', 'none');
                $('.menu-icon-eight').css('display', 'none');

                $('.three').css('background', 'none');
                $('.three').css('border', 'none');
                //console.log("Clicking Button Three!");
            });

            $('a.four').on('click', function() {
                $('#wrapper').trigger('scrollto.snappish', 3);
                $('.menu-icon-four').css('display', 'block');
                $('.menu-icon-one').css('display', 'none')
                $('.menu-icon-two').css('display', 'none');
                $('.menu-icon-three').css('display', 'none');
                $('.menu-icon-five').css('display', 'none');
                $('.menu-icon-six').css('display', 'none');
                $('.menu-icon-seven').css('display', 'none');
                $('.menu-icon-eight').css('display', 'none');

                $('.four').css('background', 'none');
                $('.four').css('border', 'none');
                //console.log("Clicking Button Four!");
            });

            $('a.five').on('click', function() {
                $('#wrapper').trigger('scrollto.snappish', 4);
                $('.menu-icon-five').css('display', 'block');
                $('.menu-icon-one').css('display', 'none')
                $('.menu-icon-two').css('display', 'none');
                $('.menu-icon-three').css('display', 'none');
                $('.menu-icon-four').css('display', 'none');
                $('.menu-icon-six').css('display', 'none');
                $('.menu-icon-seven').css('display', 'none');
                $('.menu-icon-eight').css('display', 'none');

                $('.five').css('background', 'none');
                $('.five').css('border', 'none');
                //console.log("Clicking Button Five!");
            });

            $('a.six').on('click', function() {
                $('#wrapper').trigger('scrollto.snappish', 5);
                $('.menu-icon-six').css('display', 'block');
                $('.menu-icon-one').css('display', 'none')
                $('.menu-icon-two').css('display', 'none');
                $('.menu-icon-three').css('display', 'none');
                $('.menu-icon-four').css('display', 'none');
                $('.menu-icon-five').css('display', 'none');
                $('.menu-icon-seven').css('display', 'none');
                $('.menu-icon-eight').css('display', 'none');

                $('.six').css('background', 'none');
                $('.six').css('border', 'none');
                //console.log("Clicking Button Six!");
            });

            $('a.seven').on('click', function() {
                $('#wrapper').trigger('scrollto.snappish', 6);
                $('.menu-icon-seven').css('display', 'block');
                $('.menu-icon-one').css('display', 'none')
                $('.menu-icon-two').css('display', 'none');
                $('.menu-icon-three').css('display', 'none');
                $('.menu-icon-four').css('display', 'none');
                $('.menu-icon-five').css('display', 'none');
                $('.menu-icon-six').css('display', 'none');
                $('.menu-icon-eight').css('display', 'none');

                $('.seven').css('background', 'none');
                $('.seven').css('border', 'none');
                //console.log("Clicking Button Seven!");
            });

            $('a.eight').on('click', function() {
                $('#wrapper').trigger('scrollto.snappish', 7);
                $('.menu-icon-eight').css('display', 'block');
                $('.menu-icon-one').css('display', 'none')
                $('.menu-icon-two').css('display', 'none');
                $('.menu-icon-three').css('display', 'none');
                $('.menu-icon-four').css('display', 'none');
                $('.menu-icon-five').css('display', 'none');
                $('.menu-icon-six').css('display', 'none');
                $('.menu-icon-seven').css('display', 'none');

                $('.eight').css('background', 'none');
                $('.eight').css('border', 'none');
                //console.log("Clicking Button Eight!");
            });
            $('a.nine').on('click', function() {
                $('#wrapper').trigger('scrollto.snappish', 8);
                // $('.menu-icon-eight').css('display', 'block');
                // $('.menu-icon-one').css('display', 'none')
                // $('.menu-icon-two').css('display', 'none');
                // $('.menu-icon-three').css('display', 'none');
                // $('.menu-icon-four').css('display', 'none');
                // $('.menu-icon-five').css('display', 'none');
                // $('.menu-icon-six').css('display', 'none');
                // $('.menu-icon-seven').css('display', 'none');
                // //console.log("Clicking Button Eight!");
            });


            // function
            // $('nav.ul.a.active').css('display', 'none');

        // });
});







