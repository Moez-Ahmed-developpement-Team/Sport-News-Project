<template>
    <div id="One-post">
    <h1 id="Title-In-onePost"> {{}}</h1>
    <img/>
    <a id="text-In-onePost">

    </a>
    </div>
</template>

<script>
    import { onMounted } from 'vue'
    import axios from 'axios'
    onMounted(() => {
        axios.get('http://localhost:3000/getOnePost', id).then((result) => {console.log(result)}).catch((err) => console.log(err))
})
export default {
    name:'one-post',
    props: {

    },
    methods: {
       
    }
}
</script>