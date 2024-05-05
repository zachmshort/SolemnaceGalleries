import Image from "next/image";
import { Button } from "./ui/button";
import { Figurine, User } from "@prisma/client";
interface p {
  //   user: User;
  figurine: Figurine;
}
const FigurineCard = ({ figurine }: p) => {
  return (
    <div className="col-span-1 cursor-pointer group">
      <div className="flex flex-col w-full">
        <div
          className="
        aspect-square 
        w-full 
        relative 
        overflow-hidden 
        rounded-xl
        hover:shadow-xl
      "
        >
          <Image
            fill
            className="
          object-cover 
          h-full 
          w-full 
          group-hover:scale-105
        
          transition
        "
            src={figurine.image}
            alt={`${figurine.name} Image`}
          />
          <div
            className="
        absolute
        top-3
        right-3
      "
          ></div>
        </div>
        <div className="font-semibold text-lg">
          {" "}
          <div className="font-semibold text-lg"> {figurine.name}</div>
        </div>
        <div className="w-full flex justify-between">
          <div className="flex w-full justify-start">
            <div className="flex flex-row items-center gap-1">
              <div className="font-semibold"> ${figurine.price}</div>
            </div>
          </div>
          <div className="flex justify-end"></div>
        </div>

        <Button className="absolute bg-transparent shadow-none text-3xl text-yellow-300 mt-2 ml-2 hover:bg-transparent hover:text-yellow-400"></Button>
      </div>
    </div>
  );
};

export default FigurineCard;
