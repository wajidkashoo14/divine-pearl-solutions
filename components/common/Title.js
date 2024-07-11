import Image from "next/image";

export const TitleLogo = ({ img, className, width, height }) => {
  return <Image src={img} width={width} height={height} className={`${className}  title-logo`} />;
};

export const TitleSm = ({ title }) => {
  return <h1 className="titleSm">{title}</h1>;
};
export const Title = ({ title, className }) => {
  return <h1 className={`${className} title`}>{title}</h1>;
};
