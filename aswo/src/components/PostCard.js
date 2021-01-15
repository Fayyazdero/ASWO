import React from "react";

export const PostCard = () => {
  const posts = [
    {
      image:
        "https://hub.packtpub.com/wp-content/uploads/2018/05/programming.jpg",
      title: "This is title",
      subtitle:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      image:
        "https://hub.packtpub.com/wp-content/uploads/2018/05/programming.jpg",
      title: "This is title",
      subtitle:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      image:
        "https://hub.packtpub.com/wp-content/uploads/2018/05/programming.jpg",
      title: "This is title",
      subtitle:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
  ];
  return (
    <div>
      {posts.map((post, index) => {
        return(
        <div key={index} className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={post.image} style={{height:'200px', width:"200px"}} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"> {post.title} </h5>
                <p className="card-text">{post.subtitle}</p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        )
      })}
    </div>
  );
};
