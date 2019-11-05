import React from 'react';
import ReactDom from 'react-dom';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDom.render(<img src="https://nick-2018.s3.amazonaws.com/logo.png" /> , root);
});
