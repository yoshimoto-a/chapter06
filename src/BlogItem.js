/*一覧画面のブログ記事*/
import './index.css';
import posts from './data/posts';
import {Categories} from './Categories';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

export const BlogItem = () => {
  return (
		<div class="mx-auto max-w-screen-lg px-4 my-10">
			<ul>
				{posts.map((item) => (
					<li class="flex flex-col list-none m-0 p-0" key={item.id}>
						<Link to="/" class="text-gray-700 no-underline">
							<div class="border border-gray-300 flex flex-row mb-8 p-4">
								<div>
									<div class="flex justify-between">
										<div class="text-gray-500 text-sm">{dayjs(item.createdAt).format("YYYY/MM/DD")}</div>
										<div class="flex flex-wrap">
											<Categories categories={item.categories}></Categories>
										</div>
									</div>
									<p class="text-xl mb-4 mt-2">{item.title}</p>
									<div class="text-base leading-relaxed line-clamp-2"dangerouslySetInnerHTML={{__html:item.content}}></div>
								</div>
							</div>
						</Link>
					</li>
        ))}
      </ul>
    </div>
  )
}