            function updateCountdown() {
              var now = new Date();
              var currentHour = now.getHours();
              var currentMinute = now.getMinutes();
              var currentSecond = now.getSeconds();
              
              var remainingHours = 23 - currentHour;
              var remainingMinutes = 59 - currentMinute;
              var remainingSeconds = 59 - currentSecond;
              
   
              var timeString = remainingHours.toString().padStart(2, '0') + ':' +
                               remainingMinutes.toString().padStart(2, '0') + ':' +
                               remainingSeconds.toString().padStart(2, '0');
    
              document.getElementById('countdown').textContent = timeString;
            }
            setInterval(updateCountdown, 1000);
  

            var carousel = document.querySelector('#carouselExampleCaptions');
            var carouselInstance = new bootstrap.Carousel(carousel, {
              interval: 3000 
            });

            let pp1 = document.querySelector('.First')
function a1(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  var randomNumber = Math.floor(a1(1, 7)); 
  console.log(randomNumber);

  var one = document.getElementById("one");
  var two = document.getElementById("two");
  var three = document.getElementById("three");
  var four = document.getElementById("four");
  var five = document.getElementById("five");
  var six = document.getElementById("six");

if (randomNumber === 1) {
    one.style.display = "block";
}
if (randomNumber === 2) {
    two.style.display = "block";
}
if (randomNumber === 3) {
    three.style.display = "block";
}
if (randomNumber === 4) {
   four.style.display = "block";
}
if (randomNumber === 5) {
    five.style.display = "block";
}
if (randomNumber === 6) {
    six.style.display = "block";
}


let zminna1 = {
    data() {
        return {
          imgArr1: [
            { name: 'The Longines Avigation Bigeye 1.png', title: 'фото 1' },
            { name: 'The Longines Avigation Bigeye 2.png', title: 'фото 2' },
            { name: 'The Longines Avigation Bigeye 3.png', title: 'фото 3' },
            { name: 'The Longines Avigation Bigeye 4.png', title: 'фото 4' },
            { name: 'The Longines Avigation Bigeye 5.png', title: 'фото 5' },
            { name: 'The Longines Avigation Bigeye 6.png', title: 'фото 6' },
            { name: 'The Longines Avigation Bigeye 7.png', title: 'фото 7' },
           
        ],
            i1: 0,


        }
    },
    methods: {
        next() {
          this.i1++
         if( this.i1 > this.imgArr1.length-1){
            this.i1=0
         }
        },
        prev() {
           this.i1--
            if (this.i1 < 0) {
                this.i1 = this.imgArr1.length-1;
            }
        }
    },
}
Vue.createApp(zminna1).mount('.my-slider1')


let zminna2 = {
  data() {
      return {
        imgArr2: [
          { name: 'Flagship Heritage 1.png', title: 'фото 1' },
          { name: 'Flagship Heritage 2.png', title: 'фото 2' },
          { name: 'Flagship Heritage 3.png', title: 'фото 3' },
          { name: 'Flagship Heritage 4.png', title: 'фото 4' },
          { name: 'Flagship Heritage 5.png', title: 'фото 5' },
          { name: 'Flagship Heritage 6.png', title: 'фото 6' },
      ],
          i2: 0,


      }
  },
  methods: {
      next() {
        this.i2++
       if( this.i2 > this.imgArr2.length-1){
          this.i2=0
       }
      },
      prev() {
         this.i2--
          if (this.i2 < 0) {
              this.i2 = this.imgArr2.length-1;
          }
      }
  },
}
Vue.createApp(zminna2).mount('.my-slider2')


let zminna3 = {
    data() {
        return {
          imgArr3: [
            { name: 'HydroconQuest 1.png', title: 'фото 1' },
            { name: 'HydroconQuest 2.png', title: 'фото 2' },
            { name: 'HydroconQuest 3.png', title: 'фото 3' },
            { name: 'HydroconQuest 4.png', title: 'фото 4' },
            { name: 'HydroconQuest 5.png', title: 'фото 5' },
            { name: 'HydroconQuest 6.png', title: 'фото 6' },
            { name: 'HydroconQuest 7.png', title: 'фото 7' },
            { name: 'HydroconQuest 8.png', title: 'фото 8' },
            { name: 'HydroconQuest 9.png', title: 'фото 9' },
            { name: 'HydroconQuest 10.png', title: 'фото 10' },
            { name: 'HydroconQuest 11.png', title: 'фото 11' },
            { name: 'HydroconQuest 12.png', title: 'фото 12' },
            { name: 'HydroconQuest 13.png', title: 'фото 13' },

        ],
            i3: 0,
  
  
        }
    },
    methods: {
        next() {
          this.i3++
         if( this.i3 > this.imgArr3.length-1){
            this.i3=0
         }
        },
        prev() {
           this.i3--
            if (this.i3 < 0) {
                this.i3 = this.imgArr3.length-1;
            }
        }
    },
}
Vue.createApp(zminna3).mount('.my-slider3')


let zminna4 = {
    data() {
        return {
          imgArr4: [
            { name: 'Longines Dolcevita 1.png', title: 'фото 1' },
            { name: 'Longines Dolcevita 2.png', title: 'фото 2' },
            { name: 'Longines Dolcevita 3.png', title: 'фото 3' },
            { name: 'Longines Dolcevita 4.png', title: 'фото 4' },
   
        ],
            i4: 0,
  
  
        }
    },
    methods: {
        next() {
          this.i4++
         if( this.i4 > this.imgArr4.length-1){
            this.i4=0
         }
        },
        prev() {
           this.i4--
            if (this.i4 < 0) {
                this.i4 = this.imgArr4.length-1;
            }
        }
    },
}
Vue.createApp(zminna4).mount('.my-slider4')