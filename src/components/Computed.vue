<template>
    <div>
<input type="text" placeholder="First Name" v-model="fName">
<input type="text" placeholder="Last Name" v-model="lName">
<h2>Options Fullname is {{ fullName }}</h2>
    </div>
</template>

<script>
import { computed } from 'vue'
    export default {
        name:"Computed",
        setup(){
            const fName =ref("")
            const lName =ref("")
            computed( ()=>{
               const fullname= ()=>{
                return `${fName} ${lName}`
               }
            })

            return{
                fName, lName, fullName
            }

        },


    }
</script>

<style scoped>

</style>