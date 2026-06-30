import B1 from "./../assets/images/blog/b1.jpg";
import B2 from "./../assets/images/blog/b2.jpg";
import B3 from "./../assets/images/blog/b3.jpg";

const Blogs = () => {
  return (
    <section className="blogs" id="blog">
      <h2>news and articles</h2>
      <p>Always upto date with our latest News and Articles</p>
      <div className="articles">
        <Blog
          image={B1}
          heading="How to find your Desired Place more quickly"
          date="March 2018"
        />
        <Blog
          image={B2}
          heading="How to find your Desired Place more quickly"
        />
        <Blog
          image={B3}
          heading="How to find your Desired Place more quickly"
        />
      </div>
    </section>
  );
};

const Blog = ({ image, heading, date }) => {
  return (
    <div className="blog-article">
      <img src={image} alt="image 1" />
      <div className="blog-details">
        <p>
          <a href="#">{heading}</a>
        </p>
        <p>
          posted By <a href="#">ADMIN</a> {date}
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
          suscipit ab repudiandae! Obcaecati nihil consectetur velit
          perferendis.
        </p>
      </div>
    </div>
  );
};
export default Blogs;
