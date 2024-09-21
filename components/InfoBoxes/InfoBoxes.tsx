import * as React from "react";
import InfoBox from "../InfoBox/InfoBox";

export interface IInfoBoxesProps {}

const InfoBoxes: React.FC<IInfoBoxesProps> = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Renters"
            backgroundColor="bg-gray-100"
            textColor="text-black"
            buttonInfo={{
              link: "/properties",
              text: "Browse Properties",
              backgroundColor: "bg-black",
              hoverColor: "bg-gray-700",
            }}
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>

          <InfoBox
            heading="For Property Owners"
            backgroundColor="bg-blue-100"
            textColor="text-black"
            buttonInfo={{
              link: "/add-property",
              text: "Add Property",
              backgroundColor: "bg-blue-500",
              hoverColor: "bg-blue-600",
            }}
          >
            List your properties and reach potential tenants. Rent as an airbnb
            or long term.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
