import React from "react";
import './App.css'

import { CategoryData } from "../public/data";
import { Category } from './components/categories/category'
import { Best } from "./components/best/best";
import { BestData } from "./data/beat-data";
import { Header } from "./components/header/header";

function App() {

  

  return (
  <>
  <Header/>
      <div className="container mx-auto px-[20px] max-w-[1270px]">

          <h2 className="text-3xl mb-[20px]">Kategoriyalar</h2>
        <div className="flex justify-center gap-[21px]">
      {CategoryData.map((item) => (
        <Category key={item.id} {...item} />
      ))}
        </div>

        <div className="bg-white pt-[14px] pb-[14px] text-center mt-[20px] text-lg rounded-lg ">
          <h2 className="bg-white">Batafsil</h2>
        </div>

        <h2 className="text-3xl mb-[18px] mt-[40px]">Eng ko’p sotilgan</h2>

        <div className="flex flex-wrap gap-[30px]">
        {
          BestData.map((item)=>(
            <Best key={item.id} {...item}/>
          ))


        }
        </div>
      </div>
      </>
  )
}

export default App
