<template>
  <div id="profile">

    <div class=" px-5 py-3 border-b border-lighter flex items-center justify-between">
      <h1 class="text-xl font-bold">Profile</h1>
      <i class="far fa-star text-xl text-blue"></i>
    </div>
    <div class="w-full h-[100%] ">
      <img src="profile_back.jpg" class="w-full">
      <div class="w-full flex justify-between relative px-[14px] relative">
        <div class="relative  h-[50%] w-[50%]">

          <img src="../assets/images/guys.jpg"
            class="object-cover h-[7rem]  w-[7rem] rounded-full border border-white border-[3.2px] absolute top-[-3.7rem] lef-5">
          <div class="mt-14 text-neutral-900 text-[21px] font-bold font-['SF Compact Display']">David Biscuso</div>
          <span class="text-slate-500 text-dark font-medium font-['SF Compact Display']">@biscuttu</span>
          <div class="mt-[10px] text-neutral-900 text-base  font-medium font-['SF Compact Display']"> Product Designer
          </div>
          <div class="flex items-center mt-[10px]  text-slate-500 text-base font-medium font-['SF Compact Display']">
            <div class="flex-none items-center   text-slate-500 text-dark font-medium font-['SF Compact Display']">
              <i class="fas fa-map-marker-alt"></i> <span>London</span>
            </div>
            <div
              class="ml-[10px] flex-none items-center text-slate-500 text-dark font-medium font-['SF Compact Display']">
              <i class="far fa-calendar-alt "></i> <span>Joined September 2011</span>
            </div>
          </div>

          <div class="flex items-center mt-[10px]  text-slate-500 text-base font-medium font-['SF Compact Display']">
            <div class="flex-none items-center   text-slate-500  font-medium font-['SF Compact Display']">
             <span class="text-neutral-900 text-base font-bold" >596</span> <span class="text-dark">following</span>
            </div>
            <div
              class="ml-[10px] flex-none items-center text-base font-['SF Compact Display']">
             <span class="text-neutral-900 text-base font-bold">72</span> <span class="text-dark font-medium   ">Followers</span>
            </div>
          </div>
        </div>

        
        <div>
          <button type="submit"
            class="h-10 px-4 font-semibold bg-width hover:text-white border border-blue  hover:bg-blue focus:outline-none rounded-full absolute top-[0.6rem] text-blue right-3">
            Edite profile
          </button>
        </div>

      </div>

        <div class="text-base  text-center text-dark border-b border-dark  w-full">
    <ul class="flex  justify-between  font-bold font-['SF Compact Display' -mb-px items-center ">
        <li class="me-2">
            <a href="#" class="inline-block  p-4 border-b-2 border-transparent rounded-t-lg hover:text-blue hover:border-blue dark:hover:text-gray-300">Tweets</a>
        </li>
        <li class="me-2">
            <a href="#" class="inline-block p-4 text-blue-600  border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Tweets and replies</a>
        </li>
        <li class="me-2">
            <a href="#" class="inline-block p-4  border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Media</a>
        </li>
        <li class="me-2">
            <a href="#" class="inline-block p-4 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Likes</a>
        </li>
      
    </ul>
</div>

    </div>
</div></template>