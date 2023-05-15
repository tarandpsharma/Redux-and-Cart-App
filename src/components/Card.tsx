import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Rating } from 'react-simple-star-rating';




const Card = () => {
  const [renderData, setRenderData]= useState([])
  const [changeData, setChangeData]= useState([])
  const [checkedItems, setCheckedItems] = useState<number[]>([]);


  const [getVal, setGetVal]= useState(0)
  const [star, setStar] = useState(false)
  console.log(checkedItems,"checkedItems")

  type DataItem = {
    rating: number;
    // add more properties as needed
  };

  const [maxVal, setMaxVal] = useState("500");
      console.log(changeData,"alsdfhlfajslfjsajflsajf")
    const filterData = (e:any) =>{
      const _filterData= renderData.filter((items:any)=>items.price>Number(e.target.value));
      setChangeData(_filterData)
      setGetVal(e.target.value)
    }
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("/Recors.json");
          const data = await response.json();
setRenderData(data)
setChangeData(data)
setResults(data)
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, []);

    
  // const filteredProducts = products.filter((product:any) => product.price >= 500);
  // console.log(filteredProducts);
  const handleMinChange = (e:any) => {
    const _filterData= renderData.filter((items:any)=>items.price>Number(e.target.value));
    console.log(_filterData,"filter data")
    setChangeData(_filterData)
  }


// search bar..........Initiation

      const [query, setQuery]= useState("")
      const [results, setResults] = useState([])
      
      console.log(results,"aksjkhasjd")

      const handleSearch = (e:any) => {
      
        const _filterData= results.filter((items:any)=>items.title.toLowerCase().includes((e.target.value).toLowerCase())||
        items.title.toUpperCase().includes((e.target.value).toUpperCase()));
        
        setChangeData(_filterData)
        setQuery(e.target.value)

        
      }
      
// search bar............ Termination


//  Star Rating search  ............Initiation

console.log(changeData,'changeData,changeData')

const handleRating = (e:any) =>{

  if (e.target.checked && !checkedItems.includes(Number(e.target.value))) {
    setCheckedItems((items:any) => [...items, Number(e.target.value)]);
  }else{
    setCheckedItems((items) => items.filter((item) => item !== Number(e.target.value)));

  }
 
  // const _filteredData = renderData.filter((item:any) => checkedItems.includes(item?.rating));
  // console.log(e.target.checked,_filteredData,'saksivhvsohsfkj')
  // if(!e.target.checked){
  //   console.log('called',renderData)
  //   setChangeData(renderData)
  // }else{
  //   setChangeData(_filteredData)
  // }


} 
console.log(checkedItems,"jlfdsfsdaksd")



// Star Rating search  ..............Termination

// Sorting .................... starting 

      const sortLowToHigh = () =>{
        const _filterData= renderData.filter((items:any)=>items.price);
        const mydata = _filterData.sort((a: { price: number }, b: { price: number }) => (a.price) - (b.price))
        console.log(mydata, "fddffdfs")
        
        setChangeData(_filterData)
      
      }

      const sortHighToLow = () =>{
        const _filterData= renderData.filter((items:any)=>items.price);
        const mydata = _filterData.sort((a: { price: number }, b: { price: number }) => (b.price) - (a.price))
        console.log(mydata, "rrwewerfgdffdfd")
        
        setChangeData(_filterData)
      }

      

// Sorting..................... Ending
  return (
    <>
{/* bootstrap */}


<nav className="navbar bg-success container">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> <h3 className="logo"> MY CART </h3></a>
    <form className="d-flex" role="search">
        <input className="form-control me-3" type="text" placeholder="Search"  value={query}  onChange={handleSearch} />
        <button className="btn btn-danger" type="submit">Find</button>
      </form>
  </div>
</nav>

{/* bootstrap */}



      <div className="container">

        
        


        

        
        <div className="container-1">
          <div className="row">
            <div className="col">
              {/* sorting by ascending and descending order */}

      <div>
                    
                    <button className="btn border btn-light btn1" onClick={sortLowToHigh}> Price -- Low to High</button>
                    <button className="btn border btn-light btn2" onClick={sortHighToLow}> Price -- High to Low</button>
                </div>


                {/* star rating search start */}
      <div className="mt-5">
            <h5> Customer Reviews </h5>
        {/* <input type="number"  /> */}
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="5" id="flexCheckDefault"  onChange={handleRating}/>
        <label className="form-check-label" id="flexCheckDefault">
          5 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg> & above
        </label>
        </div>
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="4" id="flexCheckChecked" onChange={handleRating}/>
        <label className="form-check-label" id="flexCheckChecked">
          4 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg> & above


        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="3" id="flexCheckChecked" onChange={handleRating}/>
        <label className="form-check-label" id="flexCheckChecked">
          3 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg> & above


        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="2" id="flexCheckChecked" onChange={handleRating}/>
        <label className="form-check-label" id="flexCheckChecked">
          2 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg> & above


        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="1" id="flexCheckChecked" onChange={handleRating}/>
        <label className="form-check-label" id="flexCheckChecked">
          1 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg> & above


        </label>
      </div>
        </div>
        {/* star rating search start */}


        <div className="container">
          <div className="row">
            <div className="col-10">
            <form className="form-group">
          
          <input type="range" min="0" max="500" onChange={filterData} className="range"/>
          <div className="field">
          <span>Min</span> <span className="max">Max</span>
          <input type="number" className="input-min" value={getVal} onChange={handleMinChange}/>
          
        </div>
        {/* <div className="separator">-</div> */}
        {/* <div className="field">
          
          {/* <input type="number" className="input-max" value="500" /> 
        </div> */}
        
        </form>


            </div>
          </div>
        </div>
              {/* sorting by ascending and descending order */}



            </div>
          </div>
        </div>
      

        <div className="row">
        
        {changeData.length > 0 ? (
  <>
    {changeData.map((item: any, index: number) => {
      if (checkedItems.includes(item.rating)||  checkedItems.length === 0) {
        return (
          <div key={index} className="col-8 col-md-3 gy-3">
            <div className="card">
              <img
                className="card-img-top img-fluid img-thumbnail image"
                src={item.img}
                alt={item.alt}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.text}</p>
                <p className="card-text">{item.price}</p>

                {/* Rating */}
                <Rating initialValue={item?.rating} />
                {/* Rating */}

                <a href={item.link} className="btn btn-primary">
                  {item.btn}
                </a>
              </div>
            </div>
          </div>
        );
      } else {
        return null;
      }
    })}
  </>
) : (
  <h1>Zero Items Found In This Price Range</h1>
)}


          
        </div>
      </div>

      <footer className="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary container">
  <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
    <div className="row">
      <div className="col-lg-3 mb-3">
        <a className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="Bootstrap">
           <title>My Cart</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"/>
          <span className="fs-5">My Cart</span>
        </a>
        <ul className="list-unstyled small">
          <li className="mb-2"> Online shopping is a form of electronic ccomputers and devices, including desktop computers, laptops, tablet computers and smartphones.</li>
          <li className="mb-2">Currently Version 0.0.1</li>
        </ul>
      </div>
      <div className="col-6 col-lg-2 offset-lg-1 mb-3">
        <h5>Links</h5>
        <ul className="list-unstyled">
          <li className="mb-2"><a href="/">Home</a></li>
          <li className="mb-2"><a href="/docs/5.3/">Electric Appliances</a></li>
          <li className="mb-2"><a href="/docs/5.3/examples/">Clothes</a></li>
          <li className="mb-2"><a href="https://icons.getbootstrap.com/">Machines</a></li>
          <li className="mb-2"><a href="https://themes.getbootstrap.com/">Other</a></li>
          <li className="mb-2"><a href="https://blog.getbootstrap.com/">Blog</a></li>
          <li className="mb-2"><a href="https://cottonbureau.com/people/bootstrap">Swag Store</a></li>
        </ul>
      </div>
      <div className="col-6 col-lg-2 mb-3">
        <h5>Guides</h5>
        <ul className="list-unstyled">
          <li className="mb-2"><a href="/docs/5.3/getting-started/">Getting started</a></li>
          <li className="mb-2"><a href="/docs/5.3/examples/starter-template/">Clothes</a></li>
          <li className="mb-2"><a href="/docs/5.3/getting-started/webpack/">Electric</a></li>
          <li className="mb-2"><a href="/docs/5.3/getting-started/parcel/">Pets</a></li>
          <li className="mb-2"><a href="/docs/5.3/getting-started/vite/">Study Material</a></li>
        </ul>
      </div>
      <div className="col-6 col-lg-2 mb-3">
        <h5>Items</h5>
        <ul className="list-unstyled">
          <li className="mb-2"><a href="https://github.com/twbs/bootstrap">Clothes</a></li>
          <li className="mb-2"><a href="https://github.com/twbs/bootstrap/tree/v4-dev"> Water Bottles</a></li>
          <li className="mb-2"><a href="https://github.com/twbs/icons">Icons</a></li>
          <li className="mb-2"><a href="https://github.com/twbs/rfs">Kitchen</a></li>
          <li className="mb-2"><a href="https://github.com/twbs/examples/">Examples repo</a></li>
        </ul>
      </div>
      <div className="col-6 col-lg-2 mb-3">
        <h5>Community</h5>
        <ul className="list-unstyled">
        <li className="mb-2"><a href="/docs/5.3/getting-started/">Getting started</a></li>
          <li className="mb-2"><a href="/docs/5.3/examples/starter-template/">Clothes</a></li>
          <li className="mb-2"><a href="/docs/5.3/getting-started/webpack/">Electric</a></li>
          <li className="mb-2"><a href="/docs/5.3/getting-started/parcel/">Pets</a></li>
          <li className="mb-2"><a href="/docs/5.3/getting-started/vite/">Study Material</a></li>
          </ul>
      </div>
    </div>
  </div>
</footer>


    </>
  );
};

export default Card;
