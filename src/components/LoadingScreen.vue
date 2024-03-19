<template>
    <div class="loading-screen">
      <div class="spinner"></div>
      <p>Пожалуйста, подождите, идет загрузка...</p>
    </div>
  </template>
  
  <style scoped>
  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8); /* Прозрачный фон */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .spinner {
    /* Ваша анимация загрузки или спиннер */
  }
  </style>
  