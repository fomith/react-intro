const ADD_MESSAGE = "ADD-MESSAGE"
const CHANGE_TEXT_MESSAGE_POST = "CHANGE-TEXT-MESSAGE-POST";

let initState =  {
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
};


const dialogPageReducer = (state = initState, action) => {
    
    if (action.type === ADD_MESSAGE) {
        let newMessage = {
            id: 5,
            message: state.newMessageText,
        };
        state.messageData.push(newMessage);
        state.newMessageText = '';

    } else if (action.type === CHANGE_TEXT_MESSAGE_POST) {
        state.newMessageText = action.message;
    };

    return state;
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const onMessageChangeActionCreator = (text) => ({
    type: CHANGE_TEXT_MESSAGE_POST,
    message: text
});

export default dialogPageReducer;