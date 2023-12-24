const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={data.image} alt="Shoes" loading="lazy" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-inline">{data.category}</div>
                        <div className="badge badge-outline">{data.author}</div>
                    </div>
                </div>
            </div>
        );
    });
};

const NewsList = ({ news }) => {
    if (!news || !news.length) {
        return (
            <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes"
                        loading="lazy"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Belum Ada Berita tersedia</h2>
                </div>
            </div>
        );
    }
    return isNews(news);
};

export default NewsList;
