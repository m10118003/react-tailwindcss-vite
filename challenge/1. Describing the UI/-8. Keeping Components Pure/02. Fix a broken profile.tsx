import React from 'react';
import Panel from '../../../src/components/Panel.tsx';
import { getScientistsImgUrl } from '../../../src/utils/imageUrlUtil.js';

// let currentPerson; 不要在 function/全域 外寫一個預先存在的變數 currentPerson, 這會讓 <Header /> 和 <Avatar /> 讀到, 而且會使 <Profile /> 內難以預測

export default function App() {
    return (
        <>
            {/* 這邊在父層傳入 person{...} */}
            <Profile person={{
                imageId: 'lrWQx8l',
                name: 'Subrahmanyan Chandrasekhar',
            }} />
            <Profile person={{
                imageId: 'MK3eW3A',
                name: 'Creola Katherine Johnson',
            }} />
        </>
    )
}

// 根據 Prue components/function 的概念, 這邊只接收 person
function Profile({ person }) {
    // currentPerson = person; 同樣, 不要在這將變數轉存
    return (
        <Panel>
            {/* <Header /> 要接收 props*/}
            <Header person={person} />
            {/* <Avatar /> 要接收 props*/}
            <Avatar person={person} />
        </Panel>
    )
}

// 根據 Prue components/function 的概念, 這邊只接收 person, 並顯示 person.name
function Header({ person }) {
    return <h1>{person.name}</h1>;
}

// 根據 Prue components/function 的概念, 這邊只接收 person{...} 內的值
function Avatar({ person }) {
    return (
        <img
            className="avatar"
            src={getScientistsImgUrl(person)}
            alt={person.name}
            width={50}
            height={50}
        />
    );
}
