<script setup>
import { defineProps, ref} from 'vue';
const props = defineProps({
  type: {
    type: String,
    required: true
  }
})
const type = ref(0)
type.value = props.type

const loginMethod = ref(null)
loginMethod.value = 'password'

const changeToLogin = () => {
    type.value = 'login'
}

const changeToRegister = () => {
    type.value = 'register'
    loginMethod.value = 'password'
}

const changeToForget = () => {
    type.value = 'forget'
}

const changeToPasswordLogin = () => {
    loginMethod.value = 'password'
    const passwordLo = document.querySelector('#password-login')
    passwordLo.style.color = 'black'
    const vercodeLo = document.querySelector('#vercode-login')
    vercodeLo.style.color = 'rgb(136, 136, 136)'
}

const changeToVercodeLogin = () => {
    loginMethod.value = 'vercode'
    const passwordLo = document.querySelector('#password-login')
    passwordLo.style.color = 'rgb(136, 136, 136)'
    const vercodeLo = document.querySelector('#vercode-login')
    vercodeLo.style.color = 'black'
}
</script>

<template>
    <main>
        <div id="left-panel">
            <div id="left-text">
                <h1>
                    News AI 登录
                </h1>

                <p>
                    登录解锁，用图像点亮新闻世界
                </p>
            </div>

            <div id="left-panel-img">
            </div>
        </div>

        <div id="right-panel">
            <div id="login" v-if="type === 'login'">
                <div id="login-method-selector" class="login-component">
                    <div id="password-login" @click="changeToPasswordLogin">
                        密码登录
                        <div v-if="loginMethod === 'password'" class="method-hover">
                            
                        </div>
                    </div>

                    <div id="vercode-login" @click="changeToVercodeLogin">
                        验证码登录
                        <div v-if="loginMethod === 'vercode'" class="method-hover">
                            
                        </div>
                    </div>
                </div>

                <div class="login-component">
                    <el-input v-model="account" style="width: 70%; height: 5vh;" placeholder="手机号/邮箱" />
                </div>

                <div class="login-component">
                    <div v-if="loginMethod === 'password'">
                        <el-input
                            v-model="password"
                            style="width: 70%; height: 5vh;"
                            type="password"
                            placeholder="密码"
                            show-password
                        />

                        <div id="forget-password" @click="changeToForget">
                            忘记密码
                        </div>
                    </div>

                    <div v-if="loginMethod === 'vercode'">
                        <el-input
                            v-model="vercode"
                            style="max-width: 70%; height: 5vh;"
                            placeholder="验证码"
                        >
                            <template #append>获取验证码</template>
                        </el-input>
                    </div>
                </div>

                <div class="login-component">
                    <button id="login-button">
                        登录
                    </button>
                </div>

                <div id="switch-to-register">
                    <span style="color: rgb(136, 136, 136);">
                        没有账号，
                    </span>
                    <span style="color: rgb(184, 134, 248);" id="register-now" @click="changeToRegister">
                        立即注册
                    </span>
                </div>
            </div>

            <div id="register" v-if="type === 'register'">
                <div class="register-component">
                    <h1>注册</h1>
                </div>
                
                <div class="register-component">
                    <el-input v-model="account" style="width: 70%; height: 5vh;" placeholder="手机号/邮箱" />
                </div>
                
                <div class="register-component">
                    <el-input
                    v-model="vercode"
                    style="max-width: 70%; height: 5vh;"
                    placeholder="验证码"
                    >
                        <template #append>获取验证码</template>
                    </el-input>
                </div class="register-component">
                

                <div class="register-component">
                    <el-input
                        v-model="password"
                        style="width: 70%; height: 5vh;"
                        type="password"
                        placeholder="设置密码"
                        show-password
                    />
                </div>

                <div class="register-component">
                    <label for="privacyCheck">
                        <el-checkbox id="privacyCheck" v-model="registerChecked"/>
                        <span style="color: rgb(136, 136, 136);">
                            我已阅读并确认
                        </span>
                        <span style="color: rgb(125, 132, 248);">
                            《隐私服务协议》
                        </span>

                        <span style="color: rgb(125, 132, 248);">
                            《隐私政策》
                        </span>
                    </label>
                </div>

                <div class="register-component">
                    <button id="register-button">
                        注册
                    </button>
                </div>

                <div id="switch-to-login">
                    <span style="color: rgb(136, 136, 136);">
                        我有账号，
                    </span>
                    <span style="color: rgb(184, 134, 248);" id="login-now" @click="changeToLogin">
                        立即登录
                    </span>
                </div>
            </div>

            <div id="forget" v-if="type === 'forget'">
                <div class="forget-component">
                    <h3>重置密码</h3>
                </div>
                
                <div class="forget-component">
                    <el-input v-model="account" style="width: 70%; height: 5vh;" placeholder="手机号/邮箱" />
                </div>
                
                <div class="forget-component">
                    <el-input
                    v-model="vercode"
                    style="max-width: 70%; height: 5vh;"
                    placeholder="验证码"
                    >
                        <template #append>获取验证码</template>
                    </el-input>
                </div class="forget-component">
                

                <div class="forget-component">
                    <el-input
                        v-model="password"
                        style="width: 70%; height: 5vh;"
                        type="password"
                        placeholder="设置密码6-16位数字或符号"
                        show-password
                    />
                </div>

                <div class="forget-component">
                    <label for="forgetPrivacyCheck">
                        <el-checkbox id="forgetPrivacyCheck" v-model="forgetChecked"/>
                        <span style="color: rgb(136, 136, 136);">
                            我已阅读并确认
                        </span>
                        <span style="color: rgb(125, 132, 248);">
                            《隐私服务协议》
                        </span>

                        <span style="color: rgb(125, 132, 248);">
                            《隐私政策》
                        </span>
                    </label>
                </div>

                <div class="forget-component">
                    <button id="login-button">
                        登录
                    </button>
                </div>

                <div id="switch-to-login">
                    <span style="color: rgb(136, 136, 136);">
                        我有账号，
                    </span>
                    <span style="color: rgb(184, 134, 248);" id="login-now" @click="changeToLogin">
                        立即登录
                    </span>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    display: flex;
}

#left-panel, #right-panel {
    width: 30vw;
    height: 60vh;
}

#left-panel {
    background-color: rgb(184, 134, 248);
    text-align: left;
}

#left-text {
    position: relative;
    left: 10%;
    color: white;
}

#left-panel-img {
    border-radius: 10%;
    background-image: url('../static/img/LoginRegister/login.png');
    background-size: cover;
    width: 90%;
    height: 70%;
    position: relative;
    left: 5%;
}

#right-panel {
    text-align: center;
}

#login {
    margin-top: 20%;
}

#login-method-selector {
    display: flex;
    height: 4vh;
}

#password-login, #vercode-login {
    flex: 1;
    text-align: center;
    font-size: medium;
   
}

#password-login:hover, #vercode-login:hover {
    cursor: pointer;
}

#password-login {
    position: relative;
    left: 10%;
    color: black;
}

#vercode-login {
    position: relative;
    right: 10%;
    color: rgb(136, 136, 136);
}

.login-component {
    margin-bottom: 8%;
}

#forget-password {
    color: rgb(153, 153, 153);
    position: relative;
    top: 2vh;
    left: 30%;
}

#forget-password:hover {
    cursor: pointer;
}

#register-now:hover {
    cursor: pointer;
}

.method-hover {
    background-color: rgb(184, 134, 248); 
    width: 1.5vw; 
    height: 2px;
    position: relative;
    left: 45%;
    top: 1vh;
}

#register {
    margin-top: 15%;
}

a {
    text-decoration: none;
}

.register-component {
    margin-bottom: 5%;
}

.register-component>h1 {
    font-weight: 400;
}

#switch-to-login {
    margin-top: 10%;
}

#login-now:hover {
    cursor: pointer;
}

#register-button, #login-button {
    width: 30%;
    height: 4vh;
    font-size: larger;
    border: none;
    border-radius: 5%;
    color: white;
    background-color: rgb(184, 134, 248);
}

#register-button:hover, #login-button:hover {
    background-color: rgb(184, 134, 248, 0.5);
}


#forget {
    margin-top: 10%;
}

.forget-component>h3 {
    font-weight: 100;
}

.forget-component {
    margin-bottom: 5%;
}
</style>