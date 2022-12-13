let vm = Vue.createApp({
    data() {
        return {
            content: '5 Items Remaining!',
            item_1: false,
            item_2: false, 
            item_3: false,
            item_4: false,
            item_5: false,
            click_count: 0
        }
    },

    methods: {
        processFour: function (event) {
          
            if(5 - this.click_count > 0){
                this.content = (5 - this.click_count - 1) + " items remaining!"
            }

            this.click_count ++;
            
            if(this.click_count == 1){
                this.item_1 = true;
            }else if(this.click_count == 2){
                this.item_2 = true;
            }else if(this.click_count == 3){
                this.item_3 = true;
            }else if(this.click_count == 4){
                this.item_4 = true;
            }else if(this.click_count == 5){
                this.item_5 = true;
            }else if(this.click_count > 5){
                this.content = "Thanks for checking out the entire list!"
                this.click_count = 0;
                this.item_1 = false; 
                this.item_2 = false;
                this.item_3 = false;
                this.item_4 = false;
                this.item_5 = false;
            }
        }
      }
    
}).mount('#app');


