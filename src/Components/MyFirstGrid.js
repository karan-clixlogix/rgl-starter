import React, { Component } from 'react';
import ReactGridLayout, { createDragApiRef }  from 'react-grid-layout';
import  './../../node_modules/react-grid-layout/css/styles.css'
import  './../../node_modules/react-resizable/css/styles.css'

class MyFirstGrid extends Component {
    constructor(props){
        super(props);
        this.state = {
            moveX: '',
            moveY: '',

        }
    }
    dragApi = createDragApiRef();

    getPosition = ( node ) => {
        console.log("==getPosition node==",node)

        const x = node.x
        const y = node.y
        // console.log("==nodex",node.x)
        // console.log("==nodeY",node.y)
        return  ({x, y})
    }

    inViewport = (evt) => {
        console.log("==evt==", evt)
    }

    onDrag = (event, node) => {
        // console.log("==onDrag==", event)
        if (this.dragApi.value) {
            console.log("==this.dragApi==", this.dragApi)
            console.log("== event ==", event)
            // console.log("== event ==", event.target)
            console.log("== node ==", node)
            // console.log("== node ==", node.x)
            // console.log("== node ==", node.y)
            const { x, y } = this.getPosition(node);
            console.log("==x, y ==", x, y)
            // if (this.inViewport(x, y)) {
            if (true) {
                console.log("==inViewport IF==")
                this.dragApi.value.dragIn({ i: 'id', w: 2, h: 2, node: event.target, position: { x, y }, event });
            } else {
                console.log("==inViewport else==")
                this.dragApi.value.dragOut({ position: { x, y }, event });
            }
        }
    };
    onDragStop = (event, node) => {
        console.log("==onDrag stop==", event)
        console.log("==onDrag stop==", node)
        if (this.dragApi.value) {
            this.dragApi.value.stop({ position: this.getPosition(node), event });
        }
    };

    componentDidMount() {
        console.log("==componentDidMount==")
        console.log("==this.dragApi==", this.dragApi.value)
    }
    render() {
        var layout = [
            {i: 'a', x: 0, y: 0, w: 1, h: 2},
            {i: 'b', x: 1, y: 0, w: 1, h: 2},
            {i: 'c', x: 2, y: 0, w: 1, h: 2}
        ];
        var divStyle = {
            border: "1px solid #000",
            backgroundColor: "#e3e3e3"
        }
        console.log("==this.dragApi==", this.dragApi)
        return (
            <div>
                <ReactGridLayout layout={layout} cols={12} rowHeight={50} width={1200} dragApiRef={this.dragApi} onDrag={this.onDrag}  onDragStop={this.onDragStop} >
                    <div key='a' style={divStyle}>a</div>
                    <div key='b' style={divStyle}>b</div>
                    <div key='c' style={divStyle}>c</div>
                </ReactGridLayout>
                {/*{...}*/}
                {/*<ReactGridLayout layout={layout} cols={12} rowHeight={50} width={1200} dragApiRef={this.dragApi}  >*/}
                <ReactGridLayout layout={layout} cols={12} rowHeight={50} width={1200} >
                    <div key='a' style={divStyle}>d</div>
                    <div key='b' style={divStyle}>e</div>
                    <div key='c' style={divStyle}>f</div>
                </ReactGridLayout>
            </div>
        );
    }
}

export default MyFirstGrid;
