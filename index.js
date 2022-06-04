const app = Vue.createApp();

app.component('card',{
  props:['first'],
  template:` 
  <div class="card">
    <div class="card-container">
      <h2 class="card-title">{{first}}</h2>
      <p class="card-text" v-for="second in 9">{{first}} x {{second}} = {{first * second}}</p>
    </div>
  </div>`
})

app.mount("#app");
