import NoImageSmall from "../../../images/NoImageSmall.png";

export const SearchElement = ({ elements }) => {
  return (
    <div>
      {elements.map((el) => {
        const imgSrc = el.instructorId.image || NoImageSmall;
        const altText = el.instructorId.image ? "Image" : "brak zdjęcia";
        return (
          <div key={el._id}>
            <img src={imgSrc} alt={altText} />
            <p>{el.instructorId.fullName}</p>
          </div>
        );
      })}
    </div>
  );
};
