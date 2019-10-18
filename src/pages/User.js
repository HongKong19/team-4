import React from 'react';

import HeadBar from '../components/HeadBar'
import TailBar from '../components/TailBar'
import test from './userData.json';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
function createData(name, value) {
    return { name, value };
  }
export default function User(){
    const rows = [
        createData("Sex", test.medical_record.sex),
        createData('Height', test.medical_record.height),
        createData('Weight', test.medical_record.weight),
        createData('BMI', test.medical_record.bmi),
        createData('General Health Condition', 'Stable'),
      ];
    return (
        <div>
            <HeadBar/>
            
            <div align="center" style={{margin: "50px"}}>
                <div style={{display: "flex"}, {flexDirection: "column"}}>
                <Card style={{width: 200}}>

                        <CardMedia style={{height: 200}} image = "/photo-1507003211169-0a1dd7228f2d.jpeg" title="user"/>
                        <CardContent><Typography variant="h5">{test.client_name}</Typography></CardContent>
                </Card>
                    
                </div>
            </div>
            <div style={{alignContent: "center"}}>
      <Table aria-label="simple table">
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
            <TailBar/>
        </div>
    );
}