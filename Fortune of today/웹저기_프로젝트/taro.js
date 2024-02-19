let selectedCards = []; // 선택된 카드를 저장할 배열

function selectCard(cardIndex) {
  const cardButton = document.querySelector(`button.card-hover:nth-child(${cardIndex})`);
  cardButton.classList.toggle('selected'); // 선택한 카드 버튼에 'selected' 클래스를 토글하여 추가하거나 제거함
}

function handleConfirmation() {
  const selectedCardButtons = document.querySelectorAll('.card-hover.selected');

  if (selectedCardButtons.length === 2) { // 선택된 카드가 2장인지 확인
    selectedCards = Array.from(selectedCardButtons).map((button) => {
      return button.querySelector('img').alt; // 선택된 카드의 이미지 alt 속성을 배열에 저장
    });

    showTarobox(); // 선택된 카드와 함께 결과를 보여주는 함수 호출
  } else {
    alert('카드를 2장 선택해야 합니다.'); // 경고창 표시: 카드를 2장 선택해야 함을 알려줌
  }
}

function showTarobox() {
  const tarobox = document.getElementById('tarobox');
  const taroboxInner = document.getElementById('tarobox-inner');

  taroboxInner.innerHTML = ''; // 이전에 생성된 내용 초기화
  tarobox.style.display = 'flex'; // tarobox를 보이도록 함

  const title = document.createElement('h2');
  title.innerText = '당신의 오늘 운세'; // 제목 요소를 생성하고 taroboxInner에 추가
  taroboxInner.appendChild(title);

  const card1 = document.createElement('p');
  card1.innerText = '첫 번째 카드: ' + selectedCards[0];
  taroboxInner.appendChild(card1); // 첫 번째 선택된 카드 정보를 생성하고 taroboxInner에 추가

  const card2 = document.createElement('p');
  card2.innerText = '두 번째 카드: ' + selectedCards[1];
  taroboxInner.appendChild(card2); // 두 번째 선택된 카드 정보를 생성하고 taroboxInner에 추가

  const fortuneData = getFortuneData(); // 운세 데이터를 가져옴
  const fortuneText = document.createElement('p');
  fortuneText.innerText = fortuneData;
  taroboxInner.appendChild(fortuneText); // 운세 데이터를 생성하고 taroboxInner에 추가

  const backButton = document.createElement('button'); // 뒤로가기 버튼을 생성하고 taroboxInner에 추가
  backButton.id = 'backBtn';
  backButton.classList.add('btn', 'btn-primary');
  backButton.innerText = '뒤로가기';
  backButton.addEventListener('click', hideTarobox);
  taroboxInner.appendChild(backButton); // tarobox를 숨김
}

function hideTarobox() {
  const tarobox = document.getElementById('tarobox');
  tarobox.style.display = 'none';
}

function getFortuneData() {
  const fortunes = [
    "책상 앞에 앉아있어도 머릿속은 저 먼 곳에 외출 중이다. 이런 날은 차라리 외출이 필요한 날이다. 동네 한 바퀴도 좋고 가까운 곳으로 외식을 해도 좋다. 집안에 가만히 있는 것보다 가까운 곳에라도 나가서 기분전환을 하자. \n 행운의 컬러 : 노랑색",
    "움직임이 많아 에너지 소모도 많으니 하루 세끼 꼬박 챙겨 먹어야 쉽게 지치지 않는다. 소개팅이나 미팅 등 새로운 이성과의 만남 수가 있겠다. 한곳에 오래 있는 것보다는 돌아다니며 시간을 보내는 것이 당신에게 유리하다. \n 행운의 숫자 : 2, 7",
    "보들보들 애교가 먹히는 날이다. 다정함과 애교스러움으로 접근하자. 그/그녀의 기분을 풀어줘야 하는 일이 있다면 이성에게 먼저 연락하여 연극관람이라도 함께 한다면 그동안의 서운함을 없앨 수 있는 기회를 잡을 수 있는 날이다. \n 행운의 시간 : 9:00~10:00 AM",
    "오늘은 벼락치기? 눈치코치? 잘 통하지 않는 날이다. 시험이나 테스트가 있다면 처음부터 꼼꼼하게 살펴보는 것, 그것만 한 방법이 없겠다. 원칙을 지키려는 노력만큼 결과가 나올 것이니 손해 볼 일은 아니다. \n 행운의 단어 : 노력, 고생",
    "짜증이 모락모락 피어나는 오늘, 정신상태가 그다지 좋지 못한 날이다. 오늘은 정신안정이 최우선으로 필요한 날이다. 시험이나 어려운 만남 등 무언가에 쫓기고 있는 기분에 하루 종일 기분이 저기압일 것이다. 혼자서의 판단이 잘 서지 않으면 결정을 다음으로 주위 사람들에게 고민을 털어놓는 것도 좋은 방법이다. \n 행운의 사자성어 : 고진감래",
    "오늘 당신에게 필요한 것은 바로 자신감이다. 자신감을 갖고 배우는 자세로 오늘 하루를 보내야 한다. 일이 쭉쭉 진행되지 않더라도 오늘 시작만 해도 반은 성사된 것이나 마찬가지이고 실수는 누구나 하는 것이니 지나간 실수에 너무 연연해하지 않아야 한다. 자책하지 말고 원인을 알았다면 다시 되풀이 하지 않도록 인정하고 넘어가는 게 좋다. \n 행운의 아이템 : 캐릭터 양말, 캡모자",
    "마음 쓰고 몸 써서 심신이 고단한 스스로에게 보상을 해줄 줄 알아야 하는 날이다. 적당한 휴식을 취하고 자신을 위하는데 오늘 하루를 투자하는 게 좋다. 적당한 지출은 그동안의 노고를 보상해 줄 것이니 그동안 미뤄왔던 파마를 하거나 큰맘먹고 옷 한 벌 장만하는 것도 좋겠다. \n 행운의 노래 : 콜렉티브아츠 - 달",
    "얼굴보고 얘기한다고 다 좋은 건 아니다. 오늘은 잠시 그/그녀의 목소리에 귀 기울여 보자. 화가 났을 때 건조한 목소리와 사랑을 고백할 때 떨리는 목소리, 당신을 부르는 목소리는 어떤지 눈감고 들어보는 건 어떨까? 그동안의 오해가 있었다면 그런 감정들이 스르르 녹아 사라질 것이다. 당신의 자존심을 내세우기보다 그/그녀를 이해하려고 해보자. 당신의 진실함이 전달될 것이다. \n 행운의 속담 : ‘네 이웃을 네 몸과 같이 사랑하라’",
    "보낼 것은 보내버리고, 잊을 것은 잊어버려야 한다. 지난 일에 얽매여봤자 나아가는 두 발목 붙잡기만 하지 아무 득이 없다. 지나버린 것들에 얽매이지 말고 새로운 시작을 계획하는 것이 필요한 날이다. 변화를 시도하는 것이 도움이 되는 날이다. 잘 안풀리는 일 붙들고 있는 것 보다 취미나 여가를 제대로 활용하면 마음도 안정되고 스트레스도 사라지고 고민도 해결된다. \n 행운의 음료 : 따듯한 카페라떼"
  ];

  const randomIndex = Math.floor(Math.random() * fortunes.length); // 운세 배열에서 랜덤한 인덱스 선택
  return fortunes[randomIndex]; // 선택된 운세 반환
}

/* 
해당 코드는 두 개의 tarocard 버튼을 선택 한 뒤 "확인" 버튼을 누르면 랜덤한 fortunes값(데이터)
가 출력되는 코드이다. 각 카드마다 다른 데이터 값을 보여주며, 카드별로 고유의 번호가 있어
n번째 카드는 ~~카드 라고 알려줄 수 있다. 또한, 2 개의 카드를 고르지 않으면 alert(경고문)을 출력
하도록 if문을 만들었다. 
이 데이터 값들은 계속 초기화 되며 계속해서 랜덤한 운세들을 볼 수 있다.
*/