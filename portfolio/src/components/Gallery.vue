<template>
  <div v-if="isLogged">
    <form @submit.prevent="submitFile" class="upload-form">
      <input type="file" ref="file" />

      <!-- <button @click="toggleList">Категория</button>

      <transition name="slide-fade">
        <ul v-if="showList">
          <li v-for="(item, index) in categoryes" :key="index">{{ item }}</li>
        </ul>
      </transition> -->

      <fieldset>
        <legend>Выбери категорию:</legend>

        <div>
          <input type="radio" id="huey" name="drone" value="risunok" ref="category"/>
          <label for="huey">Рисунок</label>
        </div>

         <div>
          <input type="radio" id="dewey" name="drone" value="zhivopis" ref="category"/>
          <label for="dewey">Живопись</label>
        </div> 

        <!-- <div>
          <input type="radio" id="louie" name="drone" value="louie" />
          <label for="louie">Louie</label>
        </div> -->

        <!-- <div>
          <input type="radio" id="louie" name="drone" value="louie" />
          <label for="louie">Louie</label>
        </div> -->

        <!-- <div>
          <input type="radio" id="louie" name="drone" value="louie" />
          <label for="louie">Louie</label>
        </div>  -->
      </fieldset>

      <!-- <input type="radio" id="one" value="Один" v-model="picked">
      <label for="one">Один</label>
      <br>
      <input type="radio" id="two" value="Два" v-model="picked">
      <label for="two">Два</label>
      <br>
      <span>Выбрано: {{ picked }}</span> -->


      <input type="text" ref="caption" placeholder="Описание" />
      <button type="submit">Загрузить Фото!</button>
    </form>
  </div>
  <div class="gallery-links">
    <div class="link" @click="readDataFromDb('risunok')">Рисунок</div>
    <!-- <div class="{ 'active-link': activeLink === 'link1' }" @click="handleClick('link1','risunok')">Ссылка 1</div>
    <div class="{ 'active-link': activeLink === 'link2' }" @click="handleClick('link1','zhivopis')">Ссылка 1</div> -->
    <div class="link" @click="readDataFromDb('zhivopis')">Живопись</div>
    <div class="link">Смешанная техника</div>
    <div class="link">Графика</div>
    <div class="link">Акварель</div>
  </div>
  <div class="gallery-container">
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
      images: [
      ],
      selectedImage: null,
    };
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

    // writePicDataToDb(imageUrl, caption) {
    //   const db = getDatabase();
    //   set(ref(db, 'picData/'), {
    //     imageUrl: imageUrl,
    //     caption: caption,
    //   });
    // },
    openImage(path) {
      this.selectedImage = { path };
    },
    closeModal() {
      this.selectedImage = null;
    },
    async submitFile() {
      const fileInput = this.$refs.file;
      const caption = this.$refs.caption.value;
      const category = this.$refs.category.value;

      const file = fileInput.files[0];

      if (file) {
        const storage = getStorage();
        const storageRef = ref(storage, 'gallery/' + category +'/' + file.name);

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
          const picRef = dbRef(db, 'picData/' + category);
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

<style >
.gallery-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  /* Выравнивание контейнера слева */
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

