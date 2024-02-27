/*一覧画面のブログ記事*/
import './index.css';
import posts from './data/posts'
import Categories from './Categories'
import TextSplitter from './TextSplitter';
import dayjs from 'dayjs';

const BlogItem = () => {
    return (
        <div class="Home_containe mx-auto max-w-screen-lg px-4 my-10">
            <ul>
            {posts.map((item) => (
                <li class="Home_list flex flex-col list-none m-0 p-0" key={item.id}>
                    <a class="Home_link text-gray-700 no-underline">
                        <div class="Home_post border border-gray-300 flex flex-row mb-8 p-4">
                            <div>
                                <div class="Home_postInfo flex justify-between">
                                    <div class="Home_postDate text-gray-500 text-sm">{dayjs(item.createdAt).format("YYYY/MM/DD")}</div>
                                    <div class="Home_postCategories flex flex-wrap">
                                        <Categories categories={item.categories}></Categories>
                                    </div>
                                </div>
                                <p class="Home_postTitle text-xl mb-4 mt-2">{item.title}</p>
                                <div class="Home_postBody text-base leading-relaxed"><TextSplitter text={item.content}></TextSplitter></div>
                            </div>
                        </div>
                    </a>
                </li>
            ))};
            </ul>
        </div>
    )
}
export default BlogItem;