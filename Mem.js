<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Members - MillionIndex</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700;800&display=swap" rel="stylesheet">

<style>

:root{
    --ocean:#1598b8;
    --ocean-blue:#54c8dc;
    --mint:#b9eee4;

    --text:#285264;
    --text-soft:#6b8994;
    --text-faint:#9bb4bc;

    --transition:all .4s cubic-bezier(.16,1,.3,1);
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{
    font-family:"Noto Sans JP",-apple-system,BlinkMacSystemFont,sans-serif;

    color:var(--text);

    line-height:1.8;

    overflow-x:hidden;

    background:
    linear-gradient(
        180deg,
        #fff 0%,
        #faffff 15%,
        #f1fcfd 34%,
        #e6f9fb 52%,
        #d5f4f3 72%,
        #bcece9 88%,
        #a9e5e5 100%
    );

    background-attachment:fixed;

    -webkit-font-smoothing:antialiased;
}

a{
    color:inherit;
    text-decoration:none;
}


/* =========================
   背景
========================= */

.background{
    position:fixed;

    inset:0;

    pointer-events:none;

    z-index:-10;

    overflow:hidden;
}

.background::before{
    content:"";

    position:absolute;

    width:650px;
    height:650px;

    top:-280px;
    right:-180px;

    border-radius:50%;

    background:
    radial-gradient(
        circle,
        rgba(119,224,235,.30) 0%,
        rgba(119,224,235,.12) 38%,
        rgba(119,224,235,0) 72%
    );

    animation:floatCloud 12s ease-in-out infinite;
}

.background::after{
    content:"";

    position:absolute;

    width:720px;
    height:720px;

    bottom:-350px;
    left:-250px;

    border-radius:50%;

    background:
    radial-gradient(
        circle,
        rgba(255,255,255,.62) 0%,
        rgba(255,255,255,.20) 40%,
        rgba(255,255,255,0) 72%
    );

    animation:floatCloud 15s ease-in-out infinite reverse;
}

@keyframes floatCloud{

    0%,100%{
        transform:translate3d(0,0,0);
    }

    50%{
        transform:translate3d(20px,18px,0);
    }

}


/* =========================
   ロゴ
========================= */

.logo{
    position:fixed;

    top:17px;
    left:5%;

    z-index:1000;

    width:170px;
    height:78px;

    display:flex;
    align-items:center;
}

.logo img{
    display:block;

    width:auto;
    height:78px;

    object-fit:contain;

    transition:transform .35s ease;
}

.logo img:hover{
    transform:scale(1.04) rotate(-1deg);
}


/* =========================
   メニューボタン
========================= */

.menu-button{
    position:fixed;

    top:28px;
    right:5%;

    width:50px;
    height:50px;

    border:none;

    background:rgba(255,255,255,.70);

    border-radius:50%;

    cursor:pointer;

    z-index:1200;

    display:flex;
    align-items:center;
    justify-content:center;

    transition:var(--transition);

    backdrop-filter:blur(12px);
    -webkit-backdrop-filter:blur(12px);

    box-shadow:
    0 8px 25px rgba(21,152,184,.09);
}

.menu-button:hover{
    transform:translateY(-2px) scale(1.04);

    background:rgba(255,255,255,.90);
}

.menu-icon{
    width:21px;
    height:16px;

    position:relative;
}

.menu-icon span{
    position:absolute;

    left:0;

    width:100%;
    height:2px;

    background:var(--text);

    border-radius:5px;

    transition:var(--transition);
}

.menu-icon span:nth-child(1){
    top:0;
}

.menu-icon span:nth-child(2){
    top:7px;
}

.menu-icon span:nth-child(3){
    top:14px;
}

.menu-button.active .menu-icon span:nth-child(1){
    top:7px;

    transform:rotate(45deg);
}

.menu-button.active .menu-icon span:nth-child(2){
    opacity:0;
}

.menu-button.active .menu-icon span:nth-child(3){
    top:7px;

    transform:rotate(-45deg);
}


/* =========================
   メニュー
========================= */

.menu{
    position:fixed;

    inset:0;

    z-index:1100;

    display:flex;

    justify-content:center;
    align-items:center;

    background:rgba(248,254,255,.94);

    backdrop-filter:blur(22px);
    -webkit-backdrop-filter:blur(22px);

    opacity:0;

    visibility:hidden;

    transition:var(--transition);
}

.menu.active{
    opacity:1;

    visibility:visible;
}

.menu-list{
    width:min(570px,82%);

    display:flex;

    flex-direction:column;

    gap:8px;
}

.menu-list a{
    display:flex;

    align-items:center;

    justify-content:space-between;

    padding:18px 20px;

    color:var(--text);

    border-radius:20px;

    background:rgba(255,255,255,.42);

    opacity:0;

    transform:translateY(18px);

    transition:var(--transition);
}

.menu.active .menu-list a{
    opacity:1;

    transform:translateY(0);
}

.menu.active .menu-list a:nth-child(1){
    transition-delay:.05s;
}

.menu.active .menu-list a:nth-child(2){
    transition-delay:.10s;
}

.menu.active .menu-list a:nth-child(3){
    transition-delay:.15s;
}

.menu.active .menu-list a:nth-child(4){
    transition-delay:.20s;
}

.menu.active .menu-list a:nth-child(5){
    transition-delay:.25s;
}

.menu-item-text{
    display:flex;

    align-items:baseline;

    gap:13px;
}

.menu-jp{
    font-size:20px;

    font-weight:700;
}

.menu-en{
    color:rgba(21,152,184,.62);

    font-family:Arial,Helvetica,sans-serif;

    font-size:10px;

    font-weight:600;

    letter-spacing:2.8px;

    line-height:1;
}

.menu-arrow{
    color:var(--ocean);

    font-size:19px;
}

.menu-list a:hover{
    background:rgba(255,255,255,.82);

    transform:translateX(5px);
}


/* =========================
   メイン
========================= */

main{
    width:min(1100px,86%);

    margin:0 auto;

    padding-top:185px;

    padding-bottom:120px;
}


/* =========================
   見出し
========================= */

.page-heading{
    text-align:center;

    margin-bottom:70px;
}

.page-en{
    color:var(--ocean);

    font-family:Arial,Helvetica,sans-serif;

    font-size:11px;

    font-weight:700;

    letter-spacing:4px;

    margin-bottom:8px;
}

.page-heading h1{
    color:var(--text);

    font-size:clamp(32px,5vw,48px);

    font-weight:800;

    line-height:1.35;
}

.page-heading p{
    margin-top:12px;

    color:var(--text-faint);

    font-size:11px;
}


/* =========================
   メンバー一覧
========================= */

.member-list{
    display:grid;

    grid-template-columns:
    repeat(2,minmax(0,1fr));

    gap:20px;
}


/* =========================
   メンバーカード
========================= */

.member-card{
    --member-color:#1598b8;

    position:relative;

    display:grid;

    grid-template-columns:170px 1fr;

    min-height:220px;

    overflow:hidden;

    border-radius:28px;

    background:rgba(255,255,255,.55);

    border:1px solid rgba(25,40,45,.14);

    box-shadow:
    0 12px 35px rgba(21,152,184,.07);

    transition:
    transform .45s cubic-bezier(.16,1,.3,1),
    box-shadow .45s ease,
    border-color .45s ease;

    animation:cardIn .65s cubic-bezier(.16,1,.3,1) both;
}

@keyframes cardIn{

    from{
        opacity:0;

        transform:translateY(20px);
    }

    to{
        opacity:1;

        transform:translateY(0);
    }

}

.member-card:hover{

    transform:translateY(-6px);

    border-color:
    color-mix(
        in srgb,
        var(--member-color) 30%,
        #19282d
    );

    box-shadow:
    0 20px 45px
    color-mix(
        in srgb,
        var(--member-color) 15%,
        transparent
    );
}

.member-card::before{

    content:"";

    position:absolute;

    top:0;
    left:0;
    right:0;

    height:4px;

    background:var(--member-color);

    opacity:.85;
}


/* =========================
   メンバー画像
========================= */

.member-image{

    width:100%;
    height:220px;

    display:flex;

    align-items:center;
    justify-content:center;

    overflow:hidden;

    background:
    linear-gradient(
        145deg,
        color-mix(
            in srgb,
            var(--member-color) 9%,
            white
        ),
        rgba(255,255,255,.35)
    );
}

.member-image img{

    width:100%;
    height:100%;

    object-fit:contain;

    transition:
    transform .5s cubic-bezier(.16,1,.3,1);
}

.member-card:hover .member-image img{

    transform:scale(1.05);
}


/* =========================
   メンバー情報
========================= */

.member-info{

    display:flex;

    flex-direction:column;

    justify-content:center;

    padding:28px 25px;
}

.member-number{

    color:var(--member-color);

    font-family:Arial,Helvetica,sans-serif;

    font-size:10px;

    font-weight:700;

    letter-spacing:3px;

    margin-bottom:8px;
}

.member-name{

    color:var(--text);

    font-size:24px;

    font-weight:800;

    line-height:1.4;

    margin-bottom:5px;
}

.member-role{

    color:var(--member-color);

    font-size:11px;

    font-weight:700;

    margin-bottom:13px;
}

.member-description{

    color:var(--text-soft);

    font-size:11px;

    line-height:1.8;
}

.member-arrow{

    margin-top:16px;

    color:var(--member-color);

    font-size:17px;

    transition:transform .35s ease;
}

.member-card:hover .member-arrow{

    transform:translateX(6px);
}


/* =========================
   戻る
========================= */

.back-area{

    text-align:center;

    margin-top:65px;
}

.back-link{

    display:inline-flex;

    align-items:center;

    gap:8px;

    color:var(--text-soft);

    font-size:12px;

    font-weight:600;

    transition:var(--transition);
}

.back-link:hover{

    color:var(--ocean);

    transform:translateX(-4px);
}


/* =========================
   フッター
========================= */

footer{

    padding:50px 7% 28px;

    background:rgba(255,255,255,.48);

    border-top:1px solid rgba(255,255,255,.72);

    backdrop-filter:blur(8px);

    -webkit-backdrop-filter:blur(8px);
}

.footer-inner{

    width:min(1000px,100%);

    margin:0 auto;
}

.footer-top{

    display:flex;

    justify-content:space-between;

    align-items:flex-start;

    gap:40px;
}

.footer-name{

    color:var(--text);

    font-size:19px;

    font-weight:800;
}

.footer-copy{

    margin-top:3px;

    color:var(--text-faint);

    font-size:10px;
}

.footer-links{

    display:flex;

    flex-wrap:wrap;

    justify-content:flex-end;

    gap:17px;
}

.footer-links a{

    color:var(--text-soft);

    font-size:11px;

    transition:var(--transition);
}

.footer-links a:hover{

    color:var(--ocean);
}

.footer-bottom{

    display:flex;

    justify-content:space-between;

    align-items:center;

    margin-top:38px;

    padding-top:17px;

    border-top:1px solid rgba(21,152,184,.10);

    color:var(--text-faint);

    font-size:9px;
}


/* =========================
   タブレット
========================= */

@media(max-width:850px){

    .logo{

        top:12px;
        left:20px;

        width:145px;
        height:62px;
    }

    .logo img{

        height:62px;
    }

    .menu-button{

        top:18px;
        right:20px;

        width:44px;
        height:44px;
    }

    main{

        width:86%;

        padding-top:140px;
    }

    .member-list{

        grid-template-columns:1fr;
    }

}


/* =========================
   スマホ
========================= */

@media(max-width:560px){

    .logo{

        left:15px;
    }

    .menu-button{

        right:15px;
    }

    main{

        width:90%;

        padding-top:120px;
    }

    .page-heading{

        margin-bottom:45px;
    }

    .member-card{

        grid-template-columns:120px 1fr;

        min-height:170px;

        border-radius:23px;
    }

    .member-image{

        height:170px;
    }

    .member-info{

        padding:20px 16px;
    }

    .member-name{

        font-size:19px;
    }

    .member-description{

        font-size:10px;
    }

    .member-role{

        font-size:10px;

        margin-bottom:8px;
    }

    .member-arrow{

        margin-top:8px;
    }

    .footer-top{

        flex-direction:column;
    }

    .footer-links{

        justify-content:flex-start;
    }

    .footer-bottom{

        flex-direction:column;

        align-items:flex-start;

        gap:5px;
    }

}

</style>
</head>


<body>


<div class="background"></div>


<!-- =========================
     ロゴ
========================= -->

<a href="index.html" class="logo">

    <img
        src="MillionIndex.png"
        alt="MillionIndex"
    >

</a>


<!-- =========================
     メニューボタン
========================= -->

<button
    class="menu-button"
    id="menuButton"
    aria-label="メニュー"
>

    <div class="menu-icon">

        <span></span>
        <span></span>
        <span></span>

    </div>

</button>


<!-- =========================
     メニュー
========================= -->

<nav
    class="menu"
    id="menu"
>

    <div class="menu-list">

        <a href="index.html">

            <div class="menu-item-text">

                <span class="menu-jp">
                    トップ
                </span>

                <span class="menu-en">
                    TOP
                </span>

            </div>

            <span class="menu-arrow">
                →
            </span>

        </a>


        <a href="About.html">

            <div class="menu-item-text">

                <span class="menu-jp">
                    私たちについて
                </span>

                <span class="menu-en">
                    ABOUT
                </span>

            </div>

            <span class="menu-arrow">
                →
            </span>

        </a>


        <a href="Service.html">

            <div class="menu-item-text">

                <span class="menu-jp">
                    サービス
                </span>

                <span class="menu-en">
                    SERVICE
                </span>

            </div>

            <span class="menu-arrow">
                →
            </span>

        </a>


        <a href="Mem.html">

            <div class="menu-item-text">

                <span class="menu-jp">
                    メンバー
                </span>

                <span class="menu-en">
                    MEMBERS
                </span>

            </div>

            <span class="menu-arrow">
                →
            </span>

        </a>


        <a href="Contact.html">

            <div class="menu-item-text">

                <span class="menu-jp">
                    お問い合わせ
                </span>

                <span class="menu-en">
                    CONTACT
                </span>

            </div>

            <span class="menu-arrow">
                →
            </span>

        </a>

    </div>

</nav>


<!-- =========================
     メイン
========================= -->

<main>


    <header class="page-heading">

        <div class="page-en">
            MEMBERS
        </div>

        <h1>
            メンバー
        </h1>

        <p>
            MillionIndexをつくるメンバーをご紹介します。
        </p>

    </header>


    <!-- =========================
         メンバー一覧
    ========================= -->

    <div
        class="member-list"
        id="memberList"
    ></div>


    <div class="back-area">

        <a
            href="index.html"
            class="back-link"
        >
            ← トップへ戻る
        </a>

    </div>


</main>


<!-- =========================
     フッター
========================= -->

<footer>

    <div class="footer-inner">

        <div class="footer-top">


            <div>

                <div class="footer-name">
                    MillionIndex
                </div>

                <div class="footer-copy">
                    © 2026 MillionIndex
                </div>

            </div>


            <div class="footer-links">

                <a href="index.html">
                    トップ
                </a>

                <a href="About.html">
                    私たちについて
                </a>

                <a href="Service.html">
                    サービス
                </a>

                <a href="Mem.html">
                    メンバー
                </a>

                <a href="Contact.html">
                    お問い合わせ
                </a>

            </div>

        </div>


        <div class="footer-bottom">

            <span>
                MillionIndex
            </span>

            <span>
                Creative Digital Project
            </span>

        </div>

    </div>

</footer>


<!-- =========================
     Mem.js
========================= -->

<script src="Mem.js"></script>


<script>

/* =========================
   メニュー
========================= */

const menuButton =
    document.getElementById("menuButton");

const menu =
    document.getElementById("menu");


menuButton.addEventListener("click", () => {

    menuButton.classList.toggle("active");

    menu.classList.toggle("active");

});


document
    .querySelectorAll(".menu-list a")
    .forEach(link => {

        link.addEventListener("click", () => {

            menuButton.classList.remove("active");

            menu.classList.remove("active");

        });

    });


/* =========================
   メンバー一覧生成
========================= */

const memberList =
    document.getElementById("memberList");


if(
    typeof members === "undefined" ||
    !members
){

    memberList.innerHTML = `

        <p style="
            grid-column:1/-1;
            text-align:center;
            color:#6b8994;
            font-size:13px;
        ">
            メンバーデータを読み込めませんでした。
        </p>

    `;

}else{

    Object.entries(members).forEach(
        ([id, member], index) => {

            const card =
                document.createElement("a");

            card.className =
                "member-card";

            card.href =
                `Member.html?member=${encodeURIComponent(id)}`;

            card.style.setProperty(
                "--member-color",
                member.color || "#1598b8"
            );

            card.style.animationDelay =
                `${index * 0.08}s`;


            card.innerHTML = `

                <div class="member-image">

                    <img
                        src="${member.image}"
                        alt="${member.name}"
                        loading="lazy"
                    >

                </div>


                <div class="member-info">

                    <div class="member-number">
                        MEMBER ${member.number}
                    </div>

                    <div class="member-name">
                        ${member.name}
                    </div>

                    <div class="member-role">
                        ${member.role}
                    </div>

                    <div class="member-description">
                        ${member.shortRole || ""}
                    </div>

                    <div class="member-arrow">
                        →
                    </div>

                </div>

            `;


            memberList.appendChild(card);

        }
    );

}

</script>


</body>
</html>
