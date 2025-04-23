
$(function(){
    let index = 0
    const speed = 500
    const time = 3000
    const $slide = $('.slide')
    const count = $slide.length
    $slide.not(":first").hide() //2,3 숨김
    setInterval(function(){
        index = (index + 1) % count
        $slide.fadeOut(speed)
        $slide.eq(index).fadeIn(speed)
    }, time)
})