<script setup>
import { useRouter} from 'vue-router'
import { onMounted, ref, getCurrentInstance } from 'vue'

const state = ref()
const account = ref()
const password = ref()
const depassword = ref()
state.value = "login"
const instance = getCurrentInstance();
const $axios = instance.appContext.config.globalProperties.$axios;


let loginPanel, registerPanel
onMounted(() => {
  loginPanel = document.querySelector('#login-panel');
  registerPanel = document.querySelector('#register-panel');
});
const router = useRouter()
const data = {
    username: account.value,
    password: password.value,
  };

function Login() {
  if (state.value === "login") {
    $axios.get('/login')
    .then(reponse => {
      console.log(reponse)
      sessionStorage.setItem('isLoggedIn', 'true')
    })
    .catch(error => {
      console.log(error)
    })
  } else {
    state.value = "login"
    loginPanel.style.backgroundColor = "white"
    registerPanel.style.backgroundColor = "rgba(255, 68, 90)"
  }
  
}

function Register() {
  if (state.value === "register") {

  } else {
    state.value = "register";
    loginPanel.style.backgroundColor = "rgba(255, 68, 90)"
    registerPanel.style.backgroundColor = "white"
  }
}

</script>
<template>  
  <div id="root">
    <div id="main-panel">
      <div id="login-panel" >
        <div v-if="state === 'login'">
          <h1 style="color: black;">
            登录
          </h1>

          <form>
            <div>
              <el-input v-model="account" class="input" placeholder="请输入账号" />
            </div>
            <div>
              <el-input v-model="password" class="input" type="password" placeholder="请输入密码" show-password/>
            </div>

            
          </form>
          <button @click="Login" class="checkbutton">登录</button>
          
        </div>

        <div v-if="state === 'register'">
          <h1>
            有账号了？
          </h1>
          <p>
            立即登录，继续你的旅程
          </p>
          <button @click="Login" @click.prevent="submitForm" class="uncheckbutton">登录</button>
        </div>
      </div>

      <div id="register-panel">

        <div v-if="state === 'register'">
          <h1 style="color: black;">
            注册
          </h1>
          <form>
            <div>
              <el-input v-model="account" class="input" placeholder="请输入账号" />
            </div>
            <div>
              <el-input v-model="password" class="input" type="password" placeholder="请输入密码" show-password/>
            </div>

            <div>
              <el-input v-model="depassword" class="input" type="password" placeholder="请确认密码" show-password/>
            </div>
            
          </form>
          <button @click="Register" @click.prevent="submitForm" class="checkbutton" >注册</button>
        </div>

        <div v-if="state === 'login'">
          <h1>
            没有账号？
          </h1>
          <p>
            立即注册加入我们，开启一段新的旅程吧
          </p>
          <button @click="Register" class="uncheckbutton">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#root {
  width: 98vw;
  height: 98vh;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}

#main-panel {  
  /* margin-top: 10vh; */
  position: relative;
  top: 9vh;
  margin-left: 5vw;
  margin-right: 5vw;
  display: flex;
}

#login-panel, #register-panel {
  text-align: center;
  flex: 1;
  border-radius: 5px;
  height: 80vh;
  box-shadow: 5px 5px 10px rgba(44, 43, 86, 0.5);
  display: flex;
  justify-content: center; 
  align-items: center; 
}

#login-panel {
  background-color: white;
  transform-origin: right;
  transition: background-color 0.5s ease;
}

#register-panel {
  background-color: rgba(255, 68, 90);
  transform-origin: left;
  transition: background-color 0.5s ease;
}

h1 {
  font-size: 3.5rem;
  color: rgba(255, 255, 255);
  font-weight: 600;
}

p {
  margin-top: 3vh;
  font-size: 1.5rem;
  color: rgba(255, 255, 255);
}

button {
  width: 8vw;
  height: 6vh;
  border-radius: 2rem;
  font-size: larger;
}

button:hover {
  cursor: pointer;
}


.uncheckbutton {
  border: 1px white solid;
  background-color: rgba(255, 68, 90);
  color: white;
  margin-top: 3vh;
}

.uncheckbutton:hover {
  background-color: rgba(255, 75, 42);
  color: #050801;
  box-shadow: 0 0 5px rgba(255, 75, 42),
              0 0 25px rgba(255, 75, 42),
              0 0 50px rgba(255, 75, 42),
              0 0 200px rgba(255, 75, 42);
}

.checkbutton {
  border: none;
  background-color: rgba(255, 75, 42);
  color: white;
  margin-top: 3vh;
}

.checkbutton:hover {
  background-color: rgba(255, 68, 90);
  color: #050801;
  box-shadow: 0 0 5px rgba(255, 68, 90),
              0 0 25px rgba(255, 68, 90),
              0 0 50px rgba(255, 68, 90),
              0 0 200px rgba(255, 68, 90);
}

.input {
  width: 24vw;
  height: 6vh;
  margin-top: 3vh;
  font-size: larger;
}

</style>
