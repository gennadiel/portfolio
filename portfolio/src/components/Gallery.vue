<template>
  <div v-if="isLogged">
    <form @submit.prevent="submitFile">
      <input type="file" ref="file" />
      <input type="text" ref="caption" placeholder="Описание"/>
      <button type="submit">Загрузить Фото!</button>
    </form>
  </div>

  <div class="gallery-container">
    <div class="thumbnail">
      <div v-for="(item, index) in images" :key="index" @click="openImage(item.path)">
        <img :src='item.path' alt="Image" class="thumbnail">
        <p>{{ item.caption }}</p>
      </div>
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
      images: [
        // { path: require('@/assets/background.jpg'), caption: 'Описание 1' },
        // { path: require('@/assets/logo.png'), caption: 'Описание 2' },
        // { path: 'path/to/image3.jpg', caption: 'Описание 3' },
        // Добавьте другие изображения по аналогии
      ],
      selectedImage: null,
    };
  },
  computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    },
  },
  mounted() {
    // console.log(`the component is now mounted.`)
    this.readDataFromDb();
  },
  methods: {
    readDataFromDb() {
      const db = getDatabase();
      const picRef = dbRef(db, 'picData');
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

      const file = fileInput.files[0];

      if (file) {
        const storage = getStorage();
        const storageRef = ref(storage, 'gallery/' + file.name);

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
          const picRef = dbRef(db, 'picData');
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

<style scoped>
/* .thumbnail {
  width: 50cap;
  height: auto;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: 10px;
} */
.gallery-container {
  display: flex;
  flex-wrap: wrap;
}
.thumbnail {
  width: 100%; /* Используйте 100% ширины для гибкости */
  max-width: 200px; /* Максимальная ширина для каждой миниатюры */
  height: auto;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 10px; /* Добавьте отступ снизу для создания новой строки */
  box-sizing: border-box; /* Учтите padding и border в ширине элемента */
}

form {
  width: 100%;
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
