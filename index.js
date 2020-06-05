const categoryList = [
  "한식",
  "중식",
  "양식",
  "일식",
  "편의점식",
  "전투식량"
]

const menuList = {
  "한식": [
    "된장찌개", 
    "김치찌개",
    "보쌈정식",
    "순두부찌개",
    "물냉면",
    "비빔냉면",
    "삼계탕",
    "국밥",
    "쭈꾸미",
    "닭도리탕",
    "찜닭",
    "먹지말자!"
  ],
  "중식": [
    "짜장면", 
    "볶음밥",
    "짬뽕",
    "탕수육"
  ],
  "양식": [
    "햄버거",
    "피자",
    "치느님"
  ],
  "일식":[
    "돈까스",
    "회덮밥",
    "규동",
    "참치",
    "물회",
    "연어",
  ],
  "편의점식": [
    "김밥&&라면",
    "라면&&샌드위치"
  ],
  "전투식량": [
    "뽀글이",
    "닭강정&&컵라면"
  ]
}

const warp = document.querySelector("#warp");
const shutdownContent = document.querySelector("#shutdown_content");
const title = document.querySelector("#title");
const startBtn = document.querySelector(".start_btn");
const replayBtn = document.querySelector(".replay_btn");
const categoryBtn = document.querySelector(".category_btn");
const userSetBtn = document.querySelector(".user_set_btn");
const menuBtn = document.querySelector("#menu_btn");
const categoryTotal = document.querySelector("#category_total");
const menuTotal = document.querySelector("#menu_total");
const categoryContent = document.querySelector(".category_content");
const menuContent = document.querySelector(".menu_content");
const menuNotice = document.querySelector("#menu_notice");
const categroyNotice = document.querySelector("#category_notice");
let rendomCategory;
let count = 3;

//start btn
startBtn.addEventListener("click", () => {
  categoryContent.classList.add("show_btn");
  startBtn.classList.add("hide_btn");
  userSetBtn.classList.add("hide_btn");
  displayCategory();
  count--;
  if(count === 0){
    alert("언제까지 메뉴선택만 할래?!");
    shutdown();
  }
})

//category display
const displayCategory = () => {
  categoryList.forEach( (value, index, array) => {
    categoryTotal.innerHTML = `< ${array} >`;
  })
};

//category btn
categoryBtn.addEventListener("click", () => {
  menuContent.classList.add("show_btn");
  categoryBtn.classList.add("hide_btn");
  const rendomNumbering = rendomNumber(categoryList);
  const categorySelect = categoryList[rendomNumbering];
  categroyNotice.innerHTML = categorySelect;
  rendomCategory = categorySelect;
  displayMenu(rendomCategory);
})

//menu display
const displayMenu = (target) => {
  const menuSelect = menuList[target];
  menuSelect.forEach( (value, index, array) => {
    menuTotal.innerHTML = `< ${array} > `;
  })
  console.log("targetList>>", menuSelect);
};

//menu btn
menuBtn.addEventListener("click", () => {
  if(rendomCategory !== undefined && rendomCategory !== null){
    if(menuList[rendomCategory]){
      const rendomNumbering = rendomNumber(menuList[rendomCategory]);
      console.log("menuRendomNumbering>>", rendomNumbering);
      const menuSelect = menuList[rendomCategory][rendomNumbering];
      console.log("menuSelect", menuSelect);
      alert(`축하합니다! 오늘한끼 메뉴는 "${menuSelect}" 입니다!`);
      menuNotice.innerHTML = menuSelect;
      menuBtn.classList.add("hide_btn");
      replayBtn.classList.add("show_btn");
    }
  }
})

//replay btn
replayBtn.addEventListener("click", () => {
  startBtn.classList.remove("hide_btn");
  userSetBtn.classList.remove("hide_btn");
  replayBtn.classList.remove("show_btn");
  categoryContent.classList.remove("show_btn");
  menuContent.classList.remove("show_btn");
  menuBtn.classList.remove("hide_btn");
  categoryBtn.classList.remove("hide_btn");
  categroyNotice.innerHTML = "";
  menuNotice.innerHTML = "";
  rendomCategory;
})

//rendom number
const rendomNumber = (target) => {
  let number = parseInt(Math.random() * target.length);
  console.log("number>>", number);
  return number;
}

//shutdown
const shutdown = () => {
  warp.style.display = "none";
  shutdownContent.style.display = "block";
}