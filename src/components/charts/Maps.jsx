/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
// import { Form, Icon, Input, Button, Checkbox } from 'antd';

import { dojoRequire } from 'esri-loader';
import EsriLoader from 'esri-loader-react';

// const FormItem = Form.Item;

class Maps extends React.Component {
    createMap = () => {
        dojoRequire(['esri/Map', 'esri/views/MapView'], (Map, MapView) => {
            new MapView({
                container: this.mapContainer,
                map: new Map({basemap: 'topo'})
            })
        });
    }

    render() {
        const options = {
            url: 'https://js.arcgis.com/4.5/'
        };

        return (
            <div className="App">
                <EsriLoader options={options} ready={this.createMap} />
                <div ref={node => this.mapContainer = node} className='map-view'></div>
            </div>
        );
    }
}

export default Maps;
