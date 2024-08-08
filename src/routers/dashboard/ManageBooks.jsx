// import React from 'react'
// import { Table } from "flowbite-react";


// const ManageBooks = () => {
//   return (
//     <div className='px-4 my-12'>
//       <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>
//       {/* Table for book data*/}
//       <Table className='lg:w-[1180px]'>
//         <Table.Head>
//           <Table.HeadCell>No</Table.HeadCell>
//           <Table.HeadCell>Color</Table.HeadCell>
//           <Table.HeadCell>Category</Table.HeadCell>
//           <Table.HeadCell>Price</Table.HeadCell>
//           <Table.HeadCell>
//             <span className="sr-only">Edit</span>
//           </Table.HeadCell>
//         </Table.Head>
//         <Table.Body className="divide-y">
//           <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//             <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//               {'Apple MacBook Pro 17"'}
//             </Table.Cell>
//             <Table.Cell>Sliver</Table.Cell>
//             <Table.Cell>Laptop</Table.Cell>
//             <Table.Cell>$2999</Table.Cell>
//             <Table.Cell>
//               <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
//                 Edit
//               </a>
//             </Table.Cell>
//           </Table.Row>
//           <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//             <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//              01
//             </Table.Cell>
//             <Table.Cell>White</Table.Cell>
//             <Table.Cell>Laptop PC</Table.Cell>
//             <Table.Cell>$1999</Table.Cell>
//             <Table.Cell>
//               <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
//                 Edit
//               </a>
//             </Table.Cell>
//           </Table.Row>
//           <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//             <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">01</Table.Cell>
//             <Table.Cell>Black</Table.Cell>
//             <Table.Cell>Accessories</Table.Cell>
//             <Table.Cell>$99</Table.Cell>
//             <Table.Cell>
//               <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
//                 Edit
//               </a>
//             </Table.Cell>
//           </Table.Row>
//         </Table.Body>
//       </Table>
//     </div>
//   )
// }

// export default ManageBooks


import { Table } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Pagination } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
    const [allBooks, setAllBooks] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/all-books`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setAllBooks(data);
            });
    }, []);

    // delete a books
    const handleDelete = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/book/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data =>  { 
            alert("Book is deleted Successfully!") 
            // console.log(data);
            // setAllBooks(data);
          });
      };


    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = () => setCurrentPage(page);

    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Manager Your Books Inventory!</h2>

            {/* table */}

            <Table className='lg:w-[1180px]'>
                <Table.Head>
                    <Table.HeadCell>
                        No.
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Book name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Author Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Category
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Price
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Edit or Manage
                    </Table.HeadCell>
                </Table.Head>

                {
                    allBooks.map((book, index) => <Table.Body className="divide-y" key={book._id}>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {index + 1}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {book.bookTitle}
                            </Table.Cell>
                            <Table.Cell>
                                {book.authorName}
                            </Table.Cell>
                            <Table.Cell>
                                {book.category}
                            </Table.Cell>
                            <Table.Cell>
                                $10.99
                                
                            </Table.Cell>
                            
                            <Table.Cell>
                                <Link
                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                                    to={`/admin/dashboard/edit-books/${book._id}`}
                                >
                                    Edit
                                </Link>
                                <button className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'
                                 onClick={() => handleDelete(book._id)}>Delete</button>

                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>)
                }
            </Table>

            {/* pagination */}
            <div className="flex items-center justify-center text-center mt-8">
                <Pagination
                    currentPage={1}
                    layout="pagination"
                    nextLabel="Go forward"
                    onPageChange={page => { setCurrentPage(page) }}
                    previousLabel="Go back"
                    showIcons
                    totalPages={10}
                />
            </div>
        </div>
    )
}

export default ManageBooks