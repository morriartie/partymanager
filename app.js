// demo data
var torreData = {name:'grupos',
                children:[{name:'torre 0F (9h)',party:true,children:[{name:'moriartie',party:false},{name:'linnoro',party:false}]},]
}

// define the tree-item component
Vue.component('tree-item', {
  template: '#item-template',
  props: {
    item: Object
  },
  data: function () {
    return {
      isOpen: false
    }
  },
  computed: {
    isFolder: function () {
      return this.item.children &&
        this.item.children.length
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    },
    makeFolder: function () {
      if (!this.isFolder) {
      	this.$emit('make-folder', this.item)
        this.isOpen = true
      }
    }
  }
})

// boot up the demo
var demo = new Vue({
  el: '#demo',
  data: {
    torreData: torreData
  },
  methods: {
    addParty: function (item) {
      item.children.push({
        name: 'Torre XF 12:00',party:true,children:[{name:'moriartie',party:false}]
      })
    },
  	addMember: function (item) {
      // em vez de adicionar diretamente um filho
      // verificar se esse "+" esta no nivel 1 ou 2
      //
      // se estiver no nivel 2, pedir ao usuario nome do char e classe
      // e enviar uma request pedindo a tree atualizada
      //
      // se estiver no nivel 2, pedir ao usuario nome da pt e hora
      // e enviar uma request pedindo a tree atualizada
    	//
      // remover isso 
      item.children.push({
        name: '<nome> <classe>',
        party:false
      })
      // ate aqui
    }
  }
})

