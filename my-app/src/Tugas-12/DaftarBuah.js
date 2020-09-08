import React, { Component } from 'react'
import ItemBuah from './ItemBuah'


class DaftarBuah extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataHargaBuah: [
        {nama: "Semangka", harga: 10000, berat: 1000},
        {nama: "Anggur", harga: 40000, berat: 500},
        {nama: "Strawberry", harga: 30000, berat: 400},
        {nama: "Jeruk", harga: 30000, berat: 1000},
        {nama: "Mangga", harga: 30000, berat: 500}
      ],
      InputName : "",
      newName: {nama: ""}
    };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event){
    this.setState({inputName: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault()
    this.setState({
      dataHargaBuah: ,
      inputName: ""
    })
  }

  render() {

    return (
      <>
        <h1 style={{textAlign : "center"}}> Daftar Harga Buah</h1>
        <table style={{border: "1px solid", width: "40%", margin: "0 auto"}}>
          <thead style={{background: "#aaa"}}>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
              <th>aksi</th>
            </tr>
          </thead>
          <tbody style={{background: "coral"}}>
            {this.state.dataHargaBuah.map((el, index)=> {
              return (
                <>
                  <ItemBuah item={el} key={index}/>
                </>
                )
              })}
          </tbody>
        </table>
        <br/>
        <br/>
        <div style={{textAlign:'center'}}>
        <form onSubmit={this.handleSubmit}>
            <label>
              Masukkan nama Buah :
            </label>
            <input type="text" value={this.state.inputName} onChange={this.handleChange}/>
            <input type="submit" value="Submit" />
        </form>
        </div>
        <br/>
        <br/>
      </>
    )
  }
}

export default DaftarBuah
