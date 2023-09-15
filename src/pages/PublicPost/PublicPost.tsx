import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axios/axiosInstance";

interface posts {
  cateId: 0;
  createBy: null;
  createDate: null;
  imgBanner: null;
  imgBannerUrl: null;
  postDetail: "";
  postId: 0;
  postTitle: "";
  publishId: 0;
  statusId: 0;
  updateBy: null;
  updateDate: null;
}

const PublicPostPage = () => {
  const [post, setPost] = useState({} as posts);
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await axiosInstance
        .get(`/api/v1/post/getById?postId=${id}`)
        .then(function (response) {
          setPost(response.data);
        })
        .catch(function (error) {})
        .finally(function () {});
    };
    fetchData();
  }, [id]);
  // console.log(post);
  return (
    <>
      <article className="flex flex-col shadow my-4">
        <a href="#" className="hover:opacity-75">
          <img
            src={
              post.imgBannerUrl
                ? post.imgBannerUrl
                : "https://source.unsplash.com/collection/1346951/1000x500?sig=1"
            }
          />
        </a>
        <div className="bg-white flex flex-col justify-start p-6">
          <a
            href="#"
            className="text-blue-700 text-sm font-bold uppercase pb-4"
          >
            Technology
          </a>
          <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
            {post.postTitle}
          </a>
          <p className="text-sm pb-8">
            By
            <a href="#" className="font-semibold hover:text-gray-800">
              David Grzyb
            </a>
            , Published on April 25th, 2020
          </p>
          <p className="pb-3">{post.postDetail}</p>
        </div>
      </article>

      <div className="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white mt-10 mb-10 p-6">
        <div className="w-full md:w-1/5 flex justify-center md:justify-start pb-4">
          <img
            src="https://source.unsplash.com/collection/1346951/150x150?sig=1"
            className="rounded-full shadow h-32 w-32"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center md:justify-start">
          <p className="font-semibold text-2xl">David</p>
          <p className="pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vel neque non libero suscipit suscipit eu eu urna.
          </p>
          <div className="flex items-center justify-center md:justify-start text-2xl no-underline text-blue-800 pt-4">
            <a className="" href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a className="pl-4" href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="pl-4" href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="pl-4" href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a className="pl-4" href="#">
              <i className="fab fa-user"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default PublicPostPage;
