import { Link } from "react-router-dom";
import { GalleryElementUl, GalleryImg } from "./GalleryElement.styled";

export const GalleryElement = ({ elements }) => {
  return (
    <GalleryElementUl>
      {elements.map((el) => (
        <li key={el.instructorId}>
          <GalleryImg src={el.imageUrl || "/images/szop.webp"} alt="." />
          {/* <Link to={`/instructor/${el.instructorId}`}>View Details</Link> */}
        </li>
      ))}
    </GalleryElementUl>
  );
};
