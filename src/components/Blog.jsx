import React from "react";
import "./Blog.css";

import post1 from "../assets/images/blog-1.svg";
import post2 from "../assets/images/blog-2.svg";
import post3 from "../assets/images/blog-3.svg";

const BlogPosts = () => {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <div>
          <span className="blog-tag">
            <span className="tag-dot"></span>
            EXPLORE NEWSLETTER
          </span>
          <h2>Most Popular Post.</h2>
        </div>

        <button className="blog-btn">All Blog Post</button>
      </div>

      <div className="blog-grid">
        <div className="blog-card">
          <div className="blog-image">
            <img src={post1} alt="Blog post" />
          </div>

          <div className="blog-content">
            <div className="blog-meta">
              <span>15 April 2024</span>
              <span>Comment (06)</span>
            </div>

            <p className="blog-text">
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat
            </p>

            <button className="read-more">Read More</button>
          </div>
        </div>

        <div className="blog-card">
          <div className="blog-image">
            <img src={post2} alt="Blog post" />
          </div>

          <div className="blog-content">
            <div className="blog-meta">
              <span>15 April 2024</span>
              <span>Comment (06)</span>
            </div>

            <p className="blog-text">
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat
            </p>

            <button className="read-more">Read More</button>
          </div>
        </div>

        <div className="blog-card">
          <div className="blog-image">
            <img src={post3} alt="Blog post" />
          </div>

          <div className="blog-content">
            <div className="blog-meta">
              <span>15 April 2024</span>
              <span>Comment (06)</span>
            </div>

            <p className="blog-text">
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat
            </p>

            <button className="read-more">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
