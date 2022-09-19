Vue.component('temp', {
  template: '<div><p>${text}</p><button @click="on_click">press</button></div>',
  delimiters: ['${','}'],
  data: function(){
    return {
      text: 'Press the below button'
    }
  },
  methods: {
    on_click: function() {
      alert('Hi');
    }
  }
});
const template = {
  template: '<div><p>${text}</p><button @click="on_click">press</button></div>',
  delimiters: ['${','}'],
  data: function(){
    return {
      text: 'Press the below button'
    }
  },
  methods: {
    on_click: function() {
      alert('Hi');
    }
  }
};
new Vue({
   el:'#some',
   template:'<temp>'
});
new Vue({
  el:'#something',
  'promptcomponent':template
});
 
