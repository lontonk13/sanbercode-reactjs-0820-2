import React from 'react';
import Tugas9 from './Tugas-9/tugas9'
import Tugas10 from './Tugas-10/tugas10'
import Tugas11 from './Tugas-11/tugas11'
import DaftarBuah from './Tugas-12/DaftarBuah'
import ItemBuah from './Tugas-12/ItemBuah'
import './App.css';



function App() {
 return (
   <div>
   <h5 style={{textAlign: "center"}}>Tugas 9</h5>
     <Tugas9/>
   <h5 style={{textAlign: "center"}}>Tugas 10</h5>
     <Tugas10/>
   <h5 style={{textAlign: "center"}}>Tugas 11</h5>
     <Tugas11/>
     <DaftarBuah/>
   </div>
 );
}

export default App;
