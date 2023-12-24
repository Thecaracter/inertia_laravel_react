const Table_Dashboard = ({ news }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {news.map((item, index) => (
                        <tr key={index}>
                            <th>{item.id}</th>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.category}</td>
                            <td>{item.author}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table_Dashboard;
