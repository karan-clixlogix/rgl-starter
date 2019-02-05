import React from 'react';
import ReactGridLayout, { createDragApiRef } from 'react-grid-layout';
import  './../../node_modules/react-grid-layout/css/styles.css'
import  './../../node_modules/react-resizable/css/styles.css'

class MySecondGrid extends React.Component {
    constructor(props){
        super(props);
        console.log("==constructor==")
    }
    dragApi = createDragApiRef();

    componentDidMount() {
        console.log("==componentDidMount==")
    }

    getPosition = (node) => {
        console.log("==getPosition=")
        const x = node.x
        const y = node.y
        console.log("==x, Y == ", x, y)
        if( x === undefined && y === undefined) {
            console.log("==undefine==")
        } else {
            console.log("==defined==")
            return ( {x, y})
        }
    }

    inViewport = (x, y) => {
        // console.log("==x, y==", x, y)
        if(x<10 && y<10 ) {
            // console.log("==if==")
            return true
        } else {
            // console.log("==else==")
            return false
        }

    }

    onDrag = (event, node ) => {
        // console.log("==onDrag event==", event)
        // console.log("==onDrag event.target==", event.target)
        // console.log("==onDrag node==", node)
        // const x = 5
        // const y = 3
        // if( this.dragApi.value) {
        //     console.log("==dragApi==", this.dragApi)
        //     const { x, y } = this.getPosition(node);
        //     if (this.inViewport(x, y)) {
        //     // if (true) {
        //         this.dragApi.value.dragIn({ i: node.i, w: node.w, h: node.h, node: event.target, position: { x, y }, event });
        //     } else {
        //         this.dragApi.value.dragOut({ position: { x, y }, event });
        //     }
        // }
    }

    onDragStop = (event, node ) => {
        // console.log("==onStopDrag event==", event)
        // console.log("==onStopDrag node==", node)
        if (this.dragApi.value) {
            // console.log("==dragApi==", this.dragApi)
            this.dragApi.value.stop({ position: this.getPosition(node), event });
        }
    }

    handleLayoutChange = () => {
        console.log("==handleLayoutChange==")
    }

    onBreakpointChange = () => {
        console.log("==onBreakpointChange==")
    }

    render() {
        var layout = [
            {i: 'a', x: 0, y: 0, w: 1, h: 2},
            {i: 'b', x: 1, y: 0, w: 1, h: 2},
            {i: 'c', x: 2, y: 0, w: 1, h: 2},
            {i: '1', x: 3, y: 0, w: 1, h: 2},
            {i: '2', x: 4, y: 0, w: 1, h: 2},
            {i: '3', x: 5, y: 0, w: 1, h: 2},
        ];
        var divStyle = {
            border: "1px solid #000",
            backgroundColor: "#e3e3e3"
        }
        return(
            <div>
                <ReactGridLayout layout={layout}
                                 className="rgl-style-1"
                                 cols={12}
                                 rowHeight={30}
                                 width={300}
                                 margin={[40, 40]}
                                 containerPadding={[40, 40]}
                                 onLayoutChange={this.handleLayoutChange}
                                 onBreakpointChange={this.onBreakpointChange}
                                 dragApiRef={this.dragApi}
                                 onDrag={this.onDrag}
                                 onDragStop={this.onDragStop} >
                    <div key='a' style={divStyle}>a</div>
                    <div key='b' style={divStyle}>b</div>
                    <div key='c' style={divStyle}>c</div>
                    <div key='1' style={divStyle}>1</div>
                    <div key='2' style={divStyle}>2</div>
                    {/*<div key='3' style={divStyle}>3</div>*/}
                </ReactGridLayout>
                <ReactGridLayout layout={layout}
                                 cols={12}
                                 className="rgl-style-2"
                                 rowHeight={30}
                                 width={1200}
                                 margin={[40, 40]}
                                 containerPadding={[40, 0]} dragApiRef={this.dragApi} >
                    <div key='a' style={divStyle}>d</div>
                    <div key='b' style={divStyle}>e</div>
                    <div key='c' style={divStyle}>f</div>
                </ReactGridLayout>
            </div>
        )
    }
}

export default MySecondGrid;