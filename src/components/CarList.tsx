"use client";
import React, { useContext } from "react";
import { FetchCars } from "@/utils";
import { CarCard, ShowMore } from ".";
import { useSearchParams } from "next/navigation";
import { FilterContext } from "@/context/filter";

const CarList = () => {
  const { state } = useContext(FilterContext);
  // const searchParams = useSearchParams();
  // const make = searchParams.get("manufacturer") || "";
  // const model = searchParams.get("model") || "";
  // const year = searchParams.get("year") || "2022";
  // const fuel = searchParams.get("fuel") || "";
  // const limit = searchParams.get("limit") || "10";

  const { data, loading, error } = FetchCars(
    "?make=" +
      state.make +
      "&model=" +
      state.model +
      "&year=" +
      state.year +
      "&fuel_type=" +
      state.fuel +
      "&limit=" +
      state.limit
  );
  // console.log(data);

  const isDataEmpty = !Array.isArray(data) || data.length < 1 || !data;

  if (!isDataEmpty) {
    return (
      <section>
        <div className="home__cars-wrapper">
          {data?.map((car, index) => (
            <CarCard car={car} key={index} />
          ))}
        </div>

        <ShowMore
          pageNumber={Number(state.limit) / 10}
          isNext={Number(state.limit) > data.length}
        />
      </section>
    );
  } else {
    return (
      <div className="home__error-container">
        <h2 className="text-black text-xl font-bold">Oops, no results</h2>
        <p>{error}</p>
      </div>
    );
  }
};

export default CarList;
