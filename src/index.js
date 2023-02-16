import React from 'react';
import {createRoot} from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp';
import './index.css';



const div = document.querySelector('#root');
const root = createRoot(div);

root.render(<GifExpertApp/>)

