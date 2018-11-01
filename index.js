class TwoWayDataBinding {
    constructor() {
        this.scope = {};
        this.getAllModelAttribute();
    }
/**
 * get all the custom model attributes
 */
    getAllModelAttribute () {
        let elements = document.querySelectorAll("[sunny-model]");
        elements.forEach(element => {
            element.addEventListener("keyup", (event)=>{
                this.scope[element.getAttribute('sunny-model')] = element.value;
                this.bindProperty()
            });
        });
        
    }
/**
 * binding into view
 */
    bindProperty() {
        let bindElements = document.querySelectorAll('[sunny-bind]');
        bindElements.forEach( element => {
            for (const key in this.scope) {
                if(element.getAttribute('sunny-bind') === key) {
                    element.innerHTML = this.scope[key];
                }
            }
        })
    }
}


var  main = new TwoWayDataBinding();