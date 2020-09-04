import React, {Component} from 'react';

let dataHargaBuah = [
  {nama: "Semangka", harga:10000, berat:1000},
  {nama: "Anggur", harga:40000, berat:500},
  {nama: "Strawberry", harga:30000, berat:400},
  {nama: "Jeruk", harga:30000, berat:1000},
  {nama: "Mangga", harga:30000, berat:500}
]

class Tugas10 extends React.Component {
 render(){
   return(
     <div >

     <h1 style={{textAlign:"center"}}><b>Tabel Harga Buah</b></h1>
     <br/>
     <div className="tabelbuah">
     <table style={{textAlign:"center",background:" #b3b3b3"}}>
     <tr>
     <th>Nama</th>
     <th>Harga</th>
     <th>Berat</th>
     </tr>
     </table>

     {dataHargaBuah.map((el)=>{
       return(

      <>
         <table style={{textAlign:'left', background: '#ffa64d',width:'80%'}}>
         <thead>
         <tr>
         <td>{el.nama}</td>
         <td >{el.harga}</td>
         <td>{el.berat/1000} Kg</td>
         </tr>
         </thead>
         </table>

    </>

  )
     })}</div>
                </div>   )
                 } }






                 // <h1 style={{textAlign:"center"}}><b>Tabel Harga Buah</b></h1>
                 // <br/>
                 // <table>
                 // <tr style={{textAlign:"center",background:"red"}}>
                 // <th>Nama</th>
                 // <th>Harga</th>
                 // <th>Berat</th>
                 // </tr>
                 // </table>


export default Tugas10;
