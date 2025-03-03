import React from "react";

function Img({
  src,
  alt = "image",
  className = "size-full object-cover",
  title,
}) {
  return <img src={src} alt={alt} className={className} title={title} />;
}

export default Img;
