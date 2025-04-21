// 문서 준비 이벤트
document.addEventListener("DOMContentLoaded",(e) => {
    //메인메뉴 영역
    const mainMenu = document.getElementById('main-menu')
    //서브메뉴 배경
    const back = document.getElementById('back')
    // 서브 메뉴
    const subMenuList = document.querySelectorAll('.submenu')

    //마우스 올렸을 때
    mainMenu.addEventListener("mouseover", () =>{
        subMenuList.forEach((submenu) => {
            submenu.classList.add('active')
        })
        back.classList.add('active')
    })
    //마우스 벗어날 때
    mainMenu.addEventListener("mouseout", () =>{
        subMenuList.forEach((submenu) => {
            submenu.classList.remove('active')
        })
        back.classList.remove('active')
    })
})