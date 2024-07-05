import React from 'react';
import {useState} from 'react'
import DataTable from 'react-data-table-component'
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import './index.css'


const Home = () => {
    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Country',
            selector: row => row.country,
            sortable: true,
        },
        {
            name: 'Code',
            selector: row => row.code,
            sortable: true,
        },
        {
            name: 'Terminals',
            selector: row => row.terminals,
            sortable: true,
        }
    
    ]

    const data = [
        {
            name: 'Indira Gandhi International Airport',
            country: 'India',
            code: 'DEL',
            terminals: 3,
        },
        {
            name: 'Dubai International Airport',
            country: 'UAE',
            code: 'DXB',
            terminals: 5,
        },
        {
            name: 'Istanbul Airport',
            country: 'Turkey',
            code: 'IST',
            terminals: 3,
        },
        {
            name: 'Rajiv Gandhi International Airport',
            country: 'Texas',
            code: 'DFW',
            terminals: 14,
        },
        {
            name: 'Heathrow Airport',
            country: 'England',
            code: 'LHR',
            terminals: 6,
        }
    ]
    
    const [airport, setAirport] = useState(data)

    return (
        <div className='main-container'>
            <div className='home-dashboard'>
                <div className='icons'>
                    <HomeIcon fontSize='large'/>
                    <label className='label'>Home</label>
                </div>
                <div className='icons'>
                    <DashboardIcon fontSize='large'/>
                    <label className='label'>Dashboard</label>
                </div>
                <p>Services</p>
                <p>Airports</p>
                <p>Videos</p>
            </div>

            <div>
                <div className='heading-button'>
                    <h1>Airports</h1>
                    <button className='button'>+ Add New
                    </button>
                </div>
                <div>
                    <DataTable
                        columns={columns}
                        data={airport}
                        selectableRows
                        fixedHeader
                        pagination
                    >
                    </DataTable>
                </div>
                
            </div>
        </div>
    )
}

export default Home