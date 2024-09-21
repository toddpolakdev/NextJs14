import * as React from "react";

export interface IInfoBoxProps {
  heading: string;
  backgroundColor: string;
  textColor: string;
  buttonInfo: {
    link: string;
    text: string;
    backgroundColor: string;
    hoverColor: string;
  };
  children: React.ReactNode;
}

const InfoBox: React.FC<IInfoBoxProps> = ({
  heading,
  backgroundColor = "bg-gray-100",
  textColor = "text-black",
  buttonInfo = {},
  children,
}) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className={`${textColor} mt-2 mb-4`}>{children}</p>
      <a
        href={buttonInfo?.link}
        className={`inline-block ${buttonInfo.backgroundColor} text-white rounded-lg px-4 py-2 hover:${buttonInfo.hoverColor}`}
      >
        {buttonInfo?.text}
      </a>
    </div>
  );
};
export default InfoBox;
