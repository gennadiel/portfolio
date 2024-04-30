<template>
  <div v-if="isLogged">
    <form @submit.prevent="submitFile" class="upload-form">
      <label for="avatar">Выбери фотографию:</label>

      <input type="file" id="avatar" name="avatar" accept="image/*" ref="file" />

      <!-- <fieldset>
        <legend>Выбери категорию:</legend> -->

      <!-- <div>
          <input type="radio" id="risunok" name="drone" value="risunok" ref="category" />
          <label for="risunok">Рисунок</label>
        </div> -->

      <!-- <div>
          <input type="radio" id="zhivopis" name="drone" value="zhivopis" ref="category" />
          <label for="zhivopis">Живопись</label>
        </div> -->

      <!-- <div>
          <input type="radio" id="smeshannaya" name="drone" value="smeshannaya" ref="category" />
          <label for="smeshannaya">Смешанная техника</label>
        </div> -->

      <!-- <div>
          <input type="radio" id="grafika" name="drone" value="grafika" ref="category" />
          <label for="grafika">Графика</label>
        </div> -->

      <!-- <div>
          <input type="radio" id="akvarel" name="drone" value="akvarel" ref="category" />
          <label for="akvarel">Акварель</label>
        </div> -->
      <!-- </fieldset> -->

      <div>
        <input type="radio" id="option1" v-model="selectedOption" value="Рисунок">
        <label for="option1">Рисунок</label>

        <input type="radio" id="option2" v-model="selectedOption" value="Живопись">
        <label for="option2">Живопись</label>

        <input type="radio" id="option3" v-model="selectedOption" value="Смешанная техника">
        <label for="option3">Смешанная техника</label>

        <input type="radio" id="option4" v-model="selectedOption" value="Графика">
        <label for="option3">Графика</label>

        <input type="radio" id="option5" v-model="selectedOption" value="Акварель">
        <label for="option3">Акварель</label>

        <p>Выбрана опция: {{ selectedOption }}</p>
      </div>

      <input type="text" ref="caption" placeholder="Описание" />
      <button type="submit">Загрузить Фото!</button>
    </form>
  </div>

  <!-- <P id="welcoming">Добро пожаловать в галерею</P> -->

  <!-- <div class="gallery-links">
    <div class="link" @click="readDataFromDb('Рисунок')">Рисунок</div>
    <div class="link" @click="readDataFromDb('Живопись')">Живопись</div>
    <div class="link" @click="readDataFromDb('Смешанная техника')">Смешанная техника</div>
    <div class="link" @click="readDataFromDb('Графика')">Графика</div>
    <div class="link" @click="readDataFromDb('Акварель')">Акварель</div>
  </div>
  
    <div class="thumbnail" v-for="(item, index) in images" :key="index" @click="openImage(item.path)">
      <img :src="item.path" alt="Image" class="thumbnail-image">
      <p>{{ item.caption }}</p>
    </div>

    <div v-if="selectedImage" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <img :src="selectedImage.path" alt="Full-size Image">
      </div>
    </div>
  </div> -->
  <div class="temp-container">
    <div v-for="(image, index) in images" :key="index">
      <img :src="image" alt="Image" class="temp-thumbnail" @click="openFullImage(image)">
    </div>
  </div>
  <div v-if="selectedImage" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <img :src="selectedImage.path" alt="Full-size Image">
    </div>
  </div>

</template>

<script>

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDatabase, set, ref as dbRef, push as pushDb, onValue } from "firebase/database";

export default {
  name: 'GalleryBody',
  data() {
    return {
      // showList: false,
      // categoryes: ['Element 1', 'Element 2', 'Element 3', 'Element 4'],
      selectedOption: null,
      images: [
      ],
      selectedImage: null,
    };
  },

  //temp
  created() {
    this.loadImages();
  },

  computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    },
  },
  // mounted() {
  // console.log(`the component is now mounted.`)
  // this.readDataFromDb();
  // },
  methods: {
    loadImages() {
      const imagesContext = require.context('../assets/temp', false, /\.(png|jpe?g|svg)$/);
      this.images = imagesContext.keys().map(imagesContext);
      console.log(this.images);
    },
    openFullImage(src){
      window.open(src, '_blank');
    },
    // handleClick(link, category) {
    //   this.activeLink = link;
    //   // Ваш код обработки нажатия
    //   this.readDataFromDb(category);
    // },
    // toggleList() {
    //     this.showList = !this.showList;
    //   },
    readDataFromDb(category) {
      // console.log(category);
      this.images = [];
      const db = getDatabase();
      const picRef = dbRef(db, 'picData/' + category);
      // console.log(picRef);

      // Используйте onValue для отслеживания изменений в базе данных
      onValue(picRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          // Преобразуйте данные в массив изображений
          const images = Object.values(data);
          this.images = images;
        }
      });
    },
    openImage(path) {
      this.selectedImage = { path };
    },
    closeModal() {
      this.selectedImage = null;
    },
    async submitFile() {
      const fileInput = this.$refs.file;
      const caption = this.$refs.caption.value;
      // const category = this.$refs.category.value;
      // console.log(category);

      const file = fileInput.files[0];

      if (file) {
        const storage = getStorage();
        const storageRef = ref(storage, 'gallery/' + this.selectedOption + '/' + file.name);

        try {
          // Upload file to Firebase Storage
          const snapshot = await uploadBytes(storageRef, file);

          // Get download URL
          const downloadURL = await getDownloadURL(snapshot.ref);
          // const caption = 'New Image';

          // Add the new image to the images array
          this.images.push({
            path: downloadURL,
            caption: caption, // You can customize the caption
          });

          const db = getDatabase();
          const picRef = dbRef(db, 'picData/' + this.selectedOption);
          const newPostRef = pushDb(picRef);
          console.log(caption);
          set(newPostRef, {
            path: downloadURL,
            caption: caption, // You can customize the caption
          });

          console.log('File uploaded successfully!');
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      }
    },
  },
};
</script>

<style>
#welcoming {
  font-size: 50px;
  text-align: center;
  color: rgb(0, 255, 136);
}

.gallery-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  /* Выравнивание контейнера слева */
}


.temp-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  /* background-color: #fff */
}

.gallery-links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  flex-wrap: wrap;
  margin-right: 10%;
}


.link {
  font-family: 'Exo 2', sans-serif;
  font-size: large;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
}

.link:hover {
  color: orange;
  transition: 1s;
  text-decoration: overline;
}

.link {
  color: black;
  font-weight: bold;
  text-decoration: none;
}

.temp-thumbnail {
  width: 200px;
  height: 200px;
  /* cursor: pointer; */
  margin: 5px;
  box-sizing: border-box;
  /* border-color: black;
  border-width: 1px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: none;
}

.temp-thumbnail:hover {
  /* opacity: 0.9; */
  transition: 0.3s;
  width: 210px;
  height: 210px;
  margin: 0px;
}

.thumbnail {
  width: 200px;
  /* Ширина миниатюры */
  height: auto;
  cursor: pointer;
  margin: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Выравнивание по центру */
}

.thumbnail-image {
  width: 100%;
  /* Заполнение ширины родительского контейнера */
}

.upload-form {
  width: 100%;
  max-width: 300px;
  /* Ширина формы загрузки */
  margin: 20px;
}

.modal {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
}

.modal-content {
  max-width: 80%;
  max-height: 80%;
  overflow: scroll;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
}
</style>
