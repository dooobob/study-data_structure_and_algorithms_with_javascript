class Dictionary {
    constructor() {
        this.datastore = new Array();
        this.add = add;
        this.find = find;
        this.remove = remove;
        this.showAll = showAll;
        this.count = count;
        this.clear = clear;

        function add(key, value) {
            this.datastore[key] = value;
        }

        function find(key) {
            return this.datastore[key];
        }

        function remove(key) {
            delete this.datastore[key];
        }

        function showAll() {
            Object.keys(this.datastore).sort().forEach(key => {
                console.log(key + " -> " + this.datastore[key]);
            });
        }

        function count() {
            var n = 0;
            Object.keys(this.datastore).forEach(key => {
                ++n;
            });
            return n;
        }

        function clear() {
            Object.keys(this.datastore).forEach(key => {
                delete this.datastore[key];
            });
        }
    }
}

module.exports = Dictionary;