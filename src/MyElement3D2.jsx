import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function MyElement3D2(){
    const refMesh = useRef();

    useFrame((state,delta)=>{
        refMesh.current.rotation.z += delta
    })


    return(
        <>
        <directionalLight position={[1,1,1]} />

        {/* 3차원 축 => 월드 좌표계 */}
        <axesHelper scale={10} />

        {/* npm install @react-three/drei  ** 드레이 라이브러리 설치필요 **/}
        {/* 마우스 컨트롤 가능 x빨강, y초록, z파랑 */}
        <OrbitControls />

        <mesh ref={refMesh}
        // position={[0,2,0]}>
        position-y={2}
        //y 축으로 45도 회전 (반시계방향으로 회전)

        // 위에 THREE 임포트 해주고 문법 수정가능
        rotation-z={THREE.MathUtils.degToRad(45)}
        // rotation={[0, 45 * Math.PI/180, 0]}
        scale={[2,1,1]}
        >
            <boxGeometry />
            <meshStandardMaterial color="#e67e22" opacity={0.5} transparent={true} />

            {/* 모델에 대한 각도계 표시 */}
            <axesHelper />

            {/* 부모를 기준으로 적용 */}
            <mesh
                scale={[0.1,0.1,0.1]}
                position-y={2}
            >
                <sphereGeometry />
                {/* 재질 - 빨강 */}
                <meshStandardMaterial color={`red`} />
                <axesHelper scale={5} />
            </mesh>
        </mesh>
        </>
    )
}

export default MyElement3D2;