import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import Paginate from "../../component/Paginate";
import axiosInstance from "../../axios/axiosInstance";

interface Posts {
  postId: 0;
  postTitle: "";
  postDetail: "";
  statusId: 0;
  cateId: 0;
  imgBannerUrl: null;
  imgBanner: null;
  publishId: 0;
  createBy: null;
  createDate: null;
  updateBy: null;
  updateDate: null;
  mCategoryEntityList: Category;
  userEntity: User;
}

interface User {
  userId: 0;
  name: "";
}

interface Category {
  cateId: 0;
  cateName: "";
}

const HomePage = () => {
  const [posts, setPosts] = useState([] as Posts[]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      await axiosInstance
        .get(
          `/api/v1/post/getDataTable?iDisplayStart=${currentPage}&iDisplayLength=${postsPerPage}&draw=0&iSortCol_0=0&sSortDir_0=asc`
        )
        .then(function (response) {
          setPosts(response.data.data);
          setTotalPosts(response.data.recordsTotal);
        })
        .catch(function (error) {})
        .finally(function () {});
    };
    fetchPosts();
  }, [currentPage]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {posts.map((e, idx) => {
        return (
          <article className="flex flex-col shadow my-4" key={idx}>
            <a href="#" className="hover:opacity-75">
              <img
                src={
                  e.imgBannerUrl
                    ? e.imgBannerUrl
                    : "https://source.unsplash.com/collection/1346951/1000x500?sig=1"
                }
              ></img>
            </a>
            <div className="bg-white flex flex-col justify-start p-6">
              <a
                href="#"
                className="text-blue-700 text-sm font-bold uppercase pb-4"
              >
                {e?.mCategoryEntityList?.cateName}
              </a>
              <p className="text-sm pb-3">
                By{" "}
                <a href="#" className="font-semmibold hovver:text-gray-800">
                  {e?.userEntity?.name}
                </a>
                , Published on{" "}
                {new Date(`${e.createDate}`).toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <a href="#" className="pb-6">
                {e.postDetail}
              </a>
              <NavLink
                to={`/posts/${e.postId}`}
                className="uppercase text-gray-800 hover:text-black"
              >
                Continue Reading <i className="fas fa-arrow-right"></i>
              </NavLink>
            </div>
          </article>
        );
      })}

      <Paginate
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        paginate={paginate}
        currentPage={currentPage}
      />

      {/* <div className="flex items-center py-8">
        <a
          href="#"
          className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center"
        >
          1
        </a>
        <a
          href="#"
          className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center"
        >
          2
        </a>
        <a
          href="#"
          className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
        >
          Next <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div> */}
    </>
  );
};
export default HomePage;
