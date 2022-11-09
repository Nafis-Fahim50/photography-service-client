import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='container mx-auto p-5 mt-7'>
            <h1 className='text-3xl font-bold text-orange-500'>NodeJS</h1>
            <div className='mt-5 text-justify'>
                <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.</p>

                <h1 className=' text-center text-3xl my-4 text-blue-500 font-bold'>Here some common Question of NodeJS</h1>
            </div>
            <div className='mt-3'>
                <h3 className='text-orange-500 text-2xl font-bold'>1. Difference between SQL and NoSQL.</h3>
                <div className="overflow-x-auto mt-3">
                    <table className="table-normal lg:table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>SQL</th>
                                <th>NoSQL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                                <td>Non-relational or distributed database system.</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>These databases have fixed or static or predefined schema</td>
                                <td>They have dynamic schema</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>These databases are not suited for hierarchical data storage.</td>
                                <td>These databases are best suited for hierarchical data storage.</td>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>These databases are best suited for complex queries</td>
                                <td>These databases are not so good for complex queries</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <h1 className='text-orange-500 text-2xl font-bold mt-3'>2. What is JWT, and how does it work?</h1>
                <p className='mt-3'><span className='font-bold text-red-600'>JWT: </span>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                <p className='mt-5'><span className='font-bold text-red-600'>How JWT Works: </span>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
            </div>
            <div>
                <h1 className='text-orange-500 text-2xl font-bold mt-7'>3. What is the difference between javascript and NodeJS?</h1>
                <div className="overflow-x-auto mt-3">
                    <table className="table-normal lg:table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Javascript</th>
                                <th>NodeJS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>
                                    Javascript is a programming language that is used for writing scripts on the website.</td>
                                <td>NodeJS is a Javascript runtime environment.</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Javascript can only be run in the browsers.</td>
                                <td>We can run Javascript outside the browser with the help of NodeJS.</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>It is basically used on the client-side.</td>
                                <td>TIt is mostly used on the server-side.</td>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. </td>
                                <td>Nodejs is written in C, C++ and Javascript.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <h1 className='text-orange-500 text-2xl font-bold mt-3'>4. How does NodeJS handle multiple requests at the same time?</h1>
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. </p>
            </div>
        </div>
    );
};

export default Blog;