// 문서 준비 이벤트
document.addEventListener("DOMContentLoaded", (e) => {
    //이미지 3장
    const slides = document.querySelectorAll('.slide img')
    let index = 0
    const size = 1200

    function slide(){
        index = (index + 1) % 3
        for (let i = 0; i < slides.length; i++) {
            const slide = slides[i];
            slide.style.transform
             = `translateX(calc(${size}px * -${index}))`
            //-1200
            //-2400
            
        }
    }
    setInterval(slide,3000)
})
