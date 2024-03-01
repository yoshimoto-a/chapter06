import { useParams } from "react-router-dom";
import { posts } from "./data/posts";
import { Categories } from "./Categories";
import dayjs from "dayjs";

export const Post = () => {
  const { id } = useParams();
  const targetItem = posts.find((item) => item.id == id);
  return (
    <>
      {!targetItem ? (
        <div>記事が見つかりません</div>
      ) : (
        <div class="mx-auto max-w-800px">
          <div class="flex flex-col p-4">
            <img
              src="https://placehold.jp/800x400.png"
              alt=""
              class="h-auto max-w-full"
            ></img>
            <div class="p-4">
              <div class="flex justify-between">
                <div class="text-gray-600 text-xs">
                  {dayjs(targetItem.createdAt).format("YYYY/MM/DD")}
                </div>
                <Categories categories={targetItem.categories}></Categories>
              </div>
              <div class="text-lg mb-4 mt-2">{targetItem.title}</div>
              <div
                class="text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: targetItem.content }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
