<template>
  <div class="body">
    <div class="container">
      <div class="form-box" id="form_box">
        <div class="register" id="register_box">
          <div class="form">
            <el-form ref="form" :model="registerForm" :rules="rules" label-width="80px" label-position="top"
                     style="margin: auto">
              <el-form-item label="Username" prop="userName">
                <el-input v-model="registerForm.userName" placeholder="Enter your user name"></el-input>
              </el-form-item>
              <el-form-item label="Nickname" prop="nickName">
                <el-input v-model="loginForm.userName" placeholder="Enter your nick name"></el-input>
              </el-form-item>
              <el-form-item label="Password" prop="password">
                <el-input placeholder="Enter your password" v-model="registerForm.password" show-password></el-input>
              </el-form-item>
              <el-form-item label="Password Confirm" prop="password">
                <el-input placeholder="Confirm your password" v-model="registerForm.password" show-password></el-input>
              </el-form-item>
              <el-form-item label="Email" prop="email">
                <el-input placeholder="Enter your user email" v-model="registerForm.email"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" style="width: 100%">Register</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="login hidden" id="login_box">
          <div class="form">
            <el-form ref="form" :model="loginForm" :rules="rules" label-width="80px" label-position="top"
                     style="margin: auto">
              <el-form-item label="Username" prop="userName">
                <el-input v-model="loginForm.userName" placeholder="Enter your user name"></el-input>
              </el-form-item>
              <el-form-item label="Password" prop="password">
                <el-input placeholder="Enter your user password" v-model="loginForm.password" show-password></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" style="width: 100%">Login</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      <div class="message-box left">
        <h2>去登录</h2>
        <h2>
          <el-button type="primary" @click="gotoLogin">去登录</el-button>
        </h2>
      </div>
      <div class="message-box right">
        <h2>去注册</h2>
        <h2>
          <el-button type="primary" @click="gotoRegister">去注册</el-button>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {userName: '', password: ''},
      registerForm: {userName: '', nickName: '', password: '', email: ''},
      rules: {
        userName: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur'}
        ],
        nickName: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 8, max: 15, message: '长度在 8 到 15 个字符', trigger: 'blur'}
        ],
        email: [
          {required: true, message: '请输入邮箱地址', trigger: 'blur'},
          {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
        ]
      }
    }
  },
  methods: {
    gotoRegister() {
      let formBox = document.getElementById("form_box");
      let loginBox = document.getElementById("login_box");
      let registerBox = document.getElementById("register_box");
      formBox.style.transform = 'translateX(0%)';
      loginBox.classList.add('hidden');
      registerBox.classList.remove('hidden');
    },
    gotoLogin() {
      let formBox = document.getElementById("form_box");
      let loginBox = document.getElementById("login_box");
      let registerBox = document.getElementById("register_box");
      formBox.style.transform = 'translateX(-100%)';
      registerBox.classList.add('hidden');
      loginBox.classList.remove('hidden');
    }
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

.body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  position: relative;
  width: 80%;
  height: 50%;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  background-color: #545c64;
}

/*form*/
.form-box {
  position: absolute;
  top: -25%;
  right: 5%;
  width: 45%;
  height: 150%;
  border-radius: 5px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  z-index: 2;
  transition: 0.5s ease-in-out;
  background-color: whitesmoke;
  overflow: auto;
}

.register, .login {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.form {
  position: absolute;
  width: 80%;
  height: 90%;
  margin: 10% 10% 0 10%;
  display: flex;
}

.hidden {
  display: none;
  transition: 0.5s;
}

/**/
.message-box {
  position: absolute;
  top: 50%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translateY(-50%);
}

.message-box.left {
  left: -2%;
}

.message-box.right {
  right: -2%;
}

.message-box h2 {
  color: #000;
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: 4px;
}
</style>
