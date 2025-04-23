$(function(){
    const mainMenu = $('.main-menu > .menu-item')

    // mainMenu.on('mouseover', function(){
    //     $('.submenu').stop().slideDown()
    // })
    // mainMenu.on('mouseout', function(){
    //     $('.submenu').stop().slideUp()
    // })

    mainMenu.hover(
        function(){
            $('.submenu').stop().slideDown()
        },
        function(){
            $('.submenu').stop().slideUp()
        }
    )
})