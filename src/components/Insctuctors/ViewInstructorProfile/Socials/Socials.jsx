import { FBSvg, IGSvg } from "../../../RenderSvg/RenderSvg";
import { IconLink } from "./Socials.styled";

export const SocialMedia = ({ instructor }) => {
  const fbLink = instructor.facebook || "#";
  const igLink = instructor.instagram || "#";

  return (
    <>
      <IconLink href={fbLink} target="_blank" rel="noopener noreferrer">
        <FBSvg alt="Facebook" />
      </IconLink>
      <IconLink href={igLink} target="_blank" rel="noopener noreferrer">
        <IGSvg alt="Instagram" />
      </IconLink>
    </>
  );
};
