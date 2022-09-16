<template>
    <div id="test">
        <input type="file" id="avatar" name="avatar" accept="image/*" v-on:change="changeFile($event)">
        <button @click="postImage()">upload</button>
    </div>
</template>

<script>
    import axios from 'axios';
export default {
    data() {
        return {
            img: ""
        };
    },
    
    methods: {
         
    changeFile (e) {
        this.img = e.target.files;
        
    },
    postImage() {
            let data = new FormData();
                data.append("file",this.img)
                console.log (data)
                axios.post(  "cloudinary://156134314836426:oLF8kqJFdyjII-YZzpE0bydWp-g@dtwuychif", data, {
    headers: { "Content-Type": "multipart/form-data" },
    
  })
  .then((res)=> console.log(res))
  .catch((err)=> console.error(err))


    },
},

}
</script>