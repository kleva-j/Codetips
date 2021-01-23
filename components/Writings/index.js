import PostList from "./PostList";
import Profile from "../Profile";
import RightSection from "./RightSection";

export default function Writings({ posts }) {
  return (
    <section className="xl:flex md:w-10/12 lg:w-10/12 xl:w-10/12 lg:pl-24 z-10">
      <section className="xl:w-3/5">
        <Profile />
        <PostList posts={posts} />
      </section>
      <RightSection heading={'Technical Writings'} content={posts} />
    </section>
  );
}
