import React, {useEffect , useState} from 'react';
import axios from 'axios';
const Category=()=>{
    const[catlist,updateCategory]=useState([]);
    
    const getCategory=()=>{
        let url="https://www.firstenquiry.com/api/react/hotel/category.php";
        let input=new FormData();
        input.append("hotelid",8792462607)
        axios.post(url,input).then(response=>{
            if(response.data.length>0){
                 updateCategory(response.data)
            }
        })
    }
    useEffect(()=>{
        getCategory();
    },[true]);
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center text-success">{catlist.length}:Available Rooms Category</h2>
                    <table className="table table-bordered mt-3">
                        <thead>
                            <tr className="bg-light text-primary text-center">
                                <td>Category Id</td>
                                <td>Category Name</td>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                catlist.map((xcat,index)=>{
                                    return<tr key={index} className="text-center">
                                        <td>{xcat.id}</td>
                                        <td>{xcat.name}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

}
export default Category;
