const categoryList = [
  "한식",
  "중식",
  "양식",
  "편의식"
]

const menuList = {
  "한식": [
    "된장찌개", 
    "김치찌개",
    "보쌈정식",
    "순두부찌개",
    "물냉면",
    "비빔냉면",
    "이열치열 삼계탕!"
  ],
  "중식": [
    "짜장면", 
    "볶음밥"
  ],
  "양식": [
    "햄버거",
    "피자"
  ],
  "편의식": [
    "김밥 & 라면",
    "라면 & 샌드위치"
  ]
}


const startBtn = document.querySelector("#start_btn");
const replayBtn = document.querySelector("#replay_btn");
const categoryBtn = document.querySelector("#category_btn");
const menuBtn = document.querySelector("#menu_btn");
const categroyNotice = document.querySelector("#category_notice");
const menuNotice = document.querySelector("#menu_notice");
const categoryTotal = document.querySelector("#category_total");
const categoryContent = document.querySelector("#category_content");
const menuContent = document.querySelector("#menu_content");
let rendomCategory;


//test 3번째 시작 버튼 눌리면 "이정도면 당신이 먹고 싶은거 있습니다. 그거 드세요!" 메시지 보내고 서비스 다운시키기!
let count = 0;

//replay버튼
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
function displayCategory(){
  categoryList.forEach( (value, index, array) => {
    categoryTotal.innerHTML = `카테고리 리스트 : ${array}`;
  })
}


//시작 버튼
startBtn.addEventListener("click", () => {
  categoryContent.style.display = "block";
  startBtn.style.display = "none";
  displayCategory();
})

//랜덤숫자
const rendomNumber = (target) => {
  let number = parseInt(Math.random() * target.length);
  console.log("number>>", number);
  return number;
}

//카테고리 선택
categoryBtn.addEventListener("click", () => {
  const rendomNumbering = rendomNumber(categoryList);
  const categorySelect = categoryList[rendomNumbering];
  console.log("categorySelect>>", categorySelect);
  categroyNotice.innerHTML = categorySelect;
  rendomCategory = categorySelect;
  console.log("rendomCategory", rendomCategory);
  menuContent.style.display = "block";
  categoryBtn.style.display = "none";
})

//메뉴 선택
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