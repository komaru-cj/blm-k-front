<template>
  <div class="body">
    <img class="img" src="../assets/login.jpg">
    <div class="left">
      <img class="logo" src="../assets/logoin.png">
      <div class="down">
        <input id="username" class="inputBox" @blur="usernameLeave" placeholder="手机号" v-model="username">
        <div id="textTip1" class="textTip"> </div>
        <input id="password" class="inputBox" @blur="passwordLeave" type="password" placeholder=" 密码" v-model="password">
        <div id="textTip2" class="textTip"> </div>
        <button id="test4" class="login" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Login',
  data(){
    return{
      username:'',
      password:''
    }
  },
  methods:{
    usernameLeave () {
      this.username = document.getElementById('username').value
      document.getElementById('textTip1').style.height = '19px'
      if (this.username === '') {
        document.getElementById('textTip1').style.color = '#e30000'
        document.getElementById('username').setAttribute('class', 'inputBox change')
      } else {
        document.getElementById('textTip1').style.color = '#3F85ED'
        document.getElementById('username').setAttribute('class', 'inputBox')
      }
    },
    passwordLeave () {
      this.password = document.getElementById('password').value
      document.getElementById('textTip2').style.height = '19px'
      if (this.password === '') {
        document.getElementById('textTip2').style.color = '#e30000'
        document.getElementById('password').setAttribute('class', 'inputBox change')
      } else {
        document.getElementById('textTip2').style.color = '#3F85ED'
        document.getElementById('password').setAttribute('class', 'inputBox')
      }
    },
    login(){
      this.$api({
        url: '/login/chef',
        method: 'post',
        params: {
          phoneNumber:this.username,
          password:this.password
        }
      }).then(res => {
        console.log(res)
        if(res.code===20051){
          console.log(res);
          sessionStorage.setItem("key", this.username);
          this.$router.push('/manage')
          this.$message({
            type: 'success',
            message: '欢迎回来'
          })
        }
        else {
          console.log(error);
          window.confirm('用户名或密码错误！')
        }
      }).catch(function (error){
        console.log(error);
        window.confirm('用户名或密码错误！')
      });
    }
  }
}
</script>

<style scoped>
.body {
  margin: 0px 0px 0px 0px;
  height: 100%;;
  width: 100%;
  background:inherit;
  background-color:rgba(255, 255, 242, 1);
}
.img{
  position:fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.left{
  position: relative;
  left: 0px;
  top: 0px;
  width: 450px;
  height: 100%;
  opacity: 1;
  background: rgba(204, 204, 204, 0.7);
}
.logo{
  position: relative;
  width: 400px;
  top:50px;
  left: 25px;
}
.down{
  width: 430px;
  position: relative;
  left: 50px;
  top: 100px;
}
.inputBox{
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: 350px;
  height: 50px;
  background:inherit;
  background-color:rgba(255, 255, 255, 1);
  box-sizing:border-box;
  border-style:solid;
  border-color: rgb(227, 225, 225);
  border-radius:15px;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
  color: #000000;
  text-align:left;
  font-family:'华文细黑';
  font-weight:400;
  font-style:normal;
  font-size:18px;
  outline: none;
  padding-left: 15px;
}
.inputBox.change::-webkit-input-placeholder{
  color: #e30000;
}
.inputBox.change::-moz-placeholder{
  color: #e30000;
}
.inputBox.change::-ms-input-placeholder{
  color: #e30000;
}
.inputBox.change{
  border-color: #e30000;
  background-color: #fff2f4;
}
.inputBox:focus{
  border-width:5px;
  border-style:solid;
  border-color: rgba(255, 205, 86, 1);
}
.textTip{
  width: 165px;
  height: 19px;
  background: inherit;
  background-color: rgba(255,255,255,0);
  border: none;
  border-radius: 0px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 16px;
  color: rgba(255, 205, 86, 1);
}
.login{
  margin-right: auto;
  margin-left: 80px;
  margin-top: 30px;
  width:200px;
  height:50px;
  background:inherit;
  background-color:rgba(255, 205, 86, 1);
  border:none;
  border-radius:15px;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
  font-size:18px;
  color:#FFFFFF;
  outline: none;
}
.login:hover{
  background-color: rgba(247, 238, 156, 1);
}
.gif{
  position: relative;
  top:-520px;
  left: 970px;
  width: 100px;
}
</style>