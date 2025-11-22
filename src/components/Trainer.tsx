import React from "react";
import { trainerData } from "../data/trainerData";

const TrainerSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="trainer">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-10">
          Meet Our Expert Trainers
        </h2>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {trainerData.map((trainer, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transition hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-56 object-cover rounded-lg"
              />

              {/* Info */}
              <h3 className="text-2xl font-bold mt-5">{trainer.name}</h3>
              <p className="text-primary font-medium">{trainer.title}</p>

              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {trainer.description}
              </p>

              {/* Experience */}
              <p className="mt-4 text-sm font-semibold text-primary">
                {trainer.experience}
              </p>

              {/* Achievements */}
              <div className="grid grid-cols-3 gap-3 mt-5">
                {trainer.achievements.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="p-3 border rounded-lg bg-gray-100 text-center"
                    >
                      <Icon className="h-5 w-5 mx-auto text-primary mb-1" />
                      <p className="text-[12px] font-semibold">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;
