<template>
  <div class="background">
    <upbar></upbar>
    <div class="down">
        <div class="bigdown" v-for="(item, i) in allorder" v-if="i%6==0">
          <div class="middledown" v-for="(item, j) in row(allorder,i)" :key="i,j" @click="selectorder(i,j)">
            <span>{{ item.orderId}}</span>
            <div class="downtopic" v-for="(item, i) in item.orderDetailList">
              <div >
                <span>{{ item.dishName }}*{{item.number}}</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import upbar from '../views/UpBar'
export default {
  inject:["reload"],
  components: {
    upbar
  },
  data () {
    return {
      allorder:[]
    }
  },
  methods:{
    getorder(){
      this.$api({
        url: '/orderinfo/0/12',
        method: 'get',
      }).then(res => {
        console.log(res)
        if(res.code===20041){
          console.log(res);
          this.allorder=res.data;
        }
        else {
          console.log(error);
        }
      }).catch(function (error){
        console.log(error);
      });
      console.log(this.allorder)
    },
    row(items,i){
      let arryy = [];
      let oldarr = items;
      for(let y = i; y < oldarr.length; y++) {
        if (arryy.length < 6) {
          arryy.push(items[y]);
        } else {
          break;
        }
      }
      return arryy;
    },
    selectorder(i,j){
      this.$api({
        url: '/orderinfo/updatestatus',
        method: 'post',
        params: {
          orderId: this.allorder[i+j].orderId,
          status: 2
        }
      }).then(res => {
        if(res.code===20031){
        }
        else {
          console.log(error);
        }
      }).catch(function (error){
        console.log(error);
      });
      this.getorder();
      this.reload();
    }
  },
  mounted() {
    this.getorder();
  }
}
</script>
<style scoped>
.background{
  width:100%;
  height:100%;
  background:inherit;
  background-color:rgba(255, 255, 252, 1);
  border:none;
  border-radius:0px;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
  overflow: hidden;
}
.down{
  position: relative;
  top: 10px;
  width: 100%;
  height: 630px;
  background-color: rgb(255 255 244);
}
.bigdown{
  width:100%;
  display: flex;
  justify-content: flex-start;
}
.middledown{
  width: 200px;
  justify-content: flex-start;
  align-items: baseline;
  height: 270px;
  background-color: #ffe0d1;
  margin-left: 50px;
  margin-top: 30px;
}
.downtopic{
  font-size: 15px;
  position: relative;
  left: 30px;
  color: #3b3939;
  margin-top: 3px;
}
</style>