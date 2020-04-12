const ADD_POST = "ADD-POST";
const CHANGE_TEXT_NEW_POST = "CHANGE-TEXT-NEW-POST";

let initState =   {
    userData: [
        { userId: 1, name: "Дмитрий ", lastName: "Фамильян", avatar: 2 },
        { userId: 2, name: "Ваня", lastName: "Куцен", avatar: 1 },
        { userId: 3, name: "Валя", lastName: "Икар", avatar: 1 },
        { userId: 4, name: "Зина", lastName: "Макар", avatar: 1 },
        { userId: 5, name: "GПривет", lastName: "ЙоЙё", avatar: 1 },
        { userId: 6, name: "asdasdasdasd", lastName: "asd", avatar: 1 }
    ],
    postsData: [
        { id: 1, message: "GПsdривет ", LikesKount: 17, userId: 2 },
        { id: 2, message: "Как дела?", LikesKount: 0, userId: 4 },
        { id: 3, message: "Тестовая запись", LikesKount: 22, userId: 1 },
        { id: 4, message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis asperiores iste aliquid veniam sed nihil provident dignissimos cum nam? Dignissimos adipisci ratione sit odio quasi deserunt doloremque corrupti soluta nesciunt, eum provident maxime iste voluptate totam. Natus eum nemo, aliquid asperiores, error harum voluptates consequuntur, cupiditate aliquam non sit officiis incidunt ullam sint ut! Eius quidem quis nulla provident ab sint ducimus molestias facere possimus cum aliquam sit, asperiores cumque hic suscipit obcaecati autem assumenda. Placeat vero fuga quia inventore totam, voluptatem voluptatum, nam quis laudantium vel aspernatur quas dolorum pariatur recusandae non. Tenetur, ipsum omnis accusantium ullam voluptatum debitis?", LikesKount: 17, userId: 1 },
        { id: 5, message: "GПривет", LikesKount: 77, userId: 1 },
        { id: 6, message: "asdasdasdasd", LikesKount: 99, userId: 1 },
        { id: 1, message: "Вася ", LikesKount: 17, userId: 2 },
        { id: 2, message: "Как дела?", LikesKount: 0, userId: 2 },
        { id: 3, message: "Тестовая запись", LikesKount: 22, userId: 2 },
        { id: 4, message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis asperiores iste aliquid veniam sed nihil provident dignissimos cum nam? Dignissimos adipisci ratione sit odio quasi deserunt doloremque corrupti soluta nesciunt, eum provident maxime iste voluptate totam. Natus eum nemo, aliquid asperiores, error harum voluptates consequuntur, cupiditate aliquam non sit officiis incidunt ullam sint ut! Eius quidem quis nulla provident ab sint ducimus molestias facere possimus cum aliquam sit, asperiores cumque hic suscipit obcaecati autem assumenda. Placeat vero fuga quia inventore totam, voluptatem voluptatum, nam quis laudantium vel aspernatur quas dolorum pariatur recusandae non. Tenetur, ipsum omnis accusantium ullam voluptatum debitis?", LikesKount: 17, userId: 2 },
        { id: 5, message: "Паша", LikesKount: 77, userId: 3 },
        { id: 6, message: "asdasdasdasd", LikesKount: 99, userId: 3 }
    ],
    newPostText: ''
};

const contentPageReducer = (state = initState, action) => {
    
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostText,
            LikesKount: 0,
            userId: 1
        };
        state.postsData.unshift(newPost);
        state.newPostText = '';


    } else if (action.type === CHANGE_TEXT_NEW_POST) {
        state.newPostText = action.message;
    };

    return state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const onPostChangeActionCreator = (text) => ({
    type: CHANGE_TEXT_NEW_POST,
    message: text
});

export default contentPageReducer;