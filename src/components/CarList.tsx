"use client";
import React from "react";
import { FetchCars } from "@/utils";
import { CarCard } from ".";

const CarList = () => {
  const { data, loading, error } = FetchCars("?model=corolla");
  console.log(data);
  const allCars = data;

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  if (!isDataEmpty) {
    return (
      <section>
        <div className="home__cars-wrapper">
          {allCars?.map((car, index) => (
            <CarCard car={car} key={index} />
          ))}
        </div>
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
