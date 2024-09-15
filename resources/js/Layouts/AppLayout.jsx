import React from 'react';

const AppLayout = ({ children }) => {
    return (
        <>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            <title>Easy POS</title>


            {/* Necessary Assets */}
            <link type="image/x-icon" href="/favicon.ico" rel="icon" />
            <link href="/css/animate.min.css" rel="stylesheet" />
            <link href="/css/fontawesome.css" rel="stylesheet" />
            <link href="/css/style.css" rel="stylesheet" />
            <link href="/css/toastify.min.css" rel="stylesheet" />
            <script src="/js/toastify-js.js"></script>
            <script src="/js/config.js"></script>


            {/* Preloader */}
            <div className="LoadingOverlay d-none" id="loader">
                <div className="Line-Progress">
                    <div className="indeterminate"></div>
                </div>
            </div>


            {/* Main Section */}
            <div>
                {children}
            </div>


            {/* Necessary Assets */}
            <script src="/js/bootstrap.bundle.js"></script>
        </>
    );
};

export default AppLayout;