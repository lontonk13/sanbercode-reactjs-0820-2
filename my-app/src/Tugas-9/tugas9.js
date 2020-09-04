import React, {Component} from 'react';


class Tugas9 extends React.Component {
  render() {
    return (

      <div className="Formbuah">
        <h1 style={{textAlign:"center"}}><b>Form Pembelian buah</b></h1>
        <br/>
        <div>
        <table>
          <tr>
            <th><label for="fname">Nama Pelanggan</label></th>
            <th><input type="text" id="fname" name="fname"></input></th>
          </tr>
          <tr>
            <th><label for="femail">Daftar Buah</label></th>
            <th><input type="checkbox" id="buah1" name="buah1" value="Semangka"></input>
                  <label for="vehicle1"> Semangka</label><br></br>
                <input type="checkbox" id="buah2" name="buah2" value="Jeruk"></input>
                  <label for="vehicle2"> Jeruk</label><br></br>
                <input type="checkbox" id="buah3" name="buah3" value="Nanas"></input>
                  <label for="vehicle3"> Nanas</label><br/>
                <input type="checkbox" id="buah4" name="buah4" value="Salak"></input>
                  <label for="vehicle3"> Salak</label><br></br>
                <input type="checkbox" id="buah5" name="buah5" value="Anggur"></input>
                  <label for="vehicle3"> Anggur</label></th>
            </tr>
            <tr>
              <th><input type="submit" className="button" value="Kirim" ></input></th>
              <th></th>
            </tr>
            </table>
          </div>
      </div>

    );
  }
  }
 export default Tugas9;
