import React, { Component } from 'react';
import  { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch'

class ElasticSearch extends Component {
    render() {
        return (
            <div className="">
                <h1>Hello Elastic search</h1>
                <section className="container">
                    <ReactiveBase
                        app="gitxplore-app"
                        credentials="4oaS4Srzi:f6966181-1eb4-443c-8e0e-b7f38e7bc316"
                        // type="gitxplore-latest"
                        // theme={theme}
                    >
                        <nav className="navbar">
                            <div className="title">GitXplore</div>
                        </nav>
                    </ReactiveBase>
                </section>
            </div>
        );
    }
}

export default ElasticSearch;
