
$(function(){
    const speed = 500
    const time = 3000
    const $slide = $('.slide')
    const $container = $('.slide-container') 
    const size = $slide.width()     //1200
    const count = $slide.length     //3
    $container.width(size*count)    //3600

    setInterval(function(){
        $container.animate({
            left: -size
        },speed,function(){
            $container.css('left','0')
            $container.append($('.slide').first())
        })
    },time)
})