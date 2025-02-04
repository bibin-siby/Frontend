import React, { useEffect, useState } from 'react'
import Styles from './city.module.scss'
import { Button, TextField } from '@mui/material'
import { MyTheme } from '../../context/ThemeContext'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'


const City = () => {
    const [check, setCheck] = useState(true)
    const [name, setName] = useState("")
    const [data, setData] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                name
            }
            const response = await axios.post('http://127.0.0.1:8000/district', data)
            console.log('district add successful:', response.data);
            setName("")
        } catch (error) {
            console.error('Error registering:', error);
        }
    }

    const fetchDistrict = () => {
        axios.get(`http://127.0.0.1:8000/district`).then((response) => {
          console.log(response.data);
          setData(response.data)
        });
      };
    useEffect(() => {
        fetchDistrict()
    },[])
    return (
        <MyTheme.Provider value={{ check, setCheck }}>
            <div className={`${check ? 'home light' : 'home dark'}`}>
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <div className={Styles.Container}>
                        <div className={Styles.Banner}></div>
                        <div className={Styles.Sub}>
                            <div className={Styles.Text}>
                                <select className={Styles.Sel}>
                                    <option>District</option>
                                    {
                                        data && data.map((item, index) => (
                                            <option key={index}>{item.name}</option>

                                        ))
                                    }
                                </select>
                                <TextField className={Styles.Field} id="standard-basic" label="City Name" variant="standard" />
                                <Button className={Styles.Buttons} variant="contained">Submit</Button>
                            </div>
                            <div className={Styles.Image}>
                                <img src='https://img.freepik.com/free-vector/vector-isometric-3d-illustrations-modern-urban-quarter-with-skyscrapers-offices-residential-buildings-transport_1441-256.jpg?ga=GA1.1.1719564746.1730282531'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MyTheme.Provider>
    )
}

export default City