<template>
  <div id="app" class="flex  container h-screen  w-full">
    <!----side nav ----->

    <div class="lg:w-1/5  border-r  border-lighter px-2 lg:px-6 py-2 flex flex-col justify-between">
      <div>
        <button class="focus:outline-none h-12 w-12 hover:bg-lightblue text-3xl rounded-full text-blue">
          <i class="fa-brands fa-twitter w-[49px]"></i>
        </button>


        <div>
          <button v-for="tab in tabs" :key="tab" @click=" goToRoute(tab)"
            :class="` tabLink focus:outline:none hover:text-blue flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3 ${id === tab.id ? 'text-blue' : ''}`">
            <i :class="`${tab.icon} text-2xl lg:mr-4 text-left`"></i>
            <p class="text-lg font-semibold text-left hidden lg:block">{{ tab.title }}</p>
          </button>
        </div>
        <button
          class="text-white bg-blue rounded-full font-semibold focus:outline-none w-12 h-12 lg:w-full lg:h-auto p-3 hover:b g-darkblue">
          <p class="hidden lg:block">
            Tweet
          </p>
          <i class="fas fa-plus lg:hidden"></i>

        </button>
      </div>
      <div class="lg:w-full relative">
        <button @click="dropdown = true"
          class="flex items-center w-full hover:bg-lightblue rounded-full p-2 focus:outline-none">
          <img src="guys.jpg" class="w-10 h-10 rounded-full border border-lighter">
          <div class=" hidden lg:block ml-4">
            <p class="text-sm font-bold leading-tight">Jeannet Eliot</p>
            <p class="text-sm leading-tight text-left ">JackizBe</p>
          </div>
          <i class="fas hidden lg:block fa-angle-down ml-auto text-lg"></i>
        </button>

        <div v-if="dropdown === true"
          class="absolute bottom-0 left-0 w-64 rounded-lg shadow-md border-lightest bg-white mb-16">
          <button @click="dropdown = true"
            class=" p-3 flex items-center w-full hover:bg-lightest  p-2 focus:outline-none">
            <img src="guys.jpg" class="w-10 h-10 rounded-full border border-lighter" alt="">
            <div class="ml-4">
              <p class="text-sm font-bold leading-light">Jeannet Eliot</p>
              <p class="text-sm text-left leading-light">JackizBe</p>
            </div>
            <i class="fas fa-check ml-auto text-blue"></i>
          </button>
          <button @click="dropdown = false"
            class="w-full text-left hover:bg-lightest border-t border-lighter p-3 focus:outline-none">
            Add an existing account
          </button>
          <button @click="dropdown = false"
            class="w-full text-left hover:bg-lightest border-t border-lighter p-3 focus:outline-none">
            Log out @
          </button>
        </div>
        <div>

        </div>
      </div>
    </div>
    <div class="w-full md:w-1/2 overflow-y-scroll h-full midlle-scrol">
      <router-view></router-view>
    </div>
    


    <!--- right sidebar---->

    <div class="md:block hidden w-1/3 h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative ">
      <input class="pl-12 rounded-full w-full p-2 bg-lighter text-sm mb-4 focus:outline-none"
        placeholder="Search Twitter" />
      <i class="fas fa-search absolute left-0 top-0 mt-[18px] ml-12 text-sm text-light"></i>
      <div class="w-full rounded-lg bg-lightest ">
        <div class="flex items-center justify-between p-3">
          <p class="text-lf font-bold">Trends for You</p>
          <i class="fas fa-cog text-lg text-blue"></i>
        </div>
        <button v-for="trend in tranding" :key="trend"
          class="w-full flex justify-between hover:bg-lighter p-3 border-t border-lighter">
          <div>
            <p class="text-sm text-left leading-tight text-dark">{{ trend.top }}</p>
            <p class="font-semibold text-sm  text-left leading-tight">{{ trend.title }}</p>
            <p class="text-left leading-tight text-dark">{{ trend.bottom }}</p>
          </div>
          <i class="fas fa-angle-down text-lg text-dark"></i>

        </button>
        <button class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
          Show More
        </button>
      </div>

      <div class="w-full rounded-lg bg-lightest my-4 ">
        <div class="p-3">
          <p class="text-lg font-bold">Who to Follow</p>
        </div>
        <button v-for="friend in friends" :key=friend class="w-full flex  hover:bg-lighter p-3 border-t border-lighter">
          <img :src="`${friend.src}`" class="w-12 h-12 rounded-full border border-lighter">
          <div class=" hidden lg:block ml-4">
            <p class="text-sm font-bold leading-tight">{{ friend.name }}</p>
            <p class="text-sm leading-tight text-left ">{{ friend.handle }}</p>
          </div>
          <button class="ml-auto text-sm text-blue py-1 px-4 rounded-full border-2 border-blue">
            Follow
          </button>
        </button>
        <button class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
          Show more
        </button>

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
      tranding: [
        { top: 'Trending in TX', title: 'Gigi', bottom: 'Tranding with: Rip Gigi' },
        { top: 'Music', title: 'We Won', bottom: '135K Tweets' },
        { top: 'Pop', title: 'Blue Ivy', bottom: '40k tweets' },
        { top: 'Trending in US', title: 'Denim Day', bottom: '40k tweets' },
        { top: 'Trending', title: 'When Beyonce', bottom: '25.4k tweets' },
      ],
      friends: [
        { src: 'header.jpg', name: 'Aline Hall', handle: '@teslaBoy' },
        { src: 'guys.jpg', name: 'Anicet PROTA Hall', handle: '@teslaBoy' },
        { src: 'gallery6.jpg', name: 'Jérémi parfait Hall', handle: '@teslaBoy' },

      ],

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
    },
    goToRoute(tab) {
      this.id = tab.id
      console.log("Voivi la route");
      if (this.id=="home") return  this.$router.push('/');
      this.$router.push(`/${this.id}`);
    },
  }
}
</script>



<style scoped></style>
