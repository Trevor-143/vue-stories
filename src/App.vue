<template>
  <div class="App">
  <h1> <img src="./assets/logo.jpg" alt="vue stories logo"> VueJS and Firebase Stories</h1>
    <div class="stories">
      <div class="story" v-for="story in stories" :key="story.id">
        <h2> {{ story.title }} </h2>
        <h3> <img :src= story.pic :alt= story.writer > by: {{ story.writer }} </h3>
        <p> {{ story.content }} </p>
      </div>
    </div>
  </div>
</template>


<script>
import { ref, onMounted } from "vue";
import { collection, orderBy, query, onSnapshot, doc } from "firebase/firestore";
import { dataBase } from "./firebase";

export default {
  name: 'App',
  setup() {
    const stories = ref([])

    const firebaseData = collection(dataBase, 'stories')
    const fireBaseStoriesData = query(firebaseData)

    onMounted(() => {
      onSnapshot( fireBaseStoriesData, (storySnap) => {
        const beforeStories = []
        storySnap.forEach((doc) => {
          const story = {
            id: doc.id,
            writer: doc.data().writer,
            title: doc.data().title,
            content: doc.data().content,
            pic: doc.data().pic
          }
          // console.log(story)
          beforeStories.push(story)
        })
        stories.value = beforeStories
      })
    })
    return {
      stories
    }
  }
}
</script>


<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .App {
    max-width: 800px;
    width: 100%;
    margin: 2rem 1rem;
  }
  .App h1 {
    font-size: 20px;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
  }
  h1 img {
    width: 40px;
    margin-right: 1rem;
  }

  .story {
    background-color: rgb(255, 240, 220);
    padding: 2rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }
  .story h3 {
    margin-top: 1rem;
    font-style: italic;
    font-weight: 400;
    font-size: 15px;
    margin-bottom: 0.5rem;
    color: rgb(66, 66, 66);
    display: flex;
    align-items: center;
  }
  .story h3 img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 1rem;
  }

</style>
