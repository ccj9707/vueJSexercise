Vue.component('sibling-component',{
  template: '<p>{{propsdata}}</p>',
  props:['propsdata']
});

Vue.component('child-component',{
  props:['propsdata'],
  template: '<p>{{propsdata}}</p>'
});

let app = new Vue({
  el: '#app',
  data:{
    message: 'Hello Vue! passed from Parent Component',
    anotherMessage: 'Hello Vue! another Message.'
  }
})
