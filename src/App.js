import { SiteHeader } from "./SiteHeader";
import { BlogItem } from "./BlogItem";
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <SiteHeader />
      <BlogItem />
    </BrowserRouter>
  )
}