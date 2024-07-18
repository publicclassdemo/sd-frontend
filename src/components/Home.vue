<script setup>
import { ref } from 'vue'
import Modal from './Modal.vue'

const isModalOpen = ref(0)
const modalType = ref(0)
const openModal = (type) => {
  isModalOpen.value = true
  modalType.value = type
}

const scrollPosition = ref(0)

const handleScroll = (event) => {
  event.preventDefault()
  const delta = Math.sign(event.deltaY)
  const windowHeight = window.innerHeight

  if (delta > 0) {
    scrollPosition.value += windowHeight
  } else {
    scrollPosition.value -= windowHeight
  }

  scrollPosition.value = Math.max(0, Math.min(scrollPosition.value, document.documentElement.scrollHeight - windowHeight))

  window.scrollTo({ top: scrollPosition.value, behavior: 'smooth' })
}
</script>

<template >
  <main @wheel="handleScroll">
      <div style="height: 100vh;">
        <div style="display: flex;">
          <div id="brand">
            News AI
          </div>

          <div id="button-group">
            <button class="button-group" id="register-button" @click="openModal('register')">
              注册
            </button>

            <button class="button-group" id="login-button" @click="openModal('login')">
              登录
            </button>

            <button class="button-group" id="help-button">
              用户指南
            </button>
          </div>
        </div>
        

        <div style="display: flex;">
          <div style="flex: 1;">
            <img src="../static/img/home/main_des.jpg" id="main-des">
          </div>

          <div id="main-text">
            <h1>
              欢迎来到News AI
            </h1>

            <p>
              提升新闻吸引力，从选择我们的AI绘画生成图开始  
            </p>

            <br>

            <p>
              我们的AI技术，让新闻编辑工作更简单，更高效
            </p>

            <button id="login-now" @click="openModal('login')">
              立即登录
            </button>     
          </div>
        </div>

        <div id="img-group">
          <div id="circle-image-container">
            <div class="circle-image" id="circle-image1"></div>
            <div class="circle-image" id="circle-image2"></div>
            <div class="circle-image" id="circle-image3"></div>
          </div>
        </div>
      </div>
      <div style="height: 100vh;">
        <div style="margin-top: 2vh; margin-left: 2vw;">
          <p>
            一键生成新闻配图，让您的报道更加生动
          </p>
        </div>

        <div id="square-image-container">
          <div class="square-image" id="square-image1"></div>
          <div class="square-image" id="square-image2"></div>
          <div class="square-image" id="square-image3"></div>
        </div>

        <div style="display: flex; height: 35vh;">
          <div id="left-text">
            <p>
              用图片讲述新闻  
            </p>
            <br>
            <p>
              让读者一眼就能抓住重点
            </p>
          </div>

          <div id="right-text">
            <p>
              各种画风
            </p>
            <br>
            <p>
              尽在 News AI
            </p>
          </div>
        </div>

        <div style="text-align: center;">
          <p style="font-size: 2rem;">
            立即加入我们吧！
          </p>
        </div>
      </div>

      <div style="height: 40vh; text-align: center; position: relative; top: 15vh;">
        <input placeholder="输入邮箱地址">
        <button id="send-now" @click="openModal('register')">
          立即发送
        </button>
      </div>

      <transition name="modal-fade">
        <Modal v-if="isModalOpen" @close="isModalOpen = false" :type="modalType">
        </Modal>
      </transition>

  </main>

  <footer>
    <div id="footer-content">
      <div id="footer-left">
        <h3>News AI</h3>
        <p>
          一款集成了文本生成和AI绘画功能的创新性工具，带你体验全新的新闻创作方式
        </p>
      </div>

      <div id="footer-right">
        <h3>南方科技大学</h3>
        <p>联系电话：+123456789</p>
        <br>
        <p>联系地址：123 Main Street, City, Country</p>
        <br>
        <p>联系邮箱：contact@example.com</p>
      </div>
    </div>
    <div id="divider"></div>
    <div id="copy-right">
      <p>&copy; 2024, All Rights Reserved by SUSTech.</p>
    </div>
  </footer>
</template>
<style scoped>
main {
  background-image: url('../static/img/home/background_img.jpg');
  width: calc(100vw - 17px); 
  height: 240vh;
}

footer {
  background-color: black;
  width: calc(100vw - 17px); 
  height: 60vh;
}

button:hover {
  cursor: pointer;
}

#brand {
  color: rgb(255, 255, 255);
  font-size: 2rem;
  font-style: italic;
  position: relative;
  padding-left: 5vw;
  padding-top: 1vh;
  flex: 3;
}

#button-group {
  flex: 1;
}

.button-group {
  margin-right: 2vw;
  margin-top: 1vh;
  color: white;
  border: none;
  border-radius: 5px;
  width: 5vw;
  height: 3vh;
  font-size: medium;
}

#login-button {
  background-color: rgb(119, 40, 245);
}

#login-button:hover {
  background-color: rgb(119, 40, 245, 0.5);
}

#register-button {
  background-color: rgb(89, 27, 183);
}

#register-button:hover {
  background-color: rgb(89, 27, 183, 0.5);
}

#help-button {
  background-color: rgb(59, 14, 123);
}

#help-button:hover {
  background-color: rgb(59, 14, 123, 0.5);
}

#main-des { 
  width: 40vw;
  height: 35vh;
  margin-left: 4vw;
  margin-top: 5vh;
  border-radius: 30px;
}

#main-text {
  flex: 1;
  text-align: center;
  margin-top: 6vh;
  position: relative;
  right: 7vw;
}

#login-now {
  border: none;
  background-color: rgb(0, 20, 183);
  color: white;
  width: 10vw;
  height: 6vh;
  border-radius: 10px;
  font-size: larger;
  margin-top: 3vh;
}

#login-now:hover {
  background-color: rgb(0, 20, 183, 0.5);
}

h1 {
  font-size: 3rem;
  font-family: 'SimSun', '宋体', sans-serif;
}

p {
  font-size: 25px;
  margin: 0;
}

#img-group {
  height: 40vh;
}

#circle-image-container {
  display: flex;
  justify-content: flex-end; /* 图片右对齐 */
  margin-top: 6vh; /* 间距 */
  margin-right: 8vw;
}

.circle-image {
  width: calc(max(27vw, 30vh));
  height: calc(max(27vw, 30vh));
  border-radius: 50%; /* 将图像变成圆形 */
  background-size: cover;
  margin-left: -5vw; /* 重叠一点 */
  position: relative;
  z-index: 1; /* 确保图像重叠时正确显示 */
}

#circle-image1 {
  background-image: url('../static/img/home/circle_image1.jpg');
}

#circle-image2 {
  background-image: url('../static/img/home/circle_image2.jpg');
  z-index: 2; 
  margin-left: -3vw; 
}

#circle-image3 {
  background-image: url('../static/img/home/circle_image3.jpg');
  z-index: 3; 
  margin-left: -1vw; 
}

#square-image-container {
  display: flex;
  justify-content: flex-end; /* 图片右对齐 */
  margin-top: 6vh; /* 间距 */
  margin-right: 8vw;
}

.square-image {
  z-index: 1; /* 确保图像重叠时正确显示 */
  background-size: cover;
  border-radius: 3vw;
  margin-right: 4vw;
  position: relative;
}

#square-image1 {
  background-image: url('../static/img/home/square_image1.jpg');
  width: 35vw;
  height: 45vh;
  left: 15vw;
}

#square-image2 {
  background-image: url('../static/img/home/square_image2.jpg');
  width: 40vw;
  height: 45vh;
  top: 30vh;
  left: 5vw;
  z-index: 2;
}

#square-image3 {
  background-image: url('../static/img/home/square_image3.jpg');
  width: 25vw;
  height: 40vh;
  /* right: 10vw; */
  bottom: 5vh;
  right: 2vw;
  z-index: 1;
}

#left-text {
  position: relative;
  left: 10vw;
  top: 5vh;
  text-align: center;
  font-size: 30px;
  margin: 0;
}

#right-text {
  position: absolute;
  right: 15vw;
  text-align: center;
  margin: 0;
}

input {
  border: none;
  width: 20vw;
  height: 5vh;
  border-radius: 10px;
  font-size: large;
}

#send-now {
  border: none;
  border-radius: 5px;
  width: 6vw;
  height: 5vh;
  margin-left: 3vw;
  background-color: rgb(22, 132, 252);
  color: white;
  font-size: large;
}

#send-now:hover {
  background-color: rgb(22, 132, 252, 0.5);
}

#footer-content {
  height: 50vh;
  display: flex;
  position: relative;
  top: 5vh;
}

#footer-left>p {
  color: white;
}

#footer-left>h3 {
  color: white;
  font-size: 3rem;
}

#footer-right>p {
  color: white;
}

#footer-right>h3 {
  color: white;
  font-size: 2rem;
}

#footer-left {
  flex: 1;
  text-align: center;
  padding-left: 15%;
  padding-right: 15%;
}

#footer-right {
  flex: 2;
}

#divider {
  width: 80%;
  height: 1px;
  background-color: white;
  position: absolute;
  left: 10%;
}

#copy-right {
  color: rgb(192, 191, 191);
  text-align: center;
  
}

#copy-right>p {
  position: relative;
  top: 4vh;
  font-size: 1.5rem;
  line-height: 1.5rem;
}

.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.5s;
}

.modal-fade-enter, .modal-fade-leave-to {
  opacity: 0;
}

</style>
