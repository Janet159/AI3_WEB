
// 기본 데이터 10개 
for (let i = 0; i < 10; i++) {
    addComment()
}


// 댓글 추가
function addComment() {
    // const writer = document.getElementById('writer').value
    // const content = document.getElementById('content').value

    const writer = '김조은'
    const content = '댓글내용'

    // 날짜
    const today = new Date()
    const date = today.toISOString().slice(0,10) // 2025-04-18
    let commentCard =   `<div class="comment-card">
                            <div class="title">
                                <div class="item">
                                    <div class="avatar">
                                        <img src="img/avatar.png" alt="프로필">
                                    </div>
                                    <div class="writer">${writer}</div>
                                </div>
                                <div class="item">
                                    <div class="date">${date}</div>
                                </div>
                            </div>
                            <div class="content-box">
                                <p class="content">
                                    ${content}
                                </p>
                            </div>
                        </div>`

    const commentList = document.getElementById('commentList')
    const card = document.createElement('div')
    card.innerHTML = commentCard        // <div><div class="comment-card"> ..
    commentList.appendChild(card)

    document.getElementById('writer').value = ''
    document.getElementById('content').value = ''
}

// [작성] 버튼 클릭 이벤트
const btn = document.getElementById('commentBtn')
btn.addEventListener('click', (event) => {
    addComment()
})


// 스크롤 이벤트 등록
window.addEventListener('scroll', (e) => {
    let scrollY = window.scrollY    // 세로방향 스크롤 위치

    // 스크롤 맨 아래 위치 확인
    // 1. html 전체 높이 : 약 5000px
    let docHeight = document.documentElement.scrollHeight
    console.log(`docHeight(html 높이) : ${docHeight}`);

    // 2. window 의 높이 : 약 900~1000px
    let winHeight = window.innerHeight
    console.log(`winHeight(윈도우 높이) : ${winHeight}`);

    // scrollY : 5000px-win높이 = 4000
    if( winHeight + scrollY >= docHeight ) {
        // alert('스크롤 마지막입니다!!!')
        // *인피니티 스크롤 
        // :  추가로 새로운 컨텐츠를 가져오는 UI 
        for (let i = 0; i < 10; i++) {
            addComment()
        }
    }

})