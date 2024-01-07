import { useState } from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import axios from 'axios';
import Table_Dashboard from '@/Components/Dashboard/Table';
import Swal from 'sweetalert2';

export default function Dashboard({ auth, news }) {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        author: '',
        image: null,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataApi = new FormData();
            formDataApi.append('title', formData.title);
            formDataApi.append('description', formData.description);
            formDataApi.append('category', formData.category);
            formDataApi.append('author', formData.author);
            formDataApi.append('image', formData.image);

            await axios.post('/api/news', formDataApi, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${auth.token}`,
                },
            });

            // Tampilkan SweetAlert untuk sukses
            const result = await Swal.fire({
                icon: 'success',
                title: 'News created successfully',
                showConfirmButton: true,
                confirmButtonText: 'OK',
            });

            // Jika tombol konfirmasi diklik, lakukan reload halaman

            window.location.reload();

        } catch (error) {
            // Tampilkan SweetAlert untuk kesalahan
            Swal.fire({
                icon: 'error',
                title: 'Error creating news',
                text: error.response.data,
            });
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">News</h2>}
        >
            <Head title="News" />

            <div className="py-12 p-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="mb-2">
                            <input
                                type="text"
                                name="title"
                                placeholder="Title"
                                className="input input-ghost w-full"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-2">
                            <input
                                type="text"
                                name="description"
                                placeholder="Description"
                                className="input input-ghost w-full"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-2">
                            <input
                                type="text"
                                name="category"
                                placeholder="Category"
                                className="input input-ghost w-full"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-2">
                            <input
                                type="text"
                                name="author"
                                placeholder="Author"
                                className="input input-ghost w-full"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-2">
                            <input
                                type="file"
                                name="image"
                                className="file-input file-input-bordered w-full"
                                onChange={handleFileChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline w-full sm:col-span-2">
                            Submit
                        </button>
                    </form>
                </div>
                <br></br>
                <div><Table_Dashboard news={news} /></div>
            </div>
        </AuthenticatedLayout>
    );
}
