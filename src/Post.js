import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Categories } from "./Categories";
import dayjs from "dayjs";
import { data } from "autoprefixer";

export const Post = () => {
  const { id } = useParams();
  const [post, setItem] = useState({});

  useEffect(() => {
    const fetcher = async () => {
      const resp = await fetch(
        `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`
      );
      const data = await resp.json();
      setItem(data.post);
    };
    fetcher();
  }, []);

  if (!post) return <div>記事がありません</div>;

  return (
    <>
      <div className="mx-auto max-w-800px">
        <div className="flex flex-col p-4">
          <img
            src="https://placehold.jp/800x400.png"
            alt=""
            className="h-auto max-w-full"
          ></img>
          <div className="p-4">
            <div className="flex justify-between">
              <div className="text-gray-600 text-xs">
                {dayjs(post.createdAt).format("YYYY/MM/DD")}
              </div>
              <Categories categories={post.categories || []}></Categories>
            </div>
            <div className="text-lg mb-4 mt-2">{post.title}</div>
            <div
              className="text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
