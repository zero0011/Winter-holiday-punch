<template>
  <div>
    <input type="file" @click="handleFileChange" />
    <el-button @click="handleUpload">上传</el-button>
  </div>
</template>

<script>
const SIZE = 10 * 1024 * 1024; // 切片大小
export default {
  data : function() {
    return  {
      container : {
        file : null
      },
      data : []
    }
  },
  methods : {
    handleFileChange(e) {
      const [file] = e.target.files;
      if(!file) return;
      Object.assign(this.$data , this.$options.data());
      this.container.file = file;
    },
    async handleUpload() {
      
    },
    // 请求逻辑 , 考虑到通用性 , 我们使用原生的 XMLHttpRequest 做一层简单的封装啦发送请求
    request({
      url,
      method = "post",
      data,
      headers = {},
      requestList
    }) {
      return new Promise(resolve =>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        Object.keys(headers).forEach(key =>{
          xhr.setRequestHeader(key , headers[key])
        });
        xhr.send(data);
        xhr.onload = e =>{
          resolve({
            data : e.target.response
          })
        }
      })
    }
  }
}
</script>

<style>

</style>