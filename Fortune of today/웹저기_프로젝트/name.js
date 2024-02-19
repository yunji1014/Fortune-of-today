function hidePlaceholder() {
  // inputName 요소에 "hide-placeholder" 클래스를 추가하여 플레이스홀더 텍스트를 숨깁니다.
  document.getElementById("inputName").classList.add("hide-placeholder");
}

function showPlaceholder() {
  // inputName 요소에서 "hide-placeholder" 클래스를 제거하여 플레이스홀더 텍스트를 표시합니다.
  document.getElementById("inputName").classList.remove("hide-placeholder");
}

function generateRandomSentence() {
  // inputName 요소의 값을 가져옵니다.
  const inputName = document.getElementById("inputName").value;
  // 여러 운세 문장 구성 요소를 담고 있는 배열입니다.
  var sentenceComponents = [ 
  "[운세 대박!] 오늘 특별한 인연을 만날 것입니다.",
  "[운세 좋음!] 오늘 밖에 나가는게 어때요? 일이 잘 풀릴 것 같습니다.",
  "[운세 좋음!] 주위를 둘러보세요 재미있는 일이 일어날지도?",
  "[운세 좋음!] 오늘 커피를 마시지 않아도 안졸릴거 같은데요??!",
  "[운세 좋음!] 네잎클로버를 찾아보는게 어떤가요? 의외로 가까운 곳에 있을지도 몰라요.",
  "[운세 보통] 오늘은 평상시와 똑같은 하루를 보낼 것 같아요. 힘내봅시다!",
  "[운세 보통] 오늘 하루도 어제와 같이~",
  "[운세 보통] 좋아요! 무소식이 희소식이라는 말 처럼 오늘 하루도 평범한 일상을 보내보는게 어때요?",
  "[운세 보통] 급하게 서두르다 무엇인가 실수 할 확률이 높은날 입니다. 중요한일은 신중하게 처리해야 합니다.",
  "[운세 나쁨] 오늘은 운이 따라주지 않는 날이네요. 집에서 여유를 즐기는 것도 좋을 것 같습니다.",
  "[운세 나쁨] 너무 실망하지 말아요. 나의 하루는 운이 아닌 자신이 만들어 가는 거니까요.",
  "[운세 좋음! 오늘 운세가 짱짱! 산책이라도 하며 마음의 여유를 찾아 보아요."
];

  if (inputName === "") {
    // 만약 inputName이 비어있다면, 경고 메시지를 표시하고 함수에서 반환합니다.
    alert("이름을 입력해 주세요.");
    return;
  }
  
  // sentenceComponents 배열 길이 범위 내에서 랜덤한 인덱스를 생성합니다.
  var randomIndex = Math.floor(Math.random() * sentenceComponents.length);
  // 랜덤한 인덱스를 사용하여 운세 문장 구성 요소를 가져옵니다.
  var randomSentenceComponent = sentenceComponents[randomIndex];

  // HTML 요소에 대한 참조를 가져옵니다.
  var nameCard = document.getElementById("nameCard");
  var nameCardName = document.getElementById("nameCardName");
  var nameCardSentence = document.getElementById("nameCardSentence");

  // nameCardName에 inputName과 추가 텍스트를 포함한 내용을 설정합니다.
  nameCardName.textContent = inputName + "님의 운세는..";
  // nameCardSentence에 랜덤하게 선택된 문장 구성 요소를 설정합니다.
  nameCardSentence.textContent = randomSentenceComponent;

  // nameCard를 "flex"로 설정하여 표시합니다.
  nameCard.style.display = "flex";

  // 1부터 37 사이의 랜덤한 숫자를 생성합니다.
  var randomNumber = Math.floor(Math.random() * 37) + 1;
  nameCardRandomNumber.textContent = inputName + "님의 행운의 숫자는: " + randomNumber;

  // nameCard를 표시합니다.
  nameCard.style.display = "flex";

  // 모달을 표시하기 위해 modalOverlay 요소의 display 스타일을 "block"으로 설정합니다.
  document.getElementById('modalOverlay').style.display = 'block';
}

function goBack() {
  var nameCard = document.getElementById("nameCard");
  // nameCard를 숨깁니다.
  nameCard.style.display = "none";
  
  // 모달을 숨깁니다.
  document.getElementById('modalOverlay').style.display = 'none';
}

function closeModal() {
  // 모달을 숨깁니다.
  document.getElementById('modalOverlay').style.display = 'none';
}