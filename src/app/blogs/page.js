import BlogHeader from "@/components/blogHeader";
import BlogList from "@/components/blogList";
import styles from "./page.module.scss";

export default function Blogs() {
  return (
    <main className={styles.main}>
      <BlogHeader />
      <BlogList />
    </main>
  );
}
