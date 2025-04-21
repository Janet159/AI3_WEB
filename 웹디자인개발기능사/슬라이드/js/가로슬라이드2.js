document.addEventListener("DOMContentLoaded", (e) => {
    const slides = document.querySelector('.slide')
    const img = document.querySelectorAll('.slide img')
    const count = img.length
    const size = 1200
    const delay = 3000
    const speed = 1000
    let index = 0

    // 이미지 복제 (list 배열에 저장)
    const list = []
    for (let i = 0; i < img.length; i++) {
        const clone = img[i].cloneNode(true)
        list.push(clone)
    }

    // 초기 세팅 (비우고 첫 번째 + 두 번째 슬라이드 추가)
    slides.innerHTML = ''
    slides.appendChild(list[index])
    slides.appendChild(list[index + 1])

    // 이동 애니메이션 함수
    function animate(size) {
        for (let i = 0; i < list.length; i++) {
            const sliding = list[i];
            sliding.style.transform = `translateX(${size}px)`
        }
    }

    // 슬라이드 넘어가는 함수
    function slide() {
        animate(-size) // 왼쪽으로 size만큼 이동

        index = (index + 1) % count
        next = (index + 1) % count

        setTimeout(() => {
            slides.innerHTML = ''
            slides.appendChild(list[index])
            slides.appendChild(list[next])
            animate(0) // 다시 초기 위치로
        }, speed)
    }

    // 3초마다 slide() 실행
    setInterval(slide, delay)
})
