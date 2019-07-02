import React from 'react'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import classes from './Layout.css'

const layout = (props) => (
    <Auxiliary>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.margin}>{props.children}</main>
    </Auxiliary>
);

export default layout;