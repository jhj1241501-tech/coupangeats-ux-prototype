// 쿠팡이츠 프로토타입 데이터 모듈 (원본 HTML에서 이식)
// 이미지·아이콘·가게/메뉴 카탈로그·재주문 내역 등 "고정 데이터"를 모아둔 곳.

export const IMG = {
  cat_dujjim: 'cat_dujjim.png',
  cat_1person: 'cat_1person.png',
  cat_tang: 'cat_tang.png',
  cat_hansik: 'cat_hansik.png',
  cat_salad: 'cat_salad.png',
  q_shop: 'q_shop.png',
  q_coupon: 'q_coupon.png',
  q_gs25: 'q_gs25.png',
  q_emart: 'q_emart.png',
  q_gsfresh: 'q_gsfresh.png',
  q_homeplus: 'q_homeplus.png',
  banner: 'banner.png',
  bburingkle: 'bburingkle.png',
  yangnyeom: 'yangnyeom.png',
  dak_dark: 'dak_dark.png',
  golden: 'golden.png',
  subway: 'subway.png',
  jalapeno_cream: 'jalapeno_cream.png',
  twoplate: 'twoplate.png',
  spread: 'spread.png',
  greenbg: 'greenbg.png',
  dak_pile: 'dak_pile.png',
  jalapeno_white: 'jalapeno_white.png',
  jalapeno_cheese: 'jalapeno_cheese.png',
  nuggets: 'nuggets.png',
  box1: 'box1.png',
  box2: 'box2.png',
  fried_plate: 'fried_plate.png',
  crispy: 'crispy.png',
  basket1: 'basket1.png',
  basket2: 'basket2.png',
  fried_mustard: 'fried_mustard.png',
  soonsal: 'soonsal.png',
  rose_bowl: 'rose_bowl.png',
  cola: 'cola.png',
  toast: 'toast.png',
  rose_mayo: 'rose_mayo.png',
  iced: 'iced.png',
  whopper_set: 'whopper_set.png',
  whopper: 'whopper.png',
  club: 'club.png',
};

export const ICONS = {
  wifi:"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C13.93 9.93 10.07 9.93 5 13z",
  location_on:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z",
  keyboard_arrow_down:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z",
  keyboard_arrow_up:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",
  notifications:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z",
  search:"M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
  home:{o:"M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z",f:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"},
  favorite:{o:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z",f:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"},
  event_available:"M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z",
  person:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6z",
  arrow_forward:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
  arrow_back:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z",
  thumb_up:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z",
  rate_review:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12zM7 6h10v2H7zm0 3h7v2H7z",
  star:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
  add_shopping_cart:"M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4 15.55 11H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 14.37 5.48 16 7 16h12v-2H7l1.1-2z",
  shopping_cart:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z",
  close:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
  check:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
  ios_share:"M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z",
  chevron_right:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
  remove:"M19 13H5v-2h14z",
  add:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z",
  radio_button_unchecked:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
  verified:"M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82 1.89 3.2L12 21.04l3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.32z",
  account_balance_wallet:"M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
  credit_card:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z",
  check_box_outline_blank:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
  apps:"M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z",
  touch_app:"M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.44-.72c-.16-.03-.34.01-.47.13l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.92-1.38z",
  backspace:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"
};

export const FOODS={
 '전체':[
  {img:'whopper',st:'버거킹 동대문구청점',mn:'콰트로치즈와퍼',pr:'9,200원',good:'100% (4개)',rev:'리뷰 (2)',cart:true},
  {img:'dak_pile',st:'BBQ 안암오거리점',mn:'뿜치킨',pr:'25,000원',good:'100% (86개)',rev:'리뷰 (70)',cart:true},
  {img:'iced',st:'이디야커피 청량리점',mn:'ICED 에스프레소 코코넛',pr:'5,000원',good:'99% (3개)',rev:'리뷰 (1)',cart:true},
  {img:'rose_mayo',st:'동대문엽기떡볶이 한양대점',mn:'로제메뉴',pr:'16,000원',good:'95% (276개)',rev:'리뷰 (174)',cart:true},
  {img:'bburingkle',st:'BHC 신설점',mn:'뿌링클',pr:'23,000원',good:'96% (26개)',rev:'리뷰 (70)',cart:true},
  {img:'toast',st:'이삭토스트 고려대점',mn:'햄스페셜 토스트',pr:'5,100원',good:'84% (25개)',rev:'리뷰 (20)',cart:true},
 ],
 '한식':[
  {img:'cat_tang',st:'신선설농탕 본점',mn:'설렁탕',pr:'9,000원',good:'98% (120개)',rev:'리뷰 (340)',cart:true},
  {img:'cat_hansik',st:'전주콩나물국밥',mn:'전주비빔밥',pr:'8,500원',good:'97% (88개)',rev:'리뷰 (210)',cart:true},
  {img:'cat_tang',st:'신선설농탕 본점',mn:'도가니탕',pr:'12,000원',good:'99% (45개)',rev:'리뷰 (96)',cart:true},
  {img:'yangnyeom',st:'종로백반',mn:'제육볶음',pr:'9,500원',good:'96% (150개)',rev:'리뷰 (300)',cart:true},
  {img:'cat_hansik',st:'전주콩나물국밥',mn:'육회비빔밥',pr:'11,000원',good:'100% (30개)',rev:'리뷰 (54)',cart:true},
  {img:'twoplate',st:'한양식당',mn:'불고기전골',pr:'14,000원',good:'95% (60개)',rev:'리뷰 (120)',cart:true},
 ],
 '치킨':[
  {img:'dak_pile',st:'BBQ 안암오거리점',mn:'뿜치킨',pr:'25,000원',good:'100% (86개)',rev:'리뷰 (70)',cart:true},
  {img:'bburingkle',st:'BHC 신설점',mn:'뿌링클',pr:'23,000원',good:'96% (26개)',rev:'리뷰 (70)',qty:1},
  {img:'yangnyeom',st:'처갓집양념치킨 왕십리점',mn:'슈프림 양념치킨',pr:'25,000원',good:'96% (278개)',rev:'리뷰 (626)',cart:true},
  {img:'jalapeno_white',st:'푸라닭 용신점',mn:'[대표]고추마요 치킨',pr:'23,900원',good:'99% (170개)',rev:'리뷰 (186)',cart:true},
  {img:'jalapeno_cheese',st:'푸라닭 용신점',mn:'마요피노',pr:'24,900원',good:'100% (3개)',rev:'리뷰 (12)',cart:true},
  {img:'fried_mustard',st:'60계치킨 서울왕십리점',mn:'순살 크랑이치킨',pr:'27,900원',good:'100% (3개)',rev:'리뷰 (6)',cart:true},
 ],
 '분식':[
  {img:'rose_mayo',st:'동대문엽기떡볶이 한양대점',mn:'로제떡볶이',pr:'16,000원',good:'95% (276개)',rev:'리뷰 (174)',cart:true},
  {img:'rose_bowl',st:'동대문엽기떡볶이 한양대점',mn:'국물떡볶이',pr:'14,000원',good:'96% (140개)',rev:'리뷰 (88)',cart:true},
  {img:'toast',st:'이삭토스트 고려대점',mn:'햄스페셜 토스트',pr:'5,100원',good:'84% (25개)',rev:'리뷰 (20)',cart:true},
  {img:'nuggets',st:'신전떡볶이 안암점',mn:'모둠튀김',pr:'6,000원',good:'92% (70개)',rev:'리뷰 (130)',cart:true},
  {img:'soonsal',st:'신전떡볶이 안암점',mn:'오징어튀김',pr:'7,000원',good:'90% (40개)',rev:'리뷰 (66)',cart:true},
  {img:'box1',st:'신전떡볶이 안암점',mn:'순대',pr:'6,500원',good:'93% (55개)',rev:'리뷰 (98)',cart:true},
 ],
 '돈까스':[
  {img:'fried_plate',st:'코바코 왕십리점',mn:'등심돈까스',pr:'9,500원',good:'97% (200개)',rev:'리뷰 (410)',cart:true},
  {img:'jalapeno_cheese',st:'코바코 왕십리점',mn:'치즈돈까스',pr:'11,000원',good:'98% (90개)',rev:'리뷰 (150)',cart:true},
  {img:'fried_mustard',st:'명동돈까스',mn:'안심돈까스',pr:'10,500원',good:'96% (75개)',rev:'리뷰 (120)',cart:true},
  {img:'crispy',st:'명동돈까스',mn:'생선까스',pr:'10,000원',good:'95% (40개)',rev:'리뷰 (60)',cart:true},
  {img:'basket2',st:'코바코 왕십리점',mn:'왕돈까스',pr:'12,000원',good:'99% (33개)',rev:'리뷰 (70)',cart:true},
  {img:'golden',st:'코바코 왕십리점',mn:'고구마치즈돈까스',pr:'12,500원',good:'100% (12개)',rev:'리뷰 (28)',cart:true},
 ],
 '구이':[
  {img:'twoplate',st:'화로상회 안암점',mn:'숯불바베큐',pr:'19,000원',good:'97% (110개)',rev:'리뷰 (220)',cart:true},
  {img:'spread',st:'화로상회 안암점',mn:'모둠구이',pr:'23,000원',good:'96% (80개)',rev:'리뷰 (160)',cart:true},
  {img:'dak_dark',st:'춘천닭갈비',mn:'닭갈비',pr:'14,000원',good:'98% (130개)',rev:'리뷰 (260)',cart:true},
  {img:'jalapeno_white',st:'화로상회 안암점',mn:'막창구이',pr:'16,000원',good:'95% (50개)',rev:'리뷰 (90)',cart:true},
  {img:'golden',st:'굽네치킨 신설점',mn:'직화통구이',pr:'18,000원',good:'99% (60개)',rev:'리뷰 (110)',cart:true},
  {img:'basket1',st:'화로상회 안암점',mn:'닭꼬치',pr:'8,000원',good:'94% (45개)',rev:'리뷰 (72)',cart:true},
 ],
 '족발':[
  {img:'jalapeno_white',st:'원조족발보쌈',mn:'앞다리족발',pr:'23,000원',good:'98% (300개)',rev:'리뷰 (520)',cart:true},
  {img:'spread',st:'원조족발보쌈',mn:'모둠족발',pr:'28,000원',good:'97% (120개)',rev:'리뷰 (240)',cart:true},
  {img:'twoplate',st:'장충동왕족발',mn:'보쌈',pr:'25,000원',good:'96% (90개)',rev:'리뷰 (180)',cart:true},
  {img:'jalapeno_cream',st:'원조족발보쌈',mn:'마늘족발',pr:'24,000원',good:'99% (70개)',rev:'리뷰 (130)',cart:true},
  {img:'jalapeno_cheese',st:'장충동왕족발',mn:'매운족발',pr:'26,000원',good:'95% (55개)',rev:'리뷰 (100)',cart:true},
  {img:'basket1',st:'원조족발보쌈',mn:'미니족발',pr:'17,000원',good:'93% (40개)',rev:'리뷰 (66)',cart:true},
 ],
};

export const S_BHC={img:'bburingkle',nm:'BHC 신설점',ord:'2회 주문',star:'4.9',cnt:'1,429',meta:'1.5km · 배달비 0원',tags:[['포장 가능','']],wow:'와우회원 배달비 0원'};
export const S_BBQ={img:'golden',nm:'BBQ 안암오거리점',ord:'5회 주문',star:'4.9',cnt:'1,023',meta:'1.1km · 36분 · 배달비 0원',tags:[['3,000원 쿠폰','cpn'],['포장 가능','']],wow:'와우회원 배달비 0원+1,000원',ovl:'오늘 오전 10:30\n오픈'};
export const S_SUB={img:'subway',nm:'써브웨이 약수역점',ord:'3회 주문',star:'4.9',cnt:'6,337',meta:'2.8km · 35분 · 배달비 0원',tags:[],wow:'와우회원 배달비 0원+1,000원'};
export const S_CHE={img:'yangnyeom',nm:'처갓집양념치킨 왕십리점',ord:'1회 주문',star:'4.9',cnt:'7,234',meta:'0.7km · 42분 · 배달비 0원',tags:[['리뷰이벤트','evt'],['포장 가능','']],wow:'와우회원 배달비 0원+1,000원'};
export const S_PUR={img:'jalapeno_white',nm:'푸라닭 용신점',ord:'',star:'4.9',cnt:'2,324',meta:'0.8km · 30분 · 배달비 0원',tags:[['포장 가능','']],wow:'와우회원 배달비 0원'};
export const storesRecent=[S_BHC,S_BBQ,S_SUB,S_CHE,S_PUR];
export const storesFreq=[S_BBQ,S_SUB,S_BHC];
export const S_60={img:'fried_mustard',nm:'60계치킨 서울왕십리점',ord:'1회 주문',star:'4.9',cnt:'7,234',meta:'1.0km · 32분 · 배달비 0원',tags:[['포장 가능','']],wow:'와우회원 배달비 0원'};
export const STORES={
 '전체':[S_BHC,S_BBQ,S_SUB,S_CHE,S_PUR],
 '한식':[
  {img:'cat_tang',nm:'신선설농탕 본점',ord:'3회 주문',star:'4.8',cnt:'2,140',meta:'1.2km · 30분 · 배달비 0원',tags:[['포장 가능','']],wow:'와우회원 배달비 0원'},
  {img:'cat_hansik',nm:'전주콩나물국밥',ord:'1회 주문',star:'4.7',cnt:'880',meta:'1.8km · 38분 · 배달비 0원',tags:[['리뷰이벤트','evt']],wow:'와우회원 배달비 0원+1,000원'},
  {img:'yangnyeom',nm:'종로백반',ord:'2회 주문',star:'4.9',cnt:'1,250',meta:'0.9km · 28분 · 배달비 0원',tags:[['포장 가능','']],wow:'와우회원 배달비 0원'},
  {img:'twoplate',nm:'한양식당',ord:'',star:'4.8',cnt:'640',meta:'1.5km · 40분 · 배달비 0원',tags:[],wow:'와우회원 배달비 0원'},
 ],
 '치킨':[S_BHC,S_BBQ,S_CHE,S_PUR,S_60],
 '분식':[
  {img:'rose_mayo',nm:'동대문엽기떡볶이 한양대점',ord:'4회 주문',star:'4.9',cnt:'12,300',meta:'0.6km · 25분 · 배달비 0원',tags:[['3,000원 쿠폰','cpn']],wow:'와우회원 배달비 0원'},
  {img:'nuggets',nm:'신전떡볶이 안암점',ord:'2회 주문',star:'4.8',cnt:'3,400',meta:'1.0km · 30분 · 배달비 0원',tags:[['포장 가능','']],wow:'와우회원 배달비 0원'},
  {img:'toast',nm:'이삭토스트 고려대점',ord:'1회 주문',star:'4.7',cnt:'2,100',meta:'0.8km · 22분 · 배달비 0원',tags:[],wow:'와우회원 배달비 0원'},
 ],
 '돈까스':[
  {img:'fried_plate',nm:'코바코 왕십리점',ord:'3회 주문',star:'4.9',cnt:'5,600',meta:'1.3km · 33분 · 배달비 0원',tags:[['포장 가능','']],wow:'와우회원 배달비 0원'},
  {img:'fried_mustard',nm:'명동돈까스',ord:'1회 주문',star:'4.8',cnt:'1,900',meta:'2.0km · 42분 · 배달비 0원',tags:[],wow:'와우회원 배달비 0원'},
 ],
 '구이':[
  {img:'twoplate',nm:'화로상회 안암점',ord:'2회 주문',star:'4.9',cnt:'2,800',meta:'1.1km · 35분 · 배달비 0원',tags:[['리뷰이벤트','evt']],wow:'와우회원 배달비 0원'},
  {img:'dak_dark',nm:'춘천닭갈비',ord:'1회 주문',star:'4.8',cnt:'1,500',meta:'1.6km · 38분 · 배달비 0원',tags:[],wow:'와우회원 배달비 0원'},
  {img:'golden',nm:'굽네치킨 신설점',ord:'',star:'4.9',cnt:'3,200',meta:'0.9km · 30분 · 배달비 0원',tags:[['포장 가능','']],wow:'와우회원 배달비 0원'},
 ],
 '족발':[
  {img:'jalapeno_white',nm:'원조족발보쌈',ord:'2회 주문',star:'4.9',cnt:'4,100',meta:'1.4km · 40분 · 배달비 0원',tags:[['3,000원 쿠폰','cpn']],wow:'와우회원 배달비 0원'},
  {img:'twoplate',nm:'장충동왕족발',ord:'1회 주문',star:'4.8',cnt:'2,600',meta:'1.9km · 45분 · 배달비 0원',tags:[],wow:'와우회원 배달비 0원'},
 ],
};
STORES['전체']=(()=>{const seen={},out=[];['전체','한식','치킨','분식','돈까스','구이','족발'].forEach(k=>(STORES[k]||[]).forEach(s=>{if(!seen[s.nm]){seen[s.nm]=1;out.push(s);}}));return out;})();

export const STORE_BY_NAME={}; ['전체','한식','치킨','분식','돈까스','구이','족발'].forEach(k=>(STORES[k]||[]).forEach(s=>{STORE_BY_NAME[s.nm]=s;}));

export const REORDERS={
 'BHC 신설점':[
  {mn:'[NEW] 쏘아갈릭킹(허니)',qty:1,date:'2026-05-06 오후 07:52',opts:['서비스음료 미제공','치킨무 X','달콤바삭치즈볼 (+5,500원)'],pay:'29,500원'},
  {mn:'뿌링클',qty:1,date:'2026-05-01 오후 07:16',opts:['서비스음료 미제공','치킨무 X'],pay:'23,000원'},
 ],
 'BBQ 안암오거리점':[
  {mn:'황금올리브치킨',qty:1,date:'2026-05-04 오후 08:10',opts:['콜라 1.25L (+2,000원)','치킨무 추가'],pay:'25,000원'},
  {mn:'자메이카 통다리구이',qty:1,date:'2026-04-28 오후 07:30',opts:['순살 변경'],pay:'21,000원'},
 ],
 '써브웨이 약수역점':[
  {mn:'스테이크 & 치즈 (15cm)',qty:2,date:'2026-05-03 오후 12:40',opts:['화이트 브레드','체다치즈','양파 빼고'],pay:'13,800원'},
 ],
 '처갓집양념치킨 왕십리점':[
  {mn:'슈프림 양념치킨',qty:1,date:'2026-05-02 오후 07:05',opts:['순살 변경','치킨무 추가'],pay:'25,000원'},
 ],
 '푸라닭 용신점':[
  {mn:'[대표]고추마요 치킨',qty:1,date:'2026-04-30 오후 06:50',opts:['콜라 추가'],pay:'23,900원'},
 ],
 '60계치킨 서울왕십리점':[
  {mn:'순살 크랑이치킨',qty:1,date:'2026-04-29 오후 08:00',opts:['교촌무 추가'],pay:'27,900원'},
 ],
 '신선설농탕 본점':[
  {mn:'설렁탕',qty:2,date:'2026-05-05 오후 12:30',opts:['공기밥 추가'],pay:'18,000원'},
 ],
 '전주콩나물국밥':[
  {mn:'전주비빔밥',qty:1,date:'2026-04-27 오후 01:10',opts:['계란후라이 추가'],pay:'8,500원'},
 ],
 '종로백반':[
  {mn:'제육볶음',qty:1,date:'2026-05-01 오후 07:20',opts:['공기밥 2개'],pay:'9,500원'},
 ],
 '한양식당':[
  {mn:'불고기전골',qty:1,date:'2026-04-25 오후 06:40',opts:['당면 추가'],pay:'14,000원'},
 ],
 '동대문엽기떡볶이 한양대점':[
  {mn:'로제메뉴',qty:1,date:'2026-05-06 오후 05:30',opts:['치즈 추가','순한맛'],pay:'16,000원'},
 ],
 '신전떡볶이 안암점':[
  {mn:'모둠튀김',qty:1,date:'2026-05-02 오후 04:10',opts:['떡볶이 1인 추가'],pay:'9,000원'},
 ],
 '이삭토스트 고려대점':[
  {mn:'햄스페셜 토스트',qty:2,date:'2026-04-30 오전 09:20',opts:['치즈 추가'],pay:'10,200원'},
 ],
 '코바코 왕십리점':[
  {mn:'등심돈까스',qty:1,date:'2026-05-03 오후 12:50',opts:['소스 추가'],pay:'9,500원'},
 ],
 '명동돈까스':[
  {mn:'안심돈까스',qty:1,date:'2026-04-26 오후 01:30',opts:['수프 추가'],pay:'10,500원'},
 ],
 '화로상회 안암점':[
  {mn:'숯불바베큐',qty:1,date:'2026-05-04 오후 07:00',opts:['소금구이','파채 추가'],pay:'19,000원'},
 ],
 '춘천닭갈비':[
  {mn:'닭갈비',qty:2,date:'2026-04-29 오후 06:20',opts:['치즈 추가','볶음밥 2'],pay:'28,000원'},
 ],
 '굽네치킨 신설점':[
  {mn:'직화통구이',qty:1,date:'2026-05-01 오후 08:10',opts:['소스 추가'],pay:'18,000원'},
 ],
 '원조족발보쌈':[
  {mn:'앞다리족발',qty:1,date:'2026-05-05 오후 07:40',opts:['중(中)','막국수 추가'],pay:'23,000원'},
 ],
 '장충동왕족발':[
  {mn:'보쌈',qty:1,date:'2026-04-28 오후 06:50',opts:['보쌈김치 추가'],pay:'25,000원'},
 ],
};

export const STORE_CAT={};
['한식','치킨','분식','돈까스','구이','족발'].forEach(cat=>(STORES[cat]||[]).forEach(s=>{STORE_CAT[s.nm]=cat;}));

// ----- 헬퍼 -----
export const imgSrc = (key) => '/images/' + encodeURI(IMG[key] || '');
export const won = (n) => (n || 0).toLocaleString('ko-KR') + '원';

// 즐겨찾기 음식 초기 목록: 카테고리별 메뉴를 펼쳐서 만든다.
export function buildInitialFavMenus() {
  const out = [];
  ['한식','치킨','분식','돈까스','구이','족발'].forEach((cat) =>
    (FOODS[cat] || []).forEach((m) =>
      out.push({ mn: m.mn, img: m.img, pr: m.pr, st: m.st, good: m.good, rev: m.rev, cart: true, cat })
    )
  );
  return out;
}

export const CATS = ['전체','한식','치킨','분식','돈까스','구이','족발'];
export const storesRecentList = storesRecent;
export const storesFreqList = storesFreq;

// ----- 정렬 헬퍼 -----
export const numRev = (d) => { const m = (d.rev || '').match(/(\d[\d,]*)/); return m ? +m[1].replace(/,/g, '') : 0 }
export const numOrd = (d) => { const m = (d.ord || '').match(/(\d+)/); return m ? +m[1] : 0 }
export function sortList(list, sort, keyFn) {
  const arr = list.slice()
  if (sort === '자주 주문한 순') arr.sort((a, b) => keyFn(b) - keyFn(a))
  else if (sort === '최근 추가한 순') arr.reverse()
  return arr // '최근 주문한 순' = 원래 순서
}

// 가격 문자열("23,000원") → 숫자(23000)
export const priceNum = (s) => +((s || '').replace(/[^\d]/g, '')) || 0
