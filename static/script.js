//객체 가져오기
const mainVideo = document.getElementById("mainVideo");
const general = document.getElementById("general");
const GAN = document.getElementById("GAN");
const template = document.getElementById("template");

const firstRow = document.getElementById("firstRow");
const secondRow = document.getElementById("secondRow");
const thirdRow = document.getElementById("thirdRow");

//클릭시 객체의 스타일을 변경
general.onclick = () => {
  mainVideo.src = "{{ url_for('video_feed', tag_id='general') }}";
};

GAN.onclick = () => {
  mainVideo.src = "{{ url_for('video_feed', tag_id='GAN') }}";
};

template.onclick = () => {
  mainVideo.src = "{{ url_for('video_feed', tag_id='template') }}";
};

//3초뒤 실행
setInterval(()=> {
  var firstImage = getElementById('firstRow')
  var secondImage = getElementById('secondImage')
  var thirdImage = getElementById('thirdImage')
  var fourthImage = getElementById('fourthImage')
  var fifthImage = getElementById('fifthImage')

  $.ajax({
    url: "http://localhost:5000/getData/",
    type: "GET",
    success: (res) => {
      if (res) {
        
      } else{
        console.log('Fail') 
      }
    }
  })
})

setTimeout(() => {
  firstRow.style.backgroundImage = "url(./img/small_black.png)";
}, 1000);

//6초뒤 실행
setTimeout(() => {
  secondRow.style.backgroundImage = "url(./img/small_icefirebear.png)";
}, 2000);

//9초뒤 실행
setTimeout(() => {
  thirdRow.style.backgroundImage = "url(./img/small_jangun.png)";
}, 3000);
