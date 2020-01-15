class Graph {
    constructor(v) {
        this.vertices = v;
        this.vertexList = [];
        this.edges = 0;
        this.adj = [];
        for (var i = 0; i < this.vertices; ++i) {
            this.adj[i] = [];
            // this.adj[i].push("");
        }
        this.addEdge = addEdge;
        this.showGraph = showGraph;
        this.dfs = dfs;
        this.bfs = bfs;
        this.marked = [];
        this.edgeTo = [];
        this.pathTo = pathTo;
        this.hasPathTo = hasPathTo;
        this.topSortHelper = topSortHelper;
        this.topSort = topSort;


        for (var i = 0; i < this.vertices; ++i) {
            this.marked[i] = false;
        }

        function addEdge(v, w) {
            this.adj[v].push(w);
            this.adj[w].push(v);
            this.edges++;
        }

        // function showGraph() {
        //     var str = '';
        //     for (var i = 0; i < this.vertices; ++i) {
        //         str += i + ' -> ';
        //         for (var j = 0; j < this.vertices; ++j) {
        //             if (this.adj[i][j] != undefined)
        //                 str += this.adj[i][j] + ' ';
        //         }
        //         str += '\r\n';
        //     }
        //     console.log(str);
        // }

        function showGraph() {
            var str = '';
            for (var i = 0; i < this.vertices; ++i) {
                str += this.vertexList[i] + ' -> ';
                for (var j = 0; j < this.vertices; ++j) {
                    if (this.adj[i][j] != undefined)
                        str += this.vertexList[this.adj[i][j]] + '     ';
                }
                str += '\r\n';
            }
            console.log(str);
        }

        function dfs(v) {
            this.marked[v] = true;
            if (this.adj[v] != undefined) {
                console.log("Visited vertex: " + v);
            }

            this.adj[v].forEach(w => {
                if (!this.marked[w]) {
                    this.dfs(w);
                }
            });
        }

        function bfs(s) {
            var queue = [];
            this.marked[s] = true;
            queue.push(s); // add to back of queue

            while (queue.length > 0) {
                var v = queue.shift(); // remove from front of queue
                if (v != undefined) {
                    console.log("Visited vertex: " + v);
                    this.adj[v].forEach(w => {
                        if (!this.marked[w]) {
                            this.edgeTo[w] = v;
                            this.marked[w] = true;
                            queue.push(w);
                        }
                    });
                }
            }
        }

        function pathTo(source, destination) {
            this.bfs(source);
            if (!this.hasPathTo(destination)) {
                return undefined;
            }
            var path = [];
            for (var i = destination; i != source; i = this.edgeTo[i]) {
                path.push(i);
            }
            path.push(source);
            return path.reverse().join('-');
        }

        function hasPathTo(v) {
            return this.marked[v];
        }

        function topSort() {
            var stack = [];
            var visited = [];
            for (var i = 0; i < this.vertices; i++) {
                visited[i] = false;
            }
            for (var i = 0; i < this.vertices; i++) {
                if (visited[i] == false) {
                    this.topSortHelper(i, visited, stack);
                }
            }
            for (var i = 0; i < stack.length; i++) {
                if (stack[i] != undefined) {
                    console.log(this.vertexList[stack[i]]);
                }
            }
        }

        function topSortHelper(v, visited, stack) {
            visited[v] = true;

            this.adj[v].forEach(w => {
                if (!visited[w]) {
                    this.topSortHelper(w, visited, stack);
                }
            });
            stack.push(v);
        }
    }
}

class Vertex {
    constructor(label) {
        this.label = label;
    }
}

module.exports = {
    Graph: Graph,
    Vertex: Vertex
}