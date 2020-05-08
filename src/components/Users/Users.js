import React from "react";
import User from "./User/User";

const Users = (props) => {
  if (props.data.length === 0) {
    props.addusers([
      {
        UserId: 1,
        FirstName: "Димыч",
        LastName: "Фоменко",
        status: "Привет. 1 запись",
        Location: { Sity: "Minsk", Country: "Belarus" },
        follow: false,
      },
      {
        UserId: 2,
        FirstName: "Линыч",
        LastName: "Янкова",
        status: "Привет. 2 запись",
        Location: { Sity: "Minsk", Country: "Belarus" },
        follow: true,
      },
      {
        UserId: 3,
        FirstName: "Сержич",
        LastName: "Непонятный",
        status: "Привет. 3 запись",
        Location: { Sity: "Minsk", Country: "Belarus" },
        follow: false,
      },
      {
        UserId: 4,
        FirstName: "Сашич",
        LastName: "Понятный",
        status: "Привет. 4 запись",
        Location: { Sity: "Minsk", Country: "Belarus" },
        follow: true,
      },
      {
        UserId: 5,
        FirstName: "Мишич",
        LastName: "Просто",
        status: "Привет. 5 запись",
        Location: { Sity: "Minsk", Country: "Belarus" },
        follow: true,
      },
      {
        UserId: 6,
        FirstName: "Бусич",
        LastName: "Любимыч",
        status: "Привет. 6 запись",
        Location: { Sity: "Minsk", Country: "Belarus" },
        follow: true,
      },
    ]);
  }

  const UsersMap = props.data.map((a) => {
    return (
      <User
        UserId={a.UserId}
        FirstName={a.FirstName}
        LastName={a.LastName}
        status={a.status}
        Location={a.Location}
        sub={a.follow}
        follow={props.follow}
        unfollow={props.unfollow}
        key={a.UserId}
      />
    );
  });
  return (
    <div>
      <h1>Users page</h1>
      <div>{UsersMap}</div>
    </div>
  );
};

export default Users;
