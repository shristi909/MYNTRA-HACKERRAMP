import React, { useState } from 'react';
import logo from "../assets/ai_icon.png"
import { ProductData } from '../store/store';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const nav = useNavigate();
  const setProductDetail = useSetRecoilState(ProductData);
  const [value, setValue] = useState("");
  const HandleChange = (e)=>{
    setValue(e.target.value);
  }
  
  const  HamdleSubmit = async(e)=>{
    e.preventDefault();
    const reponse = await fetch("http://127.0.0.1:4000/route",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        },
      body: JSON.stringify({query: value})
    })
    const data = await reponse.json();
    console.log(data);
    setProductDetail(data);
    nav("/product");
  }

  return (
    <div className="bg-gray-50">
      <header>
        <nav className="z-50 bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 top-0 fixed border-b w-full">
          <div className="grid grid-cols-5 gap-4 mx-auto">
            <a href="https://flowbite.com" className="flex items-center gap-4">
              <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white border-2 border-pink-400 bg-pink-500 px-2 py-1 rounded-lg">
                Fwd
                <i className="bx bxs-chevron-down"></i>
              </span>
              <p className="self-center text-center text-lg font-bold whitespace-nowrap dark:text-white text-yellow-600">
                Become <br /> Insider
              </p>
              <p className="self-center bg-gray-700 p-1 rounded-lg border text-center text-lg font-bold whitespace-nowrap dark:text-white">
                Build
                <br /> My Fit
              </p>
            </a>
            <div className="flex items-center col-span-4 gap-4">
              <form className="w-full mx-auto" onSubmit={HamdleSubmit}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <img className="w-8 h-8 rounded-full" src={logo} alt="Logo" />
                  </div>
                  <input
                    value={value}
                    onChange={HandleChange}
                    type="search"
                    id="default-search"
                    className="block w-full px-4 py-3 ps-12 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-100 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    required
                  />
                  <button type="submit" className="absolute end-10 bottom-2 text-2xl text-pink-400">
                    <i className="bx bxs-color"></i>
                  </button>
                  <button type="submit" className="absolute end-2.5 bottom-2 text-2xl">
                    <i className="bx bxs-microphone"></i>
                  </button>
                </div>
              </form>
              <div className="justify-end gap-4 items-center w-full lg:flex lg:w-auto text-gray-900 text-2xl" id="mobile-menu-2">
                <i className="bx bxs-bell"></i>
                <i className="bx bxs-cart"></i>
                <i className="bx bxs-user-circle"></i>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <section className="mt-28 grid grid-cols-4 gap-4 p-4">
        <div className="grid grid-cols-3 gap-2 bg-gray-400 border shadow-sm p-4 rounded-lg">
          <div className="flex flex-col grid-cols-2 justify-center">
            <p className="text-md">Text For Div</p>
            <h4 className="text-xl font-semibold">Heading</h4>
          </div>
          <i className="bx bxs-chevron-down"></i>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Dropdown button{' '}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Settings
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Earnings
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 bg-pink-200 border shadow-sm p-4 rounded-lg">
          <img src="https://cdn-icons-png.flaticon.com/512/4213/4213646.png" className="hover:animate-bounce" alt="" />
          <div className="flex flex-col grid-cols-2 justify-center">
            <p className="text-md">Text For Div</p>
            <h4 className="text-xl font-semibold">Heading</h4>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 bg-violet-300 border shadow-sm p-4 rounded-lg">
          <img src="https://cdn-icons-png.flaticon.com/512/4213/4213646.png" className="hover:animate-bounce" alt="" />
          <div className="flex flex-col grid-cols-2 justify-center">
            <p className="text-md">Text For Div</p>
            <h4 className="text-xl font-semibold">Heading</h4>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 bg-yellow-100 border shadow-sm p-4 rounded-lg">
          <img src="https://cdn-icons-png.flaticon.com/512/4213/4213646.png" className="hover:animate-bounce" alt="" />
          <div className="flex flex-col grid-cols-2 justify-center">
            <p className="text-md">Text For Div</p>
            <h4 className="text-xl font-semibold">Heading</h4>
          </div>
        </div>
      </section>

      <main className="p-4 w-full">
        <div className="flex flex-wrap gap-4 mx-auto">
          <div className="containers">
            <img
              src="https://i.pinimg.com/564x/38/9c/1f/389c1f152563fc4a7c95d4e6f0fcf808.jpg"
              alt=""
              className="w-72 rounded-lg bg-gray-200 border grow"
            />
            <div className="buttons">
              <button className="button save-button">Save</button>
              <button className="button upload-button">
                <i className="bx bx-share"></i>
              </button>
              <button className="button more-button">
                <i className="bx bx-download"></i>
              </button>
            </div>
          </div>
          <div className="containers">
            <img
              src="https://i.pinimg.com/736x/bf/63/1d/bf631d577cd3420ecf34849a7e49bd96.jpg"
              alt=""
              className="w-72 rounded-lg bg-gray-200 border grow"
            />
            <div className="buttons">
              <button className="button save-button">Save</button>
              <button className="button upload-button">
                <i className="bx bx-share"></i>
              </button>
              <button className="button more-button">
                <i className="bx bx-download"></i>
              </button>
            </div>
          </div>
          <div className="containers">
            <img
              src="https://i.pinimg.com/564x/c8/a6/e7/c8a6e7d3811a7adcc09213a38ad0df55.jpg"
              alt=""
              className="w-48 rounded-lg bg-gray-200 border grow"
            />
            <div className="buttons">
              <button className="button save-button">Save</button>
              <button className="button upload-button">
                <i className="bx bx-share"></i>
              </button>
              <button className="button more-button">
                <i className="bx bx-download"></i>
              </button>
            </div>
          </div>
          <div className="containers">
            <img
              src="https://i.pinimg.com/564x/88/75/41/88754123ba9a8b2bc63b6c907e04e8a3.jpg"
              alt=""
              className="w-72 rounded-lg bg-gray-200 border grow"
            />
            <div className="buttons">
              <button className="button save-button">Save</button>
              <button className="button upload-button">
                <i className="bx bx-share"></i>
              </button>
              <button className="button more-button">
                <i className="bx bx-download"></i>
              </button>
            </div>
          </div>
          <div className="containers">
            <img
              src="https://i.pinimg.com/564x/38/9c/1f/389c1f152563fc4a7c95d4e6f0fcf808.jpg"
              alt=""
              className="w-72 rounded-lg bg-gray-200 border grow"
            />
            <div className="buttons">
              <button className="button save-button">Save</button>
              <button className="button upload-button">
                <i className="bx bx-share"></i>
              </button>
              <button className="button more-button">
                <i className="bx bx-download"></i>
              </button>
            </div>
          </div>
          <div className="containers">
            <img
              src="https://i.pinimg.com/736x/bf/63/1d/bf631d577cd3420ecf34849a7e49bd96.jpg"
              alt=""
              className="w-72 rounded-lg bg-gray-200 border grow"
            />
            <div className="buttons">
              <button className="button save-button">Save</button>
              <button className="button upload-button">
                <i className="bx bx-share"></i>
              </button>
              <button className="button more-button">
                <i className="bx bx-download"></i>
              </button>
            </div>
          </div>
          <div className="containers">
            <img
              src="https://i.pinimg.com/564x/38/9c/1f/389c1f152563fc4a7c95d4e6f0fcf808.jpg"
              alt=""
              className="w-72 rounded-lg bg-gray-200 border grow"
            />
            <div className="buttons">
              <button className="button save-button">Save</button>
              <button className="button upload-button">
                <i className="bx bx-share"></i>
              </button>
              <button className="button more-button">
                <i className="bx bx-download"></i>
              </button>
            </div>
          </div>
          <div className="containers">
            <img
              src="https://i.pinimg.com/736x/bf/63/1d/bf631d577cd3420ecf34849a7e49bd96.jpg"
              alt=""
              className="w-72 rounded-lg bg-gray-200 border grow"
            />
            <div className="buttons">
              <button className="button save-button">Save</button>
              <button className="button upload-button">
                <i className="bx bx-share"></i>
              </button>
              <button className="button more-button">
                <i className="bx bx-download"></i>
              </button>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Main;
