import { GalleryElementUl, GalleryImg } from "./GalleryElement.styled";
import NoImageSmall from "../../images/NoImageSmall.png";
import { Link } from "react-router-dom";

export const GalleryElement = ({ elements }) => {
  return (
    <GalleryElementUl>
      {elements.map((el) => {
        console.log(el.type);

        const imgSrc = el.photo || NoImageSmall;
        const altText = el.photo ? "Image" : "brak zdjęcia";
        const linkPath =
          el.type === "instructor"
            ? `/instructors/${el._id}`
            : `/obiekty/${el._id}`;

        const linkCaption =
          el.type === "instructor" ? "Zobacz Profil" : "Zobacz Obiekt";

        return (
          <li key={el._id}>
            <Link to={linkPath}>
              <GalleryImg src={imgSrc} alt={altText} />
              <p>{linkCaption}</p>
            </Link>
          </li>
        );
      })}
    </GalleryElementUl>
  );
};
