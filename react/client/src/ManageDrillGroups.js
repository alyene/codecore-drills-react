import React from 'react';
import { Grid, Row, Panel, ButtonToolbar, Button } from 'react-bootstrap';

class DrillGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {drillGroup: props.drillGroup}

  }

  render() {
    const style = {
      display: 'flex',
      justifyContent: 'flex-end'
    };

    const vbutton ={
      color: 'firebrick'
    };

    const ebutton ={
      color: 'crimson'
    };

    const dbutton ={
      color: 'lightcoral'
    };


    return (
      <Panel id={this.state.drillGroup.id}>
        <div><h4>{this.state.drillGroup.name}</h4></div>
        <div style={style}>
          <ButtonToolbar>

            <Button style={vbutton} href="" onClick={this.props.onDrillGroupView}>View</Button>
            <Button style={ebutton} href="#">Edit</Button>
            <Button style={dbutton} onClick={this.props.onDelete}>Delete</Button>

          </ButtonToolbar>
        </div>
      </Panel>
    )
  }
}

export default class ManageDrillGroups extends React.Component {

  constructor(props){
    super(props);
  }

  renderDrillGroups(drillGroups){
    let drillGroupArr = [];
    drillGroups.forEach(drillGroup=>{

      drillGroupArr.push(<DrillGroup onDrillGroupView={this.props.onDrillGroupView}
                                     onDelete={this.props.deleteDrillGroup}
                                     drillGroup={drillGroup} />);

    })
    return drillGroupArr;
  }


  render(){

    const style = {
      display: 'flex',
      justifyContent: 'flex-end',
      'margin-right': '20px'
    };


        const title = {
          'display':'flex',
          'flex-direction':'column',
          'text-align': 'center'
        };

        const addbutton = {
          'background': '#FCE4EC'
        };

    return (
      <Grid>
        <Row style={title}>
          <h2>Drill Groups</h2>
        </Row>
        <Row style={style}>
          <Button style={addbutton} href="#" onClick={this.props.onAddDrillGroup}>Add Group</Button>
        </Row>
        <br />
        {this.renderDrillGroups(this.props.drillGroups)}
      </Grid>
    )
  }
}
