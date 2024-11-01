import bannerImg from '../../assets/books.jpg';
const Banner = () => {
    return (
        <div className="hero bg-base-200  rounded-xl md:py-10 py-5">
            <div className="hero-content flex-col lg:flex-row-reverse w-11/12 mx-auto">
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div className='space-y-10'>
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <button className="btn bg-[#23BE0A] text-xl text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;