import React from "react";
import "./kakaomap.css";
import Map from "../components/map/Map";

class KakaoMap extends React.Component {

    render() {
        return (
            <div>
                <iframe src="http://192.168.0.100:8081/">
                </iframe>
                < div className="kakaomap" >
                    <Map />
                </div >
            </div>
        );
    }
}

export default KakaoMap;