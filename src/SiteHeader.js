import './index.css';

const SiteHeader = () => {
    return (
        <header className="header flex items-center bg-gray-900 text-white font-bold justify-between p-6">
            <a className="text-white">Blog</a>
            <a className="text-white">お問い合わせ</a>
        </header>
    )
}
export default SiteHeader;