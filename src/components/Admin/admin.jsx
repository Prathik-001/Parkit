import React, { useState } from 'react';

function slot()
{
  return (
     <div className="booking">
        <div>
             <h1>Slot Booking</h1>
        </div>
            <div className="detailslot">
                <div className="userdetails">

                  <label htmlFor="phone">Mobile No:</label>
                  <input type="tel" id="phone" name="phone" required/>
              
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required/>
                
                  <label htmlFor="date">Date:</label>
                  <input type="date" id="date" name="date" required/>
                
                  <label htmlFor="time">Start Time:</label>
                  <input type="time" id="time" name="time" required/>
                
                   <label htmlFor="time">End Time:</label>
                   <input type="time" id="time" name="time" required/>
                  <button type="submit">Book Slot</button>
                  </div>
              
              <div className="slots">
              <div className=" w-96 px-20">
      <div className=" flex p-1 w-full">
        <div className=" bg-green-500 m-1 w-5 h-10 rounded-lg"></div>
        <div className=" bg-green-500 m-1 w-5 h-10 rounded-lg"></div>
        <div className=" bg-green-500 m-1 w-5 h-10 rounded-lg "></div>
        <div className=" bg-green-500 m-1 w-5 h-10 rounded-lg"></div>
        <div className=" bg-green-500 m-1 w-5 h-10 rounded-lg"></div>
      </div>
      <div className=" flex p-1 w-full">
        <div className=" bg-green-500 m-1 w-5 h-10 rounded-lg"></div>
        <div className=" bg-red-500 m-1 w-5 h-10 rounded-lg"></div>
        <div className=" bg-green-500 m-1 w-5 h-10 rounded-lg "></div>
        <div className=" bg-green-500 m-1 w-5 h-10 rounded-lg"></div>
        <div className=" bg-red-500 m-1 w-5 h-10 rounded-lg"></div>
      </div>
      <div className=" flex p-1 w-full">
        <div className=" bg-green-500 m-1 w-5 h-10 rounded-lg"></div>
        <div className=" bg-green-500 m-1 w-5 h-10 rounded-lg"></div>
        <div className=" bg-red-500 m-1 w-5 h-10 rounded-lg "></div>
        <div className=" bg-green-500 m-1 w-5 h-10 rounded-lg"></div>
        <div className=" bg-red-500 m-1 w-5 h-10 rounded-lg"></div>
      </div>
      <div className=" flex p-1 w-full">
        <div className=" bg-green-500 m-1 w-5 h-10 rounded-lg"></div>
        <div className=" bg-green-500 m-1 w-5 h-10 rounded-lg"></div>
        <div className=" bg-green-500 m-1 w-5 h-10 rounded-lg "></div>
        <div className=" bg-green-500 m-1 w-5 h-10 rounded-lg"></div>
        <div className=" bg-red-500 m-1 w-5 h-10 rounded-lg"></div>
      </div>
   
    </div>
              </div>
            </div>
      </div>
  );
};

export default slot;