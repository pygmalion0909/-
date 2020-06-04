const categoryList = [
  "한식",
  "중식",
  "양식",
  "일식",
  "편의점식"
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
    "국밥"
  ],
  "중식": [
    "짜장면", 
    "볶음밥",
    "짬뽕"
  ],
  "양식": [
    "햄버거",
    "피자",
    "치느님"
  ],
  "일식":[
    "돈까스",
    "회덮밥",
    "규동"
  ],
  "편의점식": [
    "김밥&라면",
    "라면&샌드위치"
  ]
}

const title = document.querySelector("#title");
const startBtn = document.querySelector("#start_btn");
const replayBtn = document.querySelector("#replay_btn");
const categoryBtn = document.querySelector("#category_btn");
const menuBtn = document.querySelector("#menu_btn");
const categroyNotice = document.querySelector("#category_notice");
const menuNotice = document.querySelector("#menu_notice");
const categoryTotal = document.querySelector("#category_total");
const menuTotal = document.querySelector("#menu_total");
const categoryContent = document.querySelector("#category_content");
const menuContent = document.querySelector("#menu_content");
let rendomCategory;
let count = 3;

//shutdown
const shutdown = () => {
  title.innerHTML = "지금 당신 마음속에 있는 메뉴를 드세요."
  startBtn.style.display = "none";
  categoryContent.style.display = "none";
  menuContent.style.display = "none";
}

//replay btn
replayBtn.addEventListener("click", () => {
  categoryContent.style.display = "none";
  menuContent.style.display = "none";
  categroyNotice.innerHTML = "";
  menuNotice.innerHTML = "";
  startBtn.style.display = "block";
  replayBtn.style.display = "none";
  categoryBtn.style.display = "block";
  menuBtn.style.display = "block";
  rendomCategory;
})

//category display
const displayCategory = () => {
  categoryList.forEach( (value, index, array) => {
    categoryTotal.innerHTML = `카테고리 리스트 : ${array}`;
  })
};

//menu display
const displayMenu = (target) => {
  const menuSelect = menuList[target];
  menuSelect.forEach( (value, index, array) => {
    menuTotal.innerHTML = `메뉴 리스트  : ${array}`;
  })
  console.log("targetList>>", menuSelect);
};

//start btn
startBtn.addEventListener("click", () => {
  categoryContent.style.display = "block";
  startBtn.style.display = "none";
  displayCategory();
  count--;
  if(count === 0){
    alert("언제까지 메뉴선택만 할래?!");
    shutdown();
  }
})

//rendom number
const rendomNumber = (target) => {
  let number = parseInt(Math.random() * target.length);
  console.log("number>>", number);
  return number;
}

//category select
categoryBtn.addEventListener("click", () => {
  const rendomNumbering = rendomNumber(categoryList);
  const categorySelect = categoryList[rendomNumbering];
  categroyNotice.innerHTML = categorySelect;
  rendomCategory = categorySelect;
  menuContent.style.display = "block";
  categoryBtn.style.display = "none";
  displayMenu(rendomCategory);
})

//menu select
menuBtn.addEventListener("click", () => {
  if(rendomCategory !== undefined && rendomCategory !== null){
    if(menuList[rendomCategory]){
      const rendomNumbering = rendomNumber(menuList[rendomCategory]);
      console.log("menuRendomNumbering>>", rendomNumbering);
      const menuSelect = menuList[rendomCategory][rendomNumbering];
      console.log("menuSelect", menuSelect);
      menuNotice.innerHTML = menuSelect;
      menuBtn.style.display = "none";
      replayBtn.style.display = "block";
    }
  }
})