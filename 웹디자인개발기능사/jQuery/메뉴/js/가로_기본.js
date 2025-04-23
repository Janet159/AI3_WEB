// 문서 준비 이벤트
$(function(){
    const mainMenu = $('.main-menu > .menu-item')

    // mainMenu.on('mouseover', function(){
    //     $(this).find('.submenu').stop().slideDown()
    // })
    // mainMenu.on('mouseout', function(){
    //     $(this).find('.submenu').stop().slideUp()
    // })

    mainMenu.hover( 
        function(){
            $(this).find('.submenu').stop().slideDown()
        },
    function(){
            $(this).find('.submenu').stop().slideUp()
    }
    )
})