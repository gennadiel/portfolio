<template>
    <div class="loading-screen">
      <div class="spinner">
      <img src="@/assets/palette.png" alt="spinner" id="img">
      </div>
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
  
  #img{
    width: 30vw;
    height: 30vw;
  }

  .spinner {
   
    animation-name: rotate;
    animation-duration: 1500ms;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
  }
  @keyframes rotate {
    from {
        transform: rotate(360deg);
    }

    to {
        transform: rotate(0deg);
    }
}
  </style>
  