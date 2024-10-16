const carrosselContainer = document.querySelector('.carrossel');
const carrosselControlsContainer = document.querySelector('.carrossel-controls');
const carrosselControls = ['previous', 'next'];
const carrosselItens = document.querySelector('.carrossel-item');

class Carousel {

    constructor(container, itens, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...itens];
    }

    updateCarrossel() {
        this.carouselArray.forEach(el => {
            el.classList.remove('another-topic1');
        });

        this.carouselArray.slice(0, 3).forEach((el, i) => {
            el.classList.add(`carrossel-item-${i + 1}`);
        });
    }
    setCurrentState(direction) {
        if (direction.className == 'carrrossel-controls-previous') {
            this.carouselArray.unshift(this.carouselArray.pop());
        }
        else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateCarrossel();
    }

    setControls() {
        this.carouselControls.forEach(control => {
            carrosselControlsContainer.appendChild(document.createElement('button')).className = `carrossel-controls-${control}`;
            document.querySelector(`.carrossel-controls-${control}`).innerText = control;
        })

    }

    useControls(){
        const triggers = [...carrosselControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            })
        })
    }
}

const exampleCarousel = new Carousel(carrosselContainer,carrosselControls, carrosselItens);

exampleCarousel.setControls();
exampleCarousel.useControls();


/* .carrossel-control {
  display: flex;
  justify-content: center;
  margin: 25px 0;
  height: 100px;
}

.carrossel-control button {
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-size: 30px;
  margin: 0 50px;
  padding: 0 12px;
  text-transform: capitalize;
}

.carrossel-control-button:focus {
  outline: none;
}

.carrossel-control-previous {
  position: relative;
}

.carrossel-control-previous::before,
.carrossel-control-next::before {
  border: 1px solid;
  border-width: 0 5px 5px 0;
  content: '';
  display: inline-block;
  height: 5px;
  left: -30px;
  padding: 10px;
  position: absolute;
  top: 25%;
  transform: rotate(135deg) translateY(-50%);
  transition: left 0.35s ease-in-out;
  width: 5px;
}

.carrossel-control-previous:hover::before {
  left: -40%;
}

.carrossel-control-next::before {
  transform: rotate(-45deg) translateY(-50%);
  transition: right 0.35s ease-in-out;
}

.carrossel-nav {
  bottom: -15px;
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  position: absolute;
  width: 100%;
}

.carrossel-nav li {
  background-color: #ccc;
  border-radius: 50%;
  height: 10px;
  margin: 0 16px;
  width: 10px;
}

.carrossel-nav li.carrossel-item-selected {
  background: #555;
} */