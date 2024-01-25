import React from 'react';
export default function StoryTray({ stories }) {
    // 這個 calling push() 在接收 prop / stories array, 會改變(mutating) obj 並在開始渲染 StoryTray 之前被創造, 將造成 bug 和難以預測
    // stories.push({
    //   id: 'create',
    //   label: 'Create Story'
    // });

    // 簡單的修法是不要做 array, 和分開來渲染 Crrate Story
    return (
        <ul>
            {stories.map(story => (
                <li key={story.id}>
                    {story.label}
                </li>
            ))}
        </ul>
    );
}

// 這是藉由 local mutate 和使渲染的 function pure
// 如果要改變任何 array 內已存的 items, clone 這些 items 會較為安全
// 例如 push(), pop(), reverse() 和 sort() 會改變/mutate 原始的 array, 但 slice, filter 和 map 則會複製/創造一份新的 array
export function StoryTray2({ stories }) {

    // 可以在 push 物品進去前, 藉由淺拷貝 stories 來造出一個新的 array
    const createStories = stories.slice();
    // 也可以使用 ES6 語法做淺拷貝 const createStories = [...stories];
    createStories.push({
        id: 'create',
        label: 'Create Story'
    })

    return (
        <ul>
            {createStories.map(story => (
                <li key={story.id}>
                    {story.label}
                </li>
            ))}
        </ul>
    )
}
