/*global kakao */
import React, { useEffect } from "react";
import "./Map.css";

// class Map extends React.Component {
//     render() {
//         useEffect(() => {
//             mapscript();
//         }, []);

//         const mapscript = () => {
//             let container = document.getElementById("map");
//             let options = {
//                 center: new kakao.maps.LatLng(35.216868, 126.8476921),
//                 level: 5,
//             };
//             //map
//             const map = new kakao.maps.Map(container, options);

//             //마커가 표시 될 위치
//             let markerPosition = new kakao.maps.LatLng(
//                 35.216868,
//                 126.8476921
//             );

//             // 마커를 생성
//             let marker = new kakao.maps.Marker({
//                 position: markerPosition,
//             });

//             // 마커를 지도 위에 표시
//             marker.setMap(map);
//         };
//         return (
//             <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
//         );
//     }
// }

// export default Map;



export default function Map() {

    useEffect(() => {
        mapscript();
    }, []);

    const mapscript = () => {
        let container = document.getElementById("map");
        let options = {
            center: new kakao.maps.LatLng(35.216868, 126.8476921),
            level: 5,
        };
        //map
        const map = new kakao.maps.Map(container, options);

        //마커가 표시 될 위치
        let markerPosition = new kakao.maps.LatLng(
            35.216868,
            126.8476921
        );

        // 마커를 생성
        let marker = new kakao.maps.Marker({
            position: markerPosition,
        });

        // 마커를 지도 위에 표시
        marker.setMap(map);
    };

    return <div id="map" style={{ width: "100vw", height: "100vh" }}></div>;
}