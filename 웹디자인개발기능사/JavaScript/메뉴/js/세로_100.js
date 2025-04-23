// 문서 준비 이벤트
document.addEventListener("DOMContentLoaded", () =>{

    const main = document.querySelector(".main")
    const sub = document.querySelector(".sub")

    //메인 메뉴 - 마우스 이벤트
    main.addEventListener("mouseover", () =>{
        sub.classList.add("active")
    })
    main.addEventListener("mouseout", () =>{
        sub.classList.remove("active")
    })

    //서브 메뉴 - 마우스 이벤트
    sub.addEventListener("mouseover", () =>{
        sub.classList.add("active")
    })
    sub.addEventListener("mouseout", () =>{
        sub.classList.remove("active")
    })
})
