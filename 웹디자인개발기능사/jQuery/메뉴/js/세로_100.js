$(function(){
    const menu = $('.menu')
    const sub = $('.sub .inner')

    // menu.on('mouseover' , function(){
    //     sub.stop().fadeIn()
    // })
    
    // menu.on('mouseout' , function(){
    //     sub.stop().fadeOut()
    // })

    menu.hover(
        function(){
            sub.stop().fadeIn()
        },
    
        function(){
            sub.stop().fadeOut()
        }
    )
})
