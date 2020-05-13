const list = [
  "라면 먹고 갈래? 재관이가 끓여주는 라면!",
  "바람이 살랑살랑~ 한강에서 맥주 && 치킨?",
  "간만에 도경의 집 파티!",
  "경렬이가 쏜다! 3겹살!",
  "재관이 바X",
  "소주에 쭈꾸미 땡기노"
]

const targetTag = document.querySelector("#title");
const btn = document.querySelector("#btn");
const reBtn = document.querySelector("#reBtn");


btn.addEventListener("click", () => {
  let numbering = parseInt(Math.random() * list.length);
  targetTag.innerHTML = list[numbering];
  btn.style.display = "none";
  reBtn.style.display = "inline"
});

reBtn.addEventListener("click", () =>{
  targetTag.innerHTML = "뭐 먹을래?";
  btn.style.display = "inline";
  reBtn.style.display = "none"
})

