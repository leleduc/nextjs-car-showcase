"use client";

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { CustomButton } from ".";
import { useContext } from "react";
import { FilterContext } from "@/context/filter";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  // const router = useRouter();
  const { filterDispatch } = useContext(FilterContext);

  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10;

    filterDispatch({
      type: "LIMIT",
      payload: [String(newLimit)],
    });

    // Update the "limit" search parameter in the URL with the new value
    // const newPathname = updateSearchParams("limit", `${newLimit}`);

    // router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
