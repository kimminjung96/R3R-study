import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function MyElement3D(){
    const refMesh = useRef();

    useFrame((state, delta) => {
        refMesh.current.rotation.y += delta
    })

    return(
        <>
        <directionalLight position={[1,1,1]} />
        {/* 조명 x,y,z */}


        {/* 파이/180 =>라디안 단위?? */}
        <mesh ref={refMesh} rotation={[0, 45*Math.PI/180, 0]}> {/* 렌더링할 3차원 모델 = mesh */}
            <boxGeometry />
            <meshStandardMaterial color="#e67e22" />
        </mesh>
        </>
    )
}

export default MyElement3D;