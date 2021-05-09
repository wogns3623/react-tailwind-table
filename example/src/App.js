import React from 'react'

import Table, {TailTable} from 'react-tailwind-table'
import 'react-tailwind-table/dist/index.css'
import {row,col} from "./table-data";


class App extends React.Component {

  constructor(props) {
    super(props)

    // this.state={
    //   columns:column(),
    //   rows: fakePlayers()
    // }
  }

  componentDidMount(){

    // setTimeout(() => {
    //     // callback()
    //    this.setState({
    //      columns:[...this.state.columns, ...second_column()]
    //    })
    //   }, 12000);


    // setTimeout(() => {
    //     // callback()
    //    this.setState({
    //      rows:[...second_row(),...this.state.rows]
    //    })
    //   }, 15000);
  }

  rowcheck = (row,column, display_text) => {

    if (column.field === "created_at") {
      return <button className="border p-2">See button</button>
    }

    if (column.field === "name") {
      return <b>{display_text}</b>
    }

    return display_text
  }

  render() {
    return(
      <div style={{padding:"20px"}}>
        <TailTable columns={col} rows={row} 
        per_page={4} table_header="My Table Is Good" 
        bulk_select_options={["hello","hi","cool"]} 
        // export_csv_file = "FuckThisShit"
        on_bulk_action={tableBulkClick} 
        // should_export={true}
        on_search = {onSearch}
        // export_modify={exportModify}
        striped={true}
        bordered={false}
        ></TailTable>
      </div>
    ) 
    // return <Table columns={this.state.columns} rows={this.state.rows} per_page={3} table_header="Test Table" show_search = {true} row_render ={this.rowcheck}/>
  }
}

function tableBulkClick(option,value){
  console.log(option,value)
}


function onSearch(text,values){
  console.log(text,values)
}

function exportModify(a,b,c){
  // console.log(a,b,c)

  return "Fool"
}




 function column() {
    return [
      {
        field: "front_end_position.name",
        use: "Position"
      },
      {
        // use_in_display: false,
        field: "name", //Object destructure
        use: "Name"
      },

      {
        field: "created_at",
        use: "Action",
        // use_in_search:false
      }]
  }

function second_column() {
    return [
    
       {
        field: "position_id",
        use: "Position",
        // use_in_search:false
      },
      {
        field: "shirt_number",
        use: "Shirt",
      }]
  }


  function fakePlayers(){

    return [{
      id: 1,
      name: "Sadio Mane",
      country_id: 3,
      club_id: 2,
      position_id: 1,
      shirt_number: "10",
      created_by: 2,
      deleted_at: null,
      created_at: "12/12/12 15:00:00",
      updated_at: "12/12/12 15:00:00",
      is_defender: false,
      is_midfielder: false,
      is_forward: true,
      is_goalkeeper: false,
      front_end_position:{
        name:"attach",
        id:2
      }
    },
    {
      id: 2,
      name: "Mohammed Sala",
      country_id: 3,
      club_id: 2,
      position_id: 1,
      shirt_number: "11",
      created_by: 2,
      deleted_at: null,
      created_at: "12/12/12 15:00:00",
      updated_at: "12/12/12 15:00:00",
      is_defender: false,
      is_midfielder: false,
      is_forward: true,
      is_goalkeeper: false,
      front_end_position:{
        name:"Forward",
        id:4
      }
    },
    {
      id: 3,
      name: "Robertor Fermino",
      country_id: 3,
      club_id: 2,
      position_id: 1,
      shirt_number: "8",
      created_by: 2,
      deleted_at: null,
      created_at: "12/12/12 15:00:00",
      updated_at: "12/12/12 15:00:00",
      is_defender: false,
      is_midfielder: false,
      is_forward: true,
      is_goalkeeper: false,
      front_end_position:{
        name:"Defence",
        id:9
      }
    }];
  }

  function second_row(){

    return [{
      id: 1,
      name: "Fabinho Hernamded",
      country_id: 3,
      club_id: 2,
      position_id: 1,
      shirt_number: "10",
      created_by: 2,
      deleted_at: null,
      created_at: "12/12/12 15:00:00",
      updated_at: "12/12/12 15:00:00",
      is_defender: false,
      is_midfielder: false,
      is_forward: true,
      is_goalkeeper: false,
      front_end_position:{
        name:"attach",
        id:2
      }
    },
    {
      id: 2,
      name: "Henderson",
      country_id: 3,
      club_id: 2,
      position_id: 1,
      shirt_number: "11",
      created_by: 2,
      deleted_at: null,
      created_at: "12/12/12 15:00:00",
      updated_at: "12/12/12 15:00:00",
      is_defender: false,
      is_midfielder: false,
      is_forward: true,
      is_goalkeeper: false,
      front_end_position:{
        name:"Forward",
        id:4
      }
    },
    {
      id: 3,
      name: "Virgil Van'Dijk",
      country_id: 3,
      club_id: 2,
      position_id: 1,
      shirt_number: "8",
      created_by: 2,
      deleted_at: null,
      created_at: "12/12/12 15:00:00",
      updated_at: "12/12/12 15:00:00",
      is_defender: false,
      is_midfielder: false,
      is_forward: true,
      is_goalkeeper: false,
      front_end_position:{
        name:"Defence",
        id:9
      }
    }];
  }


export default App
