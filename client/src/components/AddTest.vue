<template>
    <div id="test">
        <button @click="postImage()">Test Moez</button>
    </div>
</template>

<script>
    import picture from "../assets/logo.png"
    import axios from "axios"
export default {
    
    methods: {


        postImage : async () => {
            try {
                const response = await axios.post(
                    "https://api.cloudinary.com/v1_1/dtwuychif/image/upload",
                    picture
                )
                console.log(response.data)
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>