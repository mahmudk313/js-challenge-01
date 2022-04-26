class printData {

    constructor(options) {
        this.setupOptions(options);
    }

    setupOptions (options) {
        let {element , data , template} = options;
        console.log(data)
        element.innerHTML += template(data);
    }


    
}