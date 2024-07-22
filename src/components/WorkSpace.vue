<script setup>
import { ref } from 'vue'

const projects = ref(0)
projects.value = [{id: 0, name: '项目一'}, {id: 1, name: '项目二'}]

</script>
<template>
    <main>
        <div id="top-bar">
            <div id="brand">
                News AI
            </div>
        </div>

        <div id="main-part">
            <div id="project-list" class="main-box">
                <div id="add-project">
                    <span id="add-title">项目</span>
                    <span>
                        <i class="bi bi-plus"></i>
                    </span>
                </div>

                <div id="list">
                    <div v-for="pro in projects">
                        <div class="project-title">
                            {{ pro.name }}
                            <i class="bi bi-gear"></i>
                        </div>
                    </div>
                </div>

                <div id="function-menu">
                   <div class="function-menu">
                        <i class="bi bi-person-fill"></i>
                        个人中心
                   </div>

                   <div class="function-menu">
                        <i class="bi bi-question-square-fill"></i>
                        帮助文档
                   </div>

                   <div class="function-menu">
                        <i class="bi bi-chat-left-fill"></i>
                        反馈意见
                   </div>
                </div>
            </div>

            <div id="input-text" class="main-box">
                <div class="inner-header">
                    <i class="bi bi-file-earmark-font"></i>
                    文本导入
                </div>

  
                <div id="upload-file">
                    
                </div>
            

                <div id="text-input">
                    <div id="text-input-title">
                        文本输入
                    </div>

                    <div>
                      
                    </div>
                </div>
            </div>

            <div id="configuration" class="main-box">
                <div class="inner-header">
                    <i class="bi bi-envelope-plus"></i>
                    成图信息
                </div>
            </div>

            <div id="result-img" class="main-box">
                <div class="inner-header">
                    <i class="bi bi-image"></i>
                    生成图像
                </div>

            </div>
        </div>
    </main>
</template>

<style scoped>

main {
    background-image: url('../static/img/home/background_img.jpg');
    width: 100vw;
    height: 100vh;
}

#top-bar {
    height: 7%;
    background-color: rgba(140, 93, 243, 0.6);
}

#brand {
    color: rgb(255, 255, 255);
    font-size: 2rem;
    font-style: italic;
    position: relative;
    padding-left: 5vw;
    padding-top: 1vh;
}

.main-box {
    border: 1px white solid;
}

#project-list {
    flex: 1;
    text-align: center;
    background-color: rgba(140, 93, 243, 0.6);
}

#add-project {
    margin-top: 10%;
    border-bottom: 1px white solid;
    padding-bottom: 5%;
}

.bi-plus {
    background-color: white;
    color: rgb(180, 156, 230);
    border-radius: 50%;
}

.bi-plus:hover {
    cursor: pointer;
}

#add-title {
    color: white;
    font-size: larger;
    font-weight: 600;
    padding-right: 5%;
}

#list {
    border-top: 1px white solid;
    /* border-bottom: 1px white solid; */
    height: 60%;
    overflow: auto ;
}

.project-title {
    background-color: rgb(205, 61, 208);
    color: white;
    margin: 5% 5% 5% 5%;
    border-radius: 20px;
    font-size: larger;
    line-height: 5vh;
    height: 5vh;
    font-weight: 600;
}

.bi-gear {
    margin-left: 20%;
}

.bi-gear:hover {
    cursor: pointer;
}

.function-menu {
    color: white;
    font-weight: 500;
    margin-top: 10%;
}

.function-menu:hover {
    cursor: pointer;
}

.bi-person-fill, .bi-question-square-fill, .bi-chat-left-fill {
    color: black;
    margin-right: 5%;
}

.inner-header {
    background-color: rgba(111, 166, 240, 0.6);
    height: 5vh;
    text-align: left;
    line-height: 5vh;
    position: relative;
    color: white;
}

.bi-file-earmark-font, .bi-envelope-plus, .bi-image {
    margin-left: 1vw;
    color: purple;
}


#input-text {
    flex: 2;
}

#upload-file {
    border: 4px rgb(99, 1, 99) dashed;
    border-radius: 10px;
    height: 43vh;
}

#text-input {
    background-color: rgba(56, 66, 255, 0.5);
    border-radius: 10px;
    height: 43.5vh;
}

#text-input-title {
    color: white;
    background-color: rgb(147, 210, 243);
    height: 6vh;
    line-height: 6vh;
    text-align: center;
    border-radius: 20px;
    font-size: x-large;
    font-weight: 500;
    font-style: italic;
}

#configuration {
    flex: 1.5;
}

#result-img {
    flex: 4;
}

#main-part {
    display: flex;
    height: 93%;
}
</style>