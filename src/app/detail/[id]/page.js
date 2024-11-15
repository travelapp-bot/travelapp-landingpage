"use client"
import React, { useEffect } from 'react'
import styles from "./detail.module.scss"
import { Container, Stack } from 'react-bootstrap'
// import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import { getBlogById } from "@/redux/blog.action";
import { useDispatch, useSelector } from 'react-redux'
import { blogs } from '@/redux/blog.slice'
import { convertSecondsToDate } from "@/constant";
import data_icon from '../../assets/icon/data_icon.svg'
import Loader from '@/components/loader';
import Image from 'next/image';

function Detail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const Travelblogs = useSelector(blogs);
    const blog = Travelblogs?.find(blog => blog?.id === id)
    // console.log(blog,'check blog');

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
        dispatch(getBlogById(id));
    }, [id, dispatch])

    // console.log(id)

    return (
        <main className={styles.main}>
            {
                blog? 
            <Container >
                <div className={styles.subContainer}>
                    <div>
                        <h1 className='title48'>{blog?.title} </h1>
                        <div className={styles.stack}>
                            <div className={styles.dateBox}>
                            <Image src={data_icon} alt={blog?.createDate?.seconds} width={18} height={18} />
                            <p className='desc16'>{
                             blog?.createDate 
                             ? new Date(blog?.createDate).toLocaleDateString("en-GB", {
                                 day: "numeric",
                                 month: "short",
                                 year: "numeric",
                               })
                             : "Date not available" // Fallback if createDate is undefined or invalid
                            }
                            </p>
                            </div>
                            <div className={styles.verticalLine}>|</div>
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
            :
            <Loader show="true" />
            }
        </main>
    )
}

export default Detail
