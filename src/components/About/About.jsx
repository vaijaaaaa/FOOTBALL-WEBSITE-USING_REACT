import React from "react";
import { Link } from "react-router-dom";


export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://www.fcbarcelona.com/photo-resources/2024/07/23/5bfd27a2-566d-4986-88e3-ec437ee5087f/CANVI-PORTADA-JOC.jpg?width=1200&height=750"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        "More than a club"
                        </h2>
                        <p className="mt-6 text-gray-600">
                        FC Barcelona, also known as Barça, is one of the most successful and iconic football clubs in the world, founded in 1899.Known for their motto "Més que un club" ("More than a club"), they represent Catalan pride and culture.Barça has won numerous trophies, including multiple UEFA Champions League titles and La Liga championships.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Their home stadium, Camp Nou, is one of the largest and most famous football venues globally, attracting millions of fans
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}