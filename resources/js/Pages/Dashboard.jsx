import { useState } from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import axios from 'axios';
import Table_Dashboard from '@/Components/Dashboard/Table';

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

            // Handle success, e.g., show a success message, redirect, etc.
            console.log('News created successfully');
        } catch (error) {
            // Handle error, e.g., show an error message
            console.error('Error creating news:', error.response.data);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="title"
                            placeholder="title"
                            className="input input-ghost w-full max-w-xs m-2"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="description"
                            placeholder="description"
                            className="input input-ghost w-full max-w-xs m-2"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="category"
                            placeholder="category"
                            className="input input-ghost w-full max-w-xs m-2"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="author"
                            placeholder="author"
                            className="input input-ghost w-full max-w-xs m-2"
                            onChange={handleChange}
                        />
                        <input
                            type="file"
                            name="image"
                            className="file-input file-input-bordered w-full max-w-xs m-2"
                            onChange={handleFileChange}
                        />
                        <br />
                        <button type="submit" className="btn btn-outline">
                            Submit
                        </button>
                    </form>
                </div>
                <div><Table_Dashboard news={news} /></div>

            </div>

        </AuthenticatedLayout>
    );
}
