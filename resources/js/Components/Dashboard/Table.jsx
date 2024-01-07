import Swal from 'sweetalert2';

const Table_Dashboard = ({ news }) => {
    const onDelete = async (id) => {
        try {
            const response = await fetch(`api/news/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',

                },
            });
            if (!response.ok) {

                const responseData = await response.json();
                throw new Error(`Failed to delete news with ID ${id}. Server response: ${response.status} - ${responseData.message}`);
            }
            console.log(`News with ID ${id} deleted successfully`);
            window.location.reload();
        } catch (error) {

            console.error('Error deleting news:', error);
            throw error;
        }
    };

    const handleDelete = async (id) => {
        try {

            const result = await Swal.fire({
                title: 'Are you sure?',
                text: 'You won\'t be able to revert this!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
            });

            if (result.isConfirmed) {

                await onDelete(id);


                await Swal.fire({
                    icon: 'success',
                    title: 'News deleted successfully',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error) {
            console.error('Error deleting news:', error);

            Swal.fire({
                icon: 'error',
                title: 'Error deleting news',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    return (
        <div className="overflow-x-auto p-4 sm:p-10">
            <table className="table table-small table-pin-rows table-pin-cols w-full">
                <thead>
                    <tr>
                        <th className="sm:w-1/6">ID</th>
                        <th className="sm:w-1/6">Title</th>
                        <th className="sm:w-1/4">Description</th>
                        <th className="sm:w-1/6">Category</th>
                        <th className="sm:w-1/6">Author</th>
                        <th className="sm:w-1/4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {news.map((item, index) => (
                        <tr key={index}>
                            <td className="sm:w-1/6">{item.id}</td>
                            <td className="sm:w-1/6">{item.title}</td>
                            <td className="sm:w-1/4">{item.description}</td>
                            <td className="sm:w-1/6">{item.category}</td>
                            <td className="sm:w-1/6">{item.author}</td>
                            <td className="sm:w-1/4">
                                <button onClick={() => onEdit(item)} className="btn btn-outline btn-warning m-2">Edit</button>
                                <button onClick={() => handleDelete(item.id)} className="btn btn-outline btn-error m-2">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table_Dashboard;
