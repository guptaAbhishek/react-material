import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Slider from 'material-ui/lib/slider';
import TableView from './table';



const styles = {
  divStyle:{
    padding:20,
    marginTop:50,
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  tab1Style:{
    background:'#3f51b5',
  },
  tab2Style:{
    background:'#5cb85c',
  },
  tab3Style:{
    background:'#d9534f',
  },
  tab4Style:{
    background:'#82b1ff',
  },
  tab5Style:{
    background:'#f5f5f5',
    textColor:'#000',
  },
};


const TabsExampleSimple = () => (
  <div style={styles.divStyle}>
    <Tabs>
      <Tab style={styles.tab1Style} label="New Application" >
        <div>
          <TableView></TableView>
        </div>
      </Tab>
      <Tab style={styles.tab2Style} label="Application With Bank" >
        <div>
          <TableView></TableView>
        </div>
      </Tab>
      <Tab style={styles.tab3Style} label="Rejected Application">
        <div>
          <TableView></TableView>
        </div>
      </Tab>
      <Tab style={styles.tab4Style} label="Sanctioned Application">
        <div>
          <TableView></TableView>
        </div>
      </Tab>
      <Tab style={styles.tab5Style} label="Disbursed Applications">
        <div>
          <TableView></TableView>
        </div>
      </Tab>
    </Tabs>
  </div>

);

export default TabsExampleSimple;
