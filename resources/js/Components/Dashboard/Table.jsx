const Table_Dashboard = ({ news, onEdit, onDelete }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table table-small table-pin-rows table-pin-cols">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Author</th>
                        <th>Action</th>
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
                            <td>
                                <button onClick={() => onEdit(item)} className="btn btn-outline btn-warning">Edit</button>
                                <button onClick={() => onDelete(item.id)} className="btn btn-outline btn-error">Error</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default Table_Dashboard;
