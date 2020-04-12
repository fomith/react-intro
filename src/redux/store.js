import contentPageReducer from "./contentPage-reducer";
import dialogPageReducer from "./dialogPage-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        contentPage: {
            postsData: [
                { id: 1, message: "GПsdривет ", LikesKount: 17, userId: 1 },
                { id: 2, message: "Как дела?", LikesKount: 0, userId: 1 },
                { id: 3, message: "Тестовая запись", LikesKount: 22, userId: 1 },
                { id: 4, message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis asperiores iste aliquid veniam sed nihil provident dignissimos cum nam? Dignissimos adipisci ratione sit odio quasi deserunt doloremque corrupti soluta nesciunt, eum provident maxime iste voluptate totam. Natus eum nemo, aliquid asperiores, error harum voluptates consequuntur, cupiditate aliquam non sit officiis incidunt ullam sint ut! Eius quidem quis nulla provident ab sint ducimus molestias facere possimus cum aliquam sit, asperiores cumque hic suscipit obcaecati autem assumenda. Placeat vero fuga quia inventore totam, voluptatem voluptatum, nam quis laudantium vel aspernatur quas dolorum pariatur recusandae non. Tenetur, ipsum omnis accusantium ullam voluptatum debitis?", LikesKount: 17, userId: 1 },
                { id: 5, message: "GПривет", LikesKount: 77, userId: 1 },
                { id: 6, message: "asdasdasdasd", LikesKount: 99, userId: 1 }
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: "Димыч" },
                { id: 2, name: "Линыч" },
                { id: 3, name: "Сержич" },
                { id: 4, name: "Сашич" },
                { id: 5, name: "Мишич" },
                { id: 6, name: "Бусич" }
            ],
            messageData: [
                { id: 2, message: "GПривет" },
                { id: 2, message: "Как дела?" },
                { id: 1, message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis asperiores iste aliquid veniam sed nihil provident dignissimos cum nam? Dignissimos adipisci ratione sit odio quasi deserunt doloremque corrupti soluta nesciunt, eum provident maxime iste voluptate totam. Natus eum nemo, aliquid asperiores, error harum voluptates consequuntur, cupiditate aliquam non sit officiis incidunt ullam sint ut! Eius quidem quis nulla provident ab sint ducimus molestias facere possimus cum aliquam sit, asperiores cumque hic suscipit obcaecati autem assumenda. Placeat vero fuga quia inventore totam, voluptatem voluptatum, nam quis laudantium vel aspernatur quas dolorum pariatur recusandae non. Tenetur, ipsum omnis accusantium ullam voluptatum debitis?" },
                { id: 2, message: "Йоу" },
                { id: 2, message: "Йоу" },
                { id: 2, message: "Йоу" }
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    _callsubscriber() {
        console.log('Попытка изменения стора')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callsubscriber = observer;
    },

    dispatch(action) {
        this._state.contentPage = contentPageReducer(this._state.contentPage, action);
        this._state.dialogsPage = dialogPageReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callsubscriber(this._state);
    }
};


export default store;
window.store = store;