import Image from "next/image";
import React from "react";

const Weather = ({ data }) => {
  console.log(data);

  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
      {/* Top */}
      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width="100"
            height="100"
          />
          <p className="text-2xl">{data.weather[0].main}</p>
        </div>
        {/* &#176; is the degree sign */}
        <p className="text-9xl">{data.main.temp.toFixed(0)}&#176;</p>
      </div>

      {/* Bottom */}
      <div className="bg-black/50 relative p-8 rounded-md">
        <h1 className="text-2xl text-center pb-6 ">Weather in {data.name}</h1>
        <div className="flex justify-between text-center">
          <div>
            <p className="font-bold text-2xl">Feels Like</p>
            <p className="text-xl">{data.main.feels_like.toFixed(0)}&#176;</p>
          </div>
          <div>
            <p className="font-bold text-2xl mr-2">Humidity</p>
            <p className="text-xl">{data.main.humidity}%</p>
          </div>
          <div>
            <p className="font-bold text-2xl ml-2">Winds</p>
            <p className="text-xl">{data.wind.speed.toFixed(0)} MPH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
