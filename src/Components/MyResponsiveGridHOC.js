import React from 'react';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
// import { Responsive, WidthProvider } from 'react-grid-layout';
//
// const ResponsiveGridLayout = WidthProvider(Responsive);

class MyResponsiveGridHOC extends React.Component {
    render() {
        // {lg: layout1, md: layout2, ...}
        var layouts = [
            {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
            {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
            {i: 'c', x: 4, y: 0, w: 1, h: 2}
        ];
        return (
            <div>
                <h2>MyResponsiveGridHOC</h2>
                <ResponsiveGridLayout className="layout" layouts={layouts}
                                      rowHeight={30}
                                      width={600}
                                      cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
                                      breakpoints={{ lg: 1350, md: 1050, sm: 768, xs: 480, xxs: 0 }}
                                      margin={[15, 10]}
                                      containerPadding={[0, 0]}
                                      autoSize={true}
                    // breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                    // cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
                >
                    <div key="a" className="div-style">1</div>
                    <div key="b" className="div-style">2</div>
                    <div key="c" className="div-style">3</div>
                </ResponsiveGridLayout>

            </div>
        )
    }
}

export default MyResponsiveGridHOC;