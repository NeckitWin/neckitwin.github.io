import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import './18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Suspense fallback={<div><img src="loading.gif" alt="loading"/></div>}>
            <App/>
        </Suspense>
    </React.StrictMode>,
)