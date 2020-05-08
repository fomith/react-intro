const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initState = {
  userData: [
    { UserId: 1, FirstName: "Димыч", LastName: "sdfsdfsdf" , Location: {Sity: "Minsk", Country: "Belarus"}, follow: true},
    { UserId: 2, FirstName: "Линыч", LastName: "sdfsdfsdf" , Location: {Sity: "Minsk", Country: "Belarus"}, follow: true},
    { UserId: 3, FirstName: "Сержич", LastName: "sdfsdfsdf" , Location: {Sity: "Minsk", Country: "Belarus"}, follow: true},
    { UserId: 4, FirstName: "Сашич", LastName: "sdfsdfsdf" , Location: {Sity: "Minsk", Country: "Belarus"}, follow: true},
    { UserId: 5, FirstName: "Мишич", LastName: "sdfsdfsdf" , Location: {Sity: "Minsk", Country: "Belarus"}, follow: true},
    { UserId: 6, FirstName: "Бусич", LastName: "sdfsdfsdf" , Location: {Sity: "Minsk", Country: "Belarus"}, follow: true},
  ],
};

const UserPageReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const follow = (text) => ({
  type: FOLLOW,
  id: text,
});

export const unfollow = (text) => ({
  type: UNFOLLOW,
  id: text,
});

export default UserPageReducer;
