import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Gitview from './Gitview';
import './Datasciencework.css'
import { Tooltip } from '@material-ui/core';
const styles = (theme) => ({
  root: {
    margin: 0,
    backgroundColor:'grey',
    padding: theme.spacing(2),
    textShadow:'1px 1px 10px white',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other} id='root'>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    backgroundColor:'#DECBA4',
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    backgroundColor:'grey',
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Datasciencework(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <Tooltip title='DAA SCIENCE' >
        <Button id='button' variant="contained" color="secondary" onClick={handleClickOpen}>
        {props.title}
      </Button>
      </Tooltip>
      
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.dialogtitle} 
        </DialogTitle>
        <DialogContent id='dialogview' dividers>
            <Gitview title='CARDEKO DATA ANALYSIS' discription='Basic data analysis of Car Deko comapny dataset in Kaggle using Python ,pthon Libraries and, this yet to deploy.' dialogtitle='CARDEKO DATA DETAILS' link='https://github.com/TharunGangadhar/'/>
            
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            DONE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}



