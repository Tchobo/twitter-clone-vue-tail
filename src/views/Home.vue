<template>
      <div id="home">
      <div class=" px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 class="text-xl font-bold">Home</h1>
        <i class="far fa-star text-xl text-blue"></i>
      </div>
      <div class="px-5 py-3 border-b-8 border-lighter flex">
        <div class="flex-none">
          <img src="guys.jpg" class="flex-none w-12 h-12 rounded-full border border-lighter" alt="">
        </div>
        <form @submit.prevent="addNewTweet" class="w-full px-4 relative">
          <textarea v-model="tweetValue" placeholder="What's up?" class="w-full focus:outline-none mt-3 pb-3"></textarea>
          <div class="flex item-center mt-2">
            <i class="text-lg text-blue mr-4 far fa-image"></i>
            <i class="text-lg text-blue mr-4 fas fa-film"></i>
            <i class="text-lg text-blue mr-4 far fa-chart-bar"></i>
            <i class="text-lg text-blue mr-4 far fa-smile"></i>

          </div>
          <button type="submit"
            class="h-10 px-4 text-white font-semibold bg-blue hover:bg-darkblue focus:outline-none rounded-full absolute bottom-[-0.380rem] right-0">
            Tweet
          </button>
        </form>

      </div>
      <div v-for="follow in following" :key="follow.like" class="w-full p-4 border-b hover:bg-lighter flex">
        <div class="flex-none mr-4">
          <img :src="follow.src" class="h-12 w-12 rounded-full flex-none" />
        </div>
        <div class="w-full">
          <div class="flex items-center w-full">
            <p class="font-semibold"> {{ follow.name }}</p>
            <p class="text-sm text-dark ml-2"> {{ follow.handle }}</p>
            <p class="text-sm text-dark ml-2"> {{ follow.time }}</p>
            <i class="fas fa-angle-down text-dark ml-auto"></i>
          </div>
          <p class="py-2">{{ follow.tweet }}</p>
          <img v-if="follow.isImg" class="w-full rounded-xl mb-2" height="345" :src="follow.imageLink" >
          <iframe v-if="follow.isVideo" class="w-full rounded-xl mb-2" height="345" :src="follow.videoLink">
</iframe>
          <div class="flex items-center justify-between w-full mt-3">
            <div class="flex items-center text-sm text-dark">
              <i class="far fa-comment mr-3"></i>
              <p>{{ follow.comments }}</p>

            </div>
            <div class="flex items-center text-sm text-dark">
              <i class="fas fa-retweet mr-3"></i>
              <p>{{ follow.retweets }}</p>

            </div>

            <div class="flex items-center text-sm text-red">
              <i class="fas fa-heart mr-3"></i>
              <p>{{ follow.like }}</p>

            </div>
            <div class="flex items-center text-sm text-dark">
              <i class="fas fa-share-square mr-3"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>

export default {
  name: 'app',
  components: {

  },

  data() {
    return {
      tabs: [
        { icon: 'fas fa-home', title: 'Home', id: 'home' },
        { icon: 'fas fa-hashtag', title: 'Explore', id: 'explore' },
        { icon: 'far fa-bell', title: 'Notifications', id: 'notifications' },
        { icon: 'far fa-envelope', title: 'Messages', id: 'messages' },
        { icon: 'far fa-bookmark', title: 'Bookmarks', id: 'bookmarks' },
        { icon: 'fas fa-clipboard-list', title: 'Lists', id: 'lists' },
        { icon: 'far fa-user', title: 'Profile', id: 'profile' },
        { icon: 'fas fa-ellipsis-h', title: 'More', id: 'more' }
      ],
      id: "home",
      dropdown: false,


      following: [
        { id: 1, src: 'header.jpg', isImg:true, isVideo:false, imageLink:"https://cdn.pixabay.com/photo/2020/04/14/11/02/school-5042064_1280.jpg", name: 'Aline Hall', handle: '@teslaBoy', time: '20 min', tweet: "We're hiring! Looking for a Frontend Developer with a design background to join our small, fully remote product team. Perfect for someone who’s design-driven & loves CSS/JavaScript.", comments: '40', retweets: '13', like: '1,000' },
        { id: 2, src: 'gallery11.jpg',isImg:false, isVideo:true, name: 'Anicet PROTA Hall', handle: '@teslaBoy', time: '20 min', tweet: "3 years ago, I bought myself a base M1 Air after saving $1,000 for over a year.Using that laptop, I built and launched my first startup.", comments: '1.000', retweets: '550', like: '1,000,003', videoLink:"https://www.youtube.com/embed/tgbNymZ7vqY" , imageLink: "" },
        { id: 3, isImg:false, isVideo:false, src: 'guys.jpg', name: 'Jérémi parfait Hall', handle: '@teslaBoy', time: '20 min', tweet: "The framework you love, with a fresh new look, and:🦥 deferrable views ⚡️ up to 90% faster, intuitive built-in control flow 🏎️ up to 87% faster build times with hybrid rendering🏗️ Vite + esbuild builds", comments: '1.000', retweets: '550', like: '1,000,003', imageLink: "", videoLink:"" },

      ],
      tweetValue: ""
    }
  },

  methods: {
    addNewTweet() {
      const objDefault = { id: this.following.length + 11, src: 'guys.jpg', name: 'Jérémi parfait Hall', handle: '@teslaBoy', time: '20 min', tweet: this.tweetValue, comments: '1.000', retweets: '550', like: '1,000,003', imageLink: "" }
      this.following.unshift(objDefault)
    }
  }
}
</script>
<style>

</style>