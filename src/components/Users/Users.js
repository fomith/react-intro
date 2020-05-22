import React from "react";
import User from "./User/User";
import ReactPaginate from "react-paginate";
import a from "./User/user.module.scss";
import Loader from "../Loader/Loader";

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
        waitingFollowingAC={props.waitingFollowingAC}
        wait={props.wait}
        waitingEndAC={props.waitingEndAC}
      />
    );
  });

  let openPage = (selectedPage) => {
    props.openUsersThunk(selectedPage.selected + 1);
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
      {props.fetching === true ? <Loader /> : <div>{UsersMap}</div>}
    </div>
  );
};

export default Users;
