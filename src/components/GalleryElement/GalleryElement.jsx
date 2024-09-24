<<<<<<< Updated upstream
=======
import {
  GalleryElementUl,
  GalleryImg,
  StyledBio,
  StyledCaption,
  StyledCard,
  StyledElement,
} from "./GalleryElement.styled";
import NoImageSmall from "../../images/NoImageSmall.png";
>>>>>>> Stashed changes
import { Link } from "react-router-dom";
import { GalleryElementUl, GalleryImg } from "./GalleryElement.styled";

export const GalleryElement = ({ elements }) => {
  return (
    <GalleryElementUl>
<<<<<<< Updated upstream
      {elements.map((el) => (
        <li key={el.instructorId}>
          <GalleryImg src={el.imageUrl || "/images/szop.webp"} alt="." />
          {/* <Link to={`/instructor/${el.instructorId}`}>View Details</Link> */}
        </li>
      ))}
=======
      {elements.map((el) => {
        const imgSrc = el.photo || NoImageSmall;
        const altText = el.photo ? "Image" : "brak zdjęcia";
        const linkPath =
          el.type === "instructor"
            ? `/instructors/${el._id}`
            : `/obiekty/${el._id}`;

        return (
          <StyledElement key={el._id}>
            <Link to={linkPath}>
              <StyledCard>
                <StyledBio>{el.bio}</StyledBio>
                <GalleryImg src={imgSrc} alt={altText} />
                <StyledCaption>
                  <p>{el.fullName}</p>
                  <p>{el.discipline}</p>
                  {el.type === "instructor" ? "" : <p>Zobacz Obiekt</p>}
                </StyledCaption>
              </StyledCard>
            </Link>
          </StyledElement>
        );
      })}
>>>>>>> Stashed changes
    </GalleryElementUl>
  );
};
