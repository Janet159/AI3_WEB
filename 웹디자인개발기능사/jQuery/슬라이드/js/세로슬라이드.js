
$(function(){
    const speed = 500
    const time = 3000
    const $slide = $('.slide')
    const $container = $('.slide-container') 
    const size = $slide.height()     
    const count = $slide.length     //3
    $container.height(size*count)    //3600

    setInterval(function(){
        $container.animate({
            top: -size
        },speed,function(){
            $container.css('top','0')
            $container.append($('.slide').first())
        })
    },time)
})