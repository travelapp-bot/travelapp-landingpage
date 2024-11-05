"use client"
import React, { useEffect } from 'react'
import styles from "./detail.module.scss"
import { Container, Stack } from 'react-bootstrap'

import { useParams } from 'next/navigation';
import { getAllBlogs } from "@/redux/blog.action";
import { useDispatch, useSelector } from 'react-redux'
import { blogs } from '@/redux/blog.slice'
import Loader from '@/components/loader';
function Detail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const Travelblogs = useSelector(blogs);
    const blog = Travelblogs?.find(blog => blog?.id === id)
    console.log(blog);

    const getLabelStyles = (index) => {
        switch (index) {
            case 0:
                return {
                    backgroundColor: "#E0FBE7",
                    color: "#30653B",
                    borderColor: "#30653B",
                };
            case 1:
                return {
                    backgroundColor: "#F3FBE0",
                    color: "#656230",
                    borderColor: "#656230",
                };
            case 2:
                return {
                    backgroundColor: "#E0EDFB",
                    color: "#305265",
                    borderColor: "#305265",
                };
            default:
                return { backgroundColor: "#E0FBE7", color: "#30653B" };
        }
    };

    useEffect(() => {
        dispatch(getAllBlogs())
    }, [id])

    console.log(id)

    return (
        <main className={styles.main}>
            <Container >
                <div className={styles.subContainer}>
                    <div>
                        <h1 className='title48'>{blog?.title}</h1>
                        <div className={styles.stack}>
                            <p className='desc24'>24 july 2024 </p>
                            <div className={styles.labelStack}>
                                {blog?.tags?.map((option, ind) => (
                                    <p className={styles.label} key={ind} style={getLabelStyles(ind)}>
                                        {option}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div
                        dangerouslySetInnerHTML={{ __html: blog?.content }}
                    />
                </div>

            </Container>
        </main>
    )
}

export default Detail
