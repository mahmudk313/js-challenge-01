class printData {
    prevList;

    constructor(options) {
        this.setupOptions(options);
    }

    setupOptions (options) {
        let {element , data , template} = options;
        console.log(data)
        data.forEach(item => element.innerHTML += template(item));
    }



}