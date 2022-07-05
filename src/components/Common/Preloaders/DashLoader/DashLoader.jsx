import React from 'react';
import css from './DashLoader.module.css';

const DashLoader = () => <div className={css.container}>
  <div className={`${css.dash} ${css.uno}`}></div>
  <div className={`${css.dash} ${css.dos}`}></div>
  <div className={`${css.dash} ${css.tres}`}></div>
  <div className={`${css.dash} ${css.cuatro}`}></div>
</div>;

export default DashLoader;
