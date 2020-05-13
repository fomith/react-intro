import React from "react";
import User from "./User/User";
import ReactPaginate from "react-paginate";
import Axios from "axios";
import a from "./User/user.module.scss";

const Users = (props) => {
  const UsersMap = props.data.map((a) => {
    return (
      <User
        UserId={a.id}
        FirstName={a.name}
        LastName={a.LastName}
        status={a.status}
        photos={a.photos}
        Location={a.Location}
        sub={a.followed}
        follow={props.follow}
        unfollow={props.unfollow}
        key={a.id}
      />
    );
  });

  if (props.data.length === 0) {
    props.fetchingAC(true);
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}`
    ).then((response) => {
      props.addusers(response);
      props.fetchingAC(false);
    });
  }

  let openPage = (selectedPage) => {
    props.newPage(selectedPage.selected + 1);
    props.fetchingAC(true);
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${
        selectedPage.selected + 1
      }`
    ).then((response) => {
      props.addusers(response);
      props.fetchingAC(false);
    });
  };

  let pageCount = Math.ceil(props.totalCount / 10);
  return (
    <div>
      <h1>Users page</h1>
      <div className={a.pagination}>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={openPage}
          forcePage={props.currentPage - 1}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          nextClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
      {props.fetching === true ? (
        <div className={a.flexCA}>
          <div className={a.ldsRoller}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>{" "}
        </div>
      ) : (
        <div>{UsersMap}</div>
      )}
    </div>
  );
};

export default Users;
